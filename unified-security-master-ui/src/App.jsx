import { Link, Route, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import { Assets } from './pages/Assets'
import { Bonds } from './pages/Bonds'
import Watchlists from './pages/Watchlists'

function App() {
  return(
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>

          <Link className = "navbar-brand" to ="/">
            Unified Security Master
          </Link>

          <div className = "navbar-nav">
            <Link className = "nav-link" to ="/">
              Dashboard
            </Link>

            <Link className = "nav-link" to ="/assets">
              Assets
            </Link>

            <Link className = "nav-link" to ="/bonds">
              Bonds
            </Link>

            <Link className = "nav-link" to ="/watchlists">
              Watchlists
            </Link>
          </div>
        </div>
      </nav>

      <main className='container mt-4'>
        <Routes>
          <Route path = "/" element = {<Dashboard/>}></Route>
          <Route path = "/assets" element = {<Assets/>}></Route>
          <Route path = "/bonds" element = {<Bonds/>}></Route>
          <Route path = "/watchlists" element = {<Watchlists/>}></Route>
        </Routes>
      </main>
    </>
  )
 
}

export default App
