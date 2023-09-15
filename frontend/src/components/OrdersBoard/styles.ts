import { styled } from "styled-components";

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  header {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  button {
    border-radius: 8px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    background: #fff;
    height: 128px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    strong {
      font-weight: 500;
    }
    span {
      font-size: 14px;
      color: #666;
    }
    & + button {
      margin-top: 24px;
    }
  }
`;
