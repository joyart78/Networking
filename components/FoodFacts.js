import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const FoodFacts = () => {
    const [product, setProduct] = useState('');
    const [foodData, setFoodData] = useState([]);

    const fetchFoodData = async () => {
        try {
            const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${product}.json`);
            if (response.data.status === 1) {
                // Product found
                setFoodData([response.data.product]);
            } else {
                // Product not found
                setFoodData([]);
            }
        } catch (error) {
            console.error('Error fetching food data:', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Информация о продукте</Text>
            <TextInput
                style={styles.input}
                placeholder="Введите штрих-код продукта"
                keyboardType="numeric"
                value={product}
                onChangeText={(text) => setProduct(text)}
            />
            <Button title="Получить информацию" onPress={fetchFoodData} />

            {foodData.length > 0 && (
                <FlatList
                    data={foodData}
                    keyExtractor={(item) => item.code}
                    renderItem={({ item }) => (
                        <View style={styles.foodItem}>
                            <Text>Название: {item.product_name}</Text>
                            <Text>Категория: {item.categories}</Text>
                            <Text>Бренд: {item.brands}</Text>
                            <Text>Страна производства: {item.countries}</Text>
                        </View>
                    )}
                />
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
    foodItem: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
    },
});

export default FoodFacts;
