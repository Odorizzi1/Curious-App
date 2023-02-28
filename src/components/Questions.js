import React from "react";

let teste = [
    {
        name: "teste"
    },
    {
        name: "teste2"
    },
    {
        name: "teste3"
    },
    {
        name: "teste4"
    }, {
        name: "teste5"
    },
    {
        name: "teste6"
    }, {
        name: "teste7"
    },
    {
        name: "teste8"
    }, {
        name: "teste9"
    },
    {
        name: "teste10"
    }, {
        name: "teste11"
    },
    {
        name: "teste12"
    },
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