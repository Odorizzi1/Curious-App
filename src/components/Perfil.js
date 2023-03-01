import React, { useEffect, useState } from "react";
import axios from "axios";

const Perfil = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        list()
    }, [])

    function list() {
        return axios.get("https://curiouscat.live/api/v2.1/profile?username=zanfranceschi").then(res => {
            setData(res.data)
            console.log(res.data)
        })
    }

    return (
        <div>
            <img style={{borderRadius:"50%"}} src={data.avatar}></img>
        </div>
    )
}

export default Perfil;