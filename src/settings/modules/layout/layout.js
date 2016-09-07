import UI from 'editor-ui-lib';
import React from 'react'
import Thumbnails from './../../components/thumbnails/thumbnails'
import './layout.scss';

export default class Layout extends React.Component {

  componentDidMount() {
    this.props.registerToViewModeChange(this.refs.viewMode);
  }

    render() {
        return (
            <div className="layout-tab">
                <UI.toggleButtons
                  ref="viewMode"
                  defaultValue='1'
                  options={[{ value: '1', label: 'open'}, { value: '2', label: 'closed'}]}
                  onChange={(newVal) => this.props.changeViewMode(newVal)}
                  wix-param="view-mode"
                  title="View mode:"/>

                <hr className="divider-long"/>

                <Thumbnails
                  defaultValue='1'
                  options={[{ value: '1', label: 'Clean', url: ''}, { value: '2', label: 'Rounded', url: ''}]}
                  onChange={(newVal)=>this.props.onUpdate('layout', newVal)}
                  wix-param="layout"
                  title="Choose layout:"/>

                <hr className="divider-long"/>

                <UI.radioButtons
                  title="Widget position"
                  options={[
                    { value: '1', label: 'Bottom right', className: 'classFirst'},
                    { value: '2', label: 'Bottom left', className: 'classSecond'}]}
                  defaultValue="1"
                  wix-param="position"
                  onChange={(newVal)=>this.props.onUpdate('position', newVal)}
                  />
            </div>
        )
    }
}