import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = () => {
	return (
		<ul className="app-list list-group">
			<EmployeesListItem
				name="John Doe"
				salary={1800}
			/>
			<EmployeesListItem
				name="John Smith"
				salary={4300}
			/>
			<EmployeesListItem
				name="Boris Brejcha"
				salary={3000}
			/>
		</ul>
	);
};

export default EmployeesList;
