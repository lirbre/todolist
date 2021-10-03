import React from "react"
import { Icon } from '@iconify/react';
import { findByLabelText } from "@testing-library/dom";

class Things extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            class: 'new-item',
            display: 'flex'
        }

        this.markAsDone = this.markAsDone.bind(this)
    }
    
    markAsDone() {
        if (this.state.class === "new-item") {
            this.setState({
                class: "new-item done-item"
            })
        } else if (this.state.class === "new-item done-item") {
            this.setState({
                class: "new-item"
            })
        }
    }

    render () {
        return (
        <div className={this.state.class} 
        onClick={() => this.markAsDone()}
        style={{display: this.state.display}}>
            <h2>Click to mark as done</h2>
            <h3>Time left</h3>
            <Icon className="button-close" icon="carbon:close-filled" color="#020202" width="35" height="35" 
            onClick={() => this.setState ({
                display: "none"
            })}/>
        </div>
        );
    }   
}

export default Things