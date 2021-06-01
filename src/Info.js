// import React, { useEffect, useRef, useState } from "react";
// import { initialValue } from "./mockData";

// const Info = () => {
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [phoneNm, setPhoneNm] = useState("");
//   const [card, setCard] = useState({
//     name: "",
//     address: "",
//     phoneNm: "",
//   }); //저장되는 카드 단건
//   const inputRef = useRef(null);
//   const inputRef2 = useRef(null);
//   const inputRef3 = useRef(null);
//   const [cardList, setCardList] = useState([]); //카드 리스트 배열
//   const [count, setCount] = useState(0); //입력한 횟수 카운트
//   const [cardCount, setCardCount] = useState(0); //카드 개수 카운트

//   const onChangeValue = (e) => {
//     if (e.target.id === "name") {
//       setName(e.target.value);
//     } else if (e.target.id === "address") {
//       setAddress(e.target.value);
//     } else {
//       setPhoneNm(e.target.value);
//     }
//   };

//   const changeValueNo = (e, num) => {
//     if (num === 0) {
//       setName(e.target.value);
//     } else if (num === 1) {
//       setAddress(e.target.value);
//     } else {
//       setPhoneNm(e.target.value);
//     }
//   };

//   const onClickConfirm = () => {
//     if (!name) {
//       alert("이름을 입력해주세요");
//       //inputref
//       inputRef.current.focus();
//     } else if (!address) {
//       alert("주소를 입력해주세요");
//       inputRef2.current.focus();
//     } else if (!phoneNm) {
//       alert("전화번호를 입력해주세요");
//       inputRef3.current.focus();
//     }

//     if (name && address && phoneNm) {
//       const newCardList = cardList.concat([
//         {
//           no: cardList.length,
//           name: name,
//           address: address,
//           phoneNm: phoneNm,
//         },
//       ]);
//       setCardList(newCardList);
//       newCardList = {}
//     }

//   }

//   const handleRemove = (name) = {

//   }

//     // name &&
//     //   address &&
//     //   phoneNm &&
//     //   setCard({
//     //     name: name,
//     //     address: address,
//     //     phoneNm: phoneNm,
//     //   });
//   };
//   //초기진입시
//   useEffect(() => {
//     // setCard(initialValue);  //객체{}일때
//     setCardList(initialValue); //배열[]일때
//   }, []);

//   useEffect(() => {
//     setCardCount(cardCount + 1);
//   }, [cardList.length]);

//   useEffect(() => {
//     !!card.name && setCount(count + 1);
//   }, [card.name]);

//   //   const onChangeName = (e) => {
//   //     setName(e.target.value);
//   //   };
//   //   const onChangeAdress = (e) => {
//   //     setAdress(e.target.value);
//   //   };
//   //   const onChangePhoneNm = (e) => {
//   //     setPhoneNm(e.target.value);
//   //   };

//   return (
//     <div>
//       <div>
//         <input
//           value={name}
//           ref={inputRef}
//           placeholder="성함을 입력해주세요."
//           onChange={(e) => changeValueNo(e, 0)}
//         />
//         <input
//           value={address}
//           ref={inputRef2}
//           placeholder="주소를 입력해주세요."
//           onChange={(e) => changeValueNo(e, 1)}
//         />
//         <input
//           value={phoneNm}
//           ref={inputRef3}
//           placeholder="전화번호를 입력해주세요."
//           onChange={(e) => changeValueNo(e, 2)}
//         />
//         <button onClick={onClickConfirm}>입력</button>
//       </div>
//       {cardList.length > 0 &&
//         cardList.map((item) => {
//           return (
//             <div key={item.no}>
//               {console.log("item", item.no)}
//               <div>
//                 <b>회원 번호: </b>
//                 {item.no}
//               </div>
//               <div>
//                 <b>성함 : </b>
//                 {item.name}
//               </div>
//               <div>
//                 <b>주소 : </b>
//                 {item.address}
//               </div>
//               <div>
//                 <b>핸드폰 번호 :</b>
//                 {item.phoneNm}
//               </div>
//             </div>
//           );
//         })}
//       <div>
//         <b> 총 카드수 : </b>
//         {cardCount}
//       </div>
//     </div>
//   );
// };

// export default Info;
