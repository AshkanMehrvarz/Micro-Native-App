import {
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Clipboard from '@react-native-clipboard/clipboard';
import BackIcon from '../../assets/svg/BackIcon';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export default function LinenceScreen() {
  const navigation = useNavigation();
  const goHomeHandler = () => navigation.navigate('Home');

  const isFocused = useIsFocused();

  const [inputValue, setInputValue] = React.useState();

  const copyToClipboard = () => {
    Clipboard.setString(inputValue);
    Toast.show({
      type: 'success',
      text1: 'لایسنس با موفقیت کپی شد',
      visibilityTime: 5000,
      topOffset: moderateScale(50),
    });
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('licence');
      if (value !== null) {
        setInputValue(value);
        // console.log(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getData();
  }, [isFocused]);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={styles.BackHeaderContainer}>
        <TouchableOpacity
          style={styles.Icon}
          activeOpacity={0.7}
          onPress={goHomeHandler}>
          <BackIcon color={'#333'} />
        </TouchableOpacity>
        <Text style={styles.Title}>خانه</Text>
      </View>
      <ScrollView style={{height: '100%'}}>
        <View style={styles.Container}>
          <Image
            style={styles.DoneImage}
            source={require('../../assets/images/done.jpg')}
          />

          <View style={styles.Main}>
            <Text style={styles.LinenceText}>لایسنس شما:</Text>
            <TextInput
              defaultValue="uuiuui"
              value={inputValue}
              onChangeText={() => setInputValue(inputValue)}
              style={styles.TextInput}
            />
            <TouchableOpacity
              style={styles.CopyButton}
              onPress={copyToClipboard}>
              <Text style={styles.CopyButtonText}>کپی کردن</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: moderateScale(25),
    // backgroundColor: 'red',
  },
  DoneImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    position: 'relative',
    top: moderateScale(-50),
  },
  LinenceText: {
    fontFamily: 'Vazirmatn-Medium',
    fontSize: moderateScale(14),
    color: '#333',
    width: '100%',
    textAlign: 'right',
    marginBottom: moderateScale(10),
  },
  TextInput: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: moderateScale(10),
    borderRadius: moderateScale(8),
    textAlign: 'center',
    fontSize: moderateScale(14),
    color: '#333',
    borderColor: '#33333380',
    borderWidth: moderateScale(2),
    paddingHorizontal: moderateScale(10),
    textAlign: 'center',
  },
  CopyButton: {
    marginTop: moderateScale(25),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(4),
    backgroundColor: '#404CCF',
    width: '40%',
    alignItems: 'center',
  },
  CopyButtonText: {
    fontFamily: 'Vazirmatn-Black',
    fontSize: moderateScale(14),
    color: '#fff',
  },
  Main: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    top: moderateScale(-50),
  },
  BackHeaderContainer: {
    backgroundColor: '#FFF',
    paddingVertical: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(15),
    width: '100%',
  },
  Title: {
    fontFamily: 'Vazirmatn-Bold',
    fontSize: moderateScale(16),
    color: '#333',
    marginLeft: moderateScale(10),
  },
  Icon: {
    backgroundColor: 'white',
    padding: moderateScale(5),
    borderRadius: moderateScale(4),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: moderateScale(10),
    shadowOpacity: 0.15,
    shadowRadius: moderateScale(5),
  },
});
