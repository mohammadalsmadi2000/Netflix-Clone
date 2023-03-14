import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo from '../assets/p1.png'
import ModalMovie from '../ModalMovie/ModalMovie';
import { Text } from 'react-native-web';

function Movie({ img, overview, release_date, title, item }) {
    const [showModal, setShowModal] = useState(false);
    function handelAddFav(item) {
        setShowModal(true);
    }
    function handelClose() {
        setShowModal(false);
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
                    </div>
                    <Button style={{ backgroundColor: '#e50914' }} variant="primary" onClick={handelAddFav}  >add to favorite</Button>
                </Card.Body>
            </Card>
            <ModalMovie showModal={showModal} handelClose={handelClose} item={item} />
        </>
    );
}

export default Movie;