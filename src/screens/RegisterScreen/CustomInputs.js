import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export default function CustomInputs({label, placeholder}) {
  return (
    <View style={styles.Container}>
      <Text style={styles.Label}>{label}</Text>
      <TextInput
        style={styles.Input}
        placeholder={placeholder}
        placeholderTextColor="#33333380"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    marginVertical: moderateScale(15),
  },
  Input: {
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: moderateScale(8),
    height: moderateScale(40),
    borderColor: '#404CCF',
    borderWidth: moderateScale(2),
    paddingHorizontal: moderateScale(10),
    textAlign: 'right',
  },
  Label: {
    fontFamily: 'Vazirmatn-Medium',
    color: '#333',
    fontSize: moderateScale(14),
    textAlign: 'right',
    marginBottom: moderateScale(10),
  },
});
