import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { ProductsContext } from '../context/ProductsContext';

const ProductDetails = ({ route }) => {
  const { product } = route.params;
  const { addToCart } = useContext(ProductsContext);
  const [quantity, setQuantity] = useState(0);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      const productWithQuantity = { ...product, quantity };
      for (let i = 0; i < quantity; i++) {
        addToCart(productWithQuantity);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.price}>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
        <Text style={styles.name}>{product.name}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={handleDecreaseQuantity}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={handleIncreaseQuantity}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonAddBag} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: '88%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  detailsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 35,
    paddingBottom: 35,
    width: '80%',
    alignItems: 'center',
  },
  name: {
    color: "#aa7ec5",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  quantityButton: {
    backgroundColor: '#aa7ec5',
    borderRadius: 5,
    padding: 5,
  },
  quantityButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  buttonAddBag: {
    backgroundColor: '#8289c4',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProductDetails;


