import { Link } from 'react-router-dom'
import './Aside.css'

export default function Aside(props) {

  const sizeStyle = {
    display: props.showMenu? 'block' : 'none',
  }

  function hideMenu() {
    props.setShowMenu(prev=>!prev)
  }

  return (
    <div style={window.screen.width <= 480 ? sizeStyle: {}} className="aside">
      
      <div onClick={hideMenu} class="closeMenu"><i className="fa-solid fa-xmark"></i></div>
      {/* <h1>{props.showMenu? 'got it':'got ittttt'}</h1> */}

        <div className='logo'>
          <h2>HazE Books..</h2>
          <small>By Ezedin</small>
        </div>
        <div className='aside_links'>
            <Link to="/" ><i className="fa-solid fa-house"></i> Home</Link>
            <Link to="/search" ><i className="fa-solid fa-magnifying-glass"></i> Discover</Link>
            <a href="mailto: ezedin85nuru@gmail.com" ><i className="fa-regular fa-envelope"></i> Contact</a>
            <a href="mailto: ezedin85nuru@gmail.com" ><i className="fa-solid fa-laptop-code"></i> Developer</a>
            {/* <Link to="" ><i className="fa-solid fa-gear"></i> Settings</Link> */}
        </div>
    </div>
  )
}
