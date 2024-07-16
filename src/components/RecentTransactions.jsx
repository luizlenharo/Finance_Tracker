import React from 'react'
import TransactionsList from './TransactionsList'
import style from '../styles/RecentTransactions.module.css'

const RecentTransactions = () => {
  return (
    <div className={ style.RecentTransfersContainer }>
        <div className={ style.RecentTransfersTitle }>Recent Transfers</div>
        <div className={ style.GeralContent }>
            <TransactionsList page={'home'}/>
        </div>
    </div>
  )
}

export default RecentTransactions