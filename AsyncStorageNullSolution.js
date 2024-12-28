```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getValue = async (key, defaultValue = null) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : defaultValue;
  } catch (e) {
    console.error('Error getting value:', e);
    return defaultValue;
  }
};

export const setValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error setting value:', e);
  }
};
```