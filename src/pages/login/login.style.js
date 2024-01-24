import loginBg from "../../assets/Images/login_bg_img.png";
import styled from "styled-components";

export const SigninContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  background: url(${loginBg}) no-repeat center;
  background-size: cover;
  .form {
    width: 90%;
  }
`;
export const FormWrapper = styled.div`
  min-width: 30%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  .floating-input {
    font-size: 14px;
    padding: 12px 10px;
    display: block;
    width: 100%;
    height: 35px;
    background-color: transparent;
    border-radius: 3px;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  .floating-pass {
    padding: 7px 10px;
    border-radius: 3px;
  }
`;
export const Heading = styled.h1`
  font-weight: 700;
  margin-bottom: 1em;
  font-size: x-large;
`;
export const InputWrapper = styled.div`
  display: flex;
  padding: 1rem 0rem;
`;
export const ButtonWrapper = styled.div`
  margin: 0.6rem 0;
`;
