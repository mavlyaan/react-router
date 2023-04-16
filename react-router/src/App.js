import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AboutPage from "./components/AboutPage"
import ContactPage from "./components/ContactPage"
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import NotFoundPage from "./components/NotFoundPage"
import RouterLayout from "./components/RouterLayout"
import '../src/assets/style/Header.scss'

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <main>
        <header>
          <div className="Title">
            <h2>Title</h2>
          </div>
          <div className="nav">
          <nav>
          <ul>
            <li>
              <Link to = '/'>Home</Link>
            </li>
            <li>
              <Link to = '/about'>About</Link>
            </li>
            <li>
              <Link to = '/contact'>Contact</Link>
            </li>
            <li>
              <Link to = '/login'>Login</Link>
            </li>
          </ul>
        </nav>
          </div>
        </header>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='login' element={<LoginPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    )
  }
}

export default App