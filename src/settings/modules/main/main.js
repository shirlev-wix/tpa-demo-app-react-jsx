import UI from 'editor-ui-lib';
import React from 'react'

export default class Main extends React.Component {

    onClick () {
        console.log('This is your call-to-action, take it seriously');
        this.props.onActivateChat();
    }

    render () {
        return (
            <div className="main-tab">
                <img className="app-logo" src="logo.png" alt="app logo"/>
                <p className="app-description">
                    Engage with people visiting your site.
                    <br/>
                    To start chatting with your visitors activate this chat from Wix Engage below.
                </p>
                <UI.button className="btn-confirm-primary" label="Activate Chat" onClick={()=>this.onClick()}/>

                <div className="main-footer">
                    <hr className="divider-long"/>
                    <p>
                        Wix Chat needs the Wix native app installed on your mobile device.
                    </p>
                    <img className="google-play" src="google-play.png" alt="download the app from google play"/>
                    <img className="app-store" src="app-store.png" alt="download the app from app store"/>
                </div>
            </div>
        )
    }
}