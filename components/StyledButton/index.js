import { Pressable, Text, View } from 'react-native';
import React from 'react';
import styles from './style';

const StyledButton = ({ type, content, onPress }) => {

    const BackgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const TextColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={styles.container}>

            <Pressable style={[styles.button, { backgroundColor: BackgroundColor }]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, { color: TextColor }]}>{content}</Text>

            </Pressable>
        </View>
    )
}

export default StyledButton;