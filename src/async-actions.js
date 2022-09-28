import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const initialState = {
  loading: false,
  users: [],
  error: ""
};

const FETCH_USERS_REQUEST = "fett users = request";
const FETCH_USERS_SUCCESS = "fetch users = successful ";
const FETCH_USERS_FAILURE = "fetch user = faliure";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ""
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      };
    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch({ type: FETCH_USERS_REQUEST });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.name);
        dispatch({ type: FETCH_USERS_SUCCESS, payload: users });
      })
      .catch((error) =>
        dispatch({ type: FETCH_USERS_FAILURE, payload: error.message })
      );
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

console.log("before dispatch", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("after dispatch", store.getState())
);

store.dispatch(fetchUsers());
store.dispatch(fetchUsers());

unsubscribe();
