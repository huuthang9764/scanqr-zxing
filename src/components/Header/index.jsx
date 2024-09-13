import React from 'react'
import logo from '../../assets/tsv.png'

const Header = () => {
  return (
    <header>
      <div className="d-flex justify-content-between w-100 align-items-center">
        <div className="logo">
        <img src={logo} alt="Logo" />
        </div>
        <nav className="d-flex align-items-center">
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/" className="active">ĐIỂM DANH</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header