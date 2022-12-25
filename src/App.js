import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import Aside from './Components/Aside/Aside'
import Detail from './Components/Detail/Detail'
import Home from './Components/Home/Home'
import NoMatch from './Components/NoMatch/NoMatch'
import Search from './Components/Search/Search'

function App() {

  const [showMenu, setShowMenu] = useState();

  return (
      <div className='main'>
        <Aside showMenu={showMenu} setShowMenu={setShowMenu} />
        <Routes>
          <Route path="/" element={<Home setShowMenu={setShowMenu}/>}/>
          <Route path="detail/:bookId" element={<Detail setShowMenu={setShowMenu}/>} />
          <Route path="/search/:SearchBook" element={<Search setShowMenu={setShowMenu}/>}/>
          <Route path="/search" element={<Search setShowMenu={setShowMenu}/>}/>
          <Route path="*" element={<NoMatch setShowMenu={setShowMenu}/>}/>
        </Routes>
      </div>
  )
}

export default App