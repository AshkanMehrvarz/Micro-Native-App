import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../assets/theme/Theme';
import {TextInput} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import PhoneIcon from '../../assets/svg/PhoneIcon';
import {Formik} from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import {useNavigation, useIsFocused} from '@react-navigation/native';

const EnterToApp = () => {
  const firstAnimatedView = new Animated.Value(0);
  const firstAnimatedFade = new Animated.Value(0);
  const [animatedFinished, setAnimatedFinished] = React.useState(false);
  let resetValues;

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const formSubmitHandler = e => {
    navigation.navigate('GetOTPCode', {phoneNumber: e.phoneNumber});
  };

  const goToRegister = () => navigation.navigate('RegisterScreen');

  const startFistViewAnimated = () => {
    Animated.timing(firstAnimatedView, {
      toValue: 1000,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(firstAnimatedFade, {
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setAnimatedFinished(true);
    }, 1000);
  };

  React.useEffect(() => {
    startFistViewAnimated();
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      resetValues();
    }, 500);
  }, [isFocused]);

  const registerValidationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .phone('IR', true, 'شماره وارد شده صحیح نمیباشد')
      .required('شماره موبایل مشتری الزامی میباشد'),
  });

  return (
    <SafeAreaView
      style={{backgroundColor: animatedFinished ? '#FFF' : colors.primary}}>
      <View
        style={[
          styles.Container,
          {backgroundColor: animatedFinished ? '#FFF' : colors.primary},
        ]}>
        <Animated.View
          style={[
            styles.AnimatedView,
            {
              transform: [{scale: firstAnimatedView}],
            },
          ]}></Animated.View>
        <Animated.View style={[{opacity: firstAnimatedFade}, styles.MainView]}>
          <Image
            source={require('../../assets/images/login.jpg')}
            style={styles.Image}
          />
          <Formik
            enableReinitialize={true}
            validationSchema={registerValidationSchema}
            initialValues={{
              phoneNumber: '',
            }}
            onSubmit={formSubmitHandler}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              resetForm,
              values,
              errors,
              isValid,
              touched,
            }) => {
              resetValues = resetForm;
              return (
                <View style={styles.Footers}>
                  <Text style={styles.InputTitle}>شماره موبایل</Text>
                  <View style={styles.InputDiv}>
                    <TextInput
                      style={styles.Input}
                      keyboardType="numeric"
                      name="phoneNumber"
                      maxLength={11}
                      onChangeText={handleChange('phoneNumber')}
                      onBlur={handleBlur('phoneNumber')}
                      value={values.phoneNumber}
                    />

                    <PhoneIcon />
                  </View>
                  {errors.phoneNumber && touched.phoneNumber && (
                    <Text style={styles.ErrorText}>{errors.phoneNumber}</Text>
                  )}
                  <TouchableOpacity
                    style={[styles.LoginButton, {opacity: !isValid ? 0.25 : 1}]}
                    activeOpacity={0.7}
                    onPress={handleSubmit}
                    disabled={!isValid}>
                    <Text style={styles.LoginButtonText}>ورود</Text>
                  </TouchableOpacity>

                  <View style={styles.RegisterTextsDiv}>
                    <Text style={styles.RegisterText1}>
                      حساب کاربری ندارید ?
                    </Text>
                    <TouchableOpacity onPress={goToRegister}>
                      <Text style={styles.RegisterText2}>ثبت نام کنید</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          </Formik>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default EnterToApp;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: colors.primary,
    position: 'relative',
  },
  AnimatedView: {
    height: 1,
    width: 1,
    backgroundColor: '#FFF',
    borderRadius: 9999,
    position: 'absolute',
  },
  MainView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Image: {
    height: '50%',
    width: '100%',
    resizeMode: 'contain',
  },
  Footers: {
    width: '100%',
    paddingHorizontal: moderateScale(25),
  },
  Input: {
    height: '98%',
    borderRadius: moderateScale(6),
    paddingHorizontal: moderateScale(10),
    width: '90%',
    color: colors.grey2,
    fontSize: moderateScale(14),
    textAlign: 'left',
    fontFamily: 'Vazirmatn-Regular',
  },
  InputTitle: {
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(16),
    textAlign: 'right',
    marginBottom: moderateScale(10),
    marginRight: moderateScale(5),
    color: colors.grey2,
  },
  InputDiv: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: moderateScale(10),
    width: '100%',
    borderColor: colors.grey4,
    borderRadius: moderateScale(6),
    borderWidth: moderateScale(1),
    height: moderateScale(50),
  },
  LoginButton: {
    backgroundColor: colors.primary,
    marginBottom: moderateScale(25),
    marginTop: moderateScale(50),
    height: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(6),
  },
  LoginButtonText: {
    fontFamily: 'Vazirmatn-Bold',
    color: '#FFF',
    fontSize: moderateScale(18),
  },
  RegisterTextsDiv: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScale(50),
  },
  RegisterText1: {
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    color: colors.grey1,
  },
  RegisterText2: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: moderateScale(16),
    color: colors.primary,
    marginRight: moderateScale(10),
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  ErrorText: {
    color: colors.error1,
    textAlign: 'right',
    fontFamily: 'Vazirmatn-Regular',
    marginTop: moderateScale(5),
  },
});
