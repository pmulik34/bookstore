import React from 'react'
import 'boxicons';
import '../App.css';
import { Link } from 'react-router-dom';
import BookStore from "../assets/BookStore.png";
import { useSelector } from 'react-redux';


const NavBar = () => {
  const items = useSelector((state)=>state.cart);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">

          <Link className="navbar-brand" to="/">
            <img src={BookStore} alt='BookStore' style={{ width: '12rem' }} />
          </Link>

          <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <box-icon name='menu-alt-right' ></box-icon>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/books">
                  Books
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/authors">
                  Authors
                </Link>
              </li>

              <li className="nav-item">
              
                <Link className="nav-link " to="/cart">
                🛒 Cart Items: {items.length}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar