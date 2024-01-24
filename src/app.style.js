import styled from "styled-components";

export const AppWrapper = styled.div`
  /* background: #f1f3f6; */
`;

export const HeaderWrapper = styled.div`
  padding: 20px;
  border-radius: 0.5em;
`;

export const BodyWrapper = styled.div`
  min-height: calc(100vh - 170px);
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.02);
  box-shadow: 0px 8.6px 14.1px rgba(0, 0, 0, 0.025),
    0px 69px 113px rgba(0, 0, 0, 0.05);
`;

export const FooterWrapper = styled.div`
  footer {
    background: rgb(255, 255, 255);
    text-align: center;
    border-top: 1px solid rgb(237, 237, 237);
    font-size: 13px;
    padding: 24px 50px;
    color: rgba(0, 0, 0, 0.65);
  }
`;
