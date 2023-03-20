import React from 'react'
import { useEffect, useState } from "react";
import MovieList from '../MovieList/MovieList';


function FavList() {
  const [favArr, setFavArr] = useState([]);
  const sendReq = async () => {
    console.log(process.env.REACT_APP_APIURL);
    const serverURL = `${process.env.REACT_APP_APIURL}/myMovies`;
    const response = await fetch(serverURL);
    const data = await response.json();
    console.log(data)
    setFavArr(data);
  }

  const takeNewArr = (newArr) => {
    console.log("Fav List Comp ", newArr);
    setFavArr(newArr);
  }

  useEffect(() => {
    sendReq();
  }, [])


  return (
    <>
      <h1>FavList</h1>
      <MovieList data={favArr} takeNewArr={takeNewArr} parent="FavList" sendReq={sendReq} />

    </>
  )
}

export default FavList;