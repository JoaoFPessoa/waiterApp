import { orders } from "../../mocks/orders";
import OrdersBoard from "../OrdersBoard";
import { Container } from "./styles";

export default function Orders() {
  return (
    <Container>
      <OrdersBoard orders={orders} icon="🕑" title="Fila de espera" />
      <OrdersBoard orders={orders} icon="👩‍🍳" title="Em preparação" />
      <OrdersBoard orders={orders} icon="✅" title="Pronto" />
    </Container>
  );
}
