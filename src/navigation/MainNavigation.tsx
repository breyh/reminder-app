import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home/Home';
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';
import { useSelector } from 'react-redux';
import { IAppState } from '../store/types';

const MainNavigation = () => {
    const [initialRouteName, setInitialRouteName] = useState<string>("WelcomeScreen")
    const profile = useSelector((state: IAppState) => state.user.profile)
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            {!profile?.name ? (
                <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                </Stack.Navigator>
            ) :
                <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>}
        </NavigationContainer>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})