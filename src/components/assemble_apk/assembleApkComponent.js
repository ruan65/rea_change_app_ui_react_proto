import React from 'react'
import assembleIcon from './assemble_icon.png'
import { urls } from '../../cv'
import Axios from 'axios'

const assemble = (props) => {

  console.log( 'assemble clicked.....' )

  Axios.get( urls.assembleApk )
    .then( response => {

      console.log( response.data )
      props.history.push( '/download/apk' )

    } )
    .catch( err => console.log( err ) )
}

const assembleApkComponent = (props) => (
  <div className='LoginScreen'>
    <img src={assembleIcon} width="200" height="200"/>
    <br/><br/><br/>
    <button className='button' onClick={() => assemble( props )}>СБОРКА ПРИЛОЖЕНИЯ</button>
  </div>
)

export default assembleApkComponent