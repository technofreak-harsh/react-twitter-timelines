import React, { Component } from 'react';

class Find extends Component {
  render() {
    return(
      <div>
        <form className="form mt-5 mb-5">
            <div className="text-center">
                <button className="btn btn-primary btn-round" checked={this.props.searched} onClick={this.props.onSearch}>Toggle here <div className="ripple-container"></div></button>
            </div> 
        </form>
      </div>
    );
  }
}

export default Find;
