import UI from 'editor-ui-lib';
import React from 'react'
import './settings.scss';
import ViewMode from '../../components/viewMode/viewMode'

export default class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {toggleSwitch: true};
    this.onToggleSwitchChange = this.onToggleSwitchChange.bind(this);
  }

  onToggleSwitchChange(newVal) {
    this.props.onUpdate('visible-when-offline', newVal);
    this.setState({
      toggleSwitch: newVal
    });
  }

  render () {
      return (
          <div>

            <ViewMode changeViewMode={this.props.changeViewMode} registerToViewModeChange={this.props.registerToViewModeChange}/>

              <hr className="divider-long"/>

              <UI.textInput
                title="Notification Email"
                placeholder="Enter your email..."
                infoText="When you are offline, you will get offline chat messages to this email"
                onChange={(newVal)=>this.props.onUpdate('settings_textFieldContent', newVal)}/>

              <hr className="divider-long"/>

              <UI.toggleSwitch
                label="Show chat when offline"
                defaultValue={this.state.toggleSwitch}
                wix-param="visible-when-offline"
                onChange={newVal => this.onToggleSwitchChange(newVal)}>
              </UI.toggleSwitch>
            { this.state.toggleSwitch ?
              <div className="group-checkbox">
                <hr className="divider-short"/>
                <p>Offline info required from contact</p>
                <UI.checkbox
                  label="Name"
                  defaultValue={true}
                  wix-param="required-field_name"
                  onChange={(newVal)=>this.props.onUpdate('required-field_name', newVal)}>
                </UI.checkbox>
                <UI.checkbox
                  label="Email"
                  defaultValue={true}
                  onChange={(newVal)=>console.log(newVal)}>
                </UI.checkbox>
                <UI.checkbox
                  label="Phone"
                  defaultValue={true}
                  wix-param="required-field_phone"
                  onChange={(newVal)=>this.props.onUpdate('required-field_phone', newVal)}>
                </UI.checkbox>
                <UI.checkbox
                  label="Message"
                  defaultValue={true}
                  onChange={(newVal)=>console.log(newVal)}>
                </UI.checkbox>
              </div> : null
            }

          </div>
      )
  }
}
