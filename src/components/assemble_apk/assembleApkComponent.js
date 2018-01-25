import React, { Component } from 'react'
import assembleIcon from './assemble_icon.png'
import { urls } from '../../cv'
import Axios from 'axios'
import Spinner from '../ui/Spinner'

class AssembleApkComponent extends Component {

  state = {
    assembling: false
  }

  assemble = () => {

    this.setState({assembling: true})

    Axios.get( urls.assembleApk )
      .then( response => {

        setTimeout(() => {
          this.setState({assembling: false})
          console.log( response.data )
          this.props.history.push( '/download/apk' )
        }, 4000)
      } )
      .catch( err => {
        this.setState({assembling: false})
        console.log( err )
      } )
  }

  render() {

    const content = this.state.assembling
      ? <div>
        <h3 className='TitleStyle'>Идет сборка приложения...</h3>
        <Spinner/>
      </div>
      : <div className='LoginScreen'>
        <img src={assembleIcon} width="200" height="200" alt=""/>
        <br/><br/><br/>
        <button className='button' onClick={this.assemble}>СБОРКА ПРИЛОЖЕНИЯ</button>
      </div>
    return content
  }
}

export default AssembleApkComponent