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

  const convertTemperature = (tempC: number) => {
    return unit === 'C' ? tempC : (tempC * 9) / 5 + 32;
  };

const selectedWeather = weatherData.find((data) => data.city === selectedCity);

return (
    <View style={styles.container}>
      <Text style={styles.text}>Weather App</Text>
      <Button  title={`Toggle to ${unit === 'C' ? 'Fahrenheit' : 'Celsius'}`}
  onPress={() => setUnit(unit === 'C' ? 'F' : 'C')}
/>

 <View style={{ padding: 20 }}>
      <Picker
        selectedValue={selectedCity}
onValueChange={(itemValue) => setSelectedCity(itemValue)}
      >
        <Picker.Item label="Saskatoon" value="Saskatoon" />
        <Picker.Item label="Regina" value="Regina" />
        <Picker.Item label="Prince Albert" value="Prince Albert" />
      </Picker>
      {selectedWeather ? (
  <View style={styles.weatherCard}>
    <Text style={styles.cityName}>{selectedWeather.city}</Text>
    <Text style={styles.condition}>{selectedWeather.condition}</Text>
    <Text style={styles.temperature}>
      {convertTemperature(selectedWeather.temperatureC).toFixed(0)}°{unit}
    </Text>
  </View>
) : (
  <Text style={styles.loading}>No weather data available</Text>
)}
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