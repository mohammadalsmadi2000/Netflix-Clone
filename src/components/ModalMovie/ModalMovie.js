
import axios from 'axios';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ModalMovie({ showModal, handelClose, item }) {
    const [comment, setComment] = useState("");
    const [confirm, setConfirm] = useState(false);
    function postMovie(item) {
        axios.post('https://movies-library-production-6ce9.up.railway.app/Movies', {
            "title": item.title,
            "release_date": item.release_date,
            "overview": item.overview,
            "poster_path": item.poster_path,
            "comment": comment
        })
            .then(function (response) {
                handelClose();

                alert("your data was added !");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <Modal show={showModal} onHide={handelClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><img width={"100%"} height={"500px"} src={"http://image.tmdb.org/t/p/w500/" + item.poster_path} />
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="add a comment" onChange={(e) => { setComment(e.target.value); }} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handelClose}>
                        Close
                    </Button>
                    <Button style={{backgroundColor:'#e50914'}} variant="primary" onClick={postMovie.bind(this, item)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    );
}

export default ModalMovie;