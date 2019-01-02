import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet, Image, Text } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text:'',
      MobileNumber: '',
      Password: '',

    };

  }

  static navigationOptions = {
    title: 'LoginPage',

  };


  render() {
    return (

      <View style={styles.container}>

        <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} style={{ width: 400, height: 180, marginBottom: 40, }} />

        <TextInput

          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
          placeholder={'Name'}
          style={styles.input}


        />


        <TextInput
          value={this.state.mobileNumber}
          onChangeText={(mobileNumber) => this.setState({ mobileNumber })}
          placeholder={'MobileNumber'}
          style={styles.input}
          maxLength={10}
          keyboardType={"numeric"}



        />
        <TextInput

          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}


        />

        <Button
          onPress={() => this.props.navigation.navigate('Input',{ text: this.state.text,mobileNumber:this.state.mobileNumber,password:this.state.password  })}
          style={styles.button}
          title={"Login"} />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',


  },
  input: {


    height: 44,
    paddingTop: 10,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 25,
    marginBottom: 20,
    width: 350

  },
  button: {
    backgroundColor: 'lightblue',
    borderRadius: 25,
    width: 50


  }
});
