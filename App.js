import React from 'react';
import { View, StyleSheet } from 'react-native'; // Importando o componente View e StyleSheet
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsContextProvider } from './src/context/ProductsContext.js';
import ProductsScreen from './src/screens/ProductsScreen.js';
import ProductDetails from './src/screens/ProductDetails.js';
import CartScreen from './src/screens/CartScreen.js';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Footer from './src/components/Footer.js';

const Stack = createStackNavigator();

function CartButton() {
  const navigation = useNavigation();

  return (
    <Ionicons
      name="cart"
      size={24}
      color="#000"
      style={styles.cartIcon}
      onPress={() => navigation.navigate('Cart')}
    />
  );
}

function App() {
  return (
    <ProductsContextProvider>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <Stack.Navigator>
            <Stack.Screen
              name="Products"
              component={ProductsScreen}
              options={{
                headerRight: () => <CartButton />,
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerTitle: 'Produtos',
              }}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerTitle: 'Detalhes do produto',
              }}
            />
            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerTitle: 'Carrinho'
              }}
            />
          </Stack.Navigator>
          <Footer />
        </View>
      </NavigationContainer>
    </ProductsContextProvider>
  );
}
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#f5f5f5',
  },
  headerTitleStyle: {
    color: '#000',
  },
  cartIcon: {
    marginRight: 15,
  },
});

export default App;
