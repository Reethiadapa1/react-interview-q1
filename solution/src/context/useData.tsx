import {
	FC,
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react';

interface IDataProps {
	children: ReactNode;
}

export interface IData {
	location: string;
	name: string;
}

const INITIAL_DATA = {
	data: [] as Array<IData>,
	addData: (data: IData) => {},
};

const DataContext = createContext(INITIAL_DATA);

export const DataProvider: FC<IDataProps> = ({ children }) => {
	const [data, setData] = useState<Array<IData>>([]);

	const addData = useCallback(({ location, name }: IData) => {
		setData((prev) => [...prev, { location, name }]);
	}, []);

	return (
		<DataContext.Provider
			value={useMemo(() => ({ data, addData }), [data, addData])}
		>
			{children}
		</DataContext.Provider>
	);
};

export const useData = () => {
	return useContext(DataContext);
};
