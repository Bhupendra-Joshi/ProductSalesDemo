import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTouchableOpacity from './CustomTouchableOpacity';
import CustomImage from './CustomImage';
import CustomText from './CustomText';

interface ProductListItemProps {
    product: {
        id: string,
        name: string,
        description: string,
        imageUrl: string,
        price: number,
        quantity: number
    };
    onItemClick: () => void;
}

const ProductListItem = (props: ProductListItemProps) => {
    const {
        product,
        onItemClick
    } = props;

    return (
        <CustomTouchableOpacity
            style={styles.listItemContainer}
            onPress={onItemClick}
        >
            <CustomImage
                style={styles.image}
                resizeMode={'contain'}
                source={{ uri: product.imageUrl }}
            />
            <View style={styles.detailsContainer}>
                <CustomText style={styles.name}>
                    {product.name}
                </CustomText>
                <View
                    style={styles.detailsSubContainer}>
                    <CustomText
                        numberOfLines={3}
                        style={styles.description}>
                        {product.description}
                    </CustomText>
                    <CustomText style={styles.price}>
                        INR {product.price}
                    </CustomText>
                </View>
            </View>
        </CustomTouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItemContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        width: 80,
        height: 80,
    },
    detailsContainer: {
        marginHorizontal: 10,
        flex: 1
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    detailsSubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    description: {
        fontSize: 12,
        flex: 3
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 3,
        textAlign: 'right',
        alignSelf: 'flex-end'
    }
})

export default ProductListItem