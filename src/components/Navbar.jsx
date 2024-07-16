import React from 'react'
import styles from '@/styles/Navbar.module.css'
import NavLink from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()

    return (
    <>
        <nav className={ styles.Navbar }>
            <a href="/" className={ styles.NavbarTitle }> Finance Tracker </a>
            <div className={ styles.NavbarButtons }>
                <button>
                    <NavLink 
                    href='/' 
                    className={ router.pathname === '/' ? styles.SelectedButton : styles.NavbarButton }>Home</NavLink>
                </button>
                <button>
                    <NavLink
                        href='/Transactions'
                        className={ router.pathname === '/Transactions' ? styles.SelectedButton : styles.NavbarButton }>Transactions</NavLink>
                </button>
                <button>
                    <NavLink
                        href='/Accounts'
                        className={ router.pathname === '/Accounts' ? styles.SelectedButton : styles.NavbarButton }>Accounts</NavLink>
                </button>      
            </div>
        </nav>
    </>
    )
}

export default Navbar