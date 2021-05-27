import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from './Textinput'


export default class FormDialog extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            decription: ""
        }

        this.inputName = this.inputName.bind(this)
        this.inputEmail = this.inputEmail.bind(this)
        this.inputDecription = this.inputDecription.bind(this)

    }

    inputName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    inputEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    inputDecription = (event) => {
        this.setState({
            decription: event.target.value
        })
    }

    //slackに送信
    submitForm = () => {
        const name = this.state.name
        const email = this.state.email
        const decription = this.state.decription

        //本当はバリデーションを入れるべき
        const payload = {
            text: "お問合わせがありました。\n" +
                  "お名前:" + name + "\n" + 
                  "MailAddress:" + email + "\n" +
                  "問い合わせ内容:" + decription
        }

        const url = "https://hooks.slack.com/services/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"

        fetch(url, {
            method: "POST",
            body: JSON.stringify(payload)
        }).then(() => {
            alert("送信が完了しました、追って連絡します。")
            this.setState({
                name: "",
                email:"",
                decription:""
            })
            return this.props.handleClose
        })
    }    

    render(){
        return(
            <Dialog
            open={this.props.open}
            onClose={this.props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {/*名前*/}
                <TextInput 
                    label={"お名前(必須)"}
                    multiline={false}
                    rows={1}
                    value={this.state.name}
                    type={"text"}
                    onChange={this.inputName}
                />
                {/*email*/}
                <TextInput 
                    label={"Email(必須)"}
                    multiline={false}
                    rows={1}
                    value={this.state.email}
                    type={"email"}
                    onChange={this.inputEmail}
                />
                {/*内容*/}
                <TextInput 
                    label={"お問い合わせ(必須)"}
                    multiline={true}
                    rows={5}
                    value={this.state.decription}
                    type={"text"}
                    onChange={this.inputDecription}
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.handleClose} color="primary">
                cancel
              </Button>
              <Button onClick={this.submitForm} color="primary" autoFocus>
                送信
              </Button>
            </DialogActions>
          </Dialog>

        )
    }
}