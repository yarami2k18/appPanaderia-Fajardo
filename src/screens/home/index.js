import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles'
import { useSelector, useDispatch,connect } from 'react-redux'
import CategoryGrid from '../../components/molecules/category-grid/index'
import { selectedCategory } from '../../store/actions/category.action'
import { computeWindowedRenderLimits } from 'react-native/Libraries/Lists/VirtualizeUtils'

const Home = ({ navigation  }) => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories)
    const handleSelectCategory = (category) => {
        dispatch(selectedCategory(category.id))
        navigation.navigate('Category', { name: category.name })
    }
    const renderItem = ({ item }) => <CategoryGrid item={item} onSelected={handleSelectCategory} />

    return (
        <View style={styles.container}>
            <FlatList 
                data={categories}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default connect()(Home)