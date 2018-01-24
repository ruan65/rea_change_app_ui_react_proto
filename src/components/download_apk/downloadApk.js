import React from 'react'
import Axios from 'axios'


const download = (props) => {

  window.open('http://localhost:8888/download/apk', '_blank')

  // Axios.get( 'http://localhost:8888/download/apk' )
  //   .then( response => {
  //
  //     alert('download response: ' + response.status)
  //   } )
  //   .catch( err => console.log( err ) )

  // alert('downloading!!!!!!!!!!!!!!!!!!!!')
}


const downloadAppApk = (props) => (
  <div>
    <button onClick={() => download( props )}>СКАЧАТЬ УСТАНОВОЧНЫЙ ФАЙЛ</button>
  </div>
)

export default downloadAppApk


