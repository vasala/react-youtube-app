import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' }
        this.changeFun = this.changeFun.bind(this);
    }

    changeFun(term){
        this.setState({term});
        this.props.onSearchChange(term); 
    }

    render() {
        return (
            <div>
                <h2>YouTube Search</h2>
                <input onChange={(e) => this.changeFun(e.target.value)} />
            </div>
        );
    }
}

export default SearchBar;