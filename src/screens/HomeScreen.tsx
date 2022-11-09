import {StyleSheet, ScrollView, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Product from '../components/Product';

const HomeScreen = () => {
  useEffect(() => {
    fetch('https://upayments-studycase-api.herokuapp.com/api/products', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlkcmlzYXR0YXJAbGl2ZS5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vRWx1bmlyIiwiaWF0IjoxNjY4MDAwMTEyLCJleHAiOjE2Njg0MzIxMTJ9.IolNrApta2WqBa0otDkXl9mAo1TFyoWv5A8BD3Odt40',
      },
    })
      .then(data => data.json())
      .then(console.log);
  }, []);

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
