import React, { useEffect, useState } from "react";
import axios from "axios";

const Questions = ({ name }) => {

  const [data, setData] = useState([]);
  const [maxTimestamp, setMaxTimestamp] = useState(null);
  const [allData, setAllData] = useState([])
  useEffect(() => {
    list();
    propertyUsers();
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

  function propertyUsers() {
    let url = "https://curiouscat.live/api/v2.1/profile?username=zanfranceschi";
    return axios.get(url).then((res) => {
      console.log(res)
      setAllData(res.data)
    })
  }

  function handleLoadMore() {
    list();
  }

  return (
    <div className="question-content">
      {data?.map(res => {
        return (
          <div className="questions-list" key={res.id}>
            <div>
              <h3 style={{ textAlign: "initial", padding: "20px" }}>
                {res.comment}
                <div style={{ marginTop: "6px", fontSize: "11px", color: "orange", textAlign: "initial", display: "flex" }}>
                  <div style={{ color: "white" }}>Pergunta enviada por</div>&nbsp;
                  <span style={{ fontSize: "18px" }} class="material-symbols-outlined">
                    contrast_rtl_off
                  </span>
                  <div style={{ fontSize: "14px" }}>
                    {res.senderData.id ? res.senderData.id : "anônimo"}
                  </div>
                </div>
              </h3>

              <div style={{ alignItems: "center", display: "flex", gap: "20px" }}>
                <div style={{ display: "flex", padding: "20px", alignItems: "flex-start" }}>
                  <img style={{ borderRadius: "50px", width: "70px" }} src={allData.avatar} />
                  <div>
                    <div style={{ fontSize: "15px" }}> {allData.username}</div>
                    {/* <div> {}</div>  Lógica de trazer a data*/}
                  </div>
                </div>
                <div style={{ textAlign: "left", backgroundColor: "#2a2a2a", width: "37vw", height: "23vh", border: "1px solid #2a2a2a", borderRadius: "10px" }}>
                  <div style={{ fontSize: "16px", padding: "5px" }}>
                    {res.reply}
                  </div>

                </div>

              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <span style={{ display: "flex", alignItems: "center" }} class="material-symbols-outlined">
                  favorite
                  <div style={{ fontSize: "11px" }}>
                    {res.likes}

                  </div>
                </span>
                <span class="material-symbols-outlined">
                  repeat
                </span>
                <span class="material-symbols-outlined">
                  more_horiz
                </span>

              </div>

            </div>
          </div>
        );
      })}
      <button onClick={handleLoadMore}>Load more</button>
    </div>
  );
};

export default Questions;
