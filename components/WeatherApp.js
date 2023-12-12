// WeatherApp.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const API_KEY = 'cea388bb-4db9-4937-88e4-b01ea4ffd8ad';
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const API_URL = 'https://api.weather.yandex.ru/v2/forecast?&limit=1&hours=false&lang=ru_RU&lat=61.00318&lon=69.01865';

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(CORS_PROXY + API_URL, {
                headers: {
                    'X-Yandex-API-Key': API_KEY,
                },
            });
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('No response received. Request:', error.request);
            } else {
                console.error('Error setting up the request:', error.message);
            }
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Погода в Ханты-Мансийске</Text>
            <TextInput
                style={styles.input}
                placeholder="Введите город"
                value={city}
                onChangeText={(text) => setCity(text)}
            />
            <Button title="Получить прогноз" onPress={fetchWeatherData} />

            {weatherData && (
                <View style={styles.weatherContainer}>
                    <Text>Температура: {weatherData.fact.temp}°C</Text>
                    <Text>Описание: {weatherData.fact.condition}</Text>
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
    },
    header: {
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    weatherContainer: {
        marginTop: 20,
    },
});

export default WeatherApp;
