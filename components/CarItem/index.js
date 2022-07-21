import React from "react";
import { ImageBackground, Text, View } from 'react-native';
import styles from './style';
import StyledButton from '../StyledButton/index';

const CarItem = ({ name, tagLine, tagLineCTA, Image }) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={Image} style={styles.BackgroundImage} />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>
                    {tagLine}
                    <Text style={styles.tagLineCTA}>
                        {tagLineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
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