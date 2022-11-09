import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.productContainer}>
        <Product />
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
