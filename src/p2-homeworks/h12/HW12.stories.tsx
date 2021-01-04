import React from 'react';
import { Provider } from 'react-redux';
import store from '../h10/bll/store';
import HW12 from './HW12';


export default {
    title: 'HW12 Component',
    component: HW12,
}

export const AppWithReduxBaseExample = () => {
    return (<Provider store={store}> <HW12/> </Provider>)
}