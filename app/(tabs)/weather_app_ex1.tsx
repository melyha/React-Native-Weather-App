import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const WeatherApp = () => {
  const [selectedValue, setSelectedValue] = useState('apple');


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weather App</Text>
      <Button title='Toggle to '></Button>

 <View style={{ padding: 20 }}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Apple" value="apple" />
        <Picker.Item label="Banana" value="banana" />
        <Picker.Item label="Orange" value="orange" />
      </Picker>
      <Text style={{ marginTop: 10 }}>Selected: {selectedValue}</Text>
    </View>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
    color: 'Black',
  },
});

export default WeatherApp;