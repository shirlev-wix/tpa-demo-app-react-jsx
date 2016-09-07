import UI from 'editor-ui-lib';
import React from 'react'
import Thumbnails from './../../components/thumbnails/thumbnails'
import './layout.scss';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="layout-tab">
                <UI.toggleButtons
                  defaultValue={this.props.viewMode}
                  options={[{ value: '1', label: 'open'}, { value: '2', label: 'closed'}]}
                  onChange={this.props.changeViewMode}
                  wix-param="toggle_buttons_number"
                  title="View mode:"/>

                <hr className="divider-long"/>

                <Thumbnails
                  defaultValue='1'
                  options={[{ value: '1', label: 'Clean', url: ''}, { value: '2', label: 'Rounded', url: ''}]}
                  onChange={(newVal)=>console.log(newVal)}
                  wix-param="toggle_buttons_number"
                  title="Choose layout:"/>

                <hr className="divider-long"/>

                <UI.radioButtons
                  title="Widget position"
                  options={[
                    { value: '1', label: 'Bottom right', className: 'classFirst'},
                    { value: '2', label: 'Bottom left', className: 'classSecond'}]}
                  defaultValue="1" onChange={(newVal)=>console.log(newVal + ' clicked')}
                  />
            </div>
        )
    }
}