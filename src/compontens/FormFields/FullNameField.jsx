import React from 'react';

function FullNameField({ getFormData }) {
  return(
    <div className="form-group">
      <label htmlFor="fullName">ФИO сотрудника</label>
      <input
        type="text"
        className="form-control"
        id="fullName"
        name="fullName"
        placeholder="ФИО"
        onChange={(e) => { getFormData(e); }}
        // value={value}
      />
    </div>
  );
}

export default FullNameField;
