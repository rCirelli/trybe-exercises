const Redux = require('redux');
const { legacy_createStore: createStore } = Redux;

const fazerLogin = (email) => ({
  // ? actionCreator
  type: 'LOGIN', // ? action
  email,
});

const INITIAL_STATE = {
  login: false,
  email: '',
};
const testReducer = (state = { testReducerState: true }) => state; // ? reducer

const mainReducer = (state = INITIAL_STATE, action) => {  // ? reducer
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};

const reducers = Redux.combineReducers({ mainReducer, testReducer }); // ? reducerCombiner (reducers inside obj as parameter)

const store = createStore(reducers); // ? store

console.log('initial state', store.getState());

store.subscribe(() => { // ? "eventListener" - executes every time the store is updated (must be declared before and update occurs)
  console.log('updated state', store.getState());
});


store.dispatch(fazerLogin('umemail@teste.com')); // ? dispatch (inject new state)

