import React from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, search: '', dataSource: [], oDataSource: [] }
    }

    static navigationOptions = {
        title: 'Articles'
    };


    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0540c179c2004914ac8fe99fb95a3d92')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.articles,
                    oDataSource: responseJson.articles,
                })

            })
            .catch((error) => {
                console.error(error);
            });
    }

    searchByAuthor = (text) => {

        const oDataSource = this.state.oDataSource

        this.setState({ search: text })

        const newDataSource = oDataSource.filter((item, i) => {
            if (!item.author || (item.author && item.author.indexOf(text)) === -1) {
                return false
            }
            return true
        })
        this.setState({ dataSource: newDataSource })
    }

    render() {

        const { search } = this.state;

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (

            <View style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}>

                <TextInput onChangeText={(text) => this.searchByAuthor(text)} value={search}
                    style={{ borderColor: 'black', borderWidth: 3, margin: 10, padding: 5, backgroundColor: 'white', }}
                    placeholder={"Search by title"}
                />

                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={Styles.listView}
                                onPress={() => this.props.navigation.navigate('Details', { article: item })}
                            >

                                <Image style={Styles.imageStyle} source={{ uri: item.urlToImage }} />
                                <View style={{ flex: 1 }}>
                                    <Text style={Styles.textStyle}>Author: {item.author}</Text>


                                    <Text style={Styles.textStyle}>Title: {item.title}</Text>
                                </View>


                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={({ id }) => id}
                />
            </View>

        );
    }
}


export default HomeScreen


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'flex-start',

    },

    listView: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: 'lightgray',
        height: 60,
        borderRadius: 5,
        elevation: 1

    },
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
    title: {
        fontSize: 25,
        color: "#000000"
    },
    separator: {
        height: 1,
        backgroundColor: "#CCCCCC"
    },
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
    }

});