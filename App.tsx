import { GluestackUIProvider, Text, config } from '@gluestack-ui/themed';
import { SafeAreaView } from 'react-native';
import Home from './src/components/Home/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/components/WelcomeScreen/WelcomeScreen';

export default function App() {
    const Stack = createNativeStackNavigator()

    return (
        <GluestackUIProvider config={config.theme}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </GluestackUIProvider>
    );
}


