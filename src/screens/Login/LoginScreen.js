import React, { useDebugValue } from "react";
import Login from "./Login";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import GLOBALS from "../../Global";


const LoginScreen = (props) => {


  const {
    userName,
    password,
    handlePasswordChange,
    handleUserNameCHange,
    onAuthenticaticate
  } = Login()



  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>User Name</Text>
        <TextInput style={styles.input} onChangeText={userName => handleUserNameCHange} defaultValue={userName}></TextInput>
        <Text style={styles.title}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} onChangeText={handlePasswordChange} defaultValue={password}></TextInput>
        <TouchableOpacity onPress={()=>{onAuthenticaticate(userName, password, props.onNavigate)}} style={styles.button}>
          <Text>Login</Text>
        </TouchableOpacity>
        <Text>{userName}</Text>
      </View>
    </SafeAreaView>
  );

};




const styles = StyleSheet.create({
  bofy: {
    padding: 16
  },
  container: {
    flex: 1,
    backgroundColor: "#4169E1",
    justifyContent: 'center',
  },
  title: {
    marginLeft: 12,
    color: "#FCBF49",
  },
  button: {
    backgroundColor: "#FCBF49",
    alignItems: "center",
    margin: 12,
    padding: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#FCBF49",
    padding: 10,
    color: "#FCBF49",
  },
});

export default LoginScreen
