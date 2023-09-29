import { createSlice } from "@reduxjs/toolkit";

export const replicaSlice = createSlice({
    name: 'replica',
    initialState: {
        name: "",
        colorHex: "",
        text: "",
    },
    reducers: {
        getReplicaText: (state) => {
            return state.text;
        },
        setReplicaData: (state, action) => {
            state.name = action.payload.name;
            state.colorHex = action.payload.colorHex;
            state.text = action.payload.text;
        },
        cleanReplica: (state) => {
            state.name = "";
            state.colorHex = "";
            state.text = "";
        }
    },
});

export const { getReplicaText, setReplicaData, cleanReplica } = replicaSlice.actions;

export default replicaSlice.reducer;
