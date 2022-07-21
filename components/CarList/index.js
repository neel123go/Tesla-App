import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';

import styles from './style';
import cars from './cars';
import CarItem from '../CarItem';

const CarList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem name={item.name} Image={item.image} tagLine={item.tagline} taglineCTA={item.taglineCTA} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
}

export default CarList;