import React from "react";

function Member({ member }) {
  return (
    <div>
      <b>{member.membername}</b> <span>({member.memberaddress})</span>{" "}
      <span>({member.memberphoneNm})</span>
    </div>
  );
}

function MemberList() {
  const member = [
    {
      no: 1,
      membername: "김민재",
      memberaddress: "경기도",
      memberphoneNm: "01062718610",
    },
    {
      no: 2,
      membername: "홍길동",
      memberaddress: "서울특별시",
      memberphoneNm: "01022222222",
    },
    {
      no: 3,
      membername: "고길동",
      memberaddress: "인천광역시",
      memberphoneNm: "01033333333",
    },
  ];

  //   return (
  //     <div>
  //       <member member={member[0]} />
  //       <member member={member[1]} />
  //       <member member={member[2]} />
  //     </div>
  //   );
  // }

  return (
    <div>
      {member.map((member, index) => (
        <member member={member} key={index} />
      ))}
    </div>
  );
}

export default MemberList;
