import React from 'react'
import { urls } from '../../cv'

const download = () => {

  window.open( urls.downloadApk, '_blank' )
}

const downloadAppApk = () => (
  <div>
    <button onClick={download}>СКАЧАТЬ УСТАНОВОЧНЫЙ ФАЙЛ</button>
  </div>
)

export default downloadAppApk


