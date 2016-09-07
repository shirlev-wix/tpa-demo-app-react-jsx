import UI from 'editor-ui-lib';
import React, {PropTypes} from 'react';

export default class ViewMode extends React.Component {

  componentDidMount() {
    this.props.registerToViewModeChange(this.refs.viewMode);
  }

    render() {
      return (
        <UI.toggleButtons
          ref="viewMode"
          defaultValue='1'
          options={[{ value: '1', label: 'open'}, { value: '2', label: 'closed'}]}
          onChange={newVal => this.props.changeViewMode(newVal)}
          wix-param="view-mode"
          title="View mode:"/>
      )
    }
};

ViewMode.propTypes = {
  changeViewMode: PropTypes.func,
  registerToViewModeChange: PropTypes.func
};
