import React, { useDebugValue } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import GLOBALS from "../../Global";



const Login =  ()=>{
    const [userName, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
  
    const onAuthenticaticate = async(userName, password, onNavigate)=>{
        try{
            const response = await fetch(
                'https://dummyjson.com/auth/login',
                  
                {
                  method:'POST',
                  headers:{
                    'Accept':'application/json',
                    'Content-Type':'application.json'
                  },
                  body: JSON.stringify({
                    username: userName,
                    password: password
                  })
                }
              )
              const json = await response.json()
              console.log(json)
              onNavigate(GLOBALS.SCREEN.MATERIAL)
          }
          catch(e){
            console.log(e)
          }

      } 


      const handleUserNameCHange = (userName) =>{
        setUsername(userName)
      }

      const handlePasswordChange = (pass) =>{
        setPassword(pass)
      }

      return{
        userName,
        password,
        handlePasswordChange,
        handleUserNameCHange,
        onAuthenticaticate
      }


} 
export default Login