import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function UpdateModal(props) {
    const updateMeme = async (e) => {
        e.preventDefault();
        const obj = {
            title: e.target.title.value,
            poster_path: e.target.poster_path.value,
            overview: e.target.overview.value,
            media_type: e.target.media_type.value,
            comment: e.target.comment.value
        }
        console.log(props.item.id);
        const serverURl = `${process.env.REACT_APP_APIURL}/myMovies/${props.item.id}`
        const axiosRes = await axios.put(serverURl, obj);
        console.log(axiosRes.data);
        //close the update modal
        props.closeUpdateModal();
        //update the old FavArr
        props.takeNewArrFromChild(axiosRes.data);


        return (
            <Modal show={props.updateFlag} onHide={props.closeUpdateModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={updateMeme}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control name="title" type="text" defaultValue={props.item.title} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Poster Path</Form.Label>
                            <Form.Control name="poster_path" type="text" defaultValue={props.item.poster_path} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>overview</Form.Label>
                            <Form.Control name="overview" type="text" defaultValue={props.item.overview} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Media Type</Form.Label>
                            <Form.Control name="media_type" type="text" defaultValue={props.item.media_type} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control name="comment" type="text" defaultValue={props.item.comment} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeUpdateModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default UpdateModal;