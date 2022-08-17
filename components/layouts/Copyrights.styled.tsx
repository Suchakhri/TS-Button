import styled from "styled-components";
const Text = styled.p`
  position: absolute;
  width: 211px;
  height: 24px;
  left: 625px;
  top: 976px;

  /* Subtitle2 */

  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  color: #8395a7;
`;

interface Props {
  children?: string;
}

export const Copyright: React.FC<Props> = ({ children }) => {
  return <Text>{children}</Text>;
};
