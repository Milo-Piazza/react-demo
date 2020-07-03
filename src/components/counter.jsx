import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        tags: ["tag1", "tag2", "tag3"]
    };
    styles = {
        fontSize: "20px",
        fontWeight: "bold"
    };

    handleIncrement = () => {
        this.setState({count: this.state.value + 1})
    }

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags</p>;
        }
        return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
    }

    render() { 
        return (
        <React.Fragment>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <ul>
                {this.renderTags()}
            </ul>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;