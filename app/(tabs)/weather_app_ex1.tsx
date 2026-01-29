import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const WeatherApp = () => {
    const [unit, setUnit] = useState("C"); // 'C' for Celsius, 'F' for Fahrenheit
    const [selectedCity, setSelectedCity] = useState("Saskatoon"); // Default city

    // Static weather data
    const weatherData = [
        { city: "Saskatoon", temperatureC: 22, condition: "Sunny" },
        { city: "Regina", temperatureC: 19, condition: "Cloudy" },
        { city: "Prince Albert", temperatureC: 16, condition: "Rainy" },
    ];

    const convertTemperature = (tempC: number) => {
        return unit === "C" ? tempC : (tempC * 9) / 5 + 32;
    };

    const selectedWeather = weatherData.find(
        (data) => data.city === selectedCity,
    );

    return (
        <SafeAreaProvider>
            <LinearGradient
                colors={["#74b9ff", "#0984e3", "#6c5ce7"]}
                style={styles.container}
            >
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.headerContainer}>
                        <Feather name="cloud-rain" size={32} color="white" />
                        <Text style={styles.headerText}>Weather App</Text>
                        <MaterialIcons name="wb-sunny" size={32} color="white" />
                    </View>

                    <View style={styles.contentContainer}></View>
         
          <TouchableOpacity style={styles.glassButton} onPress={() => setUnit(unit === "C" ? "F" : "C")}>
                        <Text style={styles.glassButtonText}>
                            Toggle to {unit === "C" ? "Fahrenheit" : "Celsius"}
                        </Text>
                    </TouchableOpacity>

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
                                <Text style={styles.condition}>
                                    {selectedWeather.condition}
                                </Text>
                                <Text style={styles.temperature}>
                                    {convertTemperature(selectedWeather.temperatureC).toFixed(0)}°
                                    {unit}
                                </Text>
                            </View>
                        ) : (
                            <Text style={styles.loading}>No weather data available</Text>
                        )}
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    text: {
        fontSize: 20,
        color: "Black",
    },

    weatherCard: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 15,
        margin: 10,
        width: 200,
        backgroundColor: "#f9f9f9",
    },
    cityName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    condition: {
        fontSize: 16,
        color: "#555",
    },
    temperature: {
        fontSize: 17,
        color: "#333",
        fontWeight: "600",
    },
    loading: {
        fontSize: 16,
        color: "#999",
    },

    safeArea: {
        flex: 1,
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        marginTop: 20,
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 15,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    contentContainer: {

        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    glassButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginVertical: 20,
        backdropFilter: 'blur(10px)', // Note: limited support
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    glassButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },

});

export default WeatherApp;
