import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
        <Outlet/>
        <footer className='p-12'>jkb lc 2024</footer>
    </div>
  )
}

export default Layout