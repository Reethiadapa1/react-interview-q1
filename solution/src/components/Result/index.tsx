import { FC } from 'react';
import { IData } from '../../context/useData';
import styles from './result.module.css';

interface IResultProps {
	headers: Array<string>;
	data: Array<IData>;
}

export const Result: FC<IResultProps> = ({ headers, data }) => {
	return (
		<section className={styles['result-container']}>
			<section className={styles['result-header']}>
				{headers.map((header) => (
					<section key={header} className={styles['result-header-cell']}>
						<p className={styles['header-text']}>{header}</p>
					</section>
				))}
			</section>
			{data.map((eachData, index) => (
				<section
					key={eachData?.name + eachData?.location + index}
					className={`${styles['result-values']} ${
						styles[`result-values--${index % 2 === 0 ? 'even' : 'odd'}`]
					}`}
				>
					<section className={styles['result-value-cell']}>
						{eachData?.name}
					</section>
					<section className={styles['result-value-cell']}>
						{eachData?.location}
					</section>
				</section>
			))}
		</section>
	);
};
