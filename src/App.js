import React from 'react';
import AppNavigation from './navigation/index';
import { Provider } from 'react-redux';
import store from './store/actions/reducers/index';

const App = () => {
  return (
    <Provider store={store}> 
        <AppNavigation />
        </Provider>
  );
};


export default App;
