import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//引入ANTD.css
import 'antd/dist/antd.css' 
//引入store文件
import store from './store/StoreIndex' 
//mobox-react
import {Provider} from 'mobx-react'

ReactDOM.render(
  // 概念: Provide与redux类似, 把利用context把store注入全局中
  <Provider {...store}>       
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
