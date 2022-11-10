import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        movieSearch: [],
        movie: false
    },
    reducers: {
        addMovies: (state, actions) => {
            state.movieSearch = actions.payload
        },
        addMovie: (state, actions) => {
            state.movie = actions.payload
        },

    },
});


export const {
    addMovies,
    addMovie,

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

export const getMovie = (id) => async (dispatch) => {
    try {
        const resp = await axios.get(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=882127a8`);
        dispatch(addMovie(resp.data));
    } catch (error) {
        console.log(error)
    }
};
