
import axios from 'axios';
import {  useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalMovie({ showModal, handelClose, item, dataFromServer, handelUpdate }) {
    const [comment, setComment] = useState("");
    

    async function postMovie(item) {

        await axios.post('https://movies-library-production-6ce9.up.railway.app/Movies', {
            "title": item.title,
            "release_date": item.release_date,
            "overview": item.overview,
            "poster_path": item.poster_path,
            "comment": comment
        })
            .then(function (response) {
                handelClose();



            })
            .catch(function (error) {
            }).finally(function () {
                window.location.reload();

            })
    }


    function handelUpdateFromModal(id, item, comment) {

        handelUpdate(id, item, comment).then(() => {
            handelClose();

        })

    }

    return (
        <>

            <Modal show={showModal.show} onHide={handelClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><img alt={item.title} width={"100%"} height={"500px"} src={"http://image.tmdb.org/t/p/w500/" + item.poster_path} />
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
                    {showModal.type === "ADD" ? <Button  style={{ backgroundColor: '#e50914' }} variant="primary" onClick={postMovie.bind(this, item)}>
                         "Add To favorite"
                    </Button> : <Button style={{ backgroundColor: '#e50914' }} variant="primary" onClick={handelUpdateFromModal.bind(this, item.id, item, comment)}>
                        Update
                    </Button>}
                </Modal.Footer>
            </Modal>


        </>
    );
}

export default ModalMovie;