import { useState } from "react";

const Project = () => {
    return(
        <div>
            <h1>실습</h1>
            <img src="https://i.pinimg.com/736x/b8/87/8c/b8878cf79847387ac9f63a1c3f967669.jpg" 
                 alt="sad_cat" 
                 style={{width: '400px', height: '400px' }}
                 />
                 <h1>사용자 정보 입력</h1>
                 <p>이름</p>
                 <input type="text"
                        placeholder="이름을 입력하세요" />
                <p>나이</p>
                <input type="text" 
                        placeholder="나이를 입력하세요"/>
                <button>사용자 추가</button>
        </div>
    )
}
export default Project