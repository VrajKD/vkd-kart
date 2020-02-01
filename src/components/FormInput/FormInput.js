import React from 'react';
// import './FormInput.scss'
import { GroupInputContainer, FormInputContainer, FormInputLabel } from './FormInput-styled'

const FormInput = ({ label, handleChange, ...otherFormProps }) => (
    <GroupInputContainer >
        <FormInputContainer onChange={handleChange} {...otherFormProps} />
        {
            label ?
                (
                    <FormInputLabel className={`${otherFormProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</FormInputLabel>) : null
        }
    </GroupInputContainer>
)

export default FormInput;