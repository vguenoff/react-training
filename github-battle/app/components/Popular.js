import React from 'react';

class Popular extends React.Component {
  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className="languages">
        {languages.map(lang => <li key={lang}>{lang}</li>)}
      </ul>
    );
  }
}

export default Popular;
