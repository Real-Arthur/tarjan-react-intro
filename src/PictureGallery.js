// React Library
// And 'Component' variable from inside
import React, { Component } from "react";

class PictureGallery extends Component {

    render() {
        return (
            <div>
                <img src="http://picsum.photos/200/200" />
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