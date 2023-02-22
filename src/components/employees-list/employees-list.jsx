import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ data }) => {
	const employees = data.map((el) => {
		const { id, ...elProps } = el;

		return (
			<EmployeesListItem
				key={id}
				{...elProps}
			/>
		);
	});

	return <ul className="app-list list-group">{employees}</ul>;
};

export default EmployeesList;
