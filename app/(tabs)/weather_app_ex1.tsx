import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const WeatherApp = () => {
  const [unit, setUnit] = useState('C');  // 'C' for Celsius, 'F' for Fahrenheit
  const [selectedCity, setSelectedCity] = useState('Saskatoon'); // Default city

// Static weather data
  const weatherData = [
    { city: 'Saskatoon', temperatureC: 22, condition: 'Sunny' },
    { city: 'Regina', temperatureC: 19, condition: 'Cloudy' },
    { city: 'Prince Albert', temperatureC: 16, condition: 'Rainy' },
  ];

  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weather App</Text>
      <Button title='Toggle to '></Button>

 <View style={{ padding: 20 }}>
      <Picker
        selectedValue={selectedCity}
onValueChange={(itemValue) => setSelectedCity(itemValue)}
      >
        <Picker.Item label="Saskatoon" value="Saskatoon" />
        <Picker.Item label="Regina" value="Regina" />
        <Picker.Item label="Prince Albert" value="Prince Albert" />
      </Picker>
      <Text style={{ marginTop: 10 }}>Selected: {selectedCity}</Text>
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