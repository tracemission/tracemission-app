import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class Scanner extends React.Component {
  
    static navigationOptions = {
      headerShown: false,
    };

    state = {
        hasPermission: null,
        value: null,
    }

    _isMounted = false;

    componentDidMount() {
      _isMounted = true;
      this.setState({ value: null, });
      this.requestCameraPermission();
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    async requestCameraPermission() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasPermission: status === 'granted' });
    }

    render(){
        const { hasPermission, value } = this.state
        if (hasPermission === null) {
            return (
              <Text>We need your permission to access the camera to scan codes.</Text>
            );
        } else if (hasPermission === false) {
            return (
              <Text>
                Please go to your device settings to your device settings and grant
                Camera permissions to this app.
              </Text>
            );
        } else {
            return (
              <View style={styles.container}>
                <BarCodeScanner
                    onBarCodeScanned={value ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFill}
                />

                <View style={styles.topOverlay} />
                <View style={styles.leftOverlay} />
                <View style={styles.rightOverlay} />
                <View style={styles.bottomOverlay} />
                <View style={styles.topLeftCorner} />
                <View style={styles.topRightCorner} />
                <View style={styles.bottomLeftCorner} />
                <View style={styles.bottomRightCorner} />

                <View style={styles.header}>
                  <Text style={styles.headerText}>Scan QR Code</Text>
                </View>

                <View style={styles.footer}>
                </View>
              </View>
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
        this.props.onScanned({ data, type, });
      }
    };
}

const { width, height } = Dimensions.get('window');

const BOX_MARGIN = 30;
const BOX_SIZE = width - BOX_MARGIN * 2;
const BOX_TOP = height / 2 - BOX_SIZE / 2;
const BOX_BOTTOM = BOX_TOP + BOX_SIZE;
const BOX_LEFT = BOX_MARGIN;
const BOX_RIGHT = width - BOX_LEFT;

const overlayBaseStyle = {
  position: 'absolute',
  backgroundColor: 'rgba(0,0,0,0.6)',
};

const cornerBaseStyle = {
  position: 'absolute',
  borderColor: '#fff',
  backgroundColor: 'transparent',
  borderWidth: 2,
  width: 10,
  height: 10,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topLeftCorner: {
    ...cornerBaseStyle,
    top: BOX_TOP - 1,
    left: BOX_MARGIN - 1,
    borderBottomWidth: 0,
    borderRightWidth: 0,
  },
  topRightCorner: {
    ...cornerBaseStyle,
    top: BOX_TOP - 1,
    right: BOX_MARGIN - 1,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
  },
  bottomLeftCorner: {
    ...cornerBaseStyle,
    bottom: height - BOX_BOTTOM - 1,
    left: BOX_MARGIN - 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  bottomRightCorner: {
    ...cornerBaseStyle,
    bottom: height - BOX_BOTTOM - 1,
    right: BOX_MARGIN - 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
  },
  topOverlay: {
    ...overlayBaseStyle,
    top: 0,
    left: 0,
    right: 0,
    bottom: height - BOX_TOP,
  },
  leftOverlay: {
    ...overlayBaseStyle,
    top: BOX_TOP,
    left: 0,
    right: BOX_RIGHT,
    bottom: height - BOX_BOTTOM,
  },
  rightOverlay: {
    ...overlayBaseStyle,
    top: BOX_TOP,
    left: BOX_RIGHT,
    right: 0,
    bottom: height - BOX_BOTTOM,
  },
  bottomOverlay: {
    ...overlayBaseStyle,
    top: BOX_BOTTOM,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    position: 'absolute',
    top: 40,
    right: 0,
    alignItems: 'flex-start',
    left: 25,
  },
  headerText: {
    color: '#fff',
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: '400',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
