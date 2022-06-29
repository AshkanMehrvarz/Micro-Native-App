// Base
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
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

const Register = () => {
  // States
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
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

  // Screen Swaper
  const goBackHandler = () => navigation.goBack();
  const registerFormSubmitHandler = values => {
    navigation.navigate('OTP', {phoneNumber: values.phoneNumber});
  };

  // Variables
  const navigation = useNavigation();

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
      .matches(
        /[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s]+$/,
        'فقط الفبای فارسی مجاز است',
      )
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
                <Text style={styles.RegisterButtonText}>ثبت نام</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default Register;
