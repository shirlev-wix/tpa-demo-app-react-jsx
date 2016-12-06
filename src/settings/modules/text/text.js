import UI from 'editor-ui-lib';
import React from 'react';
import ViewMode from '../../components/viewMode/viewMode';
import _ from 'lodash';

export default class Text extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      name: '',
      onlineTitle: 'Chat with us!',
      offlineTitle: '',
      onlineMessage: '',
      offlineMessage: '',
      technicalIssues: '',
      notResponding: ''
    }
  }

  getTexts() {
    return new Promise((resolve, reject) => {
      Wix.Data.Public.get("texts", {scope: 'COMPONENT'}, data => {
        return resolve(data)
      }, (e) => {
        return reject(e)
      });
    })
  }

  componentDidMount() {
    this.getTexts().then(d => {
      const texts = d.texts;
      this.setState(texts);
      this.setState({loading: false});
    })
    .catch(() => this.setState({loading: false}));

  }

  //componentWillUnmount() {
  //  this.serverRequest.abort();
  //}

  onTextChangeDebounced(key) {
    return _.debounce(this.onTextChange.bind(this, key), 500);
  }

  onTextChange(key, val) {
      let obj = {};
    console.log(val);
    obj[key] = val;
      this.setState(obj, () =>
        Wix.Data.Public.set("texts", this.state, {scope: 'COMPONENT'},
            d => console.log('success', d),
            f => console.log('error', f)));
  }

  render() {
    return (
      <div className="text-tab">
        {this.state.loading ? <div>loading</div> :
          <div>

            <ViewMode changeViewMode={this.props.changeViewMode}
                      registerToViewModeChange={this.props.registerToViewModeChange}/>

            <hr className="divider-long"/>

            <UI.textInput
              title="Agents / Business name"
              placeholder="Enter your email..."
              onChange={this.onTextChangeDebounced('name')}
              defaultText={this.state.name}
              />

            <hr className="divider-long"/>

            <UI.textInput
              title="Online title"
              placeholder="Enter your email..."
              onChange={this.onTextChangeDebounced('onlineTitle')}
              defaultText={this.state.onlineTitle}
              />


            <hr className="divider-long"/>

            <UI.textInput
              title="Offline title"
              placeholder="Enter your email..."
              onChange={this.onTextChangeDebounced('onlineTitle')}
              defaultText={this.state.offlineTitle}
              />

            <hr className="divider-long"/>

            <UI.textInput
              title="Online message"
              placeholder="Enter your email..."
              onChange={this.onTextChangeDebounced('onlineMessage')}
              defaultText={this.state.onlineMessage}
              />

            <hr className="divider-long"/>

            <UI.textInput
              title="Offline message"
              placeholder="Enter your email..."
              onChange={this.onTextChangeDebounced('offlineMessage')}
              defaultText={this.state.offlineMessage}
              />

            <hr className="divider-long"/>

            <UI.textInput
              title="When a user has technical problem"
              placeholder="Enter your email..."
              onChange={this.onTextChangeDebounced('technicalIssues')}
              defaultText={this.state.technicalIssues}
              />

            <hr className="divider-long"/>

            <UI.textInput
              title="When a agent doesn’t respond"
              placeholder="Enter your email..."
              onChange={this.onTextChangeDebounced('notResponding')}
              defaultText={this.state.notResponding}
              />
          </div>
        }
      </div>
    )
  }
}