import React from 'react';
import ButtonsPanel from './ButtonsPanel'
import Form from './Form'
// import ListEmployees from './ListEmployees'
import UpdateListEmployees from '../containers/UpdateListEmployees'

class CatalogEmployees extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            formData:{
                fullName: '',
                position: '',
                dateBirth: '',
                gender: '',
                fired: false,
            }
        }
        this.getFormData = this.getFormData.bind(this);
    }

    getFormData(e){
        const target = e.target;
        const formData = this.state.formData;
        this.setInStateFormData(target, formData)
    }

    setInStateFormData(target, formData){
        this.setState( () => {
            return {
                formData:{
                    ...formData,
                    [target.name]: target.value
                }
            }
             
        })
    }

    render(){
        const formData = this.state.formData;
        return (
            <div className="catalog">
                <div className="catalog__content">
                    <ButtonsPanel formData={formData}/>
                    <div className="catalog__employee-info">
                        <UpdateListEmployees/>
                        <Form getFormData={this.getFormData}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default CatalogEmployees;