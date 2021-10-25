'use strict';

const e = React.createElement;

class LikeButtonOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Get out of the house.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Good weather, good mood'
    );
  }
}
const domContainer_1 = document.querySelector('#like_button_container_1');
ReactDOM.render(e(LikeButtonOne), domContainer_1);