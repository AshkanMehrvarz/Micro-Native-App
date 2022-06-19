import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {moderateScale} from 'react-native-size-matters';
import ArrowIcon from '../../assets/svg/ArrowIcon';
import DoneIcon from '../../assets/svg/DoneIcon';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';

const HomepageSlider = () => {
  const [sliderSkiped, setSliderSkiped] = React.useState(1 / 3);
  const fadeAnim = new Animated.Value(0);
  const navigation = useNavigation();

  const sliderPagination = index => {
    if (index === 0) {
      setSliderSkiped(1 / 3);
    } else if (index === 1) {
      setSliderSkiped(2 / 3);
    } else if (index === 2) {
      setSliderSkiped(3 / 3);
    }
  };

  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 200,
    useNativeDriver: true,
  }).start();

  const goEnterToApp = () => navigation.navigate('EnterToApp');

  return (
    <View>
      <Swiper
        style={{
          position: 'relative',
        }}
        onIndexChanged={sliderPagination}
        showsPagination={false}
        showsButtons={true}
        loop={false}
        autoplay={false}
        nextButton={
          <View style={styles.SliderNextButton}>
            <ArrowIcon />
          </View>
        }
        buttonWrapperStyle={{
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
        prevButton={<View></View>}>
        <View style={styles.slide}>
          <Image
            style={styles.SliderImage}
            source={require('../../assets/images/s1.png')}
          />
          <Text style={styles.TextTitle}>متن عنوان تستی</Text>
          <Text style={styles.TextDis}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </Text>
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.SliderImage}
            source={require('../../assets/images/s2.png')}
          />
          <Text style={styles.TextTitle}>متن عنوان تستی</Text>
          <Text style={styles.TextDis}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </Text>
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.SliderImage}
            source={require('../../assets/images/s3.png')}
          />
          <Text style={styles.TextTitle}>متن عنوان تستی</Text>
          <Text style={styles.TextDis}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </Text>
          <TouchableOpacity style={styles.DoneButton} onPress={goEnterToApp}>
            <Animated.View style={{opacity: fadeAnim}}>
              <DoneIcon />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </Swiper>
      <View style={styles.PaginationDiv}>
        <Progress.Circle
          size={140}
          animated={true}
          progress={sliderSkiped}
          color={'white'}
          borderWidth={0}
          animationType={'spring'}
        />
      </View>
    </View>
  );
};

export default HomepageSlider;

const styles = StyleSheet.create({
  slide: {
    height: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  SliderImage: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },
  SliderImageBg: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    zIndex: -1,
    top: moderateScale(100),
    resizeMode: 'contain',
  },
  SliderNextButton: {
    backgroundColor: '#FFFFFF',
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: 99999,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: moderateScale(10),
    elevation: 5,
  },
  PaginationDiv: {
    height: moderateScale(100),
    width: '100%',
    position: 'absolute',
    bottom: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -2,
  },
  TextTitle: {
    fontFamily: 'Vazirmatn-Bold',
    paddingHorizontal: moderateScale(50),
    marginTop: moderateScale(50),
    textAlign: 'center',
    fontSize: moderateScale(28),
    color: '#FFF',
    width: '100%',
  },
  TextDis: {
    fontFamily: 'Vazirmatn-Regular',
    paddingHorizontal: moderateScale(50),
    marginTop: moderateScale(10),
    textAlign: 'right',
    fontSize: moderateScale(16),
    color: '#FFF',
    width: '100%',
  },
  DoneButton: {
    backgroundColor: '#FFF',
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: 99999,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: moderateScale(-57.5),
  },
});
