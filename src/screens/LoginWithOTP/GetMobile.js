import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Logo from '../../assets/svg/Logo';
import {moderateScale} from 'react-native-size-matters';
import {Formik} from 'formik';
import * as yup from 'yup';
import 'yup-phone';

const GetMobile = () => {
  const [isSubmited, setIsSubmited] = React.useState(false);

  const registerValidationSchema = yup.object().shape({
    phone: yup
      .string()
      .phone('IR', true, 'شماره وارد شده صحیح نمیباشد')
      .required('شماره موبایل مشتری الزامی میباشد'),
  });

  const submitPhoneNumber = () => {
    setIsSubmited(true);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#FFF'}}>
      <Formik
        initialValues={{phone: ''}}
        validationSchema={registerValidationSchema}
        onSubmit={submitPhoneNumber}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => {
          return (
            <View style={styles.Container}>
              <View style={styles.Header}>
                <Logo size={1.25} />
                <View style={styles.InputDiv}>
                  <Text style={styles.InputTitle}>شماره موبایل :</Text>
                  <TextInput
                    style={[
                      styles.Input,
                      {
                        backgroundColor: !isSubmited ? '#FFF' : '#33333310',
                        color: !isSubmited ? '#000' : '#33333380',
                      },
                    ]}
                    editable={!isSubmited}
                    name="phone"
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    keyboardType="numeric"
                  />
                  {errors.phone && touched.phone && (
                    <Text style={styles.ErrorText}>{errors.phone}</Text>
                  )}
                </View>
              </View>
              <TouchableOpacity
                style={[
                  styles.SendOTPCodeButton,
                  {opacity: !isValid ? 0.25 : 1},
                ]}
                onPress={handleSubmit}
                disabled={!isValid}>
                <Text style={styles.SendOTPCodeButtonText}>
                  دریافت کد یکبار مصرف
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default GetMobile;

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: '100%',
    justifyContent: 'space-between',
    padding: moderateScale(25),
  },
  SendOTPCodeButton: {
    backgroundColor: '#404CCF',
    width: '100%',
    alignItems: 'center',
    paddingVertical: moderateScale(12.5),
    borderRadius: moderateScale(8),
  },
  SendOTPCodeButtonText: {
    fontFamily: 'Vazirmatn-Bold',
    color: '#FFF',
    fontSize: moderateScale(16),
  },
  Header: {
    width: '100%',
    alignItems: 'center',
  },
  Input: {
    backgroundColor: '#FFF',
    height: moderateScale(40),
    width: '100%',
    borderRadius: moderateScale(4),
    borderColor: '#33333380',
    borderWidth: moderateScale(1),
    paddingHorizontal: moderateScale(10),
    textAlign: 'right',
    color: '#000',
  },
  InputDiv: {
    width: '100%',
    marginTop: moderateScale(100),
  },
  InputTitle: {
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    textAlign: 'right',
    marginBottom: moderateScale(10),
  },
  ErrorText: {
    color: 'red',
    textAlign: 'left',
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(12),
    marginTop: moderateScale(5),
    marginLeft: moderateScale(2.5),
  },
});
