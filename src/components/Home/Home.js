
import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import HeroSection from "../TestComp/TestComp";
import './Home.css';


function Home() {
    const [dataFromServer, setDataFromServer] = useState([]);
    async function FetchDataFromHome() {
        const serverURL = "https://movies-library-production-6ce9.up.railway.app/trending"
        const resData = await axios(serverURL);
        setDataFromServer(resData.data);
    }

    useEffect(() => {
        FetchDataFromHome();
    }, [])

    return (
        <>
            <HeroSection />
            <div className="div-Home">
                <MovieList data={dataFromServer} FetchDataFromHome={FetchDataFromHome} type="Home"/>
            </div>
        </>

    );
}

export default Home;