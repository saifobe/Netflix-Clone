import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ModalMovie from '../ModalMovie/ModalMovie';
import './Movie.css'



function Movie(props) {
    const [showLines, setShowLines] = useState(false);
    const [showFlag,setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});
    const handleShow = (props) =>{
        console.log(props);
        setClickedMovie(props.myMovie);
        setShowFlag(true);
    }
    const handleClose = () =>{
        setShowFlag(false);
    }
  return (
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2`+props.myMovie.poster_path} />
      <Card.Body>
        <Card.Title>{props.myMovie.title && <h3>Movie Name: {props.myMovie.title}</h3>}</Card.Title>
        <h4>ID:{props.myMovie.id}</h4>
        <Card.Text className={showLines ? '' :'showLess' }>{props.myMovie.overview} </Card.Text>
        <Button variant="primary" onClick={() => {handleShow(props)}}>More Details</Button>
      </Card.Body>
    </Card>
    <ModalMovie showFlag={showFlag} handleClose={handleClose} movieData={clickedMovie}/>
    </Col>
    
  )
}

export default Movie