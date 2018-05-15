import React, {Component} from 'react';

class SingleItem extends Component{
    componentDidMount(){
        console.log('Single Porps:', this.props);
    }
    render(){
        return (
            <div>
                <h1 className="center" >All the single Items</h1>
            </div>
        )
    }
}
export default SingleItem;