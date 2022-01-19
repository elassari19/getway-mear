import { ColorMode } from 'native-base';
import type { StorageManager } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const localeStorage =  {
  get: async (name: string) => {
    try {
      let val = await AsyncStorage.getItem(name);
      return val;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
  set: async (name: string, value: any) => {
    try {
      await AsyncStorage.setItem(name, value);
    } catch (e) {
      console.log(e);
      return e;
    }
  },
};

export default localeStorage;