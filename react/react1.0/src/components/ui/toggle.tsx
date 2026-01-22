import { useState } from "react";

function Toggle (){
const [visible , setVisible] = useState(false);

return (
    <div>
        <button onClick={() => setVisible(!visible)}>
            Toggle Message
        </button>
        {visible && <p>This message is conditionally rendered</p>}
    </div>
)


}

export default Toggle;