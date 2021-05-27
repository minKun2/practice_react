import React, { useState } from "react";

const Count = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        카운터 값 : <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>1 증가</button>
      <button onClick={() => setValue(value - 1)}>1 감소</button>
    </div>
  );
};

export default Count;
