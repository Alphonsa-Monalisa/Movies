import React , { useState, useEffect }from 'react'
import "./App.css"
import video from "./asserts/trailor.mp4"
import logo from './asserts/logo.png'
import 'bootstrap/dist/css/bootstrap.css';



const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=56a33d01";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: 'https://Alphonsa-Monalisa.github.io/Movies',
        method: 'GET',
        headers: { 'Authorization': 'Bearer <token>' },
        
      })
    })
      .then(response => response.json())
      .then(data => {
        // Process the response data from the API
        const dataa = response.json();

        setMovies(dataa.Search);
      })
      .catch(error => {
        console.log(error.message)
      });
    
  };

  return (
   <>
   <div className='body'>
     <header>
        <video autoPlay loop muted playsInline className='video'>
          <source src={video}/>
        </video>
        <nav>
           <div className='logo-block'>
               <img src={logo} alt=""  id='logo'/> 
               <h3>Movies</h3> 
          </div>
          <div className="search">
             <input type="text" placeholder='search...' id='search_input'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />
               <img
          src={'https://gist.githubusercontent.com/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg'}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
             
          </div>
        </nav>
        <div className="content">
          <h1 id='title'>Money Heist</h1>
          <p>An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.</p>
          <div className="details">
              <h6>A Netflix original Series</h6>
              <h5 id='gen'>Thriller</h5>
              <h4>2021</h4>
              <h3 id='rate'><span>IMDB</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
               </svg>9.4</h3>
          </div> 
          <div className="btns">
             <span id='play'>WATCH <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
             <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
            </svg> </span>
            <span id='download-main' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
            </svg></span>
          </div>
          <section className='section-popular'>
             <h4 className='popular'>Popular</h4>
             <div className="cards">
              {movies.map((movie)=>(
                <div className='movie' key={movie.imdbID} >
                <div >
                  <p>{movie.Year}</p>
                </div>

                <div>
                  <img src={movie.Poster} alt={movie.Title} />
                </div>

                <div>
                  <span>{movie.Type}</span>
                  <h3>{movie.Title}</h3>
                </div>
                </div>
              ))}
              </div>
          </section>
        </div>
     </header>
    </div>
   </>
  )
}

export default App
