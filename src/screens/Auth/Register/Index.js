// Base
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';

// Packages
import DropDownPicker from 'react-native-dropdown-picker';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import {Formik} from 'formik';
import * as yup from 'yup';
import 'yup-phone';

// Ashkan
import {colors} from '../../../Assets/Theme/Index';
import BackIconNew from '../../../Assets/Svg/BackIconNew';
import {styles} from './Style';
import axios from 'axios';

const Register = () => {
  // States
  const [loadingStatus, setLoadingStatus] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'آذربایجان شرقی', value: 1},
    {label: 'آذربایجان غربی', value: 2},
    {label: 'اصفهان', value: 3},
    {label: 'البرز', value: 4},
    {label: 'اردبیل', value: 5},
    {label: 'ایلام', value: 6},
    {label: 'بوشهر', value: 7},
    {label: 'تهران', value: 8},
    {label: 'چهار محال و بختیاری', value: 9},
    {label: 'خراسان جنوبی', value: 10},
    {label: 'خراسان رضوی', value: 11},
    {label: 'خراسان شمالی', value: 12},
    {label: 'خوزستان', value: 13},
    {label: 'زنجان', value: 14},
    {label: 'سمنان', value: 15},
    {label: 'سیستان و بلوچستان', value: 16},
    {label: 'فارس', value: 17},
    {label: 'قزوین', value: 18},
    {label: 'قم', value: 19},
    {label: 'کردستان', value: 20},
    {label: 'کرمان', value: 21},
    {label: 'کرمانشاه', value: 22},
    {label: 'کهگیلویه و بویراحمد', value: 23},
    {label: 'گلستان', value: 24},
    {label: 'گیلان', value: 25},
    {label: 'لرستان', value: 26},
    {label: 'مازندران', value: 27},
    {label: 'مرکزی', value: 28},
    {label: 'هرمزگان', value: 29},
    {label: 'همدان', value: 30},
    {label: 'یزد', value: 31},
  ]);

  // Screen Swaper
  const goBackHandler = () => navigation.goBack();

  // Variables
  const navigation = useNavigation();

  // Functions
  const registerFormSubmitHandler = async values => {
    setLoadingStatus(true);
    let states = [];
    values.state.map(e => {
      states.push({State: e});
    });
    try {
      const res = await axios.put(
        'http://151.106.35.10:2000/api/Register/Register',
        {
          LstRegister: states,
          FullName: values.fullName,
          UserName: '',
          UserPass: '',
          Mobile: values.phoneNumber,
        },
      );
      setLoadingStatus(false);
      if (res.status === 200) {
        if (res.data.ResultCode === 1) {
          navigation.navigate('OTP', {phoneNumber: values.phoneNumber});
        } else {
          console.log('res.data.ResultCode is not 1');
        }
      } else {
        console.log('res.status is not 200');
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Yup
  const registerValidationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .phone('IR', true, 'شماره وارد شده صحیح نمیباشد')
      .required('شماره موبایل مشتری الزامی میباشد'),
    fullName: yup
      .string()
      .max(32, 'تعداد کاراکتر ها بیش از حد مجاز است')
      .min(4, 'تعداد کاراکتر ها کمتر از حد مجاز است')
      // .matches(
      //   /[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s]+$/,
      //   'فقط الفبای فارسی مجاز است',
      // )
      .required('نام و نام خانوادگی الزامی میباشد'),
    state: yup
      .array()
      .min(1, 'انتخاب حداقل یک استان الزامی میباشد')
      .required('انتخاب حداقل یک استان الزامی میباشد'),
  });

  return (
    <SafeAreaView style={{backgroundColor: '#FFF'}}>
      <Formik
        enableReinitialize={true}
        validationSchema={registerValidationSchema}
        onSubmit={registerFormSubmitHandler}
        initialValues={{
          fullName: '',
          phoneNumber: '',
          state: '',
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          isValid,
          touched,
        }) => {
          return (
            <View style={styles.Container}>
              <View>
                <View>
                  <TouchableOpacity
                    style={styles.BackHeaderButton}
                    onPress={goBackHandler}>
                    <BackIconNew />
                    <Text style={styles.BackHeaderButtonText}>برگشت</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.Header}>
                  <Text style={styles.h1}>ساخت حساب کاربری</Text>
                  <Text style={styles.DisText}>
                    برای استفاده از برنامه ابتدا شما باید ثبت نام کرده باشید
                  </Text>
                </View>
                <View style={styles.InputDiv}>
                  <TextInput
                    style={styles.Input}
                    placeholder="نام و نام خانوادگی"
                    placeholderTextColor={colors.grey3}
                    keyboardType="default"
                    name="fullName"
                    onChangeText={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    value={values.fullName}
                  />
                  {errors.fullName && touched.fullName && (
                    <Text style={styles.ErrorText}>{errors.fullName}</Text>
                  )}
                </View>
                <View style={styles.InputDiv}>
                  <TextInput
                    style={styles.Input}
                    placeholder="شماره موبایل"
                    keyboardType="numeric"
                    placeholderTextColor={colors.grey3}
                    name="phoneNumber"
                    maxLength={11}
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    value={values.phoneNumber}
                  />
                  {errors.phoneNumber && touched.phoneNumber && (
                    <Text style={styles.ErrorText}>{errors.phoneNumber}</Text>
                  )}
                </View>
                <View style={[styles.InputDiv]}>
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
                    placeholder="استان های فعالیت خود را انتخاب کنید"
                    maxHeight={moderateScale(200)}
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
                </View>
              </View>
              <TouchableOpacity
                style={[styles.RegisterButton, {opacity: !isValid ? 0.25 : 1}]}
                disabled={!isValid}
                onPress={handleSubmit}>
                {loadingStatus ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text style={styles.RegisterButtonText}>ثبت نام</Text>
                )}
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default Register;
