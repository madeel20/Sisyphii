# Creating a React Native Login

This is a full source code for "Creating a React Native Login" course.
Through the course I will be showing you step-by-step how to solve the most common problems and create amazing applications like this. I can guarantee that you will learn something new and valuable. Let's get started.

## Demo

https://newline-login-template.web.app

## How to use?

1. Download or clone this repo.

2. Install dependencies.

```js
npm install
// or
yarn install
```

3. Go to `src/core/config.js` and replace `FIREBASE_CONFIG` with your own firebase config.

```js
export const FIREBASE_CONFIG = {
  apiKey: 'xxx-yyy-zzz', // etc.
  // rest of your firebase config
}
```

4. Turn on **Google Provider** inside your Firebase Project:
   ![providers](https://storage.googleapis.com/nativeforms-labs.appspot.com/providers.png)

5. **Google Sign In** configuration:

   1. Follow official Expo docs on Google Sign In: https://docs.expo.io/versions/latest/sdk/google/#using-it-inside-of-the-expo-app
   2. Go to `src/core/config.js` and replace `ANDROID_GOOGLE_CLIENT_ID` and `IOS_GOOGLE_CLIENT_ID` with your own generated IDs.
   3. Before submitting your app to Google Play, make sure to follow these docs: https://docs.expo.io/versions/latest/sdk/google/#deploying-to-a-standalone-app-on-android
   4. Before submitting your app to App Store, make sure to follow these docs: https://docs.expo.io/versions/latest/sdk/google/#deploying-to-a-standalone-app-on-ios

6. Run project on iOS / Android.

```js
 npm run ios // npm run android
 // or
 yarn ios // yarn android
```

## Preview

![start](https://raw.githubusercontent.com/venits/react-native-market/master/assets/newline-app-template/start.png)
![login](https://raw.githubusercontent.com/venits/react-native-market/master/assets/newline-app-template/login.png)
![register](https://raw.githubusercontent.com/venits/react-native-market/master/assets/newline-app-template/register.png)
![forgot](https://raw.githubusercontent.com/venits/react-native-market/master/assets/newline-app-template/forgot-password.png)
![home](https://raw.githubusercontent.com/venits/react-native-market/master/assets/newline-app-template/home.png)
![drawer](https://raw.githubusercontent.com/venits/react-native-market/master/assets/newline-app-template/drawer.png)
![profile](https://raw.githubusercontent.com/venits/react-native-market/master/assets/newline-app-template/profile.png)

## Support

In case of any questions or problems, please contact me at:
[tomasz.przybyl.it@gmail.com](mailto:tomasz.przybyl.it@gmail.com)

### Happy Coding 🚀
