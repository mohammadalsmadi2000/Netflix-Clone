
import React, { useEffect, useState } from 'react'
import Movie from '../Movie/Movie';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './MovieList.css'
import axios from 'axios';


function MovieList({ data, type, FetchDataList }) {
    const [mapArray, setMapArray] = useState([])

    async function FetchData() {
        const serverURL = "https://movies-library-production-6ce9.up.railway.app/Movies"
        const resData = await axios(serverURL);
        
        return resData.data;
    }



    useEffect(() => {
        setMapArray(data);
        FetchData()
    }, [data])




    async function handelDeleteFromList(id) {
        const URL = "https://movies-library-production-6ce9.up.railway.app/Movies/"
        axios.delete(`${URL}${id}`).then(() => {
            FetchDataList();

        })

    }

    async function handelUpdateFromList(id, item, comment) {
        const URL = "https://movies-library-production-6ce9.up.railway.app/Movies/"
        const up = await axios.put(`${URL}${id}`, {
            "title": item.title,
            "release_date": item.release_date,
            "overview": item.overview,
            "poster_path": item.poster_path,
            "comment": comment
        });

        FetchDataList();
        return up;
    }

    return (
        <>
            <div className='div-MovieList'>
                <Row xs={1} md={4} className="g-4">
                    {mapArray.map((item) => {
                        return (
                            <React.Fragment key={item.id}>
                                <Col>
                                    <Movie img={item.poster_path}
                                        title={item.title} overview={item.overview}
                                        release_date={item.release_date} item={item} comment={item.comment}
                                         type={type} handelDeleteFromList={handelDeleteFromList}
                                        handelUpdateFromList={handelUpdateFromList}  />
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