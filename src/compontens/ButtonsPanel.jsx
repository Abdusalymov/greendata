import React from 'react';
import { addEmploeey } from '../store/actions/addEmployee';

import { connect } from 'react-redux';

const ButtonsPanel = ({ formData, dispatch }) => {
    return(
        <div>
            <button >
                Сохранить изменения
            </button>
            <button>Обновить данные</button>
            <button>Удалить выбранного сотрудника</button>
            <button
                onClick={ () => { dispatch( addEmploeey(formData) ) }}
            >
                Добавить нового сотрудника
            </button>
        </div>
    )
}
export default connect()(ButtonsPanel);