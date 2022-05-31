import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import React from 'react';
import Logo from '../../assets/svg/Logo';
import {moderateScale} from 'react-native-size-matters';
import BackHeader from '../../components/BackHeader';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {Formik} from 'formik';
import * as yup from 'yup';
import 'yup-phone';

const RegisterPage = () => {
  const [showRegister, setShowRegister] = React.useState(false);

  const registerPagePlaceholderShowTimeout = () => {
    setTimeout(() => setShowRegister(true), 1000);
  };

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const RegisterButtonHandler = () => navigation.navigate('LinenceScreen');
  const goHomeButton = () => navigation.navigate('Home');
  const qrCodeHandler = () => navigation.navigate('QrCodeScreen');
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [code, setCode] = React.useState();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('isRegistered');
      const userCode = await AsyncStorage.getItem('code');
      if (value !== null) {
        setIsRegistered(value === 'false' ? false : true);
      }

      if (userCode !== null) {
        console.log(userCode);
        setCode(userCode);
      }
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getData();
    registerPagePlaceholderShowTimeout();
    AsyncStorage.removeItem('code');
  }, [isFocused]);

  const [id, setId] = React.useState(0);
  const [submitButtonStatus, setSubmitButtonStatus] = React.useState(false);
  const registerValidationSchema = yup.object().shape({
    fullName: yup
      .string()
      .max(32, 'تعداد کاراکتر ها بیش از حد مجاز است')
      .min(4, 'تعداد کاراکتر ها کمتر از حد مجاز است')
      .matches(
        /[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s]+$/,
        'فقط الفبای فارسی مجاز است',
      )
      .required('نام و نام خانوادگی الزامی میباشد'),

    phoneNumber: yup
      .string()
      .phone('IR', true, 'شماره وارد شده صحیح نمیباشد')
      .required('شماره موبایل الزامی میباشد'),

    customerPhoneNumber: yup
      .string()
      .phone('IR', true, 'شماره وارد شده صحیح نمیباشد')
      .required('شماره موبایل مشتری الزامی میباشد'),
    code: yup
      .number()
      .typeError('کد وارد شده باید عدد انگلیسی باشد')
      .required('کد الزامی میباشد')
      .min(100000000000000000000000, 'کد وارد شده باید ۲۴ رقم باشد')
      .max(1000000000000000000000000, 'کد وارد شده باید ۲۴ رقم باشد'),
  });

  const formSubmitHandler = async values => {
    setSubmitButtonStatus(true);
    setId(id + 1);
    const res = await axios.put(
      'http://151.106.35.10:2000/api/getlicence/getlicence',
      {
        Name: values.fullName,
        UserId: id,
        CodeMic: values.code,
        MobileNasab: values.phoneNumber,
        MobileMoshtari: values.customerPhoneNumber,
      },
    );
    setSubmitButtonStatus(false);
    if (res.data.ResultCode === 1) {
      Toast.show({
        type: 'error',
        text1: 'کد وارد شده اشتباه است',
        visibilityTime: 5000,
        topOffset: moderateScale(50),
      });
    } else {
      AsyncStorage.setItem('isRegistered', 'true');
      AsyncStorage.setItem('licence', res.data.ResultMessage);
      RegisterButtonHandler();
    }

    console.log(res);
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      {!isRegistered ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <BackHeader
            titleColor="transparent"
            bgColor="transparent"
            iconColor="#333"
          />
          <ScrollView>
            <Formik
              validationSchema={registerValidationSchema}
              initialValues={{
                fullName: '',
                phoneNumber: '',
                customerPhoneNumber: '',
                code: '',
              }}
              onSubmit={formSubmitHandler}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
                touched,
              }) => (
                <View style={styles.Container}>
                  <Logo size={1.25} />
                  <View style={styles.InputsDiv}>
                    <View style={styles.InputsContainer}>
                      <Text style={styles.Label}>نام و نام خانوادگی</Text>
                      <TextInput
                        name="fullName"
                        style={styles.Input}
                        placeholderTextColor="#33333380"
                        onChangeText={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        value={values.fullName}
                        keyboardType="default"
                      />
                      {errors.fullName && touched.fullName && (
                        <Text style={styles.ErrorText}>{errors.fullName}</Text>
                      )}
                    </View>

                    <View style={styles.InputsContainer}>
                      <Text style={styles.Label}>شماره موبایل</Text>
                      <TextInput
                        name="phoneNumber"
                        style={styles.Input}
                        placeholder={'09306817599'}
                        placeholderTextColor="#33333380"
                        onChangeText={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        value={values.phoneNumber}
                        keyboardType="numeric"
                      />
                      {errors.phoneNumber && touched.phoneNumber && (
                        <Text style={styles.ErrorText}>
                          {errors.phoneNumber}
                        </Text>
                      )}
                    </View>

                    <View style={styles.InputsContainer}>
                      <Text style={styles.Label}>شماره موبایل مشتری</Text>
                      <TextInput
                        name="customerPhoneNumber"
                        style={styles.Input}
                        placeholder={'لطفا شماره موبایل مشتری خود را وارد کنید'}
                        placeholderTextColor="#33333380"
                        onChangeText={handleChange('customerPhoneNumber')}
                        onBlur={handleBlur('customerPhoneNumber')}
                        value={values.customerPhoneNumber}
                        keyboardType="numeric"
                      />
                      {errors.customerPhoneNumber &&
                        touched.customerPhoneNumber && (
                          <Text style={styles.ErrorText}>
                            {errors.customerPhoneNumber}
                          </Text>
                        )}
                    </View>

                    <View style={styles.InputsContainer}>
                      <Text style={styles.Label}>کد</Text>
                      <TextInput
                        name="code"
                        style={styles.Input}
                        placeholder={'لطفا کد خود را وارد کنید'}
                        placeholderTextColor="#33333380"
                        onChangeText={handleChange('code')}
                        onBlur={handleBlur('code')}
                        value={code === null ? values.code : code}
                        keyboardType="numeric"
                      />
                      {errors.code && touched.code && (
                        <Text style={styles.ErrorText}>{errors.code}</Text>
                      )}
                    </View>
                  </View>
                  <View style={styles.ButtonsDiv}>
                    {!submitButtonStatus ? (
                      <TouchableOpacity
                        style={[styles.Button, {opacity: !isValid ? 0.25 : 1}]}
                        activeOpacity={0.7}
                        onPress={handleSubmit}
                        disabled={!isValid}>
                        <Text style={styles.ButtonText}>ثبت نام</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={[
                          styles.Button,
                          {
                            flexDirection: 'row-reverse',
                            justifyContent: 'space-around',
                            paddingHorizontal: moderateScale(100),
                          },
                        ]}
                        disabled={true}>
                        <ActivityIndicator size="small" color="#FFF" />
                      </TouchableOpacity>
                    )}

                    <TouchableOpacity
                      style={[styles.Button, styles.ButtonSecendry]}
                      activeOpacity={0.7}
                      onPress={qrCodeHandler}>
                      <Text
                        style={[styles.ButtonText, styles.ButtonTextSecendry]}>
                        اسکن کد
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </ScrollView>
        </KeyboardAvoidingView>
      ) : showRegister ? (
        <View style={styles.ErrorView}>
          <Image
            style={styles.ErrorImage}
            source={require('../../assets/images/error.jpg')}
          />
          <Text style={styles.ErrorMessage}>شما قبلا ثبت نام کرده اید</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.ErrorButton}
            onPress={goHomeButton}>
            <Text style={styles.ErrorButtonText}>بازگشت به خانه</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <Toast />
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
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '92.5%',
  },
  InputsDiv: {
    width: '100%',
    marginTop: moderateScale(25),
  },
  Button: {
    width: '100%',
    backgroundColor: '#404CCF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(8),
    height: moderateScale(50),
    marginTop: moderateScale(25),
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
  Input: {
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: moderateScale(8),
    height: moderateScale(40),
    borderColor: '#33333380',
    borderWidth: moderateScale(2),
    paddingHorizontal: moderateScale(10),
    textAlign: 'right',
    fontFamily: 'Vazirmatn-Regular',
  },
  Label: {
    fontFamily: 'Vazirmatn-Medium',
    color: '#333',
    fontSize: moderateScale(14),
    textAlign: 'right',
    marginBottom: moderateScale(5),
    marginRight: moderateScale(2.5),
  },
  InputsContainer: {
    marginVertical: moderateScale(7.5),
  },
  ErrorText: {
    color: 'red',
    textAlign: 'left',
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(12),
    marginTop: moderateScale(5),
    marginLeft: moderateScale(2.5),
  },
  ErrorView: {
    height: '100%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(25),
  },
  ErrorMessage: {
    fontFamily: 'Vazirmatn-Bold',
    color: 'red',
    fontSize: moderateScale(18),
    marginBottom: moderateScale(50),
  },
  ErrorImage: {
    height: '37.5%',
    resizeMode: 'contain',
  },
  ErrorButton: {
    backgroundColor: '#ff4f5a',
    width: '60%',
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(6),
  },
  ErrorButtonText: {
    fontFamily: 'Vazirmatn-Black',
    fontSize: moderateScale(16),
    color: '#FFF',
    textAlign: 'center',
  },
});
