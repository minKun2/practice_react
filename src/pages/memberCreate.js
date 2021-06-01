import React from "react";

function createMember({ name, address, phoneNm, onChange, onCreate }) {
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        address="address"
        placeholder="주소"
        onChange={onChange}
        value={address}
      />
      <input
        phoneNm="phoneNm"
        placeholder="전화번호"
        onChange={onChange}
        value={phoneNm}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default createMember;
