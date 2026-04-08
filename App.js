import CartaoTarefa from "./components/CartaoTarefa";
import { View } from "react-native";

export default function App() {
  return (
    <View>
      <CartaoTarefa
        titulo="Comprar leite"
        categoria="Compras"
        prazo="2024-06-30"
        concluida={false}
      />
    </View>
  );
}
