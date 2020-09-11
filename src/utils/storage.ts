import mmkv from 'react-native-mmkv-storage';

const AsyncStorage = new mmkv.Loader().initialize();

export default AsyncStorage;
