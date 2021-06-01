import React from "react";
import { withRouter } from "react-router-dom";

class mainPage extends React.Component {
  gocreatePage = () => {
    this.props.history.push("./createMember");
  };
  godeletePage = () => {
    this.props.history.push("./deleteMember");
  };
  goupdatePage = () => {
    this.props.history.push("./updateMember");
  };
  gosearchPage = () => {
    this.props.history.push("./searchMember");
  };
  render() {
    return (
      <>
        <div>메인페이지</div>
        <div>
          <button onClick={this.gocreatePage}>회원정보 생성</button>
          <button onClick={this.godeletePage}>회원정보 삭제</button>
          <button onClick={this.goupdatePage}>회원정보 수정</button>
          <button onClick={this.gosearchPage}>회원정보 검색</button>
        </div>
      </>
    );
  }
}

export default withRouter(mainPage);
