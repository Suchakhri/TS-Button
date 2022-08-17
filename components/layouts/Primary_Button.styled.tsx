import styled from "styled-components";
import React from "react";
const Button = styled.div`
  /* Button */

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
  top: 514px;

  /* Purple/300 */

  background: #5f2eea;
  border-radius: 16px;
`;
const Button2 = styled.div`
  /* Button */

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
  top: 514px;

  /* Purple/300 */

  background-image: linear-gradient(to right, rgb(1 134 218), rgb(182 49 167));
  border: 0;
  border-radius: 16px;
  &:hover {
    box-shadow: rgba(111, 76, 255, 0.5) 0px 0px 20px 0px;
  }
`;

const Text = styled.p`
  /* Button */

  width: 43px;
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

  /* White */

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Text_primary = styled.p`
  /* Forgot Password? */

  position: absolute;
  left: 62.22%;
  right: 28.33%;
  top: 57.62%;
  bottom: 40.23%;

  /* Button */

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  display: flex;
  align-items: center;

  /* Purple/300 */

  color: #5f2eea;
`;
interface Props {
  children?: string;
}

export const Primary_Button: React.FC<Props> = ({ children }) => {
  return (
    <Button>
      <Text>{children}</Text>
    </Button>
  );
};

export const Primary_Text: React.FC<Props> = ({ children }) => {
  return <Text_primary>{children}</Text_primary>;
};

export const Gradient_Button: React.FC<Props> = ({ children }) => {
  return (
    <Button2>
      <Text>{children}</Text>
    </Button2>
  );
};
