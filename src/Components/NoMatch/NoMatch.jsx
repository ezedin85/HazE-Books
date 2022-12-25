import About from '../About/About'
import SearchForm from '../SearchForm/SearchForm'
import './NoMatch.css'

export default function NoMatch(props) {
  return (
    <div className="no_match">
      <SearchForm setShowMenu={props.setShowMenu}/>
      <h1>Page Not found</h1>
      
      <About/>
    </div>
  )
}
