import { configureStore } from '@reduxjs/toolkit';

import sceneReducer from './store/sceneSlice';
import savesReducer from './store/savesSlice';
import mainMenuReducer from './store/mainMenuSlice';


export default configureStore({
    reducer: {
        scene: sceneReducer,
        saves: savesReducer,
        mainMenu: mainMenuReducer,
    }
});
