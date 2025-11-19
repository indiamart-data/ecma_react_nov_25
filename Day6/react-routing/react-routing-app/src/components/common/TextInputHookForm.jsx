import React from 'react';
import PropTypes from 'prop-types';

const TextInputHookForm = ({ name, label, placeholder, readOnly, register, errors, validation }) => {
    return (
        <div className="form-group mb-1">
            <label className="mb-0" htmlFor={name}>{label}</label>
            <input type="text"
                className={`form-control ${errors && errors[name] ? 'is-invalid' : ''}`}
                id={name}
                name={name}
                placeholder={placeholder}
                readOnly={readOnly}
                {...register(name, validation)} />
            {errors && errors[name] && <div className="invalid-feedback">{errors[name].message}</div>}
        </div>
    );
};

TextInputHookForm.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
    validation: PropTypes.object
};

export default TextInputHookForm;