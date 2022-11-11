import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        movieSearch: [],
    },
    reducers: {
        addMovies: (state, actions) => {
            state.movieSearch = actions.payload
        },
        backup: (state, actions) => {
            state.movieSearch = actions.payload
        },
        cleanMovie: (state, actions) => {
            state.movie = actions.payload
        },

    },
});


export const {
    addMovies,
    backup,
    cleanMovie

} = dataSlice.actions;


export default dataSlice.reducer;



export const getMovies = (title) => async (dispatch) => {
    try {
        const resp = await axios.get(`https://www.omdbapi.com/?s=${title}&plot=full&?page=1&apikey=882127a8`);
        dispatch(addMovies(resp.data));
    } catch (error) {
        console.log(error)
    }
};

export const getBackup = (data) => async (dispatch) => {

    dispatch(backup(data));

};

export const cleanMovieAction = () => async (dispatch) => {
    dispatch(cleanMovie(false));
};