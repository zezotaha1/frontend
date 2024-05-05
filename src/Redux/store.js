import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Assuming the root reducer is defined in this file
import authMiddleware from './authMiddleware'; // Import the authMiddleware
import authReducer from './authSlice';
import blogsReducer from './blogsSlice';
import urlScanReducer from "./urlScanFreeSlice";
import urlScanPReducer from "./urlScanPSlice";
import networkScanReducer from "./networkFreeSlice";
import networkPSliceReducer from './networkPslice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        blogs: blogsReducer,
        urlScan: urlScanReducer,
        urlPscan: urlScanPReducer,
        networkScan: networkScanReducer,
        networkPScan: networkPSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
});

export default store;