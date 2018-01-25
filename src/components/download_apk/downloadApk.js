import React from 'react'
import { urls } from '../../cv'
import downloadIcon from './Download-Computer-512.png'

const download = () => {

  window.open( urls.downloadApk, '_blank' )
}

const back = (props) => {
  props.history.push('/')
}

const downloadAppApk = (props) => (
  <div className='LoginScreen'>
    <img src={downloadIcon} alt="" width="200" height="200"/>
    <br/><br/><br/>
    <button className='button' onClick={download}>СКАЧАТЬ УСТАНОВОЧНЫЙ ФАЙЛ</button>
    <button className='button' onClick={() => back(props)}>ОТМЕНА</button>
  </div>
)

export default downloadAppApk


