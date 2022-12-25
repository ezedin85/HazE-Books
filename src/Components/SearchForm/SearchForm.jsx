import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './searchForm.css'

export default function SearchForm(props) {

  const [searchBook, setSearchBook] = useState();
  const navigate = useNavigate()

  function handleChange(e) {
    e.preventDefault()
    setSearchBook(e.target.value)
  }

  function handleSubmit() {
    navigate(`/search/${searchBook}`)
  }

  function showMenu() {
    props.setShowMenu(prev=>!prev)
  }
  return (
    <>
      <div className='mobile_menu'>
        <button onClick={showMenu} className='menu_btn' > <i className="fa-solid fa-bars"></i></button>
        <div className='mobile_logo'>
          <h2>HazE Books..</h2>
          <small>By Ezedin</small>
        </div>
      </div>

      <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Search your favourite books" 
                value={searchBook}
                onChange={handleChange}
              />
          </form>
      </div>
    </>
  )
}
