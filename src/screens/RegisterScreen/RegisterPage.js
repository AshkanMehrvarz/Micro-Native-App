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

const RegisterPage = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.Container}>
        <Logo size={1.25} />
        <View style={styles.InputsDiv}>
          <CustomInputs
            label="نام و نام خانوادگی"
            placeholder="لطفا نام و نام خانوادگی خود را وارد کنید"
          />
          <CustomInputs
            label="شماره موبایل"
            placeholder="لطفا شماره موبایل خود را وارد کنید"
          />
          <CustomInputs
            label="شماره موبایل مشتری"
            placeholder="لطفا شماره موبایل مشتری خود را وارد کنید"
          />
          <CustomInputs label="کد" placeholder="لطفا کد خود را وارد کنید" />
        </View>
        <TouchableOpacity style={styles.Button} activeOpacity={0.7}>
          <Text style={styles.ButtonText}>ثبت نام</Text>
        </TouchableOpacity>
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
    paddingVertical: moderateScale(50),
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
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
});
