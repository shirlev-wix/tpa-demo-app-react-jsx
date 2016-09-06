import UI from 'editor-ui-lib';
import React from 'react'

export default class Text extends React.Component {
    onClick () {
    }

    render () {
        return (
            <div className="text-tab">

                <UI.toggleButtons
                  defaultValue='1'
                  options={[{ value: '1', label: 'open'}, { value: '2', label: 'closed'}]}
                  onChange="(newVal)=>console.log(newVal)"
                  wix-param="toggle_buttons_number"
                  title="View mode:"/>

                <hr className="divider-long"/>

                <UI.textInput
                  title="Agents / Business name"
                  placeholder="Enter your email..."
                  onChange={(newVal)=>this.props.onUpdate('settings_textFieldContent', newVal)}/>

                <hr className="divider-long"/>

                <UI.textInput
                  title="Online title"
                  placeholder="Enter your email..."
                  onChange={(newVal)=>this.props.onUpdate('settings_textFieldContent', newVal)}/>

                <hr className="divider-long"/>

                <UI.textInput
                  title="Offline title"
                  placeholder="Enter your email..."
                  onChange={(newVal)=>this.props.onUpdate('settings_textFieldContent', newVal)}/>

                <hr className="divider-long"/>

                <UI.textInput
                  title="Online message"
                  placeholder="Enter your email..."
                  onChange={(newVal)=>this.props.onUpdate('settings_textFieldContent', newVal)}/>

                <hr className="divider-long"/>

                <UI.textInput
                  title="Offline message"
                  placeholder="Enter your email..."
                  onChange={(newVal)=>this.props.onUpdate('settings_textFieldContent', newVal)}/>

                <hr className="divider-long"/>

                <UI.textInput
                  title="When a user has technical problem"
                  placeholder="Enter your email..."
                  onChange={(newVal)=>this.props.onUpdate('settings_textFieldContent', newVal)}/>

                <hr className="divider-long"/>

                <UI.textInput
                  title="When a agent doesn’t respond"
                  placeholder="Enter your email..."
                  onChange={(newVal)=>this.props.onUpdate('settings_textFieldContent', newVal)}/>
            </div>
        )
    }
}