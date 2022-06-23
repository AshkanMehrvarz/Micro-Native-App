import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {colors} from '../../assets/theme/Theme';
import {moderateScale} from 'react-native-size-matters';
import ArrowIcon from '../../assets/svg/ArrowIcon';
import * as Progress from 'react-native-progress';
import DoneIcon from '../../assets/svg/DoneIcon';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const slides = [
  {
    image: require('../../assets/images/s1.png'),
    title: 'متن عنوان تستی',
    dis: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    image: require('../../assets/images/s2.png'),
    title: 'متن عنوان تستی',
    dis: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    image: require('../../assets/images/s3.png'),
    title: 'متن عنوان تستی',
    dis: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
];

const renderItem = ({item}) => {
  return (
    <View style={styles.Slide}>
      <Image style={styles.SlideImage} source={item.image} />
      <Text style={styles.SlideTitle}>{item.title}</Text>
      <Text style={styles.SlideDis}>{item.dis}</Text>
    </View>
  );
};

const NewSliders = () => {
  const navigation = useNavigation();
  const scaleAnimated = new Animated.Value(0);
  const sliderPagination = React.useRef();
  const [sliderSkiped, setSliderSkiped] = React.useState(1 / 3);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [nextButtonMiddleIcon, setNextButtonMiddleIcon] =
    React.useState('arrow');

  const screenForwardHandler = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
      sliderPagination.current.goToSlide(currentPage, true);
    }
  };

  const onSlideChange = page => {
    setCurrentPage(page + 1);
    if (page === 0) {
      setSliderSkiped(1 / 3);
      setNextButtonMiddleIcon('arrow');
    } else if (page === 1) {
      setSliderSkiped(2 / 3);
      setNextButtonMiddleIcon('arrow');
    } else if (page === 2) {
      setSliderSkiped(3 / 3);
      setNextButtonMiddleIcon('done');
    }
  };

  Animated.spring(scaleAnimated, {
    toValue: 1,
    useNativeDriver: true,
  }).start();

  const goEnterToApp = () => {
    navigation.replace('LoginScreen');
    AsyncStorage.setItem('isSliderFinished', 'true');
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.primary}}>
      <View style={styles.Container}>
        <AppIntroSlider
          renderItem={renderItem}
          data={slides}
          showNextButton={true}
          ref={sliderPagination}
          renderPagination={() => null}
          onSlideChange={onSlideChange}
        />

        <View style={styles.Footer}>
          {nextButtonMiddleIcon === 'arrow' ? (
            <TouchableOpacity
              style={styles.SliderNextButton}
              activeOpacity={0.75}
              onPress={screenForwardHandler}>
              <ArrowIcon />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[
                styles.SliderNextButton,
                {transform: [{scale: scaleAnimated}]},
              ]}
              activeOpacity={0.75}
              onPress={goEnterToApp}>
              <DoneIcon />
            </TouchableOpacity>
          )}

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
      </View>
    </SafeAreaView>
  );
};

export default NewSliders;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.primary,
    height: '100%',
    paddingVertical: moderateScale(25),
  },
  Slide: {
    backgroundColor: colors.primary,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  SlideImage: {
    width: '90%',
    height: '50%',
    resizeMode: 'contain',
  },
  SlideTitle: {
    fontFamily: 'Vazirmatn-Bold',
    paddingHorizontal: moderateScale(50),
    marginTop: moderateScale(50),
    textAlign: 'center',
    fontSize: moderateScale(28),
    color: '#FFF',
    width: '100%',
  },
  SlideDis: {
    fontFamily: 'Vazirmatn-Regular',
    paddingHorizontal: moderateScale(50),
    marginTop: moderateScale(10),
    textAlign: 'right',
    fontSize: moderateScale(16),
    color: '#FFF',
    width: '100%',
  },
  SliderNextButton: {
    backgroundColor: '#FFFFFF',
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: 99999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Footer: {
    marginBottom: moderateScale(10),
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  PaginationDiv: {
    position: 'absolute',
    zIndex: -2,
  },
});
