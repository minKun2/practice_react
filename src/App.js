import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createPage from "./pages/memberCreate";
import deletePage from "./pages/memberDelete";
import updatePage from "./pages/memberUpdate";
import searchPage from "./pages/memberSearch";
import mainPage from "./pages/main";
import MemberList from "./pages/memberList";
import Count from "./Count";
import Info from "./Info";
import { render } from "@testing-library/react";
import CreateMember from "./pages/memberCreate";

function Appdata() {
  const [inputs, setinputs] = useState({
    membername: "",
    memberaddress: "",
    memberphoneNm: "",
  });
  const { name, address, phoneNm } = inputs;
  const onChagne = (e) => {
    const { name, value } = e.target;
    setinputs({
      ...inputs,
      [name]: value,
    });
  };
  const member = [
    {
      no: 1,
      name: "김민재",
      address: "경기도",
      phoneNm: "010-6271-8610",
    },
    {
      no: 2,
      name: "홍길동",
      address: "서울특별시",
      phoneNm: "010-2222-3333",
    },
    {
      no: 3,
      name: "고길동",
      address: "경기도",
      phoneNm: "010-3333-4444",
    },
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    setinputs({
      name: "",
      address: "",
      phoneNm: "",
    });
    nextId.current += 1;
  };
  return (
    <>
      <createMember
        name={name}
        address={address}
        phoneNm={phoneNm}
        onChange={onChange}
        onCreate={onCreate}
      />
      <MemberList member={member} />
    </>
  );
}

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <switch>
            <Route exact path="/" component={mainPage} />
            <Route exact path="/createMember" component={createPage} />
            <Route exact path="/deleteMember" component={deletePage} />
            <Route exact path="/updateMember" component={updatePage} />
            <Route exact path="/searchMember" component={searchPage} />
          </switch>
        </Router>
      </>
    );
  }
}
export default App;
