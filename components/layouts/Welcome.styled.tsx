import styled from "styled-components";
const Text = styled.p`
  /* Welcome 👋 */

  position: absolute;
  width: 205px;
  height: 34px;
  left: 795px;
  top: 180px;

  /* VeryLargeTitle */

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  /* or 112% */

  letter-spacing: 0.0025em;

  color: #14142b;
`;

const Text_gradient = styled.p`
  /* Welcome 👋 */

  position: absolute;
  width: 205px;
  height: 34px;
  left: 795px;
  top: 180px;

  /* VeryLargeTitle */

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  /* or 112% */

  letter-spacing: 0.0025em;

  background: linear-gradient(to right, #30cfd0, #c43ad6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 80px rgb(192 219 255 / 35%), 0 0 32px rgb(65 120 255 / 24%);
`;

interface Props {
  children?: string;
}

export const Welcome: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Text>{children}</Text>
    </>
  );
};

export const Welcome_gradient: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Text_gradient>{children}</Text_gradient>
    </>
  );
};
