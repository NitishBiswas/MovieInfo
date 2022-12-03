import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieAPI from '../../common/apis/movieAPI';
import { APIKey } from '../../common/apis/movieAPIkey';

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async (searchText) => {
        const movies = await movieAPI.get(`?apikey=${APIKey}&s=${searchText}&type=movie`);
        return movies.data;
    }
)

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',
    async (searchText) => {
        const shows = await movieAPI.get(`?apikey=${APIKey}&s=${searchText}&type=series`);
        return shows.data;
    }
)

export const fetchAsyncMovieOrShowsDetail = createAsyncThunk(
    'movies/fetchAsyncMovieOrShowsDetail',
    async (id) => {
        const detail = await movieAPI.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
        return detail.data;
    }
)

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        },
    },

    extraReducers: (builder) => {
        // addMovies
        builder.addCase(fetchAsyncMovies.pending, () => {
            console.log("Pending movies");
        })

        builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
            console.log("Fetched movies successfully");
            return { ...state, movies: payload }
        })

        builder.addCase(fetchAsyncMovies.rejected, () => {
            console.log("Rejected movies");
        })

        //addShows
        builder.addCase(fetchAsyncShows.pending, () => {
            console.log("Pending shows");
        })

        builder.addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
            console.log("Fetched shows successfully");
            return { ...state, shows: payload }
        })

        builder.addCase(fetchAsyncShows.rejected, () => {
            console.log("Rejected shows");
        })

        // addDetail
        builder.addCase(fetchAsyncMovieOrShowsDetail.pending, () => {
            console.log("Pending detail");
        })

        builder.addCase(fetchAsyncMovieOrShowsDetail.fulfilled, (state, { payload }) => {
            console.log("Fetched detail successfully");
            return { ...state, selectedMovieOrShow: payload }
        })

        builder.addCase(fetchAsyncMovieOrShowsDetail.rejected, () => {
            console.log("Rejected detail");
        })
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShowDetail = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;