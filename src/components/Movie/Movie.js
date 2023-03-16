import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import ModalMovie from '../ModalMovie/ModalMovie';
import { Text } from 'react-native-web';

function Movie({ img, overview, release_date, title, item, comment, checkDataFromFav, type, handelDeleteFromList, handelUpdateFromList }) {
    const [showModal, setShowModal] = useState({
        show: false,
        type: "",
        id: 0
    });

    function handelAddFav(type) {
        setShowModal({
            show: true,
            type: type
        });
    }
    function handelClose() {
        setShowModal(false);
    }

    function handelDelete(id) {
        handelDeleteFromList(id);
    }
    function handelUpdate(id, item, comment) {
        return handelUpdateFromList(id, item, comment)
    }



    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"http://image.tmdb.org/t/p/w500/" + img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {release_date}
                    </Card.Text>
                    <div style={{ marginBottom: "20px" }}>
                        <Text numberOfLines={6} >{overview}</Text>
                        {comment && <div style={{ marginTop: "10px" }}>
                            <Text style={{ color: "e50914" }}>
                                comment :
                            </Text>
                            <Text>{comment}</Text>
                        </div>}
                    </div>
                    {type === "Home" && <Button style={{ backgroundColor: '#e50914' }} variant="primary" onClick={handelAddFav.bind(this, "ADD")}  >add to favorite</Button>}
                    {type !== "Home" &&
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button style={{ backgroundColor: '#e50914' }} variant="primary" onClick={handelDelete.bind(this, item.id)} >Delete </Button>
                            <Button style={{ backgroundColor: '#D61D4E' }} variant="primary" onClick={handelAddFav.bind(this, "Update")} >Update </Button>
                        </div>}
                </Card.Body>
            </Card>
            <ModalMovie showModal={showModal} handelClose={handelClose} item={item} dataFromServer={checkDataFromFav} handelUpdate={handelUpdate} />
        </>
    );
}

export default Movie;