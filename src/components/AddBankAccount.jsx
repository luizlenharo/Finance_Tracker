import React from 'react'
import style from '../styles/AddBankAccount.module.css'
import { useState, useEffect } from 'react'

const AddBankAccount = () => {
    const [totalBalance, setTotalBalance] = useState([])
    async function pullJson() {
        const response = await fetch('http://localhost:3333/total_balance/1')
        const responseData = await response.json()
        setTotalBalance(responseData)
    }
    
    useEffect(() => { 
        pullJson()
    }, [])

    const [name, setName] = useState('');
    const [balance, setBalance] = useState(0);

    const addNewBankAccount = async (newBankAccount) => {
        const res = await fetch('http://localhost:3333/bank_accounts/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newBankAccount),
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

    const submitForm = (e) => {
        e.preventDefault();

        const newBankAccount = {
          name,
          balance,
          expenses: 0,
          incomes : 0,
        };
        
        const newTotalBalance = {
            total: totalBalance.total + parseInt(balance),
            expenses: totalBalance.expenses,
            incomes: totalBalance.incomes,
        };

        addNewBankAccount(newBankAccount);
        updateTotalBalance(newTotalBalance);
        e.target.submit();
    };

    return (
        <div>
            <div className={ style.AddBankAccountPanel }>
                <form onSubmit={ submitForm }>
                    <div className={ style.AddBankAccountTitle }>Add Bank Account</div>
                    <div className={ style.FormGroup }>
                        <label htmlFor="name">Name:</label>
                        <input 
                            id='name'
                            name='name'
                            className={ style.Input } 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={ style.FormGroup }>
                        <label htmlFor="balance">Balance:</label>
                        <input 
                            id='balance'
                            name='balance'
                            className={ style.Input } 
                            type="number"
                            value={balance}
                            onChange={(e) => setBalance(e.target.value)}
                        />
                    </div>
                    <div className={ style.Buttons }>
                        <button className={ style.CancelButton} type="clear"> Cancel </button>
                        <button className={ style.SubmitButton} type="submit"> Add Bank Account </button>  
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBankAccount