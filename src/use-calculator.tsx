import {useState} from "react";

export const useCalculator = () => {
    const [value, setValue] = useState<string | number>(0);
    const [currentOperator, setCurrentOperator] = useState<string | null>(null);
    const [result, setResult] = useState<string | number | null>(null);
    const [tempInput, setTempInput] = useState<string | number | null>(null);
    const [tempOperator, setTempOperator] = useState<string | null>(null);
    const [isClickedOperator, setIsClickedOperator] = useState<boolean>(false);
    const [isClickedEqual, setIsClickedEqual] = useState<boolean>(false);

    const hasInput = !!value;
    const onPressNum = (num:string | number) => {

        if (currentOperator && isClickedOperator) {
            setResult(value);
            setValue(num);
            setIsClickedOperator(false)
        } else {
            const newValue = Number(`${value}${num}`)
            setValue(newValue)
        }
    }
    const onPressOperator = (operator:string) => {
        if(operator!== '=') {
            setCurrentOperator(operator)
            setIsClickedOperator(true)
            setIsClickedEqual(false)
        }
        else{
            let finalResult : any = result;
            const finalInput : any = isClickedEqual ? tempInput : value;
            const finalOperator : any = isClickedEqual ? tempOperator : currentOperator;
            switch (finalOperator) {
                case '+':
                    finalResult = Number(result) + Number(finalInput)
                    break;
                case '-':
                    finalResult = Number(result) - Number(finalInput)
                    break;
                case 'X':
                    finalResult = Number(result) * Number(finalInput)
                    break;
                case '/':
                    finalResult = Number(result) / Number(finalInput)
                    break;
                default:
                    break;
            }
            setResult(finalResult)
            setValue(finalResult)
            setTempInput(finalInput)
            setCurrentOperator(null)
            setTempOperator(finalOperator)
            setIsClickedEqual(true)
        }
    }

    const onPressReset = () => {
        if(hasInput){
            setValue(0)
        }else{
            setValue(0)
            setCurrentOperator(null)
            setResult(null)
            setTempInput(null)
            setTempOperator(null)
        }

    }

    return {
        value,
        currentOperator,
        result,
        tempInput,
        tempOperator,
        hasInput,
        onPressNum,
        onPressOperator,
        onPressReset,
    }

}