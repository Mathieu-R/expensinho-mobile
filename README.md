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

Using packages: https://reactnative.dev/docs/libraries

More informations: https://reactnative.dev/docs/environment-setup

### Developpment
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