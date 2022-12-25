import "./Home.css"
import treeBooks from '../../assets/book.png'
import { Link } from "react-router-dom"
import SearchForm from "../SearchForm/SearchForm"
import { useState, useEffect } from "react"
import axios from "axios"
import About from "../About/About"
import parse from 'html-react-parser';

export default function Home(props) {
    
    const [sample, setSample] = useState([])

    useEffect(()=>{
        axios.get(`https://www.googleapis.com/books/v1/volumes/pMEUG8oNBfkC`)
        .then(data => {
            setSample(prev=>([...prev, data.data]))
        })
    },[])
    

    useEffect(()=>{
        axios.get(`https://www.googleapis.com/books/v1/volumes/Chr1NDlUcI8C`)
        .then(data => {
            setSample(prev=>([...prev, data.data]))
        })
    },[])

  return (
    <div className="home">
        <SearchForm setShowMenu={props.setShowMenu}/>

        <div className="welcome">
            <div className="welcome_left">
                <h1>Welcome Readers</h1>
                <p>Here is customised world of books for you</p>
                <Link to='/search'>Browse Latest</Link>
            </div>
            <div className="welcome_right">
                <img src={treeBooks} alt=""/>
            </div>
        </div>

        <div>
            <p>Recommanded For You</p>
            {sample[0] && sample[1]  && 
                <div className="recommended">
                    <div className="recommended_book">
                    <div className="go_to_detail"><Link to="/detail/pMEUG8oNBfkC">See Detail</Link></div>
                        <img src={sample[0].volumeInfo.imageLinks.thumbnail} alt="" />
                        <div>
                            <h2 className="book_name">{sample[0].volumeInfo.title}</h2>
                            <p className="autor">{sample[0].volumeInfo.authors}</p>
                            {sample[0].volumeInfo.averageRating && <div className="stars">
                                    <i style={sample[0].volumeInfo.averageRating>=1?{color:'#f3ca3d'}:{color:'white'}} className="fa-solid fa-star"></i>
                                    <i style={sample[0].volumeInfo.averageRating>=2?{color:'#f3ca3d'}:{color:'white'}} className="fa-solid fa-star"></i>
                                    <i style={sample[0].volumeInfo.averageRating>=3?{color:'#f3ca3d'}:{color:'white'}} className="fa-solid fa-star"></i>
                                    <i style={sample[0].volumeInfo.averageRating>=4?{color:'#f3ca3d'}:{color:'white'}} className="fa-solid fa-star"></i>
                                    <i style={sample[0].volumeInfo.averageRating>=5?{color:'#f3ca3d'}:{color:'white'}} className="fa-solid fa-star"></i>
                                    <span className='rate_count'>({sample[0].volumeInfo.ratingsCount})</span>
                                </div>}
                            <p className="book_description">{parse(sample[0].volumeInfo.description)}</p>
                        </div>
                    </div>

                    <div className="recommended_book">
                        <div className="go_to_detail"><Link to="/detail/Chr1NDlUcI8C">See Detail</Link></div>
                        <img src={sample[1].volumeInfo.imageLinks.thumbnail} alt="" />
                        <div>
                            <h2 className="book_name">{sample[1].volumeInfo.title}</h2>
                            <p className="autor">{sample[0].volumeInfo.authors}</p>
                            {sample[1].volumeInfo.averageRating && <div className="stars">
                                    <i style={sample[1].volumeInfo.averageRating>=1?{color:'#f3ca3d'}:{color:'white'}} className="fa-solid fa-star"></i>
                                    <i style={sample[1].volumeInfo.averageRating>=2?{color:'#f3ca3d'}:{color:'white'}} className="fa-solid fa-star"></i>
                                    <i style={sample[1].volumeInfo.averageRating>=3?{color:'#f3ca3d'}:{color:'white'}} className="fa-solid fa-star"></i>
                                    <i style={sample[1].volumeInfo.averageRating>=4?{color:'#f3ca3d'}:{color:'white'}} className="fa-solid fa-star"></i>
                                    <i style={sample[1].volumeInfo.averageRating>=5?{color:'#f3ca3d'}:{color:'white'}} className="fa-solid fa-star"></i>
                                    <span className='rate_count'>({sample[1].volumeInfo.ratingsCount})</span>
                                </div>}
                            <div className="book_description">{parse(sample[1].volumeInfo.description)}</div>
                        </div>
                    </div>
                </div>
            }
        </div>

        <About/>
    </div>
  )
}
