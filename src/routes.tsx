import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { OccurrencesMap } from "./screens/OccurrencesMap";
import OccurrenceDetails from "./pages/OccurrenceDetails";
import { SelectMapPosition } from "./screens/SelectMapPosition";
import OccurrenceData from "./pages/CreateOccurrence/OccurrenceData";
import { MapPositionProvider } from "./components/context/mapPositionContext";

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

                <Screen
                    name="SelectMapPosition"
                    component={SelectMapPosition}
                />

                <Screen
                    name="OccurrenceData"
                    component={OccurrenceData}
                />
            </Navigator>
        </NavigationContainer>
    );
}