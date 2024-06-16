import React, { useContext } from 'react';
import { FlatList, View, Text } from 'react-native';
import { ProductsContext } from '../context/ProductsContext';
import CartItem from '../components/CartItem';

const CartScreen = () => {
  const { cart } = useContext(ProductsContext);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartItem product={item} />}
        keyExtractor={item => item.id.toString()}
      />
      <View style={{ borderBottomColor: '#b2b2b2', borderBottomWidth: 1 }}></View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
        <View style={{ alignItems: 'flex-start', padding: 10 }}>
          <Text>Total: R${totalPrice.toFixed(2)}</Text>
        </View>
        <View style={{ alignItems: 'flex-end', padding: 10 }}>
          <Text style={{
            color: "rgb(255 255 255)", fontSize: 12, textAlign: 'center', padding: "6px", backgroundColor: "#8289c4", borderRadius: ".5rem",
          }}>Carrinho</Text>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

