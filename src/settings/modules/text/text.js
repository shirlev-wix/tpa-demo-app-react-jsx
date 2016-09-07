import UI from 'editor-ui-lib';
import React from 'react'
import ViewMode from '../../components/viewMode/viewMode'

export default class Text extends React.Component {
    onClick () {
    }

  render () {
        return (
            <div className="text-tab">

              <ViewMode changeViewMode={this.props.changeViewMode} registerToViewModeChange={this.props.registerToViewModeChange}/>

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