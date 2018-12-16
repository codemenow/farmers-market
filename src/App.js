import React, { Component } from 'react';
import './App.css';
import {Header} from './Header';
import {SearchBox} from "./SearchBox";
import {ValidationMessage} from "./ValidationMessage";
import {SearchResultInfo} from "./SearchResultInfo";
import {Markets} from "./Markets";
import axios from "axios";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {isValid: true, zipcode: '', markets: []};
    }
    onSearch = (e) => {
        const endpoint = 'https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=';
        let s = e.target.value;
        let regex = /^\d{5}/;
        this.setState({zipcode: s});
        if(s.match(regex) && s.match(regex)[0] === s){
            this.setState({ isValid: true });
            axios.get(`${endpoint}${s}`)
                .then(response => {
                    this.setState({markets: response.data.results });
                    console.log(this.state);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            this.setState({ isValid: false, markets: [] });
        }
    };
    render() {
        return (
            <React.Fragment>
                <div className='header'>
                    <Header header='Farmers Markets'/>
                    <SearchBox onsearch={ this.onSearch }/>
                    <ValidationMessage isValid={this.state.isValid}/>
                    <SearchResultInfo marketCount={this.state.markets.length} zipcode={this.state.zipcode}/>
                </div>
                <Markets markets={this.state.markets}/>
            </React.Fragment>
        );
    }
}

export default App;
