import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import book2 from '../../assets/book2.jpg'
import About from '../About/About'
import SearchForm from '../SearchForm/SearchForm'
import './Detail.css'
import parse from 'html-react-parser';



export default function Detail(props) {

    const navigate = useNavigate()
    const {bookId} = useParams()

    const [book, setBook] = useState()

    useEffect(()=>{
        axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
        .then(data => {
            setBook(data.data)
        })
    },[])

      return (
        <div className='detail'>
            <div className="detail_container">
                
                <SearchForm setShowMenu={props.setShowMenu}/>
                <span className='go_back' onClick={()=>{navigate(-1)}}><i className="fa-solid fa-angle-left"></i> Go back</span>

                
                    {book &&
                        <div className="book_detail">
                            <div className="left_detail">
                                {book.volumeInfo.imageLinks? <img src={book.volumeInfo.imageLinks.thumbnail} alt="" /> : <i>img not found</i>}
                            </div>
                            <div className="right_detail">
                                {book.volumeInfo.averageRating &&<p className='rate' style={{}}>{ `${book.volumeInfo.averageRating*20}%`}</p>}
                                <h2 className='title'>{book.volumeInfo.title}</h2>
                                <h4 className='author'>{book.volumeInfo.authors} | {book.volumeInfo.publishedDate}</h4>
                                {book.volumeInfo.averageRating && <div className="stars">
                                    <i style={book.volumeInfo.averageRating>=1?{color:'yellow'}:{color:'white'}} className="fa-solid fa-star"></i>
                                    <i style={book.volumeInfo.averageRating>=2?{color:'yellow'}:{color:'white'}} className="fa-solid fa-star"></i>
                                    <i style={book.volumeInfo.averageRating>=3?{color:'yellow'}:{color:'white'}} className="fa-solid fa-star"></i>
                                    <i style={book.volumeInfo.averageRating>=4?{color:'yellow'}:{color:'white'}} className="fa-solid fa-star"></i>
                                    <i style={book.volumeInfo.averageRating>=5?{color:'yellow'}:{color:'white'}} className="fa-solid fa-star"></i>
                                    <span className='rate_count'>({book.volumeInfo.ratingsCount})</span>
                                </div>}
                                <p className='pages'>{book.volumeInfo.pageCount} pages</p>
                                <a href={book.accessInfo.webReaderLink} target='_blank' className='book_accessability'>Web Reader</a>
                                {book.accessInfo.pdf.isAvailable && <a href={book.accessInfo.pdf.acsTokenLink} target='_blank' className='book_accessability'>Pdf Avaliable</a>}
                                {book.accessInfo.epub.isAvailable && <a className='book_accessability'>Ebup Avaliable</a>}
                                {book.volumeInfo.description && <div className="description">{parse(book.volumeInfo.description)}</div>}
                                <a href={book.volumeInfo.previewLink} target='_blank' className='get_book'>Get the Book</a>
                            </div>
                        </div>
                    }
            </div>
            
            <About/>
        </div>
      )
    }
    