import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import {setLocalNotification} from './utils/notification'
import store from './store'
import Home from './screens/Home'

export default function App() {
  useEffect(() => {
    setLocalNotification()
  }, [])
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
