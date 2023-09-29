import { createSlice } from "@reduxjs/toolkit";

export const spritesSlice = createSlice({
    name: 'sprites',
    initialState: {
        sprites: [
            
        ],
    },
    reducers: {
        addSprite: (state, action) => {
            let newPerson = {
                tag: action.payload.tag,
                spriteUrl: action.payload.spriteUrl,
                positionX: action.payload.positionX,
                scale: action.payload.scale,
                order: action.payload.order,
            };

            state.sprites.push(newPerson);
        },
        deleteSprite: (state, action) => {
            state.sprites = state.sprites.filter((person) => person.tag !== action.payload);
        },
        cleanSprite: (state) => {
            state.sprites = [];
        }
    },
});

export const { addSprite, deleteSprite, cleanSprite } = spritesSlice.actions;

export default spritesSlice.reducer;
