
  // ============================================
  const [b, setb] = useState({})
  useEffect(()=>{
    axios.get("https://www.googleapis.com/books/v1/volumes/Sv36Gm741L0C")
    .then(data => {
      setb(data.data)
    })
  },[])
// ====================================================

<div>
        {
          b.volumeInfo &&
          <div>
      <p>author: {b.volumeInfo.authors[0]}</p>
      <p>{b.volumeInfo.title}</p>
      <p>published in {b.volumeInfo.publishedDate}</p>
      <p>{b.volumeInfo.pageCount} pages</p>
      <p>{}</p>
      <img src={b.volumeInfo.imageLinks.smallThumbnail} alt="not found"/>
      <p>{console.log(b.volumeInfo.title)}</p>
      </div>
    }
      </div>