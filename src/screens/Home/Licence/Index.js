// Base
import {
  Text,
  Image,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as React from 'react';

// Packages
import {moderateScale} from 'react-native-size-matters';
import Clipboard from '@react-native-clipboard/clipboard';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

// Ashkan
import BackIcon from '../../../Assets/Svg/BackIcon';
import {styles} from './Style';

export default function LinenceScreen() {
  // States
  const [inputValue, setInputValue] = React.useState();

  // Varibles
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  // Screen Swaper
  const goHomeHandler = () => navigation.navigate('Home');

  // Functions
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

  // UseEffects
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
        <Text style={styles.Title}>بازگشت</Text>
      </View>
      <ScrollView style={{height: '100%'}}>
        <View style={styles.Container}>
          <Image
            style={styles.DoneImage}
            source={require('../../../Assets/Images/done.jpg')}
          />

          <View style={styles.Main}>
            <Text style={styles.LinenceText}>لایسنس شما:</Text>
            <TextInput
              defaultValue=""
              value={inputValue}
              editable={false}
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
