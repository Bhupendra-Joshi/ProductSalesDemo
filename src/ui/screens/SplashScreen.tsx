import React, {
    useEffect,
} from 'react';

import {
    StyleSheet,
    View,
} from 'react-native';

import CustomImage from '../components/CustomImage';
import { Navigation } from 'react-native-navigation';
import { mainRoot } from '../../navigation'
import { fetchProductList } from '../../store/actions/productListAction';
import { connect } from 'react-redux';

const SplashScreen = ({
    fetchProductList
}) => {

    useEffect(() => {
        fetchProductList();
        const timeout = setTimeout(() => {
            Navigation.setRoot(mainRoot)
        }, 2000);
        return () => {
            clearTimeout(timeout);
        }
    }, []);

    return (
        <View style={styles.container}>
            <CustomImage
                style={styles.image}
                source={require('../../assets/images/splash.gif')}
            />
        </View>
    );
};

SplashScreen.options = {
    topBar: {
        visible: false,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    image: {
        width: 300,
        height: 300,
    }

});

const mapDispatchToProps = {
    fetchProductList
}
export default connect(null, mapDispatchToProps)(SplashScreen);