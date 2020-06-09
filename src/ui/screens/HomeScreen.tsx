import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { PRODUCT_LISTING_SCREEN, PRODUCT_SALE_SCREEN } from '../../navigation/constants';
import CustomTouchableOpacity from '../components/CustomTouchableOpacity';
import CustomText from '../components/CustomText';

const HomeScreen = (props) => {

    const openSellersScreen = () => {
        Navigation.push(props.componentId, {
            component: {
                name: PRODUCT_LISTING_SCREEN,
            }
        })
    }
    const openBuyersScreen = (item) => {
        Navigation.push(props.componentId, {
            component: {
                name: PRODUCT_SALE_SCREEN,
            }
        })
    }
    return (
        <View style={styles.container}>
            <CustomTouchableOpacity
                style={styles.button}
                onPress={openSellersScreen}
            >
                <CustomText style={styles.buttonTitle}>SELLER</CustomText>
            </CustomTouchableOpacity>
            <CustomTouchableOpacity
                style={styles.button}
                onPress={openBuyersScreen}
            >
                <CustomText style={styles.buttonTitle}>BUYER</CustomText>
            </CustomTouchableOpacity>
        </View>
    );
};

HomeScreen.options = {
    topBar: {
        title: {
            text: 'Select User Type'
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    button: {
        backgroundColor: '#000000',
        marginHorizontal: 40,
        borderRadius: 30,
        alignItems: "center"
    },
    buttonTitle: {
        padding: 15,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    separator: {
        height: 0.5,
        backgroundColor: '#0000ff66',
        marginHorizontal: 20
    }
});

export default HomeScreen;
