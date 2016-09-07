import UI from 'editor-ui-lib';
import React from 'react'
import Wix from 'Wix';
import Main from './modules/main/main';
import Settings from './modules/settings/settings';
import Layout from './modules/layout/layout';
import Design from './modules/design/design';
import Animations from './modules/animations/animations';
import Support from './modules/support/support';
import Text from './modules/text/text';

export default class settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {viewMode: '1'};
    }

    settingsUpdate (key, value) {
        const data = {key: key, value: value};
        Wix.Settings.triggerSettingsUpdatedEvent(data);
        console.log(data);
    }

    render () {
        return (
            <UI.appSettings>
                <UI.panelTabs defaultTabIndex={0}>
                    <Main tab="Main"/>
                    <Layout tab="Layout" viewMode={this.state.viewMode} onUpdate={this.settingsUpdate}/>
                    <Settings tab="Settings" onUpdate={this.settingsUpdate}/>
                    <Text tab="Text" onUpdate={this.settingsUpdate}/>
                    <Design tab="Design" onUpdate={this.settingsUpdate}/>
                </UI.panelTabs>
            </UI.appSettings>
        )
    }
}