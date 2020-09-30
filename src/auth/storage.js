import { AsyncStorage } from "react-native";

const _storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {}
};

const _retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {}
};
const _removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {}
};

export default { _storeData, _retrieveData, _removeData };
