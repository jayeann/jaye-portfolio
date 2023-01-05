import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <h1>I'm Jaye Ann.</h1>
      <div className="greet">
        <span>I love</span>
        <div class="message">
          <div class="word1">design</div>
          <div class="word2">code</div>
          <div class="word3">create</div>
        </div>
      </div>

      <div className="summary">
        <h6 className="summary-greet"> Hello there,</h6>
        <h1 className="summary-title">I'm Jaye Ann.</h1>
        <p className="summary-description">
          FRONTEND DEVELOPER & UI/UX DESIGNER
        </p>
      </div>

      <div className="block">
        <h2 className="title">
          <span className="title-word title-word-1">This</span>
          <span className="title-word title-word-2">is</span>
          <span className="title-word title-word-3">my</span>
          <span className="title-word title-word-4">text</span>
        </h2>
      </div>
    </div>
  );
};
export default Home;
