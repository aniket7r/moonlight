import { Button } from "@mui/material";
import React from "react";
import { Route } from "react-router-dom";

function chatRoom() {
    return <button onClick={'/server/chatroom/index.js'}>Talk to Volunteers</button>
}