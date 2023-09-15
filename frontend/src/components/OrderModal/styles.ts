import { styled } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4.5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  width: 480px;
  padding: 32px;
  flex-direction: column;
  border-radius: 8px;
  background: var(--gray-0, #fff);

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      background: transparent;
      border: 0;
      display: flex;
    }
  }
  .status-container {
    margin-top: 32px;
    width: 100%;
    small {
      font-size: 14px;
      opacity: 0.8;
    }
    div {
      margin-top: 8px;
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;
  > strong {
    opacity: 0.8;
    font-weight: 500;
    font-size: 14px;
  }
  .order-items {
    margin-top: 16px;

    .item {
      display: flex;
      & + .item {
        margin-top: 16px;
      }
      img {
        border-radius: 6px;
      }
      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }
      .product-details {
        margin-left: 4px;
        strong {
          display: block;
          margin-bottom: 4px;
        }
        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  .primary {
    border-radius: 48px;
    background: var(--gray-500, #333);
    display: flex;
    height: 44px;
    width: 100%;
    padding: 11px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    margin-top: 32px;
    color: white;
  }
  .secondary {
    color: var(--brand-red, #d73035);
    width: 100%;
    display: flex;
    padding: 14px 24px;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    margin-top: 16px;
  }
`;
