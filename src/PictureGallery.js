// React Library
// And 'Component' variable from inside
import React, { Component } from "react";

class PictureGallery extends Component {
    state = {
        photoWidth: 200,
        photoHeight: 200
    }

    render() {
        return (
            <div>
                {/* Do string interpilation? */}
                <img src={`https://picsum.photos/${this.state.photoWidth}/${this.state.photoHeight}`}/>
                <img src="http://picsum.photos/200/200" />
                <img src="http://picsum.photos/200/200" />
                <img src="http://picsum.photos/200/200" />
                <img src="http://picsum.photos/200/200" />
            </div>
        );
    }

}

// like modules.export on node
export default PictureGallery;