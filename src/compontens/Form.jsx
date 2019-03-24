import React from 'react';

import FullNameField from './FormFields/FullNameField';
import PositionField from './FormFields/PositionField';
import DataOfBirthField from './FormFields/DataOfBirthField';
import GenderField from './FormFields/GenderField';
import FiredField from './FormFields/FiredField';

const Form = ({ getFormData }) => {
    return(
        <div>
            <FullNameField getFormData={getFormData}/>
            <PositionField getFormData={getFormData}/>
            <DataOfBirthField getFormData={getFormData}/>
            <GenderField getFormData={getFormData}/>
            <FiredField getFormData={getFormData}/>
        </div>
    )
}
export default Form;