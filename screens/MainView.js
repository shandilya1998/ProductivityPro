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
    const name = 'Shreyas Shandilya';
    const [text, onChangeText] = React.useState("Search Bar");
    const [size, onChangeSize] = React.useState(45);
    const rippleConfig = {
        color : 'yellow',
        radius : 50,
        borderless : true,
    };
    const onPressIn = () => {console.log('Press In')};
    const onPressOut = () => {console.log('Press Out')};
    const onPress = () => {console.log('Press')};
    const onLayout = (event) => {
        const {x, y, height, width} = event.nativeEvent.layout;
        const _size = height / 3;
        onChangeSize(_size);
    };
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
            <View 
                style = {styles.mainViewGreetingContainer}
                onLayout = {onLayout}
            >
                <Text 
                    adjustsFontSizeToFit ={true}
                    style = {[{fontSize : size}, styles.mainViewGreeting]}
                >
                    Hello,
                </Text>
                <Text
                    adjustsFontSizeToFit ={true}
                    style = {[{fontSize : size}, styles.mainViewGreeting]} 
                >
                    {name}
                </Text>
            </View>
            <View style = {styles.mainViewDailyActivityContainer}>
                <Text 
                    adjustsFontSizeToFit ={true}
                    style = {{fontSize : 30}}
                >Hello, Shreyas</Text>
            </View>
            <View style = {styles.mainViewCategoriesContainer}>
                <Text 
                    adjustsFontSizeToFit ={true}
                    style = {{fontSize : 35}}
                >Hello, Shreyas</Text>
            </View>
        </SafeAreaView>
    );
};


export default MainView;
