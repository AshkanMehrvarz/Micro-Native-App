import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {moderateScale} from 'react-native-size-matters';
import FlashIcon from '../../../../Assets/Svg/FlashIcon';
import CameraIcon from '../../../../Assets/Svg/CameraIcon';
import {RNCamera} from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import BackHeader from '../../../../Components/BackHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Style';

export default function QRScreen() {
  // States
  const [flashStatus, setFlashStatus] = React.useState(false);
  const [cameraStatus, setCameraStatus] = React.useState(true);

  // Screen Swaper
  const goRegisterPage = () => navigation.navigate('Register');

  // Variebles
  const navigation = useNavigation();

  // Functions
  const flashHandler = () => setFlashStatus(!flashStatus);
  const cameraHandler = () => setCameraStatus(!cameraStatus);
  const link = e => {
    console.log(e.data);
    AsyncStorage.setItem('code', e.data);
    goRegisterPage();
  };
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <View style={styles.BackHeader}>
          <BackHeader
            titleColor="transparent"
            bgColor="transparent"
            iconColor="#333"
          />
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
