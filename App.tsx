import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from "react";
import styled from 'styled-components/native'
import Calculator from './src/Calculator';
import tw from 'twrnc';

export default function App() {

  return (
    <View style={tw`items-center justify-center flex-row p-15`}>
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
