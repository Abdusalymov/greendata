const shortid = require('shortid');

export const addEmploeey = (formData) => ({
    type: 'ADD_EMPLOEEY',
    id: shortid.generate(),
    fullName: formData.fullName,
    position: formData.position,
    dateBirth: formData.dateBirth,
    gender: formData.gender,
    fired: formData.fired,
});