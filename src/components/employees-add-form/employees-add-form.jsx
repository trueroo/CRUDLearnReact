import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			userSalary: '',
		};
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		const { userName, userSalary } = this.state;
		return (
			<div className="app-add-form">
				<h3>Add new employee</h3>
				<form className="add-form d-flex">
					<input
						type="text"
						className="form-control new-post-label"
						placeholder="Name?"
						name="userName"
						value={userName}
						onChange={this.onValueChange}
					/>
					<input
						type="number"
						className="form-control new-post-label"
						placeholder="Salary in $?"
						name="userSalary"
						value={userSalary}
						onChange={this.onValueChange}
					/>

					<button
						type="submit"
						className="btn btn-outline-light"
					>
						Add
					</button>
				</form>
			</div>
		);
	}
}

export default EmployeesAddForm;
