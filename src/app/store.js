import {configureStore} from '@reduxjs/toolkit';
import { frontendAPI } from '../utils/frontendAPI';
import { authenticationAPI } from '../utils/authenticationAPI';
import { userAPI } from '../utils/userAPI';
import { loanAPI } from '../utils/loanAPI';
import { peer2peerAPI } from '../utils/peer2peerAPI';

export default configureStore({
    reducer:{
        [frontendAPI.reducerPath]: frontendAPI.reducer,
        [authenticationAPI.reducerPath]: authenticationAPI.reducer,
        [userAPI.reducerPath]: userAPI.reducer,
        [loanAPI.reducerPath]: loanAPI.reducer,
        [peer2peerAPI.reducerPath]: peer2peerAPI.reducer,
    }
});