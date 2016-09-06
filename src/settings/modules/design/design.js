import UI from 'editor-ui-lib';
import React from 'react'
import Thumbnails from '../../components/thumbnails/thumbnails'
import './design.scss';

export default class Design extends React.Component {
  render() {
    return (
      <div className="design-tab">
        <UI.toggleButtons
          defaultValue='1'
          options={[{ value: '1', label: 'open'}, { value: '2', label: 'closed'}]}
          onChange={(newVal)=>console.log(newVal)}
          wix-param="toggle_buttons_number"
          title="View mode:"/>

        <hr className="divider-long"/>

        <Thumbnails
          className="agents-picture"
          defaultValue='1'
          options={[{ value: '1', label: 'None', url: ''}, { value: '2', label: 'Avatar', url: ''}, { value: '3', label: 'Upload', url: ''}]}
          onChange={(newVal)=>console.log(newVal)}
          wix-param="toggle_buttons_number"
          title="Agents Picture"/>

        <hr className="divider-long"/>

        <Thumbnails
          className="radius"
          defaultValue='1'
          options={[{ value: '0', url: ''}, { value: '8', url: ''}, { value: '15', url: ''}]}
          onChange={(newVal)=>console.log(newVal)}
          wix-param="toggle_buttons_number"
          title="Radius"/>

        <hr className="divider-long"/>

        <UI.colorPickerInput title="Main Color" wix-param="myBgColor" startWithColor="color-8"></UI.colorPickerInput>
      </div>
    )
  }
}
