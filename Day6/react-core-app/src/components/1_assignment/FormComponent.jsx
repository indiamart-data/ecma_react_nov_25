// import React from "react";
// import TextInput from "../common/TextInput";

// const FormComponent = (props) => {
//     return (
//         <div className='row'>
//             <div className='col-sm-6 offset-sm-3'>
//                 <form className='horm-horizontal' autoComplete='off' onSubmit={
//                     (e) => {
//                         e.preventDefault();
//                         props.saveEmployee(props.employee);
//                     }
//                 }>
//                     <fieldset disabled={props.disabled}>
//                         <legend className="text-center text-secondary text-uppercase font-weight-bold">Add/Edit Employee Information</legend>
//                         <hr className="mt-0" />
//                         <TextInput label={"Employee Id"} name={"id"} value={props.employee.id} readOnly={true} />
//                         <TextInput label={"Employee Name"} name={"name"} value={props.employee.name} onChange={props.changeEmployee} />
//                         <TextInput label={"Designation"} name={"designation"} value={props.employee.designation} onChange={props.changeEmployee} />
//                         <TextInput label={"Salary"} name={"salary"} value={props.employee.salary} onChange={props.changeEmployee} />

//                         <div className="d-grid gap-2 mx-auto mt-3">
//                             <button type="submit" className="btn btn-primary">Submit</button>
//                             <button type="reset" className="btn btn-warning" onClick={
//                                 (e) => { props.resetEmployee(); }
//                             }>Reset</button>
//                         </div>
//                     </fieldset>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default React.memo(FormComponent);

// ----------------------------------------------------
import React from "react";
import { useForm } from 'react-hook-form';
import TextInputHookForm from "../common/TextInputHookForm";

const FormComponent = ({ employee, saveEmployee, resetEmployee, disabled }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: employee
    });

    useEffect(() => {
        reset(employee);
    }, [employee, reset]);

    const onSubmit = (data) => {
        saveEmployee(data);
    }

    return (
        <div className='row'>
            <div className='col-sm-6 offset-sm-3'>
                <form className='horm-horizontal' autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                    <fieldset disabled={disabled}>
                        <legend className="text-center text-secondary text-uppercase font-weight-bold">Add/Edit Employee Information</legend>
                        <hr className="mt-0" />
                        <TextInputHookForm label={"Employee Id"} name={"id"} readOnly={true} register={register} errors={errors} />
                        <TextInputHookForm label={"Employee Name"} name={"name"} register={register} errors={errors} validation={{ required: 'Employee Name is required' }} />
                        <TextInputHookForm label={"Designation"} name={"designation"} register={register} errors={errors} validation={{ required: 'Designation is required' }} />
                        <TextInputHookForm label={"Salary"} name={"salary"} register={register} errors={errors} validation={{
                            required: 'Salary is required',
                            validate: value => !isNaN(value) || "Salary must be a number"
                        }} />

                        <div className="d-grid gap-2 mx-auto mt-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="reset" className="btn btn-warning" onClick={resetEmployee}>Reset</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default React.memo(FormComponent);