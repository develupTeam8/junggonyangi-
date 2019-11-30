import React from "react";
import styled from "styled-components";
import logo from "../../images/XMLID_312__2019-11-30/XMLID_312_.png";

const NavBarCotainer = styled.header`
  width: 100%;
  height: 66px;
  background-color: #fde827;
  opacity: 0.9;
`;
const NavBarItemContainer = styled.div`
  position: relative;
  width: 1050px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const LogoItem = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: white;
  background-image: url(${props => props.logo});
  background-size: contain;
  box-sizing: content-box;
`;
const Tilte = styled.div`
  display: inline-block;
  margin-left: 14px;

  span {
    font-family: Lato, sans-serif;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.39;
    letter-spacing: normal;
    color: #534d4d;
  }
`;

const LoginLogOut = styled.div`
  position: absolute;
  cursor: pointer;
  right: 0;
  span {
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.39;
    letter-spacing: normal;

    color: #534d4d;
  }
`;

function NavBar() {
  return (
    <NavBarCotainer>
      <NavBarItemContainer>
        <LogoItem logo={logo} />
        <Tilte>
          <span>중고양이</span>
        </Tilte>
        <LoginLogOut>
          <span>로그인</span>
        </LoginLogOut>
      </NavBarItemContainer>
    </NavBarCotainer>
  );
}

export default NavBar;