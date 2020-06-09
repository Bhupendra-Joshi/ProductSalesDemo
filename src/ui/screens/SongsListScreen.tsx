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
import { fetchMusicList } from '../../store/actions/musicListAction';
import CustomFlatList from '../components/CustomFlatList';
import { Navigation } from 'react-native-navigation';
import { SONG_DETAILS_SCREEN } from '../../navigation/constants';
import MusicListItem from '../components/MusicListItem';


const SongsListScreen = (props) => {
    const {
        fetchMusicList,
        list,
        isLoading,
        error,
    } = props;

    const [isRefreshing, setRefreshing] = useState(false);
    const getData = () => {
        fetchMusicList();
    }
    useEffect(() => {
        getData();
    }, []);

    const openDetails = (item) => {
        Navigation.push(props.componentId, {
            component: {
                name: SONG_DETAILS_SCREEN,
                passProps: {
                    track: item
                }
            }
        })
    }
    return (
        <View style={styles.container}>
            {
                (isLoading && !isRefreshing)
                    ? <ActivityIndicator
                        size={'large'}
                    />
                    : <CustomFlatList
                        refreshing={isLoading && isRefreshing}
                        data={list}
                        keyExtractor={item => item.trackId + ''}
                        onRefresh={() => {
                            setRefreshing(true);
                            getData()
                        }}
                        renderItem={({ item }) =>
                            <MusicListItem
                                track={item}
                                onItemClick={() => openDetails(item)} />
                        }
                        ItemSeparatorComponent={() => (<View style={styles.separator} />)}
                    />}
        </View>
    );
};

SongsListScreen.options = {
    topBar: {
        title: {
            text: 'Music List'
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
    isLoading: state.musicListData.isLoading,
    list: state.musicListData.list,
    error: state.musicListData.error,
});

const mapDispatchToProps = {
    fetchMusicList,
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsListScreen);
