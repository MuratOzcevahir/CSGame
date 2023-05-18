import React, { useReducer } from 'react'

import { obj, obj2 } from './TESTOBJGET';

function ChangeColorSize(state, action) {

    if (action === "change") {
        obj.size += 25;
        console.log(obj)
        return { obj }
    }
    if (action === "change2") {
        obj.amount += 1;
        console.log(obj)
        return { obj }
    }
    if (action === "change3") {
        obj2.testObj.amount += 0.1;
        obj2.testObj.size += 3;
        console.log(obj2)
        return { obj2 }
    }
}

function TEST() {
    const [state, dispatch] = useReducer(ChangeColorSize, obj)

    return (
        <div>

            <button type="button" onClick={() => {
                dispatch("change")

            }}>
                ÇEync
            </button>
            <button type="button" onClick={() => {
                dispatch("change2")

            }}>
                Çeync2
            </button>
            <button type="button" onClick={() => {
                dispatch("change3")

            }}>
                Çeync3
            </button>
            <br></br>
            obj1
            <hr></hr>
            {obj.size}<br></br>

            {obj.amount}
            <hr></hr>
            <br></br>
            obj2
            <hr></hr>
            {obj2.testObj.size} <br></br>
            {obj2.testObj.amount}

        </div>
    )
}

export default TEST