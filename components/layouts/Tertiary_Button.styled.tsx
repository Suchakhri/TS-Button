import styled from "styled-components";
import React from "react";
const Button = styled.button`
  /* Button */

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
  top: 768px;

  border: 1px solid #222f3e;
  border-radius: 16px;
`;

const Button2 = styled.button`
  /* Button */

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
  top: 768px;

  background-color: rgba(111, 76, 255, 0.15);
  border: 1px solid rgba(111, 76, 255, 0.25);

  border-radius: 16px;
  &:hover {
    box-shadow: rgba(111, 76, 255, 0.5) 0px 0px 20px 0px;
  }
`;
const Text = styled.p`
  /* Button */

  width: 100px;
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

export const Tertiary_Button: React.FC<Props> = ({ children }) => {
  return (
    <Button>
      <Text>{children}</Text>
    </Button>
  );
};

export const Btn_semi_transparent: React.FC<Props> = ({ children }) => {
  return (
    <Button2>
      <Text2>{children}</Text2>
    </Button2>
  );
};
