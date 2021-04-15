import {combineReducers} from "redux";

const songsReducer = () => {
    return [
        { title: 'All Too Well', duration: '4.05'},
        { title: '22', duration: '3.48'},
        { title: 'Red', duration: '2.30'},
        { title: 'Girl at Home', duration: '3.09'},
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
