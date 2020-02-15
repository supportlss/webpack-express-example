import React from 'react';
import ReactDOM from 'react-dom';
import './search.scss';

class Search extends React.PureComponent {
  render() {
    return (
      <div>
        <p className="search-text">this is search file</p>
      </div>
    );
  }
}


ReactDOM.render(<Search />, document.getElementById('root'));


if (module.hot) {
  module.hot.accept();
}
