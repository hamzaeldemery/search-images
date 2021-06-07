import React from "react";

export class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { span: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount = () => {
        console.log(this.imageRef);
        this.imageRef.current.addEventListener("load", this.setSpans);
        // let span =
    };

    setSpans = () => {
        let height = this.imageRef.current.height;
        let span = Math.ceil(height / 10);
        this.setState({ span });
    };

    render() {
        let result = this.props.image;
        return (
            <div
                key={result.id}
                style={{ gridRowEnd: `span ${this.state.span}` }}
            >
                <img
                    ref={this.imageRef}
                    src={result.urls.small}
                    alt={result.alt_description}
                />
            </div>
        );
    }
}
