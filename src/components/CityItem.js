import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CityItem = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onSelect}>
      <Text style={styles.text}> {props.cityName} </Text>
    </TouchableOpacity>
  );
};

export {CityItem};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
