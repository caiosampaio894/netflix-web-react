import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../user/user.slice";
import createSagaMiddleware from "@redux-saga/core";
import userSagga from "../user/user.saga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {user: userReducer},
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(userSagga)

export default store