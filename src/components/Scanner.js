import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import {
    BarCodeScanner
} from 'expo-barcode-scanner';

export default class ScannerComponent extends React.Component {
  
    state = {
        hasPermission: null,
        value: null,
    }

    componentDidMount() {
      this.requestCameraPermission();
    }

    async requestCameraPermission() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasPermission: status === 'granted' });
    }

    render(){
        const { hasPermission, value } = this.state
        if (hasPermission === null) {
            return <Text>We need your permission to access the camera to scan codes.</Text>;
        } else if (hasPermission === false) {
            return <Text>Please go to your device settings to your device settings and grant Camera permissions to this app.</Text>;
        } else {
            return (
                <BarCodeScanner
                    onBarCodeScanned={value ? undefined : this.handleBarCodeScanned}
                    style={[StyleSheet.absoluteFill, styles.container]}
                >
                    <Text style={styles.description}>Scan your QR code</Text>
                    <View style={styles.layerTop} />
                    <View style={styles.layerCenter}>
                        <View style={styles.layerLeft} />
                        <View style={styles.focused} />
                        <View style={styles.layerRight} />
                    </View>
                    <View style={styles.layerBottom} />
                </BarCodeScanner>
            );
        }
    }

    handleBarCodeScanned = ({
        type,
        data
      }) => {
        this.setState({
          value: data,
        });
        if (this.props.onScanned) {
          this.props.onScanned(data);
        }
      };
}

const opacity = 'rgba(0, 0, 0, .6)';
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 3,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 10
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity
  },
  description: {
    fontSize: width * 0.09,
    marginTop: '10%',
    textAlign: 'center',
    color: 'white',
    backgroundColor: opacity,
  },
});