import { configureStore } from "@reduxjs/toolkit";
import RickMoryReducer from "./rickMory/character";
import { api } from "../services/axios";
/* import rootSagas from "./rootSagas";


const sagaMiddleware = createSagaMiddleware(); */

export default configureStore({
  reducer: {
    RickMory: RickMoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
  /*  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ], */
});

/* sagaMiddleware.run(rootSagas); */
