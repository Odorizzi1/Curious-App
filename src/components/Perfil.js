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
      <img style={{ borderRadius: "50%" }} src={data.avatar}></img>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100px", marginTop: "20px", fontSize: "17px", gap: "11px" }}>
        <div>
          <span>{data.followers}</span> &nbsp;
          Seguidores

        </div>
        <div>
          <span>{data.answers}</span> &nbsp;
          Respostas
        </div>
        <div>
          <span>{data.following}</span> &nbsp;
          Seguindo
        </div>

      </div>
      <div style={{ marginTop: "40px" }}>
        <button onClick={() => console.log("button")} style={{ cursor: "pointer", color: "white", backgroundColor: "orange", borderRadius: "5px", border: "1px solid black", fontSize: "18px", width: "200px" }}>Compartilhar Perfil</button>
      </div>

    </div>
  )
}

export default Perfil;