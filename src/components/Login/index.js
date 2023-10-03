// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'


const Login=props=>{
    const Token= Cookies.get('jwt_token')
    if (Token!==undefined){
      <Redirect to ="/"/>
    } 
    const onSuccessSubmission=jwtToken=>{
      const {history}=props
      Cookies.set('jwt_token',jwtToken,{expires: 30,path:"/"})
      history.replace('/')
    }
    
    const onClickLogin=async()=>{
      const credDetails={username:'rahul',password:'rahul@2021'}
      const url="https://apis.ccbp.in/login"
      const options={
        method:'POST',
        body:JSON.stringify(credDetails),
      }
      const reponse=await fetch(url,options)
      const data=await reponse.json()
      if (reponse.ok===true){
        onSuccessSubmission(data.jwt_token)
      }
    }
    
    return(
        <div className="login-container">
          <h1>Please Login</h1>
          <div className="btn-align">
            <button className="login-btn" type="button" onClick={onClickLogin}>Login with Sample Creds</button>
          </div>
        </div>
    )
}

export default Login