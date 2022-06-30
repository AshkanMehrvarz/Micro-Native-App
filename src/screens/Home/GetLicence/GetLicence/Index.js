// Base
import {
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Image,
} from 'react-native';
import React from 'react';

// Packages
import {moderateScale} from 'react-native-size-matters';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast, {ErrorToast} from 'react-native-toast-message';
import {Formik} from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import NetInfo from '@react-native-community/netinfo';
import DropDownPicker from 'react-native-dropdown-picker';

// Ashkan
import QrIcon from '../../../../Assets/Svg/QrIcon';
import BackIconNew from '../../../../Assets/Svg/BackIconNew';
import {styles} from './Style';

const RegisterPage = () => {
  // States
  const [showRegister, setShowRegister] = React.useState(false);
  const [isConnectedToInternet, setIsConnectedToInternet] = React.useState();
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [id, setId] = React.useState(0);
  const [submitButtonStatus, setSubmitButtonStatus] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([]);
  const [items, setItems] = React.useState([
    {label: 'آذربایجان شرقی', value: 'آذربایجان شرقی'},
    {label: 'آذربایجان غربی', value: 'آذربایجان غربی'},
    {label: 'اردبیل', value: 'اردبیل'},
    {label: 'اصفهان', value: 'اصفهان'},
    {label: 'ایلام', value: 'ایلام'},
    {label: 'بوشهر', value: 'بوشهر'},
    {label: 'تهران', value: 'تهران'},
    {label: 'چهار محال و بختیاری', value: 'چهار محال و بختیاری'},
    {label: 'خوزستان', value: 'خوزستان'},
    {label: 'زنجان', value: 'زنجان'},
    {label: 'سمنان', value: 'سمنان'},
    {label: 'سیستان و بلوچستان', value: 'سیستان و بلوچستان'},
    {label: 'فارس', value: 'فارس'},
    {label: 'کرمان', value: 'کرمان'},
    {label: 'کردستان', value: 'کردستان'},
    {label: 'کرمانشاه', value: 'کرمانشاه'},
    {label: 'کهگیلویه و بویراحمد', value: 'کهگیلویه و بویراحمد'},
    {label: 'گیلان', value: 'گیلان'},
    {label: 'لرستان', value: 'لرستان'},
    {label: 'مازندران', value: 'مازندران'},
    {label: 'مرکزی', value: 'مرکزی'},
    {label: 'هرمزگان', value: 'هرمزگان'},
    {label: 'همدان', value: 'همدان'},
    {label: 'یزد', value: 'یزد'},
    {label: 'قم', value: 'قم'},
    {label: 'گلستان', value: 'گلستان'},
    {label: 'قزوین', value: 'قزوین'},
    {label: 'خراسان جنوبی', value: 'خراسان جنوبی'},
    {label: 'خراسان رضوی', value: 'خراسان رضوی'},
    {label: 'خراسان شمالی', value: 'خراسان شمالی'},
    {label: 'البرز', value: 'البرز'},
  ]);

  // Variables
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  let setFieldRef = null;
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

  // Screen Swaper Functions
  const RegisterButtonHandler = () => navigation.replace('Licence');
  const goHomeButton = () => navigation.navigate('Home');
  const qrCodeHandler = () => navigation.navigate('QrScanner');
  const goBackHandler = () => navigation.goBack();

  // Functions

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('isRegistered');
      const userCode = await AsyncStorage.getItem('code');
      if (value !== null) {
        setIsRegistered(value === 'false' ? false : true);
      }

      if (userCode !== null) {
        setFieldRef('code', userCode);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getNetInfo = () => {
    NetInfo.fetch().then(state => {
      setIsConnectedToInternet(state.isConnected);
    });
  };

  const formSubmitHandler = async values => {
    console.log(values);
    if (isConnectedToInternet) {
      try {
        setSubmitButtonStatus(true);
        setId(id + 1);
        const res = await axios.put(
          'http://151.106.35.10:2000/api/getlicence/getlicence',
          {
            Name: values.customerFullName,
            UserId: id,
            CodeMic: values.code,
            MobileNasab: 0,
            MobileMoshtari: values.customerPhoneNumber,
          },
        );
        console.log(res);
        if (res.status === 200) {
          setSubmitButtonStatus(false);
          if (res.data.ResultCode === 1) {
            Toast.show({
              type: 'error',
              text1: 'خطا',
              text2: 'کد وارد شده اشتباه است',
            });
          } else {
            AsyncStorage.setItem('isRegistered', 'true');
            AsyncStorage.setItem('licence', res.data.ResultMessage);
            RegisterButtonHandler();
            setTimeout(() => setShowRegister(true), 1000);
          }
        } else {
          console.log('errrrorrrr');
          Toast.show({
            type: 'error',
            text1: 'خطا',
            text2: 'خطایی از طرف سرور رخ داده است',
          });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('errrrrororororoororororoo');
      Toast.show({
        type: 'error',
        text1: 'دستگاه شما به اینترنت وصل نمیباشد',
        visibilityTime: 5000,
        topOffset: moderateScale(50),
      });
    }
  };

  // const onCodeChange = (e, setFieldValue) => {
  //   setFieldValue('code', e);
  // };

  // UseEffects
  React.useEffect(() => {
    getData();
    getNetInfo();
    // AsyncStorage.removeItem('code');
  }, [isFocused]);

  // Yup Schema
  const registerValidationSchema = yup.object().shape({
    customerFullName: yup
      .string()
      .max(32, 'تعداد کاراکتر ها بیش از حد مجاز است')
      .min(4, 'تعداد کاراکتر ها کمتر از حد مجاز است')
      .required('نام و نام خانوادگی مشتری الزامی میباشد'),

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
    // state: yup
    //   .array()
    //   .min(1, 'انتخاب حداقل یک استان الزامی میباشد')
    //   .required('انتخاب حداقل یک استان الزامی میباشد'),
  });

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.MainContainer}>
        {!isRegistered ? (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Formik
              enableReinitialize={true}
              validationSchema={registerValidationSchema}
              initialValues={{
                customerFullName: '',
                customerPhoneNumber: '',
                code: '',
                // state: '',
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
                setFieldValue,
              }) => {
                setFieldRef = setFieldValue;
                return (
                  <View
                    style={{
                      padding: moderateScale(25),
                      justifyContent: 'space-between',
                      height: '100%',
                    }}>
                    <View>
                      <View style={styles.InputsDiv}>
                        <TouchableOpacity
                          style={styles.BackHeaderButton}
                          onPress={goBackHandler}>
                          <BackIconNew />
                          <Text style={styles.BackHeaderButtonText}>برگشت</Text>
                        </TouchableOpacity>
                        <View style={styles.InputsContainer}>
                          <TextInput
                            name="customerFullName"
                            style={styles.Input}
                            placeholder={' نام و نام خانوادگی مشتری'}
                            placeholderTextColor="#33333380"
                            onChangeText={handleChange('customerFullName')}
                            onBlur={handleBlur('customerFullName')}
                            value={values.customerFullName}
                            keyboardType="default"
                            maxLength={32}
                          />
                          {errors.customerFullName &&
                            touched.customerFullName && (
                              <Text style={styles.ErrorText}>
                                {errors.customerFullName}
                              </Text>
                            )}
                        </View>

                        <View style={styles.InputsContainer}>
                          <TextInput
                            name="customerPhoneNumber"
                            style={styles.Input}
                            placeholder={'شماره موبایل مشتری'}
                            placeholderTextColor="#33333380"
                            onChangeText={handleChange('customerPhoneNumber')}
                            onBlur={handleBlur('customerPhoneNumber')}
                            value={values.customerPhoneNumber}
                            keyboardType="numeric"
                            maxLength={11}
                          />
                          {errors.customerPhoneNumber &&
                            touched.customerPhoneNumber && (
                              <Text style={styles.ErrorText}>
                                {errors.customerPhoneNumber}
                              </Text>
                            )}
                        </View>

                        <View style={[styles.InputsContainer]}>
                          <View style={styles.CodeSection}>
                            <TouchableOpacity
                              activeOpacity={0.7}
                              onPress={qrCodeHandler}>
                              <QrIcon />
                            </TouchableOpacity>
                            <TextInput
                              name="code"
                              style={[styles.Input, styles.QrInput]}
                              placeholder={'کد'}
                              placeholderTextColor="#33333380"
                              onChangeText={handleChange('code')}
                              onBlur={handleBlur('code')}
                              value={values.code}
                              keyboardType="numeric"
                              maxLength={24}
                            />
                          </View>

                          {errors.code && touched.code && (
                            <Text style={styles.ErrorText}>{errors.code}</Text>
                          )}
                        </View>

                        {/* <View style={styles.InputsContainer}>
                          <DropDownPicker
                            textStyle={{
                              fontSize: moderateScale(16),
                              fontFamily: 'Vazirmatn-Regular',
                              textAlign: 'right',
                              marginRight: moderateScale(10),
                              color: colors.grey2,
                            }}
                            style={{
                              backgroundColor: '#FFF',
                              borderColor: colors.grey4,
                            }}
                            placeholder="استان های فعالیت مشتری را انتخاب کنید"
                            maxHeight={220}
                            searchTextInputProps={{
                              maxLength: 25,
                              style: {
                                textAlign: 'right',
                                width: '100%',
                                fontFamily: 'Vazirmatn-Regular',
                                paddingRight: moderateScale(10),
                              },
                            }}
                            searchPlaceholder="جستوجوی استان..."
                            placeholderStyle={{
                              color: colors.grey3,
                              fontFamily: 'Vazirmatn-Regular',
                              fontSize: moderateScale(14),
                            }}
                            badgeDotColors={[colors.primary]}
                            dropDownContainerStyle={{
                              borderColor: colors.grey4,
                            }}
                            searchContainerStyle={{
                              borderBottomColor: colors.grey4,
                            }}
                            scrollViewProps={{
                              style: {
                                marginVertical: moderateScale(10),
                              },
                            }}
                            searchable={true}
                            multiple={true}
                            autoScroll={true}
                            addCustomItem={true}
                            listMode="SCROLLVIEW"
                            min={1}
                            max={10}
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            mode="BADGE"
                            onChangeValue={e => setFieldValue('state', e)}
                          />
                          {errors.state && touched.state && (
                            <Text style={styles.ErrorText}>{errors.state}</Text>
                          )}
                        </View> */}
                      </View>
                    </View>
                    <View style={styles.ButtonsDiv}>
                      {!submitButtonStatus ? (
                        <TouchableOpacity
                          style={[
                            styles.Button,
                            {opacity: !isValid ? 0.25 : 1},
                          ]}
                          activeOpacity={0.7}
                          onPress={handleSubmit}
                          disabled={!isValid}>
                          <Text style={styles.ButtonText}>دریافت لایسنس</Text>
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
                    </View>
                  </View>
                );
              }}
            </Formik>
          </KeyboardAvoidingView>
        ) : showRegister ? (
          <View style={styles.ErrorView}>
            <Image
              style={styles.ErrorImage}
              source={require('../../../../Assets/Images/error.jpg')}
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
      </View>
      <Toast topOffset={moderateScale(50)} config={toastConfig} />
    </SafeAreaView>
  );
};

export default RegisterPage;
