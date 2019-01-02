import React from 'react';
import { FlatList, search, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


class Maps extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			search: '',
			data: null
		}
	}

	searchByLocation = (text) => {
		// change text
		this.setState({ search: text, isLoading: true })
		// call api & wait for results

		fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&types=geocode&sensor=false&key=AIzaSyCRyVFprV0YKjBmZMpx8vYaFuoUX7-t6kA`)
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson)
				this.setState({
					isLoading: false,
					data: responseJson.predictions
				})
			})
			.catch((error) => {
				console.error(error);
			});
		// In then function update flat list
	}

	render() {
		// const { isLoading, data } = this.state

		return (
			<View style={Styles.container}>
				<TextInput onChangeText={(text) => this.searchByLocation(text)} value={search}
					style={{ borderColor: 'black', borderWidth: 5, margin: 10, fontSize: 20, fontWeight: 'bold', padding: 10, backgroundColor: 'white', justifyContent: 'center' }}
					placeholder={"Search by location"}
				/>
				{/* 
                <MapView
					provider={PROVIDER_GOOGLE} // remove if not using Google Maps
					style={styles.map}
					region={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.015,
						longitudeDelta: 0.0121,
					}}
				>
				</MapView> */}


				<FlatList
					data={this.state.data}
					renderItem={({ item }) => {
						return (
							// console.log(item)
							<TouchableOpacity style={Styles.listView}
								onPress={() => this.props.navigation && this.props.navigation.navigate('MapsLocation', { description: item })}
							>
								<Text>{item.description}</Text>
							</TouchableOpacity>
						);
					}}
					keyExtractor={({ id }) => id}
				/>
				{/* } */}


			</View>
		);
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingVertical: 12,


	},
	textStyle: {

		marginTop: 5,
		marginLeft: 5,
		marginRight: 5,
		height: 20,


	},
	map: {
		width: 600,
		height: 400,
	},
	listView: {
		flexDirection: 'row',
		margin: 10,
		height: 60,
		borderRadius: 5,
		elevation: 1,
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 20,
		fontWeight: 'bold',
		backgroundColor: 'lightblue'

	},

})

export default Maps;
