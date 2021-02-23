## React Native 개발환경 설정
#### 1. React Native Cli 다운로드
```shell
npm install -g react-native-cli
```
#### 2. React Native 프로젝트 생성
```shell
npx react-native init [project-name]
```
#### 3. IOS 및 안드로이드 동작확인
##### ios
ios를 확인하기 위해서는 애플 개발자 계정과 ios 기기를 사용해야 한다.
```shell
npm run ios
```

##### android
<a href="https://reactnative.dev/docs/environment-setup">안드로이드 환경설정하기!</a>
```shell
npm run android
```

#### 4. React Native Web 설정
다음 명령어들을 사용해서 필요한 모듈을 설치한다.
```shell
npm install --save react-dom
npm install --save-dev @babel/core babel-loader @babel/preset-react @babel/preset-env
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
```

설치가 끝나면 package.json의 script를 아래와 같이 수정한다.
```json
"scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "build-react": "webpack --mode production",
    "start-react": "webpack serve --config ./webpack.config.js --mode development",
    "test": "jest",
    "lint": "eslint ."
  },
```

webpack 설정을 하기 위해 프로젝트의 root 경로에 webpack.config.js를 만들고 다음의 내용을 복사, 붙여넣기한다.
```js
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: path.join(__dirname, 'index.web.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
  	open: true,
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },
}
```
root 경로에 public 폴더를 만들고, public 폴더안에 index.html을 만든다.
```html
<!DOCTYPE html>
<html>
  <head>
    <title>React Native Web</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

index.web.js라는 파일을 root 경로에 생성하고, 아래의 내용을 복사, 붙여넣기 한다.
```js
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.web'

ReactDOM.render(<App />, document.getElementById('app'))
```
index.web.js에서 사용할 App.web.js도 root 경로에 만들어준다.
```js
import React from 'react'

function App() {
  return (
    <>
      <h1>Hello world from react</h1>
    </>
  )
}

export default App
```

웹 설정이 잘 되었는지 확인하자.
```shell
npm run start-react
```
잘 되었다면 제대로 된 react-native 코드로 만들어보자. 이를 위해, react-native-web을 설치한다.
```shell
npm install react-native-web
```

webpack.config.js 에 다음 부분을 추가한다.
```js
resolve: {
  alias: {
    'react-native$': 'react-native-web',
  },
},
```

webpack.config.js는 다음과 같은 모양이 된다.
```js
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: path.join(__dirname, 'index.web.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    open: true,
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },
}
```

그리고 App.web.js 파일을 다음과 같이 수정한다.
```js
import React from 'react'
import {View, Text} from 'react-native';

function App() {
  return (
    <View>
      <Text>Hello world from react</Text>
    </View>
  )
}

export default App
```

이제 실행해서 잘 되는지 확인한다.
```shell
npm run start-react
```