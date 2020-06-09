import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';
import CustomText from '../components/CustomText';
import ProductSlotSettingsItem from '../components/ProductSaleSettingsItem';
import CustomFlatList from '../components/CustomFlatList';
import CustomDateTimePicker from '../components/CustomDateTimePicker';

const width = Dimensions.get('window').width;

const ProductSaleSetupScreen = (props) => {
    const {
        product
    } = props;

    const [productData, setProductData] = useState(product);
    const updateProductSlot = (index: number, slot: any) => {
        setProductData({
            ...productData,
            isEnabled: productData.isEnabled,
        })
    }
    return (
        <View style={styles.container}>
            <CustomText style={styles.title}>
                Choose your working days
            </CustomText>

            <CustomFlatList
                data={product.saleSlots}
                renderItem={({ item, index }) => (
                    <ProductSlotSettingsItem
                        slot={item}
                        onItemClick={null}
                        updateProductSlot={(slot) => updateProductSlot(index, slot)}
                    />)}
            />
            <CustomDateTimePicker
                value={new Date()}
                mode={"time"}
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
        </View>
    );
};

ProductSaleSetupScreen.options = {
    topBar: {
        title: {
            text: 'Details'
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    title: {
        fontSize: 15,
        color: "#000",
        fontWeight: 'bold',
    },
});

export default ProductSaleSetupScreen;
