import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import authMiddleware from './authMiddleware'; // Import the authMiddleware
import authReducer from './authSlice';
import blogsReducer from './blogsSlice';
import urlScanReducer from "./urlScanFreeSlice";
import urlScanPReducer from "./urlScanPSlice";
import networkScanReducer from "./networkFreeSlice";
import networkPSliceReducer from './networkPslice';

// Define your root reducer inline
const rootReducer = combineReducers({
    auth: authReducer,
    blogs: blogsReducer,
    urlScan: urlScanReducer,
    urlPscan: urlScanPReducer,
    networkScan: networkScanReducer,
    networkPScan: networkPSliceReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
});

export default store;