import React from "react";
import {Image, View, Text, Button} from "react-native";
import { styles } from "../home/styles";

const breadScreen = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/images/Panaderia.jpg')} />

        </View>
    )
}

export default breadScreen;