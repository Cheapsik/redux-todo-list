import {createStore} from 'redux';
import rootreducer from './Reducer';

const store = createStore(rootreducer)

export default store;