import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import BackIconNew from '../../assets/svg/BackIconNew';
import {colors} from '../../assets/theme/Theme';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import ResendIcon from '../../assets/svg/ReendIcon';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GetOTPCode = props => {
  const [timer, setTimer] = React.useState({min: 2, sec: 0});
  const [loadingStatus, setLoadingStatus] = React.useState(false);
  const [inputEditableStatus, setInputEditableStatus] = React.useState(true);
  const [selectedInput, setSelectedInput] = React.useState();
  const [finished, setFinished] = React.useState(false);
  const [otpCode, setOTPCode] = React.useState({
    1: '',
    2: '',
    3: '',
    4: '',
  });
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] =
    React.useState(false);
  const navigation = useNavigation();
  const goBackHandler = () => navigation.goBack();
  const phoneNumber = props.route.params.phoneNumber;

  const input1 = React.useRef();
  const input2 = React.useRef();
  const input3 = React.useRef();
  const input4 = React.useRef();

  const resendCode = () => {
    setTimer({min: 2, sec: 0});
    setFinished(false);
    setInputEditableStatus(true);
    setOTPCode({
      1: '',
      2: '',
      3: '',
      4: '',
    });
    getData();
  };

  React.useEffect(() => {
    const timerId = setInterval(() => {
      if (timer.min === 0 && timer.sec === 0) {
        setFinished(true);
        setInputEditableStatus(false);
        setSelectedInput();
        setIsSubmitButtonDisabled(false);
        clearInterval(timerId);
      } else if (timer.sec > 0) {
        setTimer({...timer, sec: timer.sec - 1});
      } else {
        setTimer({...timer, min: timer.min - 1, sec: 59});
      }
    }, 10);

    return () => {
      clearInterval(timerId);
    };
  }, [timer]);

  React.useEffect(() => {
    if (
      otpCode[1] !== '' &&
      otpCode[2] !== '' &&
      otpCode[3] !== '' &&
      otpCode[4] !== ''
    ) {
      setIsSubmitButtonDisabled(true);
    } else {
      setIsSubmitButtonDisabled(false);
    }
  }, [otpCode]);

  React.useEffect(() => {
    getData();
    input1.current.focus();
  }, []);

  const baseUrl = 'https://api.sabanovin.com';
  const version = 'v1';
  const username = 'sa1737973624';
  const password = '7rRB7QCvptjuoujro45f4ppZOkLtl4sIEYa3';
  const sender = 'sms/send.json?gateway=90003002&';

  const getData = async () => {
    try {
      const res = await axios.put(
        'http://151.106.35.10:2000/api/userlogin/login',
        {
          pMobile: '09140000000',
          OTPCode: '',
          ForOTP: true,
        },
      );

      if (res.status === 200) {
        if (res.data.ResultCode === 0) {
          await axios.get(
            `${baseUrl}/${version}/${username}:${password}/${sender}to=$${phoneNumber}&text=کد تایید = ${res.data.OtpCodeResult}`,
          );
        } else {
          console.log(res.data.ResultMessage);
        }
      } else {
        console.log('res.status is not 200');
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = async () => {
    const finalOTPCode = otpCode[1] + otpCode[2] + otpCode[3] + otpCode[4];
    setLoadingStatus(true);
    try {
      const res = await axios.put(
        'http://151.106.35.10:2000/api/userlogin/login',
        {
          pMobile: '09140000000',
          OTPCode: finalOTPCode,
          ForOTP: false,
        },
      );
      setLoadingStatus(false);
      if (res.status === 200) {
        if (res.data.ResultCode === 0) {
          console.log(res.data.ResultMessage);
          navigation.replace('HomeScreen');
          AsyncStorage.setItem('isUserLoggedIn', 'true');
          setOTPCode([]);
        } else {
          console.log(res.data.ResultMessage);
          Toast.show({
            type: 'error',
            text1: 'کد وارد شده صحیح نمیباشد',
            visibilityTime: 5000,
            topOffset: moderateScale(50),
          });
        }
      } else {
        console.log('res.status is not 200');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: '#FFF'}}>
      <View style={styles.Container}>
        <View>
          <View>
            <TouchableOpacity
              style={styles.BackHeaderButton}
              onPress={goBackHandler}>
              <BackIconNew />
              <Text style={styles.BackHeaderButtonText}>
                تایید شماره موبایل
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Contents}>
            <Text style={styles.h1}>لطفا کد ارسال شده را وارد کنید</Text>
            {!finished ? (
              <Text style={styles.WarningText}>
                کد تایید به شماره <Text> {phoneNumber} </Text> ارسال شد و بعد از
                <Text style={styles.TimeText}>{`  ${String(timer.min).padStart(
                  2,
                  '0',
                )}:${String(timer.sec).padStart(2, '0')}  `}</Text>
                منقضی میشود
              </Text>
            ) : (
              <Text style={styles.TimeEndText}>
                کد ارسال شده به شماره <Text>{phoneNumber}</Text> منقضی شد
              </Text>
            )}

            <View style={styles.CodeContainer}>
              <TextInput
                style={[
                  styles.CodeInput,
                  {
                    borderColor:
                      selectedInput === 1 ? colors.primary : colors.grey4,
                    borderWidth: selectedInput === 1 ? 2 : 1,
                    color: inputEditableStatus ? colors.grey1 : colors.grey4,
                  },
                ]}
                maxLength={1}
                ref={input1}
                onFocus={() => setSelectedInput(1)}
                editable={inputEditableStatus}
                keyboardType="numeric"
                value={otpCode[1]}
                onChangeText={e => {
                  setOTPCode({...otpCode, 1: e});
                  if (e.length === 1) {
                    input2.current.focus();
                  }
                }}
              />
              <TextInput
                style={[
                  styles.CodeInput,
                  {
                    borderColor:
                      selectedInput === 2 ? colors.primary : colors.grey4,
                    borderWidth: selectedInput === 2 ? 2 : 1,
                    color: inputEditableStatus ? colors.grey1 : colors.grey4,
                  },
                ]}
                maxLength={1}
                ref={input2}
                editable={inputEditableStatus}
                onFocus={() => setSelectedInput(2)}
                value={otpCode[2]}
                onChangeText={e => {
                  setOTPCode({...otpCode, 2: e});
                  if (e.length === 1) {
                    input3.current.focus();
                  } else {
                    input1.current.focus();
                  }
                }}
                keyboardType="numeric"
              />
              <TextInput
                style={[
                  styles.CodeInput,
                  {
                    borderColor:
                      selectedInput === 3 ? colors.primary : colors.grey4,
                    borderWidth: selectedInput === 3 ? 2 : 1,
                    color: inputEditableStatus ? colors.grey1 : colors.grey4,
                  },
                ]}
                maxLength={1}
                ref={input3}
                editable={inputEditableStatus}
                onFocus={() => setSelectedInput(3)}
                keyboardType="numeric"
                value={otpCode[3]}
                onChangeText={e => {
                  setOTPCode({...otpCode, 3: e});
                  if (e.length === 1) {
                    input4.current.focus();
                  } else {
                    input2.current.focus();
                  }
                }}
              />
              <TextInput
                style={[
                  styles.CodeInput,
                  {
                    borderColor:
                      selectedInput === 4 ? colors.primary : colors.grey4,
                    borderWidth: selectedInput === 4 ? 2 : 1,
                    color: inputEditableStatus ? colors.grey1 : colors.grey4,
                  },
                ]}
                maxLength={1}
                ref={input4}
                editable={inputEditableStatus}
                onFocus={() => setSelectedInput(4)}
                keyboardType="numeric"
                value={otpCode[4]}
                onChangeText={e => {
                  setOTPCode({...otpCode, 4: e});
                  if (e.length === 1) {
                    input4.current.blur();
                    setSelectedInput(0);
                  } else {
                    input3.current.focus();
                  }
                }}
              />
            </View>
            {finished ? (
              <View style={styles.DidNotgetCode}>
                <Text style={styles.DidNotgetCodeText}>
                  کد را دریافت نکردید ؟
                </Text>
                <TouchableOpacity style={styles.Resend} onPress={resendCode}>
                  <Text style={styles.ResendText}>ارسال دوباره کد</Text>
                  <ResendIcon />
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
        {!loadingStatus ? (
          <TouchableOpacity
            style={[
              styles.Button,
              {opacity: isSubmitButtonDisabled ? 1 : 0.25},
            ]}
            onPress={submitHandler}
            disabled={!isSubmitButtonDisabled}>
            <Text style={styles.ButtonText}>تایید و ورود</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[styles.Button]}>
            <ActivityIndicator size="small" color="#FFF" />
          </TouchableOpacity>
        )}
      </View>
      <Toast />
    </SafeAreaView>
  );
};

export default GetOTPCode;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFF',
    height: '100%',
    padding: moderateScale(25),
    justifyContent: 'space-between',
  },
  BackHeaderButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BackHeaderButtonText: {
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    color: colors.primary,
    marginLeft: moderateScale(20),
  },
  Contents: {
    marginVertical: moderateScale(50),
  },
  h1: {
    fontFamily: 'Vazirmatn-Black',
    fontSize: moderateScale(18),
    textAlign: 'right',
    color: colors.grey2,
  },
  WarningText: {
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    marginTop: moderateScale(20),
    textAlign: 'right',
    paddingLeft: moderateScale(25),
    color: colors.grey3,
  },
  TimeText: {
    color: colors.error1,
    fontFamily: 'Vazirmatn-Bold',
  },
  CodeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateScale(50),
    paddingVertical: moderateScale(10),
  },
  CodeInput: {
    width: moderateScale(50),
    height: moderateScale(50),
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(8),
    backgroundColor: colors.grey5,
    borderColor: colors.grey4,
    borderWidth: moderateScale(1),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Vazirmatn-Bold',
    fontSize: moderateScale(18),
  },
  Button: {
    backgroundColor: '#404CCF',
    height: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(8),
  },
  ButtonText: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: moderateScale(18),
    color: '#FFF',
  },
  DidNotgetCode: {
    marginHorizontal: moderateScale(25),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  TimeEndText: {
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    marginTop: moderateScale(20),
    textAlign: 'right',
    paddingLeft: moderateScale(25),
    color: colors.error1,
  },
  Resend: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  ResendText: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: moderateScale(14),
    textAlign: 'right',
    paddingLeft: moderateScale(10),
    color: colors.primary,
  },
  DidNotgetCodeText: {
    fontFamily: 'Vazirmatn-Medium',
    fontSize: moderateScale(14),
    textAlign: 'right',
    paddingLeft: moderateScale(10),
    color: colors.grey2,
  },
});
