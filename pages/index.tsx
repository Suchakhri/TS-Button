import React from "react";
import { Login_Empty } from "../components/layouts/Login_Empty.styled";
import { Phone } from "../components/layouts/Phone.styled";
import { Secondary_Button } from "../components/layouts/Secondary_Button.styled";
import { Primary_Button } from "../components/layouts/Primary_Button.styled";
import { Tertiary_Button } from "../components/layouts/Tertiary_Button.styled";
import { Line21 } from "../components/layouts/Login_Empty.styled";
import { Primary_Text } from "../components/layouts/Primary_Button.styled";
import { Frame454 } from "../components/layouts/Frame454.styled";
import { Component31 } from "../components/layouts/Component31.styled";
import { Component32 } from "../components/layouts/Component32.styled";
import { Welcome } from "../components/layouts/Welcome.styled";
import { Copyright } from "../components/layouts/Copyrights.styled";
const index = () => {
  return (
    <Login_Empty>
      <Phone></Phone>
      <Secondary_Button>LOGIN WITH WALLET</Secondary_Button>
      <Primary_Button>LOGIN</Primary_Button>
      <Tertiary_Button>REGISTRATION</Tertiary_Button>
      <Line21></Line21>
      <Primary_Text>Forgot Password?</Primary_Text>
      <Frame454>Remember Username and Password.</Frame454>
      <Component31>Username/Email</Component31>
      <Component32>Password</Component32>
      <Welcome>Welcome 👋</Welcome>
      <Copyright>© 2022 AAA. All rights reserved.</Copyright>
    </Login_Empty>
  );
};

export default index;
