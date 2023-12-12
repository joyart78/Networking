import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

const CurrencyRates = ({ rates }) => {
    const [selectedCurrency, setSelectedCurrency] = useState('USD');

    const convertCurrency = (amount) => {
        const exchangeRate = rates[selectedCurrency];
        const result = amount * exchangeRate;

        return result.toFixed(2);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Текущие обменные курсы:</Text>
            <Picker
                selectedValue={selectedCurrency}
                onValueChange={(itemValue) => setSelectedCurrency(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="EUR" value="EUR" />
                <Picker.Item label="CNY" value="CNY" />
            </Picker>

            <View style={styles.exchangeRateContainer}>
                <Text style={styles.exchangeRate}>
                    1 {selectedCurrency} = {1 / rates[selectedCurrency]} RUB
                </Text>
                <Text style={styles.exchangeRate}>
                    1 RUB = {convertCurrency(1)} {selectedCurrency}
                </Text>
            </View>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    picker: {
        width: '80%',
        marginBottom: 16,
    },
    exchangeRateContainer: {
        marginTop: 16,
        alignItems: 'center',
    },
    exchangeRate: {
        fontSize: 18,
        marginBottom: 8,
    },
});

export default CurrencyRates;
