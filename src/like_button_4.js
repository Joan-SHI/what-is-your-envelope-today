'use strict';

const e4 = React.createElement;

class LikeButtonFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Go high in the Netflix / Spotify / Google / Wikipedia.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Bad weather, bad mood'
    );
  }
}
const domContainer_4= document.querySelector('#like_button_container_4');
ReactDOM.render(e(LikeButtonFour), domContainer_4);