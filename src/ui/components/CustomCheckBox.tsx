import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';

const CustomCheckBox = ({
    isChecked,
    onToggle
}) =>
    <TouchableOpacity
        elevation={6}
        style={styles.container}
        onPress={onToggle}
        activeOpacity={1}
    >
        {
            isChecked
                ? <View style={styles.selectedDot} />
                : null
        }
    </TouchableOpacity>


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 0.5,
        height: 20,
        width: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    selectedDot: {
        height: 12,
        width: 12,
        backgroundColor: "#0000ffcc",
        borderRadius: 6,
    }
})
export default CustomCheckBox;