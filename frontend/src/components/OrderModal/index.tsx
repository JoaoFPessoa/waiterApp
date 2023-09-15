import { Actions, Container, OrderDetails, Overlay } from "./styles";
import CloseIcon from "../../assets/images/close-icon.svg";
import { Order } from "../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
interface OrderModalProps {
  visible: boolean;
  closeModal: () => void;
  order: Order | null;
}

export default function OrderModal({
  visible,
  order,
  closeModal,
}: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  const totalPrice = order.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity;
  }, 0);
  return (
    <Overlay>
      <Container>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={closeModal}>
            <img src={CloseIcon} alt="Icone de fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === "WAITING"
                ? "🕑"
                : order.status === "DONE"
                ? "✅"
                : "👩‍🍳"}
            </span>
            <strong>
              {" "}
              {order.status === "WAITING"
                ? "Fila de espera"
                : order.status === "DONE"
                ? "Pronto!"
                : "Em produção"}
            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>
          <div className="order-items">
            {order.products.map(({ product, quantity, _id }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.imagePath}
                  width={"56"}
                  height={"28.51"}
                />
                <small className="quantity">{quantity}X</small>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(Number(product.price))}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <span>Total</span>
            {totalPrice && <strong>{formatCurrency(totalPrice)}</strong>}
          </div>
        </OrderDetails>
        <Actions>
          <button type="button" className="primary">
            <span>👩‍🍳</span>
            <strong>Iniciar produção</strong>
          </button>
          <button type="button" className="secondary">
            <strong>Cancelar pedido</strong>
          </button>
        </Actions>
      </Container>
    </Overlay>
  );
}
