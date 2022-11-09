import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SectionList,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Product from '../components/Product';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [products, setProducts] = useState();

  const {navigate} = useNavigation();

  useEffect(() => {
    const subscribe = fetch(
      'https://upayments-studycase-api.herokuapp.com/api/products',
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlkcmlzLmF0dGFyQG5lb3NvZnRtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9FbHVuaXIiLCJpYXQiOjE2NjgwMTA2MTEsImV4cCI6MTY2ODQ0MjYxMX0.PtSJFopSu924weF5p3GsbDGclyOYF94iqSf1MWAthZM',
        },
      },
    )
      .then(res => res.json())
      .then(api => {
        if (api.message === 'Success') {
          setProducts(api.products);
        }
      });
    return () => {
      subscribe;
    };
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
      <View>
        <View style={styles.productContainer}>
          {/* <View>
            <Text>asdasd</Text>
            <Product />
          </View> */}
          <FlatList
            data={products}
            contentContainerStyle={styles.productContainerList}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({item}) => <Product data={item} />}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigate('CreateProduct')}>
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  productContainer: {
    justifyContent: 'space-between',
  },
  productContainerList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
  },
  footer: {
    bottom: 40,
    right: 20,
    position: 'absolute',
  },
  fab: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    color: 'black',
    fontSize: 28,
  },
});
