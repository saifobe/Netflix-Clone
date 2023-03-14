import React, { useEffect, useState } from 'react'
import MovieList from '../MovieList/MovieList';

 function Home() {
    
    const [movieData, setMovieData] = useState([]);
    const sendReq = async () => {
        const serverURL = `https://movies-library-red.vercel.app/trending`;
        const response = await fetch(serverURL);
        const data = await response.json();
        console.log(data);
        setMovieData(data);
        
    }

    useEffect(()=>{
        sendReq();
    }, []);
  return (
    <>
     <MovieList data={movieData}/>
    </>
  )
}

export default Home;

