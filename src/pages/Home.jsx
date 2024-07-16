import React from 'react'
import style from '../styles/Home.module.css'
import Summary from '@/components/Summary'
import Balance from '@/components/Balance'
import RecentTransactions from '../components/RecentTransactions'

const Home = () => {
  return (
    <div className={ style.Home }>
      <div className={ style.HomeTitle }>Home</div>
      <div className={ style.HomeContainer}>
        <Balance />
        <RecentTransactions />
        <Summary />
      </div>
    </div>
  )
}

export default Home