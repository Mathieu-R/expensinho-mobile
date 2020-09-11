## Expensinho
Never run out of money. Be a good manager.

#### Made with react-native-community/cli
To create a project
```
npx react-native init myApp --template react-native-template-typescript
```

To check your environment is set up correctly
```
npx @react-native-community/cli doctor
```

React Native Community cli: https://github.com/react-native-community/cli     
Using packages: https://reactnative.dev/docs/libraries     

More informations: https://reactnative.dev/docs/environment-setup

- [x] Sync with Firebase: https://github.com/invertase/react-native-firebase    
- [x] Storage On Device: https://github.com/ammarahm-ed/react-native-mmkv-storage
- [x] React Navigation: https://reactnavigation.org/
- [x] React Navigation Shared Elements: https://github.com/IjzerenHein/react-navigation-shared-element/tree/navigation-v5    
- [x] i18n: https://github.com/i18next/react-i18next & https://github.com/react-native-community/react-native-localize    
- [x] expo-fonts: https://docs.expo.io/versions/latest/sdk/font/ (follow installation for _bare react native app_)      
- [x] vector icons: https://github.com/oblador/react-native-vector-icons    

### Developpment
#### Configure Firebase
Create Android project in Firebase and place `google-services.json` in `android/app` folder.    

Create IOS project in Firebase and place `GoogleService-Info.plist` in `ios` folder.    

More informations: https://rnfirebase.io/

#### Run in Android emulator
- Download [Android Studio](https://developer.android.com/studio)
- Open `Android Studio` > `Configure` > `Android SDK` > `SDK Tools` > `Android SKD Built Tools`
- Edit `~/.zshrc`
- Add `export ANDROID_SDK=/Users/<user>/Library/Android/sdk`
- Add `export PATH=/Users/<user>/Library/Android/sdk/platform-tools:$PATH`
- Open `Android Studio` > `AVD Manager` > `Create Virtual Device`
  
```
$ yarn android
```

#### Run in IOS emulator (_mac only_)
- Download [Xcode](https://developer.apple.com/xcode/)

#### Run on real device
More informations: https://reactnative.dev/docs/running-on-device

### Build
#### Build for development (_on expo.io_)
```
expo publish
```

#### Build for Android
```
yarn build:android
```

#### Build for IOS
````
yarn build:ios
````