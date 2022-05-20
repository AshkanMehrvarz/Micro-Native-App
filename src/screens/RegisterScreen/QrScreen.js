import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {moderateScale} from 'react-native-size-matters';
import FlashIcon from '../../assets/svg/FlashIcon';
import CameraIcon from '../../assets/svg/CameraIcon';
import {RNCamera} from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import BackHeader from '../../components/BackHeader';

export default function QRScreen() {
  const [flashStatus, setFlashStatus] = React.useState(false);
  const [cameraStatus, setCameraStatus] = React.useState(true);

  const flashHandler = () => setFlashStatus(!flashStatus);
  const cameraHandler = () => setCameraStatus(!cameraStatus);
  const link = () => Linking.openURL('https://www.google.com/');
  const Marker = () => {
    return <View style={styles.Marker}></View>;
  };
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <View style={styles.BackHeader}>
          <BackHeader titleColor="#333" bgColor="#FFFFFF" iconColor="#333" />
        </View>
        <View style={styles.Bottom}>
          <TouchableOpacity
            onPress={flashHandler}
            style={[
              styles.Flash,
              {backgroundColor: flashStatus ? '#FFF' : null},
            ]}>
            <FlashIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={cameraHandler}>
            <CameraIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.Mask}>
          <BarcodeMask
            edgeColor={'#404CCF'}
            showAnimatedLine={false}
            width={moderateScale(250)}
            height={moderateScale(250)}
          />
        </View>
        <QRCodeScanner
          onRead={link}
          cameraType={cameraStatus ? 'back' : 'front'}
          fadeIn={true}
          reactivate={true}
          flashMode={
            flashStatus
              ? RNCamera.Constants.FlashMode.torch
              : RNCamera.Constants.FlashMode.off
          }
          style={styles.QrCode}
          containerStyle={{
            height: '100%',
            backgroundColor: '#FFF',
          }}
          cameraStyle={{
            height: '100%',
            width: '100%',
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    position: 'relative',
    zIndex: 10,
    alignItems: 'center',
  },
  Bottom: {
    height: moderateScale(50),
    backgroundColor: '#FFFFFFCC',
    width: '80%',
    position: 'absolute',
    bottom: moderateScale(100),
    borderRadius: moderateScale(8),
    zIndex: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Flash: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Mask: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  BackHeader: {
    position: 'absolute',
    width: '100%',
    zIndex: 20,
  },
});
