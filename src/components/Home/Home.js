
import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import './Home.css'

function Home() {
    const [dataFromServer,setDataFromServer]=useState([]);
    async function FetchData() {
        const serverURL = "https://movies-library-production-6ce9.up.railway.app/trending"
        const resData = await axios(serverURL);
        setDataFromServer(resData.data);
    }

    useEffect(() => {
        FetchData();
    }, [])

    return (
        <div className="div-Home">
       <MovieList data={dataFromServer}/>
        </div>
    );
}

export default Home;