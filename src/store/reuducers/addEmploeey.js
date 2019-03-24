const addEmploeey = (state=[], action) => {
    switch(action.type){
        case 'ADD_EMPLOEEY':
            return [
                ...state, 
                {
                    id: action.id,
                    fullName: action.fullName,
                    position: action.position,
                    dateBirth: action.dateBirth,
                    gender: action.gender,
                    fired: action.fired,
                }
            ]
        default: 
            return state;
    }
}

export default addEmploeey;