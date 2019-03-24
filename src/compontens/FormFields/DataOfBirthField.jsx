import React from 'react';

function DataOfBirthField({ getFormData }) {
  return(
    <div className="form-group">
      <label htmlFor="dateOfBirth">Дата рождения</label>
      <input
        type="date"
        className="form-control"
        id="dateBirth"
        name="dateBirth"
        // value={value}
        onChange={(e) => { getFormData(e); }}
      />
    </div>
  );
}

export default DataOfBirthField;
