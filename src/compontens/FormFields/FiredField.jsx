import React from 'react';

class FiredField extends React.Component{

    hanlderValue(e){
        if(e.target.checked) e.target.value = true;
        else e.target.value = false;
        
        this.props.getFormData(e);
    }

    render(){
        return(
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="fired"
                name="fired"
                onChange={(e) => { this.hanlderValue(e)} }
              />
              <label className="custom-control-label" htmlFor="fired">Уволен</label>
            </div>
        );
    }
  
}

export default FiredField;
