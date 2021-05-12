const Label = (props)=>{
    return(
        <label htmlFor="">
            {props.name? 'Name' : props.email?'Email': props.number?'Number':props.education?'Education' : props.school?'School': props.date?'Date': props.title?'Title':props.company?'Company':props.position ? 'Position' : props.task?'Task': props.grade? 'Grade' :'End Date' }
        </label>
    );
}

export default Label;