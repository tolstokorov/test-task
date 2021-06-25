import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import users from './reducers/users';
import sidebar from './reducers/sidebar';

const store = createStore(combineReducers({
    users,
    sidebar
}), applyMiddleware(thunk))
export default store