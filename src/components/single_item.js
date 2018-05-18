import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingleItem, toggleItemComplete} from '../actions';
import {Link} from 'react-router-dom';

class SingleItem extends Component{
    componentDidMount(){
        this.props.getSingleItem(this.props.match.params.id);
    }

    handleToggleComplete(){
        this.props.toggleItemComplete(this.props.match.params.id);
    }
    render(){
        console.log('Single Porps:', this.props);
        const {title, details, complete} = this.props.item;
        return (
            <div>
                <h2 className="center" >To Do Items</h2>
                <div className="row right-align">
                    <Link className="btn blue-grey" to="/">View Full list</Link>
                </div>
                <h4>{title}</h4>
                <p>{details}</p>
                <p> Item is {complete ? 'completed' : 'incomplete'}</p>
                <button 
                    onClick={this.handleToggleComplete.bind(this)} 
                    className={`btn ${complete ? 'yellow' : 'green' }`}
                >
                    {complete ? 'Make Incomplete' : 'Complete Item'}
                </button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        item: state.list.single
    }
}

export default connect(mapStateToProps, {
    getSingleItem,
    toggleItemComplete
})(SingleItem);