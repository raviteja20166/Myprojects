import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


class MapsLocation extends React.Component {

    constructor() {
        super()
        this.state = {
            lat: 0,
            lng: 0,
            isMapReady: false,
        }
    }

    

    componentDidMount() {
        const place_id = this.props.navigation.getParam('description').place_id
        fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${place_id}&key=AIzaSyCRyVFprV0YKjBmZMpx8vYaFuoUX7-t6kA`)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    isLoading: false,
                    lat: responseJson.result.geometry.location.lat,
                    lng: responseJson.result.geometry.location.lng
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    onMapLayout = () => {
        this.setState({ isMapReady: true });
    }


    render() {
        const { lat, lng } = this.state
        const place_id = this.props.navigation.getParam('description').place_id

        if (lat && lng) {
            return (
                <View>
                    <MapView
                        region={{
                            latitude: lat,
                            longitude: lng,
                            latitudeDelta: 0.5,
                            longitudeDelta: 0.5
                            
                        }}
                        
                        onLayout={this.onMapLayout}
                        style={{
                            height: 500,
                            width: 500,
                            
                        }}
                    // onRegionChange={this.onRegionChange}
                    >
                        <MapView.Marker
                      onPress={()=>{ window.alert(this.state.place_id) }}

                            coordinate={{
                                latitude: lat,
                                longitude: lng,
                                latitudeDelta: 0.5,
                                longitudeDelta: 0.5,
                                
                            }}
                        // title={marker.title}
                        // description={marker.description}
                        />
                    </MapView>
                </View>
            )
        } else {
            return <ActivityIndicator />
        }


    }
}
export default MapsLocation;