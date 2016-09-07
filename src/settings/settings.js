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
            viewMode: '1'
        };
        this.checkMainTabComplete = this.checkMainTabComplete.bind(this);
        this.activateChat = this.activateChat.bind(this);
        this.changeViewMode = this.changeViewMode.bind(this);
    }

    settingsUpdate (key, value) {
        const data = {key: key, value: value};
        Wix.Settings.triggerSettingsUpdatedEvent(data);
        console.log(data);
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
        this.setState({
           viewMode: mode
        });
    }

    render () {
        return (
            <UI.appSettings>
                <UI.panelTabs defaultTabIndex={0} ref="panelTabs" onChange={index => !!index && this.checkMainTabComplete()}>
                    <Main tab="Main" onActivateChat={this.activateChat}/>
                    <Layout tab="Layout" onUpdate={this.settingsUpdate} viewMode={this.state.viewMode} changeViewMode={this.changeViewMode}/>
                    <Settings tab="Settings" onUpdate={this.settingsUpdate} viewMode={this.state.viewMode} changeViewMode={this.changeViewMode}/>
                    <Text tab="Text" onUpdate={this.settingsUpdate} viewMode={this.state.viewMode} changeViewMode={this.changeViewMode}/>
                    <Design tab="Design" onUpdate={this.settingsUpdate} viewMode={this.state.viewMode} changeViewMode={this.changeViewMode}/>
                </UI.panelTabs>
            </UI.appSettings>
        )
    }
}