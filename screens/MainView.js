import React from "react";
import { 
    View,
    SafeAreaView,
    StyleSheet,
    TextInput,
    Image,
    Pressable,
    Text
} from "react-native";
import {styles} from '../assets/styles'
import {Avatar} from 'react-native-elements';

const MainView = () => {
    const [text, onChangeText] = React.useState("Search Bar");
    const rippleConfig = {
        color : 'yellow',
        radius : 50,
        borderless : true,
    };
    const onPressIn = () => {console.log('Press In')};
    const onPressOut = () => {console.log('Press Out')};
    const onPress = () => {console.log('Press')}
    return (
        <SafeAreaView style = {styles.mainViewContainer}>
            <View style = {styles.mainViewHeaderContainer}>
                <View style = {styles.mainViewTextInputContainer}>
                    <TextInput
                        style = {styles.mainViewTextInput}
                        onChangeText = {onChangeText}
                        value = {text}
                    />
                    <Pressable 
                        style = {styles.mainViewTextInputIconContainer}
                        onPressIn = {onPressIn}
                        onPressOut = {onPressOut}
                        onPress = {onPress}
                        android_ripple = {rippleConfig}
                    >                    
                        <Image 
                            source = {require('../assets/icons/search.png')}
                        />
                    </Pressable>
                </View>
                <Pressable 
                    style = {styles.mainViewUserAvatarContainer}
                    android_ripple = {rippleConfig}
                >
                    <Avatar
                        rounded
                        title = 'SS'
                    />  
                </Pressable>
            </View>
            <View style = {styles.mainViewGreetingContainer}>
                <Text 
                    adjustsFontSizeToFit ={true}
                    style = {styles.mainViewGreeting}
                >Hello, Shreyas</Text>
            </View>
        </SafeAreaView>
    );
};


export default MainView;
