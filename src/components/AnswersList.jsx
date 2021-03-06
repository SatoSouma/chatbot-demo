import { PinDropSharp } from '@material-ui/icons'
import React from 'react'
import {Answer} from './index'

const AnswersList = (props) => {
    return(
        <div className="c-grid__answer">
            {/*answersの中の値が1つずつ取り出される。*/}
            {props.answers.map((value, index) => {
                return <Answer content={value.content} nextId={value.nextId} key={index.toString()} select={props.select}/>
            })}
        </div>
    )
}

export default AnswersList