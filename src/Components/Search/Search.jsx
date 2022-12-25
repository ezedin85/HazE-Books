import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import './search.css'
import { Link, useParams } from 'react-router-dom'
import About from '../About/About'
let mapped

export default function Search(props) {
    const [result, setResult] = useState([])

    let {SearchBook} = useParams()
    //if user didn't put any word to search or navigats to this page using the discover link
    SearchBook = SearchBook == 'undefined' || !SearchBook ? 'javaScript' :SearchBook

    useEffect(()=>{
        // axios.get(`https://www.googleapis.com/books/v1/volumes?q=${SearchBook}&key=AIzaSyB80LDCE5ACBHkfcaiz-Drv7d_xzVihkLk&maxResults=40`)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${SearchBook}&key=AIzaSyB80LDCE5ACBHkfcaiz-Drv7d_xzVihkLk&maxResults=40`)
        .then(data => {
        setResult(data.data.items)
        })
    },[])
    
  return (
    <div className='discover'>
        <SearchForm setShowMenu={props.setShowMenu}/>
        <div className='books'>
        {

          mapped = result.map((book)=>{
            return <div className='book' key={book.id}>
            {book.volumeInfo.imageLinks? <img src={book.volumeInfo.imageLinks.thumbnail} alt="not found"/>:<i>img not found</i>}
            <p>{book.volumeInfo.title}</p>
            <div className='see_detail'>
                <Link to={`/detail/${book.id}`}>See Detail</Link>
            </div>
            </div>
          })
        }
      </div>

      <About/>
    </div>
  )
}
