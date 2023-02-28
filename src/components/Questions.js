import React from "react";

let teste = [
    {
        name: "teste"
    },
    {
        name: "teste2"
    }
]



const Questions = ({ name }) => {
    return (
        <div className="question-content">
            {teste.map(res => {
                return (
                    <div className="questions-list">
                        {res.name}
                    </div>
                )
            })}

        </div>




    )
}

export default Questions;