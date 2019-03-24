import React from 'react';

class ListEmployees extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            selected: '',
            higlight: '',
        }
    }


    setIdInState(id){
        this.setState({selected: id});
    }

    render(){
        const {list, lastElem} = this.props;
        // const selected = this.state.selected;
        return(
            <ul className="list-group catalog_list-employees">
                {
                    list.map(item => 
                        <li 
                            key={item.id} 
                            className={`list-group-item catalog_list-item active`}
                            onClick={() => { this.setIdInState(item.id); }}
                        >
                            {item.fullName}
                        </li>
                    )
                }
            </ul>
        )
    }
    
}
export default ListEmployees;