'use strict';

const e3 = React.createElement;

class LikeButtonThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Home, sweet home.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Bad weather, good mood'
    );
  }
}
const domContainer_3 = document.querySelector('#like_button_container_3');
ReactDOM.render(e(LikeButtonThree), domContainer_3);