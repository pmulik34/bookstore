import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import BookPage from './components/Books/BookPage'
import AuthorPage from './components/Author/AuthorPage'
import BooksDetailedPage from './components/Books/BooksDetailedPage'
import { Provider } from 'react-redux'
import store from './store/store'
import AuthorDetailedPage from './components/Author/AuthorDetailedPage'
import Cart from './components/Cart'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/books' element={<BookPage />}></Route>
          <Route path='/books/:id' element={<BooksDetailedPage />}></Route>
          <Route path='/authors' element={<AuthorPage />}></Route>
          <Route path='/author/:author' element={<AuthorDetailedPage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
