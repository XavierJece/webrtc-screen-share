import React from "react";
import { v1 as uuid } from "uuid";
import "./style.css";

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <main className="home">
            <button onClick={create}>Share Screen</button>
        </main>
    );
};

export default CreateRoom;
