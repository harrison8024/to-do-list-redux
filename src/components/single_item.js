import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingleItem} from '../actions';
import {Link} from 'react-router-dom';

class SingleItem extends Component{
    componentDidMount(){
        this.props.getSingleItem(this.props.match.params.id);
    }
    render(){
        console.log('Single Porps:', this.props);
        const {title, details} = this.props.item;
        return (
            <div>
                <h2 className="center" >To Do Items</h2>
                <div className="row right-align">
                    <Link className="btn blue-grey" to="/">View Full list</Link>
                </div>
                <h4>{title}</h4>
                <p>{details}</p>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        item: state.list.single
    }
}

export default connect(mapStateToProps, {getSingleItem})(SingleItem);