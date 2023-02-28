import React, { useEffect, useState } from "react";
import axios from "axios";

const Questions = ({ name }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        list()
    }, [])

    function list() {
        return axios.get('https://curiouscat.live/api/v2.1/profile?username=zanfranceschi').then(res => {
            let resultData = res.data.posts;
            let resultPost = resultData.map(res => res.post)
            setData(resultPost)
        })
    }

    return (
        <div className="question-content">
            {data?.map(res => {
                return (
                    <div className="questions-list">
                        {res.comment}
                    </div>
                )
            })}
        </div>
    )
}

export default Questions;