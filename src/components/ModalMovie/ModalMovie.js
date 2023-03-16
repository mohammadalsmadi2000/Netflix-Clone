
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';


function ModalMovie({ showModal, handelClose, item, dataFromServer, handelUpdate, id }) {
    const [comment, setComment] = useState("");
    const [disabled, setDisabled] = useState(false);

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
                console.log(error);
            }).finally(function () {
                window.location.reload();

            })
    }
    useEffect(() => {
        dataFromServer.forEach((el) => {
            if (el.title === item.title) setDisabled(true);
        })
    }, [disabled])

    function handelUpdateFromModal(id,item,comment) {

        handelUpdate(id,item,comment).then(()=>{
            handelClose();

        })
        
    }

    console.log(disabled)
    return (
        <>

            <Modal show={showModal.show} onHide={handelClose}>
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
                    {showModal.type === "ADD" ? <Button disabled={disabled} style={{ backgroundColor: '#e50914' }} variant="primary" onClick={postMovie.bind(this, item)}>
                        {disabled ? "It is already in the favorite" : "Add To favorite"}
                    </Button> : <Button style={{ backgroundColor: '#e50914' }} variant="primary" onClick={handelUpdateFromModal.bind(this, item.id, item,comment)}>
                        Update
                    </Button>}
                </Modal.Footer>
            </Modal>


        </>
    );
}

export default ModalMovie;