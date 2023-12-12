import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"

import Main from "./components/Main";
import CurrencyConverter from "./components/CurrencyConverter";
import NumberFacts from "./components/NumberFacts";
import FoodFacts from "./components/FoodFacts";


const Stack = createStackNavigator();

export default function Navigate() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TodoActionsScreen">
                <Stack.Screen name="Main" component={Main}/>
                <Stack.Screen name="Currency" component={CurrencyConverter}/>
                <Stack.Screen name="Facts" component={NumberFacts} />
                <Stack.Screen name="Food" component={FoodFacts} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}