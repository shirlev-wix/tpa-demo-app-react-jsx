import UI from 'editor-ui-lib';
import React from 'react'
import Thumbnails from '../../components/thumbnails/thumbnails'
import ViewMode from '../../components/viewMode/viewMode'
import './design.scss';

export default class Design extends React.Component {

  constructor(props) {
    super(props);
    this.state = {shouldShowUpload: false, avatarImg: []};
    this.onAvatarThumbnailClick = this.onAvatarThumbnailClick.bind(this);
    this.setImagePreviewValue = this.setImagePreviewValue.bind(this);
    this.getImage = this.getImage.bind(this);
    this.hasImage = this.hasImage.bind(this);
  }

  onAvatarThumbnailClick(value) {

    if (value !== '3') {
      this.props.onUpdate('agent-picture', value);
    }

    this.setState({
      shouldShowUpload: value === '3'
    });
  }

  setImagePreviewValue() {
    var _this = this;
    Wix.Settings.openMediaDialog(Wix.Settings.MediaType.IMAGE, false, data =>
      _this.setState({
        avatarImg: [data]
      }, () => this.props.onUpdate('agent-picture', '3'))
    // handle error
    );
  }

  getImage() {
    return Wix.Utils.Media.getResizedImageUrl(this.state.avatarImg[0].relativeUri, 41, 41);
  }

  hasImage() {
    return this.state.avatarImg.length && this.state.avatarImg[0].relativeUri;
  }

  render() {
    return (
      <div className="design-tab">

        <ViewMode changeViewMode={this.props.changeViewMode} registerToViewModeChange={this.props.registerToViewModeChange}/>
        <hr className="divider-long"/>

        <Thumbnails
          className={`agents-picture${this.hasImage()? ' has-image' : ''}`}
          defaultValue='1'
          options={[{ value: '1', label: 'None', url: 'none.png'}, { value: '2', label: 'Avatar', url: 'avatar.png'}, { value: '3', label: 'Upload', url: this.hasImage()? this.getImage(): 'upload_small_blue.png', urlActive: this.hasImage()? this.getImage(): 'upload_small_white.png'}]}
          onChange={(newVal)=> this.onAvatarThumbnailClick(newVal)}
          wix-param="agent-picture"
          title="Agents Picture"/>

        { this.state.shouldShowUpload ?
          <UI.imagePreview
            value={this.state.avatarImg}
            buttons={[{label: 'Add Image', icon: 'plus', onClick: this.setImagePreviewValue}]}
            /> :
          <hr className="divider-long"/>
        }
        <Thumbnails
          className="radius"
          defaultValue='0'
          options={[{ value: '0', url: '0px.png', urlActive: '0px_2.png'}, { value: '6', url: '8px.png', urlActive: '8px_2.png'}, { value: '20', url: '20px.png', urlActive: '20px_2.png'}]}
          onChange={(newVal)=>this.props.onUpdate('RADIUS_CHANGE', newVal)}
          wix-param="radius"
          title="Radius"/>

        <hr className="divider-long"/>

        <UI.colorPickerInput
          title="Main Color"
          wix-param="primaryColor"
          startWithColor="color-8">
        </UI.colorPickerInput>
      </div>
    )
  }
}
