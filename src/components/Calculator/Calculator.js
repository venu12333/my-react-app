import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleDigitClick = (digit) => {
    if (display === '0' || waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display + digit);
    }
  };

  const handleOperatorClick = (op) => {
    const inputValue = parseFloat(display);

    if (currentValue === '') {
      setCurrentValue(inputValue);
    } else if (operator) {
      const result = performOperation(currentValue, inputValue, operator);
      setCurrentValue(result);
      setDisplay(result.toString());
    }

    setOperator(op);
    setWaitingForOperand(true);
  };

  const performOperation = (prevValue, currentValue, op) => {
    switch (op) {
      case '+':
        return prevValue + currentValue;
      case '-':
        return prevValue - currentValue;
      case '*':
        return prevValue * currentValue;
      case '/':
        return prevValue / currentValue;
      default:
        return currentValue;
    }
  };

  const handleEqualsClick = () => {
    const inputValue = parseFloat(display);
    if (operator && currentValue !== '') {
      const result = performOperation(currentValue, inputValue, operator);
      setDisplay(result.toString());
      setCurrentValue('');
      setOperator('');
      setWaitingForOperand(false);
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setCurrentValue('');
    setOperator('');
    setWaitingForOperand(false);
  };

  const handleDecimalClick = () => {
    if (!display.includes('.') && !waitingForOperand) {
      setDisplay(display + '.');
    } else if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator-display">{display}</div>
      <div className="calculator-buttons">
        <button onClick={() => handleDigitClick('7')}>7</button>
        <button onClick={() => handleDigitClick('8')}>8</button>
        <button onClick={() => handleDigitClick('9')}>9</button>
        <button className="operator-button" onClick={() => handleOperatorClick('/')}>/</button>

        <button onClick={() => handleDigitClick('4')}>4</button>
        <button onClick={() => handleDigitClick('5')}>5</button>
        <button onClick={() => handleDigitClick('6')}>6</button>
        <button className="operator-button" onClick={() => handleOperatorClick('*')}>*</button>

        <button onClick={() => handleDigitClick('1')}>1</button>
        <button onClick={() => handleDigitClick('2')}>2</button>
        <button onClick={() => handleDigitClick('3')}>3</button>
        <button className="operator-button" onClick={() => handleOperatorClick('-')}>-</button>

        <button onClick={() => handleDigitClick('0')}>0</button>
        <button onClick={handleDecimalClick}>.</button>
        <button onClick={handleEqualsClick}>=</button>
        <button className="operator-button" onClick={() => handleOperatorClick('+')}>+</button>

        <button className="clear-button" onClick={handleClearClick} colSpan="2">C</button>
      </div>
    </div>
  );
}

export default Calculator;
