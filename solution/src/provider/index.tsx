import { FC, ReactNode } from 'react';
import { DataProvider } from '../context/useData';

interface IProviderProps {
	children: ReactNode;
}

export const Provider: FC<IProviderProps> = ({ children }) => {
	return <DataProvider>{children}</DataProvider>;
};
