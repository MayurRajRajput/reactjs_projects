import React from 'react'

const Navigation = () => {
  return (
    <nav className='flex px-[8px] h-[72px] container justify-between items-center'>
      <div>
        <img src="/images/logo.png" alt="do some coding logo" />
      </div>
      <ul className='flex list-none gap-[24px] font-medium'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation
