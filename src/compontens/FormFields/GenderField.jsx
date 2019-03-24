import React from 'react';

function GenderField({ getFormData }) {
  return(
    <div className="form-group">

      <div className="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id="male"
          name="gender"
          className="custom-control-input"
          value="male"
          onChange={(e) => {getFormData(e)} }
        />
        <label className="custom-control-label" htmlFor="male">М</label>
      </div>

      <div className="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id="female"
          name="gender"
          className="custom-control-input"
          value="female"
          onChange={(e) => {getFormData(e)} }
        />
        <label className="custom-control-label" htmlFor="female">
        Ж
        </label>
      </div>

      </div>
  );
}

export default GenderField;
