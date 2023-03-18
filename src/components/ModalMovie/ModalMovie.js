import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



function ModalMovie(props) {
    const [comment, setComment] = useState("");
    const addToFav = async () => {
        const mySchema = {
            title:props.movieData.title,
            poster_path: props.movieData.poster_path,
            overview: props.movieData.overview,
            media_type:"Movie",
            comment: comment
        }
        console.log(mySchema);
        const responseData = await axios.post(process.env.REACT_APP_APIURL + `/myMovies`,mySchema);
        console.log(responseData);
        props.handleClose();

    }
    return (
        <Modal show={props.showFlag} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.movieData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2` + props.movieData.poster_path} width='100%'></Image>
                <p>{props.movieData.overview}</p>
                <InputGroup>
                    <InputGroup.Text>Comment</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" onChange={(e) =>{setComment(e.target.value)}} />
                </InputGroup>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={addToFav}>Add to Favorites</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalMovie;