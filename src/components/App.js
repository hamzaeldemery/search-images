import React from "react";
import axios from "axios";
import { SearchBar } from "./searchBar";
import { ImageDisplayer } from "./ImageDisplayer";

const PUBLIC_KEY = "Client-ID g2rjCKQZDTKjm-x0UO4seBSx2N6vZYOVyJa4dc7CVfw";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitSearch = this.onSubmitSearch.bind(this);
        this.state = { results: [] };
    }

    onSubmitSearch = async (input) => {
        const result = await axios.get(
            "https://api.unsplash.com/search/photos",
            {
                params: { query: input },
                headers: {
                    Authorization: PUBLIC_KEY,
                },
            }
        );
        this.setState({ results: result.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ padding: "20px" }}>
                <SearchBar onSubmit={this.onSubmitSearch} />
                <div className="ui inverted divider"></div>
                <ImageDisplayer results={this.state.results} />
            </div>
        );
    }
}
