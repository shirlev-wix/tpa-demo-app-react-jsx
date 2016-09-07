import UI from 'editor-ui-lib';
import React, {PropTypes} from 'react';
import './thumbnails.scss';

export default class Thumbnails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {active: props.defaultValue};
    this.onClick = this.onClick.bind(this);
  }

  onClick(option) {
    this.setState({
      active: option.value
    });
    this.props.onChange(option.value);
  }

    render() {
      const thumbnails = this.props.options.map((option, index) =>
          <span key={`${option.value}-${index}`} className="thumbnail-item">
            <div className={`img-wrapper${this.state.active === option.value ? ' active' : ''}`} onClick={() => this.onClick(option)}>
              <img src={this.state.active === option.value ? option.urlActive || option.url : option.url}/>
            </div>
            <label>{option.label}</label>
          </span>
      );

      return (
        <div className={`thumbnails${this.props.className? ' ' + this.props.className : ''}`}>
          <p>{this.props.title}</p>
          {thumbnails}
        </div>
      )
    }
};

Thumbnails.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  title: PropTypes.string
};
