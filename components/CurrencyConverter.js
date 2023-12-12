import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import CurrencyRates from './CurrencyRates';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState('');
    const [rates, setRates] = useState({});
    const [convertedAmount, setConvertedAmount] = useState('');

    const fetchExchangeRates = async () => {
        try {
            const response = await axios.get('https://api.exchangerate-api.com/v4/latest/RUB');
            setRates(response.data.rates);
        } catch (error) {
            console.error('Error fetching exchange rates:', error.message);
        }
    };

    const convertCurrency = () => {
        const inputAmount = parseFloat(amount);
        if (isNaN(inputAmount)) {
            setConvertedAmount('Введите корректную сумму');
            return;
        }

        const selectedCurrency = 'USD';
        const exchangeRate = rates[selectedCurrency];
        const result = inputAmount * exchangeRate;

        setConvertedAmount(`${inputAmount} RUB = ${result.toFixed(2)} ${selectedCurrency}`);
    };

    useEffect(() => {
        fetchExchangeRates();
    }, []);

    return (
        <View style={styles.container}>
            {/*<Text style={styles.title}>Калькулятор валют USD</Text>*/}
            {/*<TextInput*/}
            {/*    style={styles.input}*/}
            {/*    placeholder="Введите сумму в RUB"*/}
            {/*    keyboardType="numeric"*/}
            {/*    value={amount}*/}
            {/*    onChangeText={(text) => setAmount(text)}*/}
            {/*/>*/}
            {/*<Button title="Конвертировать" onPress={convertCurrency} />*/}
            {/*<Text style={styles.convertedAmount}>{convertedAmount}</Text>*/}
            <CurrencyRates rates={rates} />
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
    input: {
        width: '80%',
        marginBottom: 16,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    convertedAmount: {
        fontSize: 18,
        marginTop: 16,
    },
});

export default CurrencyConverter;
