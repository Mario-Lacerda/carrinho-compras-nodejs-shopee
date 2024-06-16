import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductItem = ({ product, onSelectProduct }) => (
  <TouchableOpacity onPress={onSelectProduct} style={styles.container}>
    <View>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
      </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
});

export default ProductItem;