
import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import HeroSection from "../TestComp/TestComp";
// import './Home.css';


function FavList() {
    const [dataFromServer, setDataFromServer] = useState([]);
    async function FetchDataList() {
        const serverURL = "https://movies-library-production-6ce9.up.railway.app/Movies"
        const resData = await axios(serverURL);
        setDataFromServer(resData.data);
    }

    useEffect(() => {
        FetchDataList();
    }, [])

    return (
        <>
            <HeroSection />
            <div className="div-Home">
                <MovieList data={dataFromServer} type="FavList" FetchDataList={FetchDataList}/>
            </div>
        </>

    );
}

export default FavList;