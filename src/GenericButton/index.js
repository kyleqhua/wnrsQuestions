import React from 'react';
import './styles.css';

class GenericButton extends React.PureComponent {
    constructor(props) { super(props) }
    render() {
        return (<button className='g-button' onClick={this.props.changeQ}>{this.props.label} </button>);
    }
}

export default GenericButton;