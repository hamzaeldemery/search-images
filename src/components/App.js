import React from "react";
import { SearchBar } from "./searchBar";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitSearch = this.onSubmitSearch.bind(this);
        this.state = { searchInput: "" };
    }

    onSubmitSearch(input) {
        console.log(input);
        this.setState({ searchInput: input });
        console.log(this.state.searchInput);
    }

    render() {
        return (
            <div className="ui container" style={{ padding: "20px" }}>
                <SearchBar onSubmit={this.onSubmitSearch} />
                <div className="ui inverted divider"></div>
            </div>
        );
    }
}
