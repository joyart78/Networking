import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import axios from 'axios';
import WeatherTable from './components/WeatherApp';

const App = () => {
    const [weatherData, setWeatherData] = useState({});

    const getWeatherData = async () => {
        const response = await axios.get('https://weather.yandex.ru/api/v1/forecast?lat=55.751574&lon=37.6173&lang=ru_RU', {
            headers: {
                'Authorization': 'cea388bb-4db9-4937-88e4-b01ea4ffd8ad'
            }
        });
        const data = response.data.forecasts[0];
        setWeatherData(data);
    };

    useEffect(() => {
        getWeatherData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Прогноз погоды</Text>
            <WeatherTable weatherData={weatherData} />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    table: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    value: {
        fontSize: 16,
    },
});