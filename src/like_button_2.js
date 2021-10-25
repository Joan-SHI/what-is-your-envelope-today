'use strict';

const e2 = React.createElement;

class LikeButtonTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Read a joke and get out of the house.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Good weather, bad mood'
    );
  }
}
const domContainer_2 = document.querySelector('#like_button_container_2');
ReactDOM.render(e(LikeButtonTwo), domContainer_2);