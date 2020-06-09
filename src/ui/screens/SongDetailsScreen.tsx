import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';
import CustomText from '../components/CustomText';
import CustomImage from '../components/CustomImage';

const width = Dimensions.get('window').width;

const SongDetailsScreen = (props) => {
    const {
        track
    } = props;

    return (
        <View style={styles.container}>
            <CustomImage
                style={styles.image}
                source={{ uri: track.artworkUrl100.replace('100x100', '400x400') }}
            />
            <View style={styles.detailsContainer}>
                <View>
                    <CustomText style={styles.trackName}>
                        {track.trackName}
                    </CustomText>
                    <CustomText style={styles.artistName}>
                        ({track.artistName})
                    </CustomText>
                </View>
                <CustomText style={styles.collectionName}>
                    {track.collectionName}
                </CustomText>
                <CustomText style={styles.genre}>
                    {track.primaryGenreName}
                </CustomText>
                <CustomText style={styles.collectionPrice}>
                    {track.currency} {track.collectionPrice}
                </CustomText>
            </View>
        </View>
    );
};

SongDetailsScreen.options = {
    topBar: {
        title: {
            text: 'Details'
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    listItemContainer: {
        padding: 10,
    },
    image: {
        height: width,
        width: width,
        marginTop: 10,
    },
    detailsContainer: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    trackName: {
        fontSize: 30,
        color: "#00ff88",
        fontWeight: 'bold',
        textAlign: 'center'
    },
    artistName: {
        fontSize: 20,
        color: "#00ffff",
        textAlign: 'center'
    },
    collectionName: {
        fontSize: 20,
        color: "#00aaff",
        textAlign: 'center',
        fontWeight: 'bold',
    },
    genre: {
        fontSize: 20,
        color: "#00ffff",
        textAlign: 'center'
    },
    collectionPrice: {
        fontSize: 20,
        color: "#fff",
        alignSelf: 'flex-end'
    },
});

export default SongDetailsScreen;
