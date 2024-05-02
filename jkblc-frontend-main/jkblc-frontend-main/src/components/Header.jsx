import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const {pathname} = useLocation()

    const navItems = [
        {
            title: 'home',
            href: '/home',

        }, {
            title: 'about',
            href: '/about',
        }, {
            title: 'contact',
            href: '/contact',
        }
    ]

    return (
        <nav className='w-full flex justify-between '>
            <h1>jkb lc</h1>
            <ul className='flex gap-x-4 p-4 text-slate-500'>
                {
                    navItems.map((nav) => (
                        <li key={nav.href} className={pathname == nav.href ? 'text-black' : null}>
                            <Link to={nav.href}>{nav.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Header