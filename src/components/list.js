import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getListData} from '../actions';

class List extends Component {
    componentDidMount(){
        this.props.getListData();
    }
    render(){
        console.log('list props:', this.props);
        const {listData} = this.props;
        const listItems = listData.map((item, index)=>{
            return <li className="collection-item" key={index}>{item.title}</li>
        });
        return(
            <div>
                <h1 className="center">To do list</h1>
                <div className="row right-align">
                 <Link className="btn blue-grey" to="add-item">Add item</Link>
                </div>
                <ul className="collection">
                    {listItems}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        listData: state.list.all
    }
}

export default connect(mapStateToProps, {getListData})(List);