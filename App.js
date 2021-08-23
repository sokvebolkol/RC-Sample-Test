import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store.js';
import RootStackScreen from './src/navigation/RootStackScreen';

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer >
      <RootStackScreen/>
    </NavigationContainer>
     </Provider>
  );
};

export default App;