import React, { useState } from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import CustomTouchableOpacity from './CustomTouchableOpacity';
import CustomText from './CustomText';

const CustomDateTimePicker = ({
    timeZoneOffsetInMinutes,
    value,
    mode,
    display,
    onChange,
}) => {
    const [selectedTime, setSelectedTime] = useState(new Date());

    const onTimeChange = ({ nativeEvent: { timestamp } }) => {
        setSelectedTime(timestamp);
    }

    return (
        <Modal
            isVisible={true}
            style={{
                margin: 0,
                justifyContent: 'flex-end',
            }}
        >
            <View
                style={{
                    backgroundColor: '#fff',
                }}>
                <CustomTouchableOpacity
                    onPress={() => { onChange(selectedTime) }}
                    style={{ alignSelf: 'flex-end', padding: 10 }}>
                    <CustomText style={{
                        color: '#0000ff',
                        fontWeight: 'bold',
                    }}>
                        DONE
                    </CustomText>
                </CustomTouchableOpacity>

                <DateTimePicker
                    timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
                    value={value}
                    mode={mode}
                    display={display}
                    onChange={onTimeChange}
                />
            </View>
        </Modal>)
}

export default CustomDateTimePicker