import React from 'react'
import style from '../styles/Balance.module.css'
import { useState, useEffect } from 'react'

const Balance = () => {
    const [totalBalance, setTotalBalance] = useState([])
    const apiURL = 'http://localhost:3333/total_balance/1'

    async function pullTotalBalance() {
        const response = await fetch(apiURL)
        const responseData = await response.json()
        setTotalBalance(responseData)
    }

    useEffect(() => { 
        pullTotalBalance()
    }, [])

    return (
        <div className={ style.BalanceContainer }>
            <div className={ style.BalanceTitle }>Balance</div>
            <div className={ style.GeralContent }>
                <div className={ style.TotalContainer }> 
                    <h1 className={ style.ContainerTitle }>Total Balance:</h1>
                    <h1 className={ style.TotalValue }>R$ { totalBalance.total }</h1>
                </div>
                <div className={ style.IncomesExpenses }>
                <div className={ style.IncomesContainer }>
                    <h1 className={ style.ContainerTitle }>Incomes:</h1>
                    <h1 className={ style.IncomesValue }> R$ { totalBalance.incomes }</h1>
                </div>
                <div className={ style.ExpensesContainer }>
                    <h1 className={ style.ContainerTitle }>Expenses:</h1>
                    <h1 className={ style.ExpensesValue }>- R$ { totalBalance.expenses }</h1>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Balance