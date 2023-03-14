import React from 'react'
import Movie from '../Movie/Movie';
import Row from 'react-bootstrap/Row';

 function MovieList(props) {
    
  return (
    <>
    <Row xs={1} md={3} className="g-4">
     {props.data.map(item =>{
        return <Movie myMovie ={item}/>

     })}

     </Row>
     
    </>
  )
}

export default MovieList;
