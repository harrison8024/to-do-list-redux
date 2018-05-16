import React from 'react';
import List from './list';
import {Route} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import AddItem from './add_item';
import SingleItem from "./single_item";

const App = () => (
    <div className="container">
        <Route exact path="/" component={List}/>
        <Route path="/add-item" component={AddItem}/>
        <Route path="/item/:id" component={SingleItem}/>
    </div>
);

export default App;
