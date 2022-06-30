// Base
import {
  Text,
  View,
  SafeAreaView,
  Animated,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

// Packages
import {Formik} from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import Toast, {ErrorToast} from 'react-native-toast-message';

// Ashkan
import {colors} from '../../../Assets/Theme/Index';
import PhoneIcon from '../../../Assets/Svg/PhoneIcon';
import {styles} from './Style';
import {moderateScale} from 'react-native-size-matters';

const EnterToApp = () => {
  // States
  const [animatedFinished, setAnimatedFinished] = React.useState(false);
  const [loadingStatus, setLoadingStatus] = React.useState(false);

  // Variables
  const firstAnimatedView = new Animated.Value(0);
  const firstAnimatedFade = new Animated.Value(0);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  let resetValues;
  const toastConfig = {
    error: props => (
      <ErrorToast
        {...props}
        style={styles.ToastDiv}
        text1Style={styles.ToastText1}
        text2Style={styles.ToastText2}
      />
    ),
  };

  // Screen Swaper
  const goToRegister = () => navigation.navigate('Register');

  // Functions
  const formSubmitHandler = async values => {
    setLoadingStatus(true);
    try {
      const res = await axios.put(
        'http://151.106.35.10:2000/api/userlogin/login',
        {
          pMobile: values.phoneNumber,
          OTPCode: '',
          ForOTP: true,
        },
      );
      setLoadingStatus(false);

      if (res.status === 200) {
        if (res.data.ResultCode === 0) {
          navigation.navigate('OTP', {phoneNumber: values.phoneNumber});
        } else {
          console.log('res.data.ResultCode is not 0');
          Toast.show({
            type: 'error',
            text1: 'خطا',
            text2: 'شماره موبایل ثبت نشده است',
          });
        }
      } else {
        console.log('res.status is not 200');
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Animations
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

  // Yup
  const registerValidationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .phone('IR', true, 'شماره وارد شده صحیح نمیباشد')
      .required('شماره موبایل مشتری الزامی میباشد'),
  });

  // UseEffects
  React.useEffect(() => {
    startFistViewAnimated();
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      resetValues();
    }, 500);
  }, [isFocused]);

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
            source={require('../../../Assets/Images/login.jpg')}
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
                    {loadingStatus ? (
                      <ActivityIndicator size="small" color="white" />
                    ) : (
                      <Text style={styles.LoginButtonText}>ورود</Text>
                    )}
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
      <Toast config={toastConfig} topOffset={moderateScale(50)} />
    </SafeAreaView>
  );
};

export default EnterToApp;
