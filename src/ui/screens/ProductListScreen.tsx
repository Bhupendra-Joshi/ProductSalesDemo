import React, {
    useEffect,
    useState,
} from 'react';
import { connect } from 'react-redux'
import {
    StyleSheet,
    View,
    ActivityIndicator,
} from 'react-native';
import CustomFlatList from '../components/CustomFlatList';
import { Navigation } from 'react-native-navigation';
import ProductListItem from '../components/ProductListItem';
import { PRODUCT_SALE_SETUP_SCREEN } from '../../navigation/constants';

const ProductListScreen = (props) => {
    const {
        list,
        isLoading,
    } = props;

    const openDetails = (item) => {
        Navigation.push(props.componentId, {
            component: {
                name: PRODUCT_SALE_SETUP_SCREEN,
                passProps: {
                    product: item
                }
            }
        })
    }
    return (
        <View style={styles.container}>
            <CustomFlatList
                data={list}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <ProductListItem
                        product={item}
                        onItemClick={() => openDetails(item)} />
                }
                ItemSeparatorComponent={() => (<View style={styles.separator} />)}
            />
        </View>
    );
};

ProductListScreen.options = {
    topBar: {
        title: {
            text: 'Product List'
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    separator: {
        height: 0.5,
        backgroundColor: '#0000ff66',
        marginHorizontal: 20
    }
});

const mapStateToProps = state => ({
    isLoading: state.productListData.isLoading,
    list: state.productListData.list,
    error: state.productListData.error,
});

export default connect(mapStateToProps)(ProductListScreen);
