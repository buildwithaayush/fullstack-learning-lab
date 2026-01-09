

import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState();
  
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (ev) => {
      alert(ev.data);
    };
  }, []);
  
  function sendMessage() {
    if (!socket) {
      return;
    }
    socket.send("ping");
  }
  
  return (
    <>
      <input type="text" placeholder="Hi there" />
      <button onClick={sendMessage}>send</button>
    </>
  );
}


export default App;