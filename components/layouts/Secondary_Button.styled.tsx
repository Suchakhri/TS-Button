import styled, { css } from "styled-components";
import React from "react";
const Button = styled.button`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;

  position: absolute;
  width: 325px;
  height: 56px;
  left: 791px;
  top: 642px;

  border: 1px solid #222f3e;
  border-radius: 16px;
`;

const Gradient_Button = styled.button`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;

  position: absolute;
  width: 325px;
  height: 56px;
  left: 791px;
  top: 642px;
  border-radius: 16px;
  border: 2px double transparent;
  background-image: linear-gradient(rgb(13, 14, 33), rgb(13, 14, 33)),
    radial-gradient(circle at left top, rgb(1, 110, 218), rgb(217, 0, 192));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  color: rgba(256, 256, 256);

  &:hover {
    box-shadow: rgba(111, 76, 255, 0.5) 0px 0px 20px 0px;
  }
`;

const Text = styled.p`
  /* Button */

  width: full;
  height: 24px;

  /* Button */

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #222f3e;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Text2 = styled.p`
  /* Button */

  width: full;
  height: 24px;

  /* Button */

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

interface Props {
  children?: string;
}

export const Secondary_Button: React.FC<Props> = ({ children }) => {
  return (
    <Button>
      <Text>{children}</Text>
    </Button>
  );
};

export const Gradient_Border_Button: React.FC<Props> = ({ children }) => {
  return (
    <Gradient_Button>
      <Text2>{children}</Text2>
    </Gradient_Button>
  );
};
