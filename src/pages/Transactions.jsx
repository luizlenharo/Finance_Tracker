import React from 'react'
import style from '../styles/Transactions.module.css'
import TransactionsList from '../components/TransactionsList'
import AddTransaction from '../components/AddTransaction'
import { useState } from 'react'

const Transactions = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className={ style.Gastos }>
        <div className={ style.GastosHeader }>
          <div className={ style.GastosTitle }>Transactions</div>
          <button onClick={toggleForm} className={ style.AdicionarGasto}> 
            + Add transaction   
          </button>
        </div>
        <div className={`${style.TransactionsContainer} ${isFormOpen ? style.blurred : ''}`}>
          <TransactionsList />
        </div>
        <div className={`${style.overlay} ${isFormOpen ? '' : style.hidden}`}>
          <div className={ style.modal }>
            <AddTransaction />
          </div>
        </div>
    </div>      
  )
}

export default Transactions