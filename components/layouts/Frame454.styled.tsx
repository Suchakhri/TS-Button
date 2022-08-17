import styled from "styled-components";
const Layout = styled.div`
  /* Frame 454 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 6px;

  position: absolute;
  width: 303px;
  height: 24px;
  left: 791px;
  top: 450px;
`;
const Ellipse = styled.input`
  /* Ellipse 20 */

  width: 24px;
  height: 24px;

  background: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Label = styled.label`
  /* Remember Username and Password. */

  width: 273px;
  height: 22px;

  /* Button */

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  display: flex;
  align-items: center;

  color: #576574;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

interface Props {
  children?: string;
}

export const Frame454: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Ellipse type={"radio"}></Ellipse>
      <Label>{children}</Label>
    </Layout>
  );
};
