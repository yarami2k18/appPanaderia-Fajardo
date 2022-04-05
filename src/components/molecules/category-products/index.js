import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';

const CategoryProducts = ({ item, onSelected }) => {
    return (    
         <View style={styles.container}>
            <TouchableOpacity 
                style={styles.touchable}
                onPress={() => onSelected(item)}    
            >
                <View style={styles.details}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
            </TouchableOpacity>
         </View>
    )
}

export default CategoryProducts;