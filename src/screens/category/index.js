import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './styles';
import {PRODUCTS} from '../../constants/products';

import CategoryProducts from '../../components/molecules/category-products';

const Category = ({navigation, route}) => {
  const {id} = route.params;
  const selectedCategory = PRODUCTS.filter(product => product.category === id);
  const handleSelectCategory = product => {
    navigation.navigate('Product', {product, name: product.name});
  };
  const renderItem = ({item}) => (
    <CategoryProducts item={item} onSelected={handleSelectCategory} />
  );

  return (
      <View style={styles.container}>
        <FlatList
          data={selectedCategory}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
  );
};

export default Category;
