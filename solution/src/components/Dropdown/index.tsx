import { ChangeEvent, FC } from 'react';
import styles from './dropdown.module.css';

interface IDropdownProps {
	id: string;
	label: string;
	options: Array<string>;
	value: string;
	onChange: (value: string) => void;
}

export const Dropdown: FC<IDropdownProps> = ({
	options = [],
	id,
	label,
	value,
	onChange,
}) => {
	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange(e.target.value);
	};
	return (
		<>
			<label htmlFor={id} className={styles['label']}>
				{label}
			</label>
			<select
				id={id}
				onChange={onSelectChange}
				value={value}
				className={styles['dropdown']}
			>
				{options.map((eachOption) => (
					<option key={eachOption} value={eachOption}>
						{eachOption}
					</option>
				))}
			</select>
		</>
	);
};
