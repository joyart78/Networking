import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const NumberFacts = () => {
    const [number, setNumber] = useState('');
    const [fact, setFact] = useState('');

    const fetchNumberFact = async () => {
        try {
            const response = await axios.get(`http://numbersapi.com/${number}`);
            setFact(response.data);
        } catch (error) {
            console.error('Error fetching number fact:', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Интересные факты о числах</Text>
            <TextInput
                style={styles.input}
                placeholder="Введите число"
                keyboardType="numeric"
                value={number}
                onChangeText={(text) => setNumber(text)}
            />
            <Button title="Получить факт" onPress={fetchNumberFact} />

            {fact !== '' && (
                <View style={styles.factContainer}>
                    <Text style={styles.factText}>{fact}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 10,
        borderRadius: 5,
    },
    factContainer: {
        marginTop: 20,
    },
    factText: {
        fontSize: 18,
    },
});

export default NumberFacts;
