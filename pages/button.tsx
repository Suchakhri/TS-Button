import React from "react";
import { Login_Empty } from "../components/layouts/Login_Empty.styled";
import { Phone } from "../components/layouts/Phone.styled";
import { Gradient_Border_Button } from "../components/layouts/Secondary_Button.styled";
import { Gradient_Button } from "../components/layouts/Primary_Button.styled";
import { Btn_semi_transparent } from "../components/layouts/Tertiary_Button.styled";
import { Line21 } from "../components/layouts/Login_Empty.styled";
import { Primary_Text } from "../components/layouts/Primary_Button.styled";
import { Frame454 } from "../components/layouts/Frame454.styled";
import { Component31 } from "../components/layouts/Component31.styled";
import { Component32 } from "../components/layouts/Component32.styled";
import { Welcome_gradient } from "../components/layouts/Welcome.styled";
import { Copyright } from "../components/layouts/Copyrights.styled";
const button = () => {
  return (
    <Login_Empty>
      <Phone></Phone>
      <Gradient_Border_Button>LOGIN WITH WALLET</Gradient_Border_Button>
      <Gradient_Button>LOGIN</Gradient_Button>
      <Btn_semi_transparent>REGISTRATION</Btn_semi_transparent>
      <Line21></Line21>
      <Primary_Text>Forgot Password?</Primary_Text>
      <Frame454>Remember Username and Password.</Frame454>
      <Component31>Username/Email</Component31>
      <Component32>Password</Component32>
      <Welcome_gradient>Welcome 👋</Welcome_gradient>
      <Copyright>© 2022 AAA. All rights reserved.</Copyright>
    </Login_Empty>
  );
};

export default button;
