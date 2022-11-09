import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import Product from '../components/Product';

const HomeScreen = () => {
  const data = [
    {id: 1, title: 'Apple'},
    {id: 2, title: 'Samsung'},
    {id: 3, title: 'Sony'},
    {id: 4, title: 'Nokia'},
    {id: 5, title: 'HTC'},
    {id: 6, title: 'LG'},
  ];

  return (
    <ScrollView>
      <View style={styles.productContainer}>
        <View>
          <Text>asdasd</Text>
          <Product />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    justifyContent: 'space-between',
  },
});
