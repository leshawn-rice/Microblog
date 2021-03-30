import React from 'react';
import Posts from './Posts';
import '../../styles/Home.css';

const Home = () => {

  return (
    <div className="Home-Container">
      <div className="Home-Message">
        <h1>Welcome to <strong>Clowd,</strong> a community where people can share ideas and opinions.</h1>
      </div>
      <div className="Home-Posts">
        <Posts />
      </div>
    </div>
  )
}

export default Home;