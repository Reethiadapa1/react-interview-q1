import { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react';
import styles from './input.module.css';

interface IInputProps {
	type: HTMLInputTypeAttribute;
	id: string;
	name: string;
	label: string;
	value: string;
	isError?: boolean;
	errorMessage?: string;
	className?: string;
	onChange: (value: string) => void;
}

export const Input: FC<IInputProps> = ({
	type,
	id,
	name,
	label,
	value,
	isError,
	errorMessage,
	className,
	onChange,
}) => {
	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<>
			<label htmlFor={id} className={styles['label']}>
				{label}
			</label>
			<input
				className={`${className} ${styles['input']}`}
				type={type}
				onChange={onInputChange}
				id={id}
				name={name}
				value={value}
			/>
			{isError ? <p className={styles['error-text']}>{errorMessage}</p> : <></>}
		</>
	);
};
