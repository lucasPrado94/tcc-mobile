import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import OccurrencesMap from "./pages/OccurrencesMap";
import OccurrenceDetails from "./pages/OccurrenceDetails";


export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen
                    name="OccurrencesMap"
                    component={OccurrencesMap}
                />

                <Screen
                    name="OccurrenceDetails"
                    component={OccurrenceDetails}
                />
            </Navigator>
        </NavigationContainer>
    );
}