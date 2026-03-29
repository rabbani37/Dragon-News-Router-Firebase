import axios from "axios";
import { NewsContext } from "./CreateContext";
import { useEffect, useState } from "react";


const NewsContextComponent = ({ children }) => {

    const [newses, setNewses] = useState([]);


    const newsDataLoad = async () => {
        const res = await axios.get("/news.json");
        setNewses(res.data)
    };

    useEffect(() => {
        newsDataLoad();
        
    }, [])

    const newsINFO = {
        newses,
       
    };

    return (
        <NewsContext.Provider value={newsINFO}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsContextComponent;