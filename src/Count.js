import React, { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  //   const changeValue = (num) => {
  //     setCount(count + 1);

  //     num === 1 ? setValue(value + 1) : setValue(value - 1);
  //   };

  useEffect(() => {
    setCount(count + 1);
  }, [value]);

  console.log("count", count);
  console.log("value", value);

  return (
    <div>
      <p>
        카운터 값 : <b>{value}</b>
        클릭 횟수 : <b>{count}</b>
      </p>
      <button onClick={() => setValue(value + 1)}> 1 증가</button>
      <button onClick={() => setValue(value - 1)}> 1 감소</button>
    </div>
  );
};

export default Count;

// const Count = () => {
//     const [count, setCount] = useState(0);
//     const [value, setValue] = useState(0);

//     const changeValue = (num) => {
//       setCount(count + 1);

//       num === 1 ? setValue(value + 1) : setValue(value - 1);
//     };

//     return (
//       <div>
//         <p>
//           카운터 값 : <b>{value}</b>
//           클릭 횟수 : <b>{count}</b>
//         </p>
//         <button onClick={() => changeValue(1)}> 1 증가</button>
//         <button onClick={() => changeValue(2)}> 1 감소</button>
//       </div>
//     );
//   };
