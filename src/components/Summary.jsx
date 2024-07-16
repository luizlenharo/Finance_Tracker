import React from 'react'
import CategoriasSummary from './CategoriasSummary'
import ContasSummary from './ContasSummary'
import style from '../styles/Summary.module.css'

const Summary = () => {
  return (
    <div>
      <div className={ style.SummaryTitle}>Expenses Summary</div>
      <div className={ style.SummaryContent }>
        <CategoriasSummary />
        <ContasSummary />
      </div>
    </div>
  )
}

export default Summary