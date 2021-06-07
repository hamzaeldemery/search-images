import React from "react";
import "../css/imageList.css";
import { ImageCard } from "./ImageCard";
export class ImageDisplayer extends React.Component {
    render() {
        console.log(this.props.results);
        let display = this.props.results.map((result) => {
            return <ImageCard key={result.id} image={result} />;
        });
        return (
            <div ref={this.imageRef} className="image-display">
                {display}
            </div>
        );
    }
}
