import React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';


class DetailsScreen extends React.Component {
    render() {
        const item = this.props.navigation.getParam('article')
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Image style={{ width: 100, height: 100 }} source={{ uri: item.urlToImage }} />
                <Text style={Styles.textStyle}>Author: {item.author}</Text>
                <Text style={Styles.textStyle}>Title: {item.title}</Text>
                <Text style={Styles.textStyle}>content: {item.content}</Text>


                <Button
                    title={'Click Here'}

                    onPress={() => this.props.navigation.navigate('Maps')}
                />

            </View>
        );
    }
}




export default DetailsScreen

const Styles = StyleSheet.create({



    textStyle: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 20,
    },
    imageStyle: {
        width: 45,
        height: 45,
        borderRadius: 20,
        marginLeft: 20,
        marginTop: 8,
    },

});