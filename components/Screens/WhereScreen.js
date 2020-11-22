import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    ImageBackground
} from 'react-native';
import Constants from 'expo-constants';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {Accuracy} from "expo-location";
import {GlobalStyles} from "../../styles/GlobalStyles";

export default class WhereScreen extends React.Component {
    mapViewRef = React.createRef();

    static navigationOptions={
        title:'Where'
    }

    state = {
        //Undersøger om der er tilladelse til lokation
        hasLocationPermission: null,
        //Ser på brugerens nuværende lokaltion
        currentLocation: null,
        //Ser på de fastsatte markers fra brugeren
        userMarkerCoordinates: [],
        //Ser på koordinaten af den valgte markør
        selectedCoordinate: null,
        //Finder adressen å den valgte markør
        selectedAddress: null,
    };

    handleGoToHome = () => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.goBack();
    };

    getLocationPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        this.setState({ hasLocationPermission: status });
    };

    componentDidMount = async () => {
        await this.getLocationPermission();
    };

    updateLocation = async () => {
        const { coords } = await Location.getCurrentPositionAsync({accuracy: Accuracy.Balanced});
        this.setState({ currentLocation: coords });
    };
// Event handler når der laves et long press. Sker når vi sætter en ny markør med et koordinatsæt, der skal tilføjes de
    handleLongPress = event => {
        const { coordinate } = event.nativeEvent;
        this.setState(prevState => {
            return {
                userMarkerCoordinates: [...prevState.userMarkerCoordinates, coordinate],
            };
        });
    };

    handleSelectMarker = coordinate => {
        this.setState({ selectedCoordinate: coordinate });
        this.findAddress(coordinate);
    };

    findAddress = async coordinate => {
        const [selectedAddress] = await Location.reverseGeocodeAsync(coordinate);
        this.setState({ selectedAddress });
    };

    closeInfoBox = () =>
        this.setState({ selectedCoordinate: null, selectedAddress: null });

    renderCurrentLocation = () => {
        const { hasLocationPermission, currentLocation } = this.state;
        if (hasLocationPermission === null) {
            return null;
        }
        if (hasLocationPermission === false) {
            return <Text>No location access. Go to settings to change</Text>;
        }
        return (
            <View>
                <TouchableOpacity style={GlobalStyles.btn} onPress={this.updateLocation()}>
                    <Text style={GlobalStyles.inner}>Update Current Location</Text>
                </TouchableOpacity>

                {currentLocation && (
                    <Text>
                        {`${currentLocation.latitude}, ${
                            currentLocation.longitude
                        } ${currentLocation.accuracy}`}
                    </Text>
                )}
            </View>
        );
    };

    handleGoToProfile = () => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.goBack();
    };

    render() {
        const {userMarkerCoordinates, selectedCoordinate, selectedAddress,
        } = this.state;
        return (
            <View style={styles.container}>
                <MapView
                    provider="google"
                    style={styles.map}
                    ref={this.mapViewRef}
                    showsUserLocation
                    onLongPress={this.handleLongPress}>
                    <Marker
                        coordinate={{ latitude: 55.676195, longitude: 12.569419 }}
                        title="Rådhuspladsen"
                        description="Complete outdoor gym"
                    />
                    <Marker
                        coordinate={{ latitude: 55.673035, longitude: 12.568756 }}
                        title="Tivoli"
                        description="Workout Bench"
                    />
                    <Marker
                        coordinate={{ latitude: 55.706792, longitude: 12.567638 }}
                        title="Fælled Parken"
                        description="Pull up bars & Workout bench"
                    />
                    <Marker
                        coordinate={{ latitude: 55.674082, longitude: 12.598108 }}
                        title="Christiania"
                        description="Complete outdoor gym"
                    />
                    <Marker
                        coordinate={{ latitude: 55.705328, longitude: 12.577030}}
                        title="Østerfælled Torv"
                        description="Complete outdoor gym"
                    />

                    {userMarkerCoordinates.map((coordinate, index) => (
                        <Marker
                            coordinate={coordinate}
                            key={index.toString()}
                            onPress={() => this.handleSelectMarker(coordinate)}
                        />
                    ))}
                </MapView>
                {selectedCoordinate && (
                    <View style={styles.infoBox}>
                        <Text style={styles.infoText}>
                            {selectedCoordinate.latitude}, {selectedCoordinate.longitude}
                        </Text>
                        {selectedAddress && (
                            <Text style={styles.infoText}>
                                {selectedAddress.name} {selectedAddress.postalCode}
                            </Text>
                        )}
                        <Button title="close" onPress={this.closeInfoBox} />
                    </View>

                )}

                {this.renderCurrentLocation()}


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    map: { flex: 1 },
    infoBox: {
        height: 100,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    infoText: {
        fontSize: 20,
    },
});
