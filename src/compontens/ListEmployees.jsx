import React from 'react';

class ListEmployees extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            active: '',
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({ active: nextProps.lastElem.id })
    }

    setIdInState(id){
        this.setState({ active: id })
    }

    render(){
        return(
            <ul className="list-group catalog_list-employees">
                {
                    
                    this.props.list.map(item => 
                        <li 
                            key={item.id} 
                            className={`list-group-item catalog_list-item ${ item.id === this.state.active && 'active'}`}
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