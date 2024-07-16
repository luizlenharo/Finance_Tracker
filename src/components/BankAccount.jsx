import React from 'react'
import style from '../styles/BankAccount.module.css'

const BankAccount = ({ bank }) => {
  return (
    <div className={ style.Conta }>
        <div className={ style.ContaContainer }>
            <div className={ style.ContaName }>{bank.name}</div>
            <div className={ style.ContaItem }>
                <div>Total Balance: </div>
                <div className={ style.ContaValues }> R$ {bank.balance}</div>
            </div>
            <div className={ style.ContaItem }>
                <div>Expenses: </div>
                <div className={ style.ContaValues }> - R$ {bank.expenses}</div>
            </div>
            <div className={ style.ContaItem }>
                <div>Incomes: </div>
                <div className={ style.ContaValues }> R$ {bank.incomes}</div>
            </div>     
        </div>
    </div>
  )
}

export default BankAccount