import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ModalMovie from '../ModalMovie/ModalMovie';
import UpdateModal from '../UpdateModal/UpdateModal';
import './Movie.css'
import axios from 'axios';



function Movie(props) {
  const [showLines, setShowLines] = useState(false);
  const [showFlag, setShowFlag] = useState(false);

  const [updateFlag, setUpdateFlag] = useState(false);
  const [newArr, setNewArr] = useState([]);


  // more details functions
  const handleShow = (props) => {
    console.log(props);

    setShowFlag(true);
  }
  const handleClose = () => {
    setShowFlag(false);
  }

  // Update button functions
  const showUpdateModal = (props) => {
    setUpdateFlag(true);

    console.log(props);
  }

  const closeUpdateModal = () => {
    setUpdateFlag(false);
  }

  const deleteMovie = async() => {
    console.log(props.myMovie.id);
    const serverURl = `${process.env.REACT_APP_APIURL}/myMovies/${props.myMovie.id}`
    const axiosRes = await axios.delete(serverURl);
    console.log(axiosRes.data);
    props.sendReq();
  }



  return (
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2` + props.myMovie.poster_path} />
        <Card.Body>
          <Card.Title>{props.myMovie.title && <h3>Movie Name: {props.myMovie.title}</h3>}</Card.Title>
          <h4>ID:{props.myMovie.id}</h4>
          <Card.Text className={showLines ? '' : 'showLess'}>{props.myMovie.overview} </Card.Text>
          {props.parent === "Home" && <Button variant="primary" onClick={() => { handleShow(props) }} >More Details</Button>}
          {props.parent === "FavList" && <><Button variant="primary" onClick={() => { handleShow(props) }} >Details</Button>
            <Button variant="success" onClick={() => { showUpdateModal(props) }} >Update</Button>
            <Button variant="danger" onClick={deleteMovie}>Delete</Button>

          </>}
        </Card.Body>
      </Card>
      <ModalMovie showFlag={showFlag} handleClose={handleClose} movieData={props.myMovie} />
      <UpdateModal updateFlag={updateFlag} closeUpdateModal={closeUpdateModal} item={props.myMovie} sendReq={props.sendReq} />
    </Col>

  )
}

export default Movie;