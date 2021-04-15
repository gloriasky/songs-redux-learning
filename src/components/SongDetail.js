import React from "react";
import {connect} from "react-redux";

class SongDetail extends React.Component {


    render() {
        return (
            <div>
                {this.props.song && <div>
                    Details for:
                    <div>Title: {this.props.song.title}</div>
                    <div>Length: {this.props.song.duration}</div>
                </div>}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    };
}

export default connect(
    mapStateToProps,
)
(SongDetail);
