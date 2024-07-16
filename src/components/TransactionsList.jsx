import style  from '../styles/TransactionsList.module.css'
import { useState, useEffect } from 'react'

const TransactionsList = ({page}) => {
  const [allTransactions, setTransactions] = useState([])
  var showTransactions = []
  const recentTransactions = allTransactions.slice().reverse().slice(0, 5)
  {(page === 'home') ? showTransactions = recentTransactions : showTransactions = allTransactions.slice().reverse()}

  const apiURL = 'http://localhost:3333/transactions'

  async function pullJson() {
    const response = await fetch(apiURL)
    const responseData = await response.json()
    setTransactions(responseData)
  }

  useEffect(() => { 
    pullJson()
  }, [])

  return (
    <div className={ style.TransactionsList }>
      <div className={ style.TransactionsListItens }>
        <div className={ style.TransactionsListTitle}>
          <h1> Amount </h1>
        </div>
        <div className={ style.TransactionsListTitle}>
          <h1> Account </h1>
        </div>
        <div className={ style.TransactionsListTitle}>
          <h1> Category </h1>
        </div>
        <div className={ style.TransactionsListTitle}>
          <h1> Date </h1>
        </div>
      </div>
      {showTransactions.map((transaction) => (
        <div key={ transaction.id } className={ style.TransactionsListItens }>
          <div key={ transaction.id } className={ style.TransactionsListText}>
            <h1 
              className={ style.TransactionsListAmount }>
                {transaction.type === 'expense' ? (
                  <span> - R$ {transaction.amount}</span>
                ) : (
                  <span>R$ {transaction.amount}</span>
                )} 
            </h1>
          </div>
          <div key={ transaction.id } className={ style.TransactionsListText}>
            <h1>{ transaction.account }</h1>
          </div>
          <div key={ transaction.id } className={ style.TransactionsListText}>
            <h1>{ transaction.category }</h1>
          </div>
          <div key={ transaction.id } className={ style.TransactionsListText}>
            <h1>{ transaction.date }</h1>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TransactionsList