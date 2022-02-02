import { createStore,applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { Saga } from "./Saga";
import { type } from "@testing-library/user-event/dist/type";

const sagaMiddleware=createSagaMiddleware()
const store=createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(Saga)
const action =type=>store.dispatch({type})