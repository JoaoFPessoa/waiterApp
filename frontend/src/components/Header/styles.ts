import styled from "styled-components";

export const Container = styled.header`
  background: #d73035;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 198px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: #fff;
    font-size: 32px;
    margin-bottom: 6px;
  }
  h2 {
    color: #fff;
    font-weight: 400;
    opacity: 0.9;
    font-size: 16px;
  }
`;
