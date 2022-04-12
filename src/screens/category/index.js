import React, {useEffect} from 'react';

import {View, FlatList} from 'react-native';
import {styles} from './styles';
import {useSelector, connect, useDispatch} from 'react-redux';
import {PRODUCTS} from '../../constants/products';
import {
  filteredProducts,
  selectProduct,
} from '../../store/actions/product.action';

import CategoryProducts from '../../components/molecules/category-products';

const Category = ({navigation, route}) => {
  const dispatch = useDispatch();
  const categoryProduct = useSelector(state => state.products.filteredProducts);
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory,
  );
  //const selectedCategory = PRODUCTS.filter(product => product.category === id);
  const handleSelectCategory = product => {
    dispatch(selectProduct(product.id));
    navigation.navigate('Product', {name: product.name});
  };
  const renderItem = ({item}) => (
    <View style={styles.viewContainer}>
      <CategoryProducts item={item} onSelected={handleSelectCategory} />
    </View>
  );

  useEffect(() => {
    dispatch(filteredProducts(selectedCategory.id));
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={categoryProduct}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default connect()(Category);
