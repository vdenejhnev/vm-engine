import { createSlice } from "@reduxjs/toolkit";

export const savesSlice = createSlice({
    name: 'saves',
    initialState: {
        saves: [
            
        ]
    },
    reducers: {
        addSave: (state, action) => {
            let ts = Date.now();

            let date_ob = new Date(ts);
            let date = date_ob.getDate();
            let month = date_ob.getMonth() + 1;
            let year = date_ob.getFullYear();

            state.saves.push({
                id: state.saves[state.saves.length - 1] + 1,
                step_id: action.payload.step_id,
                screenshot: action.payload.screenshot,
                date: date + "." + month + "." + year,
                day: action.payload.day,
                sceneName: action.payload.sceneName,
            });
        },
    },
});

export const { addSave } = savesSlice.actions;

export default savesSlice.reducer;
