import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [result, setResult] = useState(false);

	const handleNum = (label) => {
		if (result !== false) {
			setOperand1(label);
			setOperator('');
			setOperand2('');
			setResult(false);
		} else if (operator === '') {
			if (operand1 === '0') {
				setOperand1(label);
			} else {
				setOperand1(operand1 + label);
			}
		} else {
			if (operand2 === '0') {
				setOperand2(label);
			} else {
				setOperand2(operand2 + label);
			}
		}
	};

	const handleReset = () => {
		setOperand1('0');
		setOperator('');
		setOperand2('');
		setResult(false);
	};

	const handlePlus = () => {
		setOperator('+');
		setResult(false);
	};
	const handleMinus = () => {
		setOperator('-');
		setResult(false);
	};

	const handleResult = () => {
		if (operand2 !== '') {
			switch (operator) {
				case '+': {
					setOperand1(Number(operand1) + Number(operand2));
					break;
				}
				case '-': {
					setOperand1(Number(operand1) - Number(operand2));
					break;
				}
				default:
			}
			setOperand2('');
		}
		setOperator('');
		setResult(true);
	};

	const buttons = [
		{ id: '1', label: '1', group: 'nums', handler: handleNum },
		{ id: '2', label: '2', group: 'nums', handler: handleNum },
		{ id: '3', label: '3', group: 'nums', handler: handleNum },
		{ id: '4', label: '4', group: 'nums', handler: handleNum },
		{ id: '5', label: '5', group: 'nums', handler: handleNum },
		{ id: '6', label: '6', group: 'nums', handler: handleNum },
		{ id: '7', label: '7', group: 'nums', handler: handleNum },
		{ id: '8', label: '8', group: 'nums', handler: handleNum },
		{ id: '9', label: '9', group: 'nums', handler: handleNum },
		{ id: '0', label: '0', group: 'nums', handler: handleNum },
		{ id: 'C', label: 'C', group: 'operation', handler: handleReset },
		{ id: '+', label: '+', group: 'operation', handler: handlePlus },
		{ id: '-', label: '-', group: 'operation', handler: handleMinus },
		{ id: '=', label: '=', group: 'operation', handler: handleResult },
	];

	const output = operand1 + operator + operand2;
	return (
		<div className={styles.app}>
			<h1>Calculator</h1>
			<div className={`${styles.display} ${result ? styles.resultNum : ''}`}>
				{output}
			</div>
			<div className={styles.allButtons}>
				<div className={styles.numsButtons}>
					{buttons.map(({ id, label, group, handler }) =>
						group === 'nums' ? (
							<button
								key={id}
								className={styles.buttons}
								onClick={() => handler(label)}
							>
								{label}
							</button>
						) : null,
					)}
				</div>
				<div className={styles.operationButtons}>
					{buttons.map(({ id, label, group, handler }) =>
						group === 'operation' ? (
							<button key={id} className={styles.buttons} onClick={handler}>
								{label}
							</button>
						) : null,
					)}
				</div>
			</div>
		</div>
	);
};
