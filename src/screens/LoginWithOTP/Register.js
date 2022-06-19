import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../assets/theme/Theme';
import BackIconNew from '../../assets/svg/BackIconNew';
import DropDownPicker from 'react-native-dropdown-picker';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';

const Register = () => {
  const navigation = useNavigation();
  const goBackHandler = () => navigation.goBack();
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
  return (
    <SafeAreaView style={{backgroundColor: '#FFF'}}>
      <Formik>
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
              />
            </View>
            <View style={styles.InputDiv}>
              <TextInput
                style={styles.Input}
                placeholder="شماره موبایل"
                placeholderTextColor={colors.grey3}
              />
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
                placeholder="استان های مورد نظر را انتخاب کنید"
                maxHeight={200}
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
                badgeDotColors={[colors.error1]}
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
                min={0}
                max={10}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                mode="BADGE"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.RegisterButton}>
            <Text style={styles.RegisterButtonText}>ثبت نام</Text>
          </TouchableOpacity>
        </View>
      </Formik>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    backgroundColor: '#FFF',
    padding: moderateScale(25),
    justifyContent: 'space-between',
  },
  InputDiv: {
    marginBottom: moderateScale(25),
  },
  Input: {
    height: moderateScale(47.5),
    borderRadius: moderateScale(8),
    backgroundColor: '#FFF',
    borderWidth: moderateScale(1),
    borderColor: colors.grey4,
    paddingHorizontal: moderateScale(10),
    textAlign: 'right',
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    color: colors.grey1,
  },
  InputTitle: {
    textAlign: 'right',
    marginBottom: moderateScale(10),
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    color: colors.grey1,
    marginRight: moderateScale(2.5),
  },
  Header: {
    marginVertical: moderateScale(25),
  },
  h1: {
    textAlign: 'right',
    fontFamily: 'Vazirmatn-Black',
    fontSize: moderateScale(20),
    color: colors.primary,
    marginVertical: moderateScale(5),
  },
  DisText: {
    textAlign: 'right',
    fontFamily: 'Vazirmatn-Regular',
    fontSize: moderateScale(14),
    color: colors.grey3,
    marginVertical: moderateScale(5),
    paddingLeft: moderateScale(75),
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
  RegisterButton: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(50),
    borderRadius: moderateScale(6),
  },
  RegisterButtonText: {
    color: '#FFF',
    fontFamily: 'Vazirmatn-Bold',
    fontSize: moderateScale(18),
  },
});
