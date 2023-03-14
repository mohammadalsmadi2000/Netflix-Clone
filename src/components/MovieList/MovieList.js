
import React, { useState } from 'react'
import Movie from '../Movie/Movie';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './MovieList.css'


function MovieList({ data }) {


    return (
        <>
            <div className='div-MovieList'>
                <Row xs={1} md={4} className="g-4">
                    {data.map((item) => {
                        return (
                            <React.Fragment key={item.id}>
                                <Col>
                                    <Movie img={item.poster_path}
                                        title={item.title} overview={item.overview}
                                        release_date={item.release_date} item={item} />
                                </Col>
                            </React.Fragment>
                        )
                    })}
                </Row>
            </div>
        </>
    );
}

export default MovieList;