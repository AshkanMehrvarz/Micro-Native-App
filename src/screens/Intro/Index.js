// Base
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import React from 'react';

// Packages
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';

// Ashkan
import {colors} from '../../Assets/Theme/Index';
import ArrowIcon from '../../Assets/Svg/ArrowIcon';
import DoneIcon from '../../Assets/Svg/DoneIcon';
import {styles} from './Style';

const NewSliders = () => {
  // States
  const [sliderSkiped, setSliderSkiped] = React.useState(1 / 3);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [nextButtonMiddleIcon, setNextButtonMiddleIcon] =
    React.useState('arrow');

  // Refs
  const sliderPagination = React.useRef();

  // Variables
  const navigation = useNavigation();
  const scaleAnimated = new Animated.Value(0);
  const slides = [
    {
      image: require('../../Assets/Images/s1.png'),
      title: 'متن عنوان تستی',
      dis: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    },
    {
      image: require('../../Assets/Images/s2.png'),
      title: 'متن عنوان تستی',
      dis: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    },
    {
      image: require('../../Assets/Images/s3.png'),
      title: 'متن عنوان تستی',
      dis: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    },
  ];

  // Screen Swapers
  const goEnterToApp = () => {
    navigation.replace('Login');
    AsyncStorage.setItem('isSliderFinished', 'true');
  };

  // Functions
  const renderItem = ({item}) => {
    return (
      <View style={styles.Slide}>
        <Image style={styles.SlideImage} source={item.image} />
        <Text style={styles.SlideTitle}>{item.title}</Text>
        <Text style={styles.SlideDis}>{item.dis}</Text>
      </View>
    );
  };

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

  // Animations
  Animated.spring(scaleAnimated, {
    toValue: 1,
    useNativeDriver: true,
  }).start();

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
