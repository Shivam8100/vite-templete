import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  /* height: 50px; */
  justify-content: space-between;
  align-items: center;
  background-color: #ffff;

  .title {
    font-size: 20px;
    color: #878b90;
    font-weight: 500;
    margin-left: 1rem;
  }
  .header_content {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .logo {
    width: 130px;
    object-fit: contain;
  }
`;
