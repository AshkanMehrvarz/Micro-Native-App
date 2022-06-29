// Base
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

// Packages
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {moderateScale} from 'react-native-size-matters';

// Ashkan
import BackIconNew from '../../../Assets/Svg/BackIconNew';
import {colors} from '../../../Assets/Theme/Index';
import {styles} from './Style';
import ResendIcon from '../../../Assets/Svg/ReendIcon';

const GetOTPCode = props => {
  // States
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

  // Refs
  const input1 = React.useRef();
  const input2 = React.useRef();
  const input3 = React.useRef();
  const input4 = React.useRef();

  // Variables
  const navigation = useNavigation();
  const phoneNumber = props.route.params.phoneNumber;

  // Screen Swapers
  const goBackHandler = () => navigation.goBack();

  // Functions
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
          const sms = await axios.get(
            `https://api.sabanovin.com/v1/sa1737973624:7rRB7QCvptjuoujro45f4ppZOkLtl4sIEYa3/sms/send.json?gateway=90003002&to=$${phoneNumber}&text=کد تایید = ${res.data.OtpCodeResult}`,
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
          navigation.replace('Home');
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

  // UseEffects
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
    }, 1000);

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
