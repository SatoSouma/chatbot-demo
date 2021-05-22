import logo from './logo.svg';
import React from 'react';
import defaultDataset from './dataset'
import './assets/styles/style.css'

class App extends React.Component {

  //コンストラクタ
  constructor(props){
    super(props)
    this.state = {
        answer : [], //回答内容 と nextId
        chats : [], // 
        currentId : 'init', //チャット毎のID
        dataset : defaultDataset, //データセットの設定。
        open : false //モーダルウィンドウなどの設定
    }
  }

  //描画メソッド
  render(){
    return(
      <section className="c-section">
        <div className="c-box">
          {this.state.currentId}
        </div> 
      </section>
    )
  }

}

export default App;
