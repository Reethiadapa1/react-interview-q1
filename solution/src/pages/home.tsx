import { FormEvent, useEffect, useState } from 'react';
import { Button, Form, Input, Result } from '../components';
import { Dropdown } from '../components/Dropdown';
import { useData } from '../context/useData';
import { getLocations, isNameValid } from '../mock-api/apis';

export const Home = () => {
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState(false);
	const [location, setLocation] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [listOfLocations, setListOfLocations] = useState<Array<string>>([]);

	const { addData, data } = useData();

	const onAdd = (e: FormEvent<HTMLFormElement>) => {
		addData({ name, location });
	};

	const onClear = () => {
		setName('');
		// setLocation(listOfLocations[0]);
	};

	const onNameChange = async (value: string) => {
		setName(value);
		setNameError(false);
		setIsLoading(true);
		const isValid = await isNameValid(value);
		setIsLoading(false);
		if (!isValid) {
			setNameError(true);
		}
	};

	const onLocationChange = (value: string) => {
		setLocation(value);
	};

	useEffect(() => {
		(async () => {
			const locations = await getLocations();
			setListOfLocations(['', ...locations]);
			setLocation(locations?.[0]);
		})();
	}, []);

	return (
		<>
			<Form onSubmit={onAdd}>
				<Input
					type="text"
					id="name"
					name="name"
					label="Name"
					value={name}
					isError={nameError}
					errorMessage="this name has already been taken"
					onChange={onNameChange}
				/>
				<Dropdown
					options={listOfLocations}
					id="location"
					label="Location"
					value={location}
					onChange={onLocationChange}
				/>
				<Button type="reset" className="clear" onClick={onClear}>
					Clear
				</Button>
				<Button
					type="submit"
					className="add"
					disabled={isLoading || nameError || !name}
				>
					Add
				</Button>
			</Form>
			<Result headers={['Name', 'Location']} data={data} />
		</>
	);
};
