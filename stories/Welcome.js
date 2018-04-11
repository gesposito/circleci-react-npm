import React from "react";
import PropTypes from "prop-types";

import LinkTo from "@storybook/addon-links/react";

const Welcome = props => (
  <article>
    <h1>Welcome to storybook</h1>
    <p>This is a UI component dev environment for your app.</p>
    <p>
      We've added some basic stories inside the <code>stories</code> directory.
      <br />
      A story is a single state of one or more UI components. You can have as
      many stories as you want.
      <br />
      (Basically a story is like a visual test case.)
    </p>
    <p>
      See these sample{" "}
      {props.showApp ? (
        <a onClick={props.showApp}>stories</a>
      ) : (
        <LinkTo kind={props.showKind} story={props.showStory}>
          stories
        </LinkTo>
      )}{" "}
      for a component called <code>Demo</code>
      .
    </p>
    <p>
      Just like that, you can add your own components as stories.
      <br />
      You can also edit those components and see changes right away.
      <br />
      (Try editing the <code>Button</code> stories located at{" "}
      <code>src/stories/index.js</code>.)
    </p>
    <p>
      Usually we create stories with smaller UI components in the app.<br />
      Have a look at the{" "}
      <a
        href="https://storybook.js.org/basics/writing-stories"
        target="_blank"
        rel="noopener noreferrer"
      >
        Writing Stories
      </a>{" "}
      section in our documentation.
    </p>
    <p style={{ opacity: 0.5 }}>
      <b>NOTE:</b>
      <br />
      Have a look at the <code>.storybook/webpack.config.js</code> to add
      webpack loaders and plugins you are using in this project.
    </p>
  </article>
);

Welcome.propTypes = {
  showApp: PropTypes.func,
  showKind: PropTypes.string,
  showStory: PropTypes.string
};
Welcome.defaultProps = {
  showApp: null,
  showKind: null,
  showStory: null
};

export { Welcome as default };
