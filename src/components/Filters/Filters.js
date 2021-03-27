import React from 'react';
import Button from '../Button/Button';
import {setFilterStatus} from '../../Redux/filter/filterActions'
import {connect} from 'react-redux';
import './Filters.css'

class Filters extends React.Component{

    render=()=>{
        return(
            <div className="filters">
                <Button buttonText="All" click={()=>this.props.setFilterStatus("all")}/>
                <Button buttonText="Completed" click={()=>this.props.setFilterStatus("completed")}/>
                <Button buttonText="Active" click={()=>this.props.setFilterStatus("active")}/>
                <input className="form__input"
                type="text"
                value={this.props.searchInput}
                placeholder="Search todo"
                />
            </div>
        )
    }
}

const actions={
    setFilterStatus,
}

export default connect(null,actions)(Filters);