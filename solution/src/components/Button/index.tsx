import { FC, MouseEventHandler, ReactNode } from 'react';
import styles from './button.module.css';

interface IButtonProps {
	children: ReactNode;
	className?: string;
	type: 'submit' | 'reset' | 'button' | undefined;
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<IButtonProps> = ({
	children,
	type,
	className,
	disabled,
	onClick,
}) => {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`${styles['button']} ${className ? styles[className] : ''}`}
		>
			{children}
		</button>
	);
};
