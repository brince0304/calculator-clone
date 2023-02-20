import react, {useEffect} from "react";
import { useState } from "react";
import {StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView} from "react-native";
import styled from 'styled-components/native'
import tw from 'twrnc';
import {useCalculator} from "./use-calculator";

const Btn = (props:{text:string, onPress:any, flex:any, type:any, isSelected:any | undefined}) => {
    const backgroundColor = () => {
        switch (props.type) {
            case 'RESULT':
                return COLOR.RESULT
            case 'OPERATOR':
                return COLOR.OPERATOR
            case 'NUMBER':
                return COLOR.NUMBER
            case 'RESET':
                return COLOR.RESET
            default:
                return 'transparent'
        }
    }
    return (
        <TouchableOpacity onPress={props.onPress} style={{
            backgroundColor: backgroundColor(),
            flex: props.flex,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            borderWidth: props.isSelected? 1 : 0.25,
            borderColor: 'black'
        }}>
            <Text style={tw`text-white text-5x1`}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const ButtonContainer = styled.View`
    flex-direction: row;
    width: 100%;
  `;
const InputContainer = styled.View`
    flex-direction: row;
    width: 100%;
  //COLOR.RESULT 
    background-color :  #4e4c51;
    min-height:50px;
    padding:10px 5px;
    align-items: flex-end;
     justify-content: flex-end;
  `;


const COLOR ={
    RESULT : '#4e4c51',
    OPERATOR : '#f39c29',
    NUMBER : '#5c5674',
    RESET : '#5f5e62',
}




export default () => {
    const {
        value,
        currentOperator,
        result,
        tempInput,
        tempOperator,
        onPressNum,
        onPressOperator,
        onPressReset,
    } = useCalculator();
    return (
    <SafeAreaView style={tw`flex-1 w-9/15 items-center`}>
        <InputContainer>
            <Text style={tw`text-white text-10  text-right`}>{value}</Text>
        </InputContainer>
        <ButtonContainer style={tw`flex-row w-full`}>
            {["AC","/"].map((item, index) => {
                return <Btn text={item} onPress={()=> item==="/"?onPressOperator(item):onPressReset()} flex={item==="AC"? 3:1} isSelected={currentOperator==="/"} type={item==="/"? "OPERATOR":"RESET"}/>})}
        </ButtonContainer>
        <ButtonContainer style={tw`flex-row w-full`}>
            {["7","8","9"].map((item, index) => {
                return <Btn text={item} onPress={()=>onPressNum(item)} flex={1} type={"NUMBER"} isSelected={undefined}/>})}
            <Btn text={"X"} onPress={()=>onPressOperator("X")} flex={1} isSelected={currentOperator==="X"} type={"OPERATOR"}/>
        </ButtonContainer>
        <ButtonContainer style={tw`flex-row w-full`}>
            {["4","5","6"].map((item, index) => {
                return <Btn text={item} onPress={()=>onPressNum(item)} flex={1} type={"NUMBER"} isSelected={undefined}/>})}
            <Btn text={"-"} onPress={()=>onPressOperator("-")} flex={1} isSelected={currentOperator==="-"} type={"OPERATOR"}/>
        </ButtonContainer>
        <ButtonContainer style={tw`flex-row w-full`}>
            {["1","2","3"].map((item, index) => {
                return <Btn text={item} onPress={()=>onPressNum(item)} flex={1} type={"NUMBER"} isSelected={undefined}/>})}
            <Btn text={"+"} onPress={()=>onPressOperator("+")} flex={1} isSelected={currentOperator==="+"} type={"OPERATOR"}/>
        </ButtonContainer>
        <ButtonContainer style={tw`flex-row w-full`}>
            {["0","."].map((item, index) => {
                return <Btn text={item} onPress={()=>onPressNum(item)} flex={item==="0"?2:1} type={"NUMBER"} isSelected={undefined}/>})}
            <Btn text={"="} onPress={()=>onPressOperator("=")} flex={1} isSelected={currentOperator==="="} type={"OPERATOR"}/>
        </ButtonContainer>

    </SafeAreaView>
    )
}