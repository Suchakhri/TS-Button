import styled from "styled-components";
const Input = styled.input`
  /* Component 31 */


  position: absolute;
  width: 325px;
  height: 64px;
  left: 791px;
  top: 262px;


  background: #FFFFFF;
  border-radius: 16px;
  border: 0px solid;

  &::placeholder {
    /* Phone number */


    position: absolute;
    width: 124px;
    height: 24px;
    left: 24px;
    top: 20px;

    /* Body1 */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;

    color: #C8D6E5;
`;

const Close = styled.div`
  /* Close */

  position: absolute;
  visibility: hidden;
  width: 20px;
  height: 20px;
  right: 24px;
  top: 22px;

  
  }
`;

const Vector4 = styled.div`
  /* Vector 4 */

  position: absolute;
  left: 25%;
  right: 75%;
  top: 25%;
  bottom: -0.27%;

  /* Primary/Black/500 */

  border: 2px solid #14142b;
  transform: rotate(-45deg);
`;
const Vector5 = styled.div`
  /* Vector 5 */

  position: absolute;
  left: 25%;
  right: 75%;
  top: 78.23%;
  bottom: -53.5%;

  /* Primary/Black/500 */

  border: 2px solid #14142b;
  transform: rotate(-135deg);
`;

interface Props {
  children?: string;
}

export const Component31: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Input placeholder={children}></Input>
    </>
  );
};
