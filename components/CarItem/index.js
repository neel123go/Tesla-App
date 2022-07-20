import React from "react";
import { ImageBackground, Text, View } from 'react-native';
import StyledButton from "../StyledButton";
import styles from "./Style";

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelS.jpeg')} style={styles.BackgroundImage} />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subTitle}>Starting at $69,420</Text>
            </View>

            <View style={{
                position: 'absolute',
                bottom: 50,
                width: '100%'
            }}>
                <StyledButton
                    type="primary"
                    content="Custom Order"
                    onPress={() => {
                        console.warn('Custom Order button was pressed');
                    }}
                />
                <StyledButton
                    type="secondary"
                    content="Existing Inventory"
                    onPress={() => {
                        console.warn('Existing Inventory button was pressed');
                    }}
                />
            </View>

        </View>
    );
};

export default CarItem;