import React from 'react';
import MainView from './screens/MainView';
import ListView from './screens/ListView';
import FormView from './screens/FormView';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions = {{ 
                    headerShown: false,
                    tabBarStyle : {
                        backgroundColor : '#ffffff',
                        borderRadius : 30,
                    }}
                }
            >
                <Tab.Screen name="Home" component={MainView} />
                <Tab.Screen name="Form" component={FormView} />
                <Tab.Screen name="List" component={ListView} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
