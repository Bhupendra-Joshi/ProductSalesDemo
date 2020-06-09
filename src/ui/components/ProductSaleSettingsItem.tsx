import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTouchableOpacity from './CustomTouchableOpacity';
import CustomImage from './CustomImage';
import CustomText from './CustomText';
import { convertTime, weekDayString } from '../../utils/dateTime';
import CustomCheckBox from './CustomCheckBox';
import DateTimePicker from '@react-native-community/datetimepicker';

interface ProductSlotSettingsItemProps {
    slot: {
        id: string,
        weekDay: number,
        startTime: number,
        endTime: number,
        isEnabled: boolean,
    };
    onItemClick: () => void;
    updateProductSlot: (slot: any) => void;
}

const ProductSlotSettingsItem = (props: ProductSlotSettingsItemProps) => {
    const {
        slot,
        onItemClick,
        updateProductSlot,
    } = props;

    const onToggleDay = () => {
        slot.isEnabled = !slot.isEnabled;
        updateProductSlot(slot);
    }

    return (
        <CustomTouchableOpacity
            style={styles.listItemContainer}
        // onPress={onItemClick}
        >
            <CustomCheckBox
                isChecked={slot.isEnabled}
                onToggle={onToggleDay}
            />
            <CustomText style={styles.name}>
                {weekDayString(slot.weekDay)}
            </CustomText>
            <View style={styles.detailsContainer}>
                <CustomText
                    numberOfLines={3}
                    style={styles.time}>
                    {convertTime(slot.startTime)}
                </CustomText>
                <CustomText
                    numberOfLines={3}
                    style={styles.time}>
                    {convertTime(slot.endTime)}
                </CustomText>
            </View>
        </CustomTouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItemContainer: {
        flexDirection: 'row',
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    name: {
        marginStart: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    time: {
        fontSize: 10,
        color: "#0055bb"
    },
    detailsContainer: {
        marginHorizontal: 10,
        flex: 1,
    },
    detailsSubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 3,
        textAlign: 'right',
        alignSelf: 'flex-end'
    }
})

export default ProductSlotSettingsItem