import React from 'react'
import style from '../styles/AddTransaction.module.css'
import { useState, useEffect } from 'react'

const AddTransaction = () => {
    const [bankAccouts, setBankAccounts] = useState([])
    const [bankAccountID, setBankAccountID] = useState(0)
    const [bankAccount, setBankAccount] = useState(0)
    async function pullBankAccounts() {
        const response = await fetch('http://localhost:3333/bank_accounts')
        const responseData = await response.json()
        setBankAccounts(responseData)
        bankAccouts.map((BankAccount) => {
            if (BankAccount.name === account) {
                console.log(BankAccount.id)
                setBankAccountID(BankAccount.id)
            } 
        })
    }
    
    async function pullBankAccount() {
        const response = await fetch(`http://localhost:3333/bank_accounts/1`)
        const responseData = await response.json()
        setBankAccount(responseData)
    }

    const [totalBalance, setTotalBalance] = useState([])
    async function pullJson() {
        const response = await fetch('http://localhost:3333/total_balance/1')
        const responseData = await response.json()
        setTotalBalance(responseData)
    }
    
    useEffect(() => { 
        pullJson()
        pullBankAccounts()
        pullBankAccount()
    }, [])

    const [type, setType] = useState('expense');
    const [amount, setAmount] = useState(0);
    const [account, setAccount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const addNewTransaction = async (newTransaction) => {
        const res = await fetch('http://localhost:3333/transactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTransaction),
        });
        return;
    };

    const updateTotalBalance = async (totalBalance) => {
        const res = await fetch('http://localhost:3333/total_balance/1', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(totalBalance),
        });
        return;
    };

    const updateBankAccount = async (bankAccount) => {
        const res = await fetch(`http://localhost:3333/bank_accounts/1`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bankAccount),
        });
        return;
    }

    const submitForm = (e) => {
        e.preventDefault();

        const newTransaction = {
          type,
          amount,
          account,
          category,
          date,
        };
        addNewTransaction(newTransaction);
        if (type === 'expense') {
            const newTotalBalance = {
                total: totalBalance.total - parseInt(amount),
                expenses: totalBalance.expenses + parseInt(amount),
                incomes: totalBalance.incomes,
            };
            updateTotalBalance(newTotalBalance);

            const newBankAccount = {
                name: account,
                balance: bankAccount.balance - parseInt(amount),
                expenses: bankAccount.expenses + parseInt(amount),
                incomes: bankAccount.incomes,
            };
            updateBankAccount(newBankAccount);
        } else {
            const newTotalBalance = {
                total: totalBalance.total + parseInt(amount),
                expenses: totalBalance.expenses,
                incomes: totalBalance.incomes + parseInt(amount),
            };
            updateTotalBalance(newTotalBalance);

            const newBankAccount = {
                name: account,
                balance: bankAccount.balance + parseInt(amount),
                expenses: bankAccount.expenses,
                incomes: bankAccount.incomes + parseInt(amount),
            };
            updateBankAccount(newBankAccount);
        }

        
        e.target.submit();
    };

    return (
        <div>
            <div className={ style.AddTransactionPanel }>
                <form onSubmit={ submitForm }>
                    <div className={ style.AddTransactionTitle }>Add Transaction</div>
                    <div className={ style.FormGroup }>
                        <label htmlFor="amount">Amount:</label>
                        <input 
                            id='amount'
                            name='amount'
                            className={ style.Input } 
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className={ style.FormGroup }>
                        <label htmlFor='type'> Transaction Type: </label>
                        <select
                            id='type'
                            name='type'
                            className={ style.SelectInput }
                            required
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value='expense'>Expense</option>
                            <option value='income'>Income</option>
                        </select>
                    </div>
                    <div className={ style.FormGroup }>
                        <label htmlFor="account">Account:</label>
                        <input 
                            id='account'
                            name='account'
                            className={ style.Input } 
                            type="text"
                            value={account}
                            onChange={(e) => setAccount(e.target.value)}
                        />
                    </div>
                    <div className={ style.FormGroup }>
                        <label htmlFor="category">Category:</label>
                        <input 
                            id='category'
                            name='category'
                            className={ style.Input } 
                            type="text"   
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <div className={ style.FormGroup }>
                        <label htmlFor="date">Date:</label>
                        <input 
                            id='date'
                            name='date'
                            className={ style.Input } 
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className={ style.Buttons }>
                        <button className={ style.CancelButton} type="clear"> Cancel </button>
                        <button className={ style.SubmitButton} type="submit"> Add Transaction </button>  
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTransaction