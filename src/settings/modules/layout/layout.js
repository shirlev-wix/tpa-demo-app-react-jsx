/* global Wix */
import UI from 'editor-ui-lib';
import React from 'react'
import Thumbnails from './../../components/thumbnails/thumbnails'
import ViewMode from './../../components/viewMode/viewMode'
import './layout.scss';

export default class Layout extends React.Component {

  changePosition(newPos) {
    const compId = Wix.Utils.getOrigCompId();
    Wix.Settings.setWindowPlacement(compId, Wix.WindowPlacement[newPos === '1' ? 'BOTTOM_RIGHT' : 'BOTTOM_LEFT']);
  }
    render() {
        return (
            <div className="layout-tab">
              <ViewMode changeViewMode={this.props.changeViewMode} registerToViewModeChange={this.props.registerToViewModeChange}/>

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
                  onChange={this.changePosition}
                  />
            </div>
        )
    }
}