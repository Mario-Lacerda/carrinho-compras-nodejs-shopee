import React, { useRef, useContext } from 'react';
import { View, Text, Image, StyleSheet, PanResponder, Animated } from 'react-native';
import { ProductsContext } from '../context/ProductsContext';

const CartItem = ({ product }) => {
  const formattedSubtotal = product.subtotal.toFixed(2);
  const pan = useRef(new Animated.ValueXY()).current;
  const { removeFromCart } = useContext(ProductsContext);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: pan.x }
    ]),
    onPanResponderRelease: () => {
      if (pan.x._value > 100) {
        removeFromCart(product.id); // Remove the product from the cart
      } else {
        Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
      }
    }
  });

  const opacity = pan.x.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  return (
    <Animated.View style={[styles.container, { transform: [{ translateX: pan.x }], opacity }]} {...panResponder.panHandlers}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>Preço: R${product.price}</Text>
        <Text style={styles.quantity}>Quantidade: {product.quantity}</Text>
        <Text style={styles.subtotal}>Subtotal: R${formattedSubtotal}</Text>
      </View>
    </Animated.View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  quantity: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  subtotal: {
    fontSize: 14,
    color: '#888',
  },
});

export default CartItem;
