import React, {useState} from "react";

import axios from "axios";

const JoinBlock = ({onLogin}) => {
    const [roomId, setRoomId] = useState("");
    const [userName, setUserName] = useState("");
    const [isLoading, setLoading] = useState(false);

    const onEnter = async () => {
        if (!roomId || !userName) {
            return alert("Заполните все поля")
        }
        const obj = {
            roomId,
            userName,
        }
        setLoading(true);
        await axios.post("/rooms", obj);
        onLogin(obj);
    };
    return (
        <div className="join-block">
            <input type="text" placeholder="Room ID"
                   value={roomId} onChange={e => setRoomId(e.target.value)}/>
            <input type="text" placeholder="Your name"
                   value={userName} onChange={e => setUserName(e.target.value)}/>
            <button disabled={isLoading} onClick={onEnter} className="btn btn-success">
                {isLoading ? "ВХОД..." : "ВОЙТИ"}
            </button>
        </div>
    )
};

export default JoinBlock;