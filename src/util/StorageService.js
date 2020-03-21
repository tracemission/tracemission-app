import { AsyncStorage } from 'react-native';

const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(`tracemission.${key}`, JSON.stringify(value));
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

const getItem = async key => {
  try {
    const value = await AsyncStorage.getItem(`tracemission.${key}`);
    if (value != null) {
      return Promise.resolve(JSON.parse(value));
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

const clearItem = key => {
  AsyncStorage.removeItem(`tracemission.${key}`);
};

export { getItem, setItem, clearItem };
