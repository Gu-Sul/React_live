import { useState } from "react";
import Child from "./child.jsx";
const Parent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isMarried, setIsMarried] = useState(false);

    
  const [form, setForm] = useState(
    [
        {
            name: "",
            age: 0,
            isMarried: false,
        },
    ]);

  const handleAdd = () => {
    setForm([
        ...form,
    {
      name: name,
      age: age,
      isMarried: isMarried,
    }]);
  };

  return (
    <div style={{ border: "1px solid green", padding: "10px" }}>
      <p>이름</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>나이</p>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p>결혼 여부</p>
      <input
        type="checkbox"
        checked={isMarried}
        onChange={(e) => setIsMarried(e.target.checked)}
      />

      <button onClick={handleAdd}>추가</button>
      
      {form.map((form) =>(
        <Child key= {form} name={form.name} age={form.age} isMarried={form.isMarried} />
      
      ))}  
        
    </div>
  );
};

export default Parent;
