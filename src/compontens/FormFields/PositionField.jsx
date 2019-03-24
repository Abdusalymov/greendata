import React from 'react';

function PositionField({ getFormData }) {
  return(
    <div className="form-group">
      <label htmlFor="position">Должность</label>
      <select
        className="form-control"
        id="position"
        name="position"
        // value={value}
        onChange={(e) => { getFormData(e); }}
      >
        <option>Офис-менеджер</option>
        <option>Начальник юридического отдела </option>
        <option>Юрист</option>
        <option>Диспетчер </option>
        <option>Секретарь генерального директора </option>
      </select>
    </div>
  );
}

export default PositionField;
