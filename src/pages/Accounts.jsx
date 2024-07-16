import React from 'react'
import BankAccount from '@/components/BankAccount'
import style from '../styles/Accounts.module.css'
import AddBankAccount from '@/components/AddBankAccount'
import { useState, useEffect } from 'react'

const Accounts = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

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
    <div className={ style.AccountsContainer }>
      <div className={ style.AccountsHeader }>
          <div className={ style.AccountsTitle }>Accounts</div>
          <button 
            onClick={toggleForm}
            className={ style.AdicionarAccount}>+ Add account</button>
      </div>
      <div className={`${style.AccountsList} ${isFormOpen ? style.blurred : ''}`}>
        {accounts.map(bank => (
          <BankAccount key={bank.id} bank={bank} />
        ))}
      </div>
      <div className={`${style.overlay} ${isFormOpen ? '' : style.hidden}`}>
        <div className={ style.modal }>
          <AddBankAccount />
        </div>
      </div>
    </div>
  )
}

export default Accounts