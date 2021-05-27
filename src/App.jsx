import logo from './logo.svg';
import React from 'react';
import defaultDataset from './dataset.json'
import './assets/styles/style.css'
import {AnswersList,Chats} from "./components/index"
import FormDialog from './components/Forms/FormDialog';

class App extends React.Component {

  //コンストラクタ
  constructor(props){
    super(props)
    this.state = {
        answers : [], //回答内容 と nextId
        chats : [], // 
        currentId : 'init', //チャット毎のID
        dataset : defaultDataset, //データセットの設定。
        open : false //モーダルウィンドウなどの設定
    }

    this.selectAnswer = this.selectAnswer.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)

  }

  displayNextquestion = (nextQuestionId) => {
    const chats = this.state.chats
    chats.push({
      text : this.state.dataset[nextQuestionId].question,
      type : 'question' 
    })

    this.setState({
      answers : this.state.dataset[nextQuestionId].answers,
      chats : chats, 
      currentId : nextQuestionId
    })

  }

  handleClickOpen = () => {
    this.setState({open:true})
  };

  handleClose = () => {
      this.setState({open:false})
  };

  selectAnswer = (selectedAnswer,nextQuestionId) => {
    switch(true){

      case(nextQuestionId === 'init'):
        setTimeout(() => this.displayNextquestion(nextQuestionId),1000)
        break;

      case(/^https:*/.test(nextQuestionId)): //指定した文字列であればtest関数はtrueを返す。
        const a = document.createElement('a')
        a.href = nextQuestionId;
        a.target = '_blank'
        a.click()
        break;
      
      case(nextQuestionId === 'contact'):
        this.handleClickOpen()
        break;

      default:
        const chats = this.state.chats
        chats.push({
          text : selectedAnswer,
          type : 'answer'
        })
    
      　//stateを更新 stateを更新するので再レンダー
        this.setState({
          chats : chats
        })

        setTimeout(() => this.displayNextquestion(nextQuestionId),500)
        break;

    }
  }

  //detasetからcurrentID = 'init'の中のanswersオブジェクトを取得。
  // initAnswer = () => {
  //   const initDatasets = this.state.dataset[this.state.currentId]
  //   const initAnswers = initDatasets.answers

  // 　//stateを更新 stateを更新するので再レンダー
  //   this.setState({
  //     answers: initAnswers
  //   })
  // }

  // initChats = () => {
  //   const initDatasets = this.state.dataset[this.state.currentId]
  //   const chat = {
  //     text : initDatasets.question,
  //     type : 'question'
  //   }

  //   const chats = this.state.chats
  //   chats.push(chat)

  // 　//stateを更新 stateを更新するので再レンダー
  //   this.setState({
  //     chats : chats
  //   })
  // }

  //初動時initAnswer関数発動。
  componentDidMount(){
    // this.initChats()
    // this.initAnswer()
    const initAnswer = ""
    this.selectAnswer(initAnswer,this.state.currentId)

  }

  componentDidUpdate(){
    const scrollArea = document.getElementById('scroll-area')
    if(scrollArea){
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }

  //描画メソッド
  render(){
    return(
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats}/>
          <AnswersList 
            answers={this.state.answers}
            select={this.selectAnswer} 
          />
          <FormDialog open={this.state.open} handleClose={this.handleClose} />
        </div> 
      </section>
    )
  }

}

export default App;
