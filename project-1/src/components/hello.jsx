import { useState } from "react";

function Hello() {
    return(
        <div>
            <input type="text"
                
                onChange={(e) => {setInputText(e.target.value)}}
                placeholder="여기에 입력해주세요." 
            />
        </div>
    )
}
export default Hello