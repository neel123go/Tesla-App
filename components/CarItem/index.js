import React from "react";
import { ImageBackground, Text, View } from 'react-native';
import styles from "./Style";

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelS.jpeg')} style={styles.BackgroundImage} />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subTitle}>Starting at $69,420</Text>
            </View>
        </View>
    );
};

export default CarItem;