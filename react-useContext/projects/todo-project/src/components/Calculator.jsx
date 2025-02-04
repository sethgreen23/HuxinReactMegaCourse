import { useState } from 'react'

const Calculator = () => {
	const [inputValue, setInputValue] = useState('');
	const clear = () => {
		setInputValue('');
	}
	const display = (value) => {
		setInputValue(prev => prev + value);
	}

	const calculate = () => {
		try {
			const token = parseArithmeticExpression(inputValue);
			calculateResult(token);

		} catch (error) {
			setInputValue(error.message);
		}

	}


	function parseArithmeticExpression(operation) {
		// Split the string into tokens, removing empty strings
		let tokens = operation.split(/([\+\-\*\/])/).filter(token => token !== '');

		// Normalize signs and handle complex sign combinations
		for (let i = 0; i < tokens.length; i++) {
			// Simplify consecutive negative signs
			while (i > 0 && tokens[i - 1] === '-' && tokens[i] === '-') {
				tokens[i - 1] = '+';
				tokens.splice(i, 1);
				i--;
			}
			// Handle negative numbers after operators
			if ((i === 0 && tokens[i] === '-') ||
				(i > 0 && tokens[i] === '-' &&
					['+', '-', '*', '/'].includes(tokens[i - 1]) &&
					tokens[i + 1] !== '-')) {
				tokens[i + 1] = '-' + tokens[i + 1];
				tokens.splice(i, 1);
				i--;
			}

			// Remove unnecessary '+' signs
			if (tokens[i] === '+' &&
				(i === 0 || ['+', '-', '*', '/'].includes(tokens[i - 1]) ||
					(i > 0 && ['+', '-', '*', '/'].includes(tokens[i - 1]) &&
						i < tokens.length - 1))) {
				tokens.splice(i, 1);
				i--;
			}
		}
		return tokens.filter(token => token !== '--');
	}

	function calculateResult(tokens) {
		// we need to calculate the * and / first
		// [7,*,6,+,4,*,3,-,2,*,1] => [42,+,4,*,3,-,2,*,1] => [42,+,12,-,2,*,1] => [42,+,12,-,2]
		let startToken = tokens;
		let result = 0;
		for (let i = 1; i < startToken.length; i = i + 2) {
			if (startToken[i] === '*' || startToken[i] === '/') {
				const left = parseFloat(startToken[i - 1]);
				const right = parseFloat(startToken[i + 1]);
				if (startToken[i] === '*') {
					result = left * right;
				} else if (startToken[i] === '/') {
					if (right === 0) throw new Error('Cannot divide by zero');
					result = left / right;
				}
				startToken[i - 1] = result.toString();
				startToken.splice(i, 2);
				i = i - 2;
			}
		}
		// handle - and + operations
		let currentResult = parseFloat(startToken[0]);
		for (let i = 1; i < startToken.length; i = i + 2) {
			if (startToken[i] === '+' || startToken[i] === '-') {

				const next = parseFloat(startToken[i + 1]);
				if (startToken[i] === '+') {
					currentResult += next;
				} else if (startToken[i] === '-') {
					currentResult -= next;
				}
				startToken[i - 1] = currentResult.toString();
				startToken.splice(i, 2);
				i = i - 2;
			}
		}
		console.log(startToken)
		if(startToken[0]==="NaN") throw new Error('Invalid expression');
		if(startToken.length === 2) throw new Error('Invalid expression');
		setInputValue(currentResult.toString());
		// we calculate the + and - last
	}
	return (
		<div className="calculator">
			<input type="text" className="value" readOnly value={inputValue} />
			<span onClick={() => clear()} className="clear">AC</span>
			<span onClick={() => display('/')} >÷</span>
			<span onClick={() => display('*')} >x</span>
			<span onClick={() => display('7')} >7</span>
			<span onClick={() => display('8')} >8</span>
			<span onClick={() => display('9')} >9</span>
			<span onClick={() => display('-')} >-</span>
			<span onClick={() => display('4')} >4</span>
			<span onClick={() => display('5')} >5</span>
			<span onClick={() => display('6')} >6</span>
			<span onClick={() => display('+')} className='plus'>+</span>
			<span onClick={() => display('1')} >1</span>
			<span onClick={() => display('2')} >2</span>
			<span onClick={() => display('3')} >3</span>
			<span onClick={() => display('0')} >0</span>
			<span onClick={() => display('0')} >00</span>
			<span onClick={() => display('.')} >.</span>
			<span onClick={() => calculate()} className='equal'>=</span>
		</div>
	)
}

export default Calculator
