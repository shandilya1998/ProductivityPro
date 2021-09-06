import {Platform, StyleSheet, Dimensions, PixelRatio} from "react-native";
const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";
const PEACH = "#ffe5b4";
const NAVY_BLUE = "#000080";
const SILVER = "#C0C0C0";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#B644B2";
const DISLIKE_ACTIONS = "#363636";
const FLASH_ACTIONS = "#5028D7";

const ICON_FONT = "tinderclone";
const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export const colors = {
        black: '#1a1917',
        gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

function wp (percentage) {
  const value = (percentage * DIMENSION_WIDTH) / 100; 
  return Math.round(value);
}

const listItemmargin = ((DIMENSION_WIDTH -100)/6 - 30)/2

const itemHorizontalMargin = wp(2);
export const sliderWidth = wp(60);
export const itemWidth = sliderWidth + itemHorizontalMargin * 2; 

export const styles = StyleSheet.create({
    mainViewContainer : {
        flex : 1,
        margin : 2.5,
        padding : 2.5,
        backgroundColor : 'red'
    },
    mainViewTextInputContainer : {
        flex :1 ,
        flexDirection : 'row',
        alignItems : 'center',
        margin : 2.5,
        padding : 2.5,
        backgroundColor : 'blue'
    },
    mainViewTextInput : {
        flex : 1,
        height : 40,
        margin: 2.5,
        borderWidth: 1,
        padding: 2.5,
        color : 'green',
        backgroundColor : 'pink'
    },
    mainViewTextInputIconContainer : {
        height : 40,
        width : 40,
        margin : 2.5,
        padding : 2.5,
        backgroundColor : 'green',
        justifyContent : 'center',
        alignItems : 'center'
    },
    mainViewHeaderContainer : {
        flexDirection : 'row',
        backgroundColor : 'grey',
        margin : 2.5,
        padding : 2.5
    },
    mainViewUserAvatarContainer : {
        height : 50,
        width : 50,
        margin : 2.5,
        padding : 2.5,
        backgroundColor : 'black',
        justifyContent : 'center',
        alignItems : 'center'
    },
    mainViewGreetingContainer : {
        flex : 1,
        backgroundColor : 'magenta',
        margin : 2.5,
        padding : 2.5,
        alignItems : 'flex-start',
        justifyContent : 'center'
    },
    mainViewGreeting : {
        padding : 2.5,
        margin : 2.5
    },
    mainViewDailyActivityContainer : {
        flex : 2,
        backgroundColor : 'magenta',
        margin : 2.5,
        padding : 2.5,
        alignItems : 'center',
        justifyContent : 'center' 
    },
    mainViewCategoriesContainer : {
        flex : 2,
        backgroundColor : 'magenta',
        margin : 2.5,
        padding : 2.5,
        alignItems : 'center',
        justifyContent : 'center'
    },
});
