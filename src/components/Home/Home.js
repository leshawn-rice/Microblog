import React from 'react';
import Posts from './Posts';
import '../../styles/Home.css';

const Home = () => {

  return (
    <div className="Home-Container">
      <div className="Home-Message">
        <h1>Welcome to <strong>Microblog,</strong> our innovative site for communicating on the information superhighway</h1>
      </div>
      <div className="Home-Posts">
        <Posts />
      </div>
    </div>
  )
}

export default Home;