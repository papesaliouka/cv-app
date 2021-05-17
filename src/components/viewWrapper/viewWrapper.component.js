import React from 'react';
import View2 from '../view/view2.component';
import Form from '../form/form'
const sections = [
	{
		title: 'Personal Information',
		labels:['Name', 'Email', 'Phone'],
	},
	{
		title: 'Experience',
		labels:['Position', 'Task', 'Company'],
	},
	{
		title: 'Education',
		labels:['School', 'Year', 'Grade'],
	},
]

const formData={
	School: '',Year:'', Grade:'',
	Position: '', Task:'', Company:'',
	Name: '', Email:'', Phone:'',
}


class ViewWrapper extends React.Component {
	constructor(){
		super()
		this.state={
			section: sections,
			formData
		}
	}

	handleSubmit=(e)=>{
		e.preventDefault()
		const target = e.target;
		const value = target.value;
		const name = target.name;
		console.log(name);
		this.setState( prevState=> {
			const data= Object.assign({}, prevState.formData);
			data[name] = value
			return{
				formData: data
			}
		});
		console.log(this.state)
	}

	render(){
		return(
			<article className="cf" >
			  <div className="fl w-50 bg-near-white tc" >
				<Form sections={this.state.section}  handleSubmit={this.handleSubmit} />
			  </div>
			  <div className="fl w-50 bg-light-gray tc">
				  <View2 sections={this.state.section} formData={this.state.formData}/>
			  </div>
			</article>
		);
	}

}

export default ViewWrapper;