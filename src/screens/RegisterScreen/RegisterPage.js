import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
} from 'react-native';
import React from 'react';
import Logo from '../../assets/svg/Logo';
import {moderateScale} from 'react-native-size-matters';
import CustomInputs from './CustomInputs';
import BackHeader from '../../components/BackHeader';
import {useNavigation} from '@react-navigation/native';

const RegisterPage = () => {
  const navigation = useNavigation();
  const qrCodeHandler = () => navigation.navigate('QrCodeScreen');
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <BackHeader titleColor="#333" bgColor="#FFF" iconColor="#333" />
      <View style={styles.Container}>
        <Logo size={1.25} />
        <View style={styles.InputsDiv}>
          <CustomInputs label="نام و نام خانوادگی" />
          <CustomInputs label="شماره موبایل" />
          <CustomInputs
            label="شماره موبایل مشتری"
            placeholder="لطفا شماره موبایل مشتری خود را وارد کنید"
          />
          <CustomInputs label="کد" placeholder="لطفا کد خود را وارد کنید" />
        </View>
        <View style={styles.ButtonsDiv}>
          <TouchableOpacity style={styles.Button} activeOpacity={0.7}>
            <Text style={styles.ButtonText}>ثبت نام</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.Button, styles.ButtonSecendry]}
            activeOpacity={0.7}
            onPress={qrCodeHandler}>
            <Text style={[styles.ButtonText, styles.ButtonTextSecendry]}>
              اسکن کد
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  Container: {
    paddingHorizontal: moderateScale(25),
    paddingVertical: moderateScale(25),
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '92.5%',
  },
  InputsDiv: {
    width: '100%',
  },
  Button: {
    width: '100%',
    backgroundColor: '#404CCF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(8),
    height: moderateScale(50),
  },
  ButtonText: {
    fontFamily: 'Vazirmatn-Black',
    fontSize: moderateScale(18),
    color: '#FFF',
  },
  ButtonsDiv: {
    width: '100%',
  },
  ButtonSecendry: {
    marginTop: moderateScale(15),
    backgroundColor: '#FFF',
    borderColor: '#404CCF',
    borderWidth: moderateScale(2),
  },
  ButtonTextSecendry: {
    color: '#404CCF',
  },
});
