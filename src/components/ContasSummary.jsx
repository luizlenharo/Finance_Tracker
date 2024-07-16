import React from 'react'
import style from '../styles/ContasSummary.module.css'
import { useState, useEffect } from 'react'

const ContasSummary = () => {
    const [accounts, setAccounts] = useState([])
    const apiURL = 'http://localhost:3333/bank_accounts'

    async function pullJson() {
        const response = await fetch(apiURL)
        const responseData = await response.json()
        setAccounts(responseData)
    }

    useEffect(() => { 
        pullJson()
    }, [])

    return (
        <div>
            <div className={ style.ContasSummary }>
                <h1 className={ style.ContasSummaryTitle }> Accounts </h1>
                <div>
                    {accounts.map((account) => (
                        <div key={ account.id } className={ style.Conta }>
                            <h1 className={ style.ContaName }>{ account.name }: </h1>
                            <h1 className={ style.ContaValue }> - R$ { account.expenses }</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContasSummary