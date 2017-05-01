const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');

require('./index.css');

// state
// lifecycle events
// UI

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt="Avatar"
          style={{ width: 100, height: 100 }}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
      </div>
    );
  }
}

Badge.propTypes = {
  // list PropTypes
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h3>Friends</h3>
        <ul>
          {this.props.names.map(name => <li key={`${name}-${Date.now()}`}>{name}</li>)}
        </ul>
      </div>
    );
  }
}
ShowList.propTypes = {
  names: PropTypes.array.isRequired
};

class FriendsCalendar extends React.Component {
  render() {
    const name = 'Vassil Genov';
    const friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen'];
    const friendsWithM = friends.filter(friend => friend[0] === 'M');
    console.log(friendsWithM);
    return (
      <div>
        <h3>Name: {name}</h3>
        <ShowList names={friends} />
      </div>
    );
  }
}
FriendsCalendar.PropTypes = {
  names: PropTypes.arrayOf(PropTypes.string)
};

ReactDOM.render(
  <div>
    <Badge
      img="https://avatars0.githubusercontent.com/u/2933430?v3&s=460"
      name="Tylor McGinis"
      username="tylormcginis"
    />
    <FriendsCalendar />
  </div>,
  document.getElementById('app')
);
