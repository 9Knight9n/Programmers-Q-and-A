import React, { Component } from "react";
import { ScrollTo } from "react-scroll-to";
 
export default class Test extends Component {
  myRef = React.createRef();
 
  render() {
    return (
      <React.Fragment>
        <div className="black-text">

        
        <ScrollTo>
          {({ scroll }) => (
            <a onClick={() => scroll({ ref: this.myRef, x: 20, y: 500 })}>
              Scroll to Bottom
            </a>
          )}
        </ScrollTo>
 
        <div ref={this.myRef}>My Element</div>
        </div>
        </React.Fragment>
    );
  }
}