import UI from 'editor-ui-lib';
import React from 'react'
import './settings.scss';

export default class Settings extends React.Component {
    render () {
        return (
            <div>

                <UI.toggleButtons
                  defaultValue='1'
                  options={[{ value: '1', label: 'open'}, { value: '2', label: 'closed'}]}
                  onChange="(newVal)=>console.log(newVal)"
                  wix-param="toggle_buttons_number"
                  title="View mode:"/>

                <hr className="divider-long"/>

                <UI.textInput
                  title="Notification Email"
                  placeholder="Enter your email..."
                  infoText="When you are offline, you will get offline chat messages to this email"
                  onChange={(newVal)=>this.props.onUpdate('settings_textFieldContent', newVal)}/>

                <hr className="divider-long"/>

                <UI.toggleSwitch
                  label="Show chat when offline"
                  defaultValue={true}
                  onChange={(newVal)=>console.log(newVal)}>
                </UI.toggleSwitch>

                <div className="group-checkbox">
                    <hr className="divider-short"/>
                    <p>Offline info required from contact</p>
                    <UI.checkbox
                      label="Name"
                      defaultValue={true}
                      onChange={(newVal)=>console.log(newVal)}>
                    </UI.checkbox>
                    <UI.checkbox
                      label="Email"
                      defaultValue={true}
                      onChange={(newVal)=>console.log(newVal)}>
                    </UI.checkbox>
                    <UI.checkbox
                      label="Phone"
                      defaultValue={true}
                      onChange={(newVal)=>console.log(newVal)}>
                    </UI.checkbox>
                    <UI.checkbox
                      label="Message"
                      defaultValue={true}
                      onChange={(newVal)=>console.log(newVal)}>
                    </UI.checkbox>
                </div>

            </div>
        )
    }
}
