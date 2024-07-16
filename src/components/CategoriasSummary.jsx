import React from 'react'
import style from '../styles/CategoriasSummary.module.css'
import { useState, useEffect } from 'react'

const CategoriaSummary = () => {
    const [categories, setCategories] = useState([])
    const apiURL = 'http://localhost:3333/categories'

    async function pullJson() {
        const response = await fetch(apiURL)
        const responseData = await response.json()
        setCategories(responseData)
    }

    useEffect(() => { 
        pullJson()
    }, [])

    return (
        <div>
            <div className={ style.CategoriasSummary }>
                <h1 className={ style.CategoriasSummaryTitle }> Categories </h1>
                <div>
                    {categories.map((categoria) => (
                        <div key={ categoria.id } className={ style.Categoria }>
                            <h1 className={ style.CategoriaName }>{ categoria.name }: </h1>
                            <h1 className={ style.CategoriaValue }> - R$ { categoria.total }</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoriaSummary