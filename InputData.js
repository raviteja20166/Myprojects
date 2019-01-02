import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';


export default class InputData extends React.Component {
    render() {
        const {text, mobileNumber, password}=this.props.navigation.state.params

    
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={Styles.textStyle}>Name: {text}</Text>
                <Text style={Styles.textStyle}>MobileNumber:{mobileNumber} </Text>
                <Text style={Styles.textStyle}>Password: {password}</Text>
                


                </View>
        );
    }
}


const Styles = StyleSheet.create({



    textStyle: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 20,
    }
});
