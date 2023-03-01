import React, { useEffect, useState } from "react";
import axios from "axios";

const Questions = ({ name }) => {

    const [data, setData] = useState([]);
    const [maxTimestamp, setMaxTimestamp] = useState(null);

    useEffect(() => {
        list();
    }, []);

    function list() {
        let url = "https://curiouscat.live/api/v2.1/profile?username=zanfranceschi";
        if (maxTimestamp !== null) {
            url += `&max_timestamp=${maxTimestamp}`;
        }
        return axios
            .get(url)
            .then(res => {
                let resultData = res.data.posts;
                let resultPost = resultData.map(res => res.post);
                setMaxTimestamp(resultData[resultData.length - 1].post.timestamp);
                setData(resultData => [...resultData, ...resultPost.slice(1)]); // Remove o primeiro item
            })
            .catch(error => {
                console.log(error);
            });
    }


    function handleLoadMore() {
        list();
    }

    return (
        <div className="question-content">
            {data?.map(res => {
                return (
                    <div className="questions-list" key={res.id}>
                        {res.comment}
                    </div>
                );
            })}
            <button onClick={handleLoadMore}>Load more</button>
        </div>
    );
};

export default Questions;
