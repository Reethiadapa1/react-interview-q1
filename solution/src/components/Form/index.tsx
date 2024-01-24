import { FC, FormEvent, ReactNode } from 'react';
import styles from './form.module.css';

interface IFormProps {
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
	children: ReactNode;
}

export const Form: FC<IFormProps> = ({ onSubmit, children }) => {
	const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(e);
	};

	return (
		<form onSubmit={onFormSubmit} className={styles['form']}>
			{children}
		</form>
	);
};
