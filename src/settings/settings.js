import UI from 'editor-ui-lib';
import React from 'react'
import Wix from 'Wix';
import Main from './modules/main/main';
import Settings from './modules/settings/settings';
import Layout from './modules/layout/layout';
import Design from './modules/design/design';
import Text from './modules/text/text';

export default class settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activatedChat: false,
            toggles: []
        };
        this.checkMainTabComplete = this.checkMainTabComplete.bind(this);
        this.activateChat = this.activateChat.bind(this);
        this.changeViewMode = this.changeViewMode.bind(this);
        this.registerToViewModeChange = this.registerToViewModeChange.bind(this);
    }

    settingsUpdate (key, value) {
        const data = {key: key, value: value};
        Wix.Settings.triggerSettingsUpdatedEvent(data);
    }

    saveText(key, value) {

    }

    checkMainTabComplete() {
        if (!this.state.activatedChat && this.refs.panelTabs) {
            this.refs.panelTabs.showTabNotification(0, 'In order to start chatting with your site visitors, you need to activate chat. Press the button “Activate Chat” to open Wix Engage in your dashboard');
        }
    }

    activateChat() {
        if (this.refs.panelTabs) {
            this.refs.panelTabs.removeTabNotification(0);
            this.state.activatedChat = true;
        }
    }

    changeViewMode(mode) {
        this.settingsUpdate('VIEW_MODE_CHANGE', mode === '1' ? 'EXPAND' : 'COLLAPSE');
        console.log('mode', mode);
        this.state.toggles.forEach(toggle => {
            toggle.setState({
                checked: mode
            })
        })
    }

    registerToViewModeChange(ref) {
        this.state.toggles.push(ref);
    }

    render () {
        return (
            <UI.appSettings>
                <UI.panelTabs defaultTabIndex={0} ref="panelTabs" onChange={index => !!index && this.checkMainTabComplete()}>
                    <Main tab="Main" onActivateChat={this.activateChat}/>
                    <Layout tab="Layout" registerToViewModeChange={this.registerToViewModeChange} onUpdate={this.settingsUpdate} changeViewMode={this.changeViewMode}/>
                    <Settings tab="Settings" registerToViewModeChange={this.registerToViewModeChange} onUpdate={this.settingsUpdate} changeViewMode={this.changeViewMode}/>
                    <Text tab="Text" registerToViewModeChange={this.registerToViewModeChange} onUpdate={this.settingsUpdate} changeViewMode={this.changeViewMode}/>
                    <Design tab="Design" registerToViewModeChange={this.registerToViewModeChange} onUpdate={this.settingsUpdate} changeViewMode={this.changeViewMode}/>
                </UI.panelTabs>
            </UI.appSettings>
        )
    }
}