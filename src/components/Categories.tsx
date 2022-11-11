import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Categories = ({data, filterCategories, setFilterCategories}: any) => {
  return (
    <View style={styles.categories}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.name.toString().concat(item.name)}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.categoryItem,
              {
                backgroundColor:
                  filterCategories === item.name ? 'gray' : 'white',
              },
            ]}
            onPress={() => setFilterCategories(item.name)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        horizontal
        ListHeaderComponent={
          <TouchableOpacity
            style={[
              styles.categoryItem,
              {
                backgroundColor: filterCategories === '' ? 'gray' : 'white',
              },
            ]}
            onPress={() => setFilterCategories([])}>
            <Text>All</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
  },
  categoryItem: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginHorizontal: 4,
    marginVertical: 10,
    borderRadius: 100,
  },
});
