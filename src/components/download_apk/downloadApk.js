import React from 'react'
import { urls } from '../../cv'
import downloadIcon from './Download-Computer-512.png'

const download = () => {

  window.open( urls.downloadApk, '_blank' )
}

const downloadAppApk = () => (
  <div className='LoginScreen'>
    <img src={downloadIcon} width="200" height="200"/>
    <br/><br/><br/>
    <button className='button' onClick={download}>СКАЧАТЬ УСТАНОВОЧНЫЙ ФАЙЛ</button>
  </div>
)

export default downloadAppApk


