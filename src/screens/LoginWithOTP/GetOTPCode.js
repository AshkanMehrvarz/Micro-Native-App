import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import BackIconNew from '../../assets/svg/BackIconNew';
import {colors} from '../../assets/theme/Theme';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import ResendIcon from '../../assets/svg/ReendIcon';

const GetOTPCode = props => {
  const [timer, setTimer] = React.useState({min: 2, sec: 0});
  const [selectedInput, setSelectedInput] = React.useState();
  const [finished, setFinished] = React.useState(false);
  const navigation = useNavigation();
  const goBackHandler = () => navigation.goBack();
  const phoneNumber = props.route.params?.phoneNumber;

  const input1 = React.useRef();
  const input2 = React.useRef();
  const input3 = React.useRef();
  const input4 = React.useRef();

  const resendCode = () => {
    setTimer({min: 2, sec: 0});
    setFinished(false);
    input1.current.setNativeProps({text: ''});
    input2.current.setNativeProps({text: ''});
    input3.current.setNativeProps({text: ''});
    input4.current.setNativeProps({text: ''});
  };

  React.useEffect(() => {
    const timerId = setInterval(() => {
      if (timer.min === 0 && timer.sec === 0) {
        setFinished(true);
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
                )}:${String(timer.sec).padStart(2, '0')}   `}</Text>
                از منقضی میشود
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
                  },
                ]}
                maxLength={1}
                ref={input1}
                onFocus={() => setSelectedInput(1)}
                keyboardType="numeric"
                onChangeText={e => {
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
                  },
                ]}
                maxLength={1}
                ref={input2}
                onFocus={() => setSelectedInput(2)}
                onChangeText={e => {
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
                  },
                ]}
                maxLength={1}
                ref={input3}
                onFocus={() => setSelectedInput(3)}
                keyboardType="numeric"
                onChangeText={e => {
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
                  },
                ]}
                maxLength={1}
                ref={input4}
                onFocus={() => setSelectedInput(4)}
                keyboardType="numeric"
                onChangeText={e => {
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
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>تایید و ورود</Text>
        </TouchableOpacity>
      </View>
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
