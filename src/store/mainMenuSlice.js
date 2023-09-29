import { createSlice } from "@reduxjs/toolkit";
import day from "../assets/img/backstreed_springs/day.png";

export const mainMenuSlice = createSlice({
    name: 'mainMenu',
    initialState: {
        backImg: {
            img: day,
            map: "",
        },
        backAudio: {
            src: "https://nakid.world/novel/1.sound/gg/the-river-18557.mp3",
            tag: "main_menu_music",
            volume: 0.3,
        },
    },
    reducers: {
        setOptions: (state, action) => {
            state.backImg = action.payload.backImg;
            state.backAudio = action.payload.backAudio;
        }
    },
});

export const { setOptions } = mainMenuSlice.actions;

export default mainMenuSlice.reducer;
