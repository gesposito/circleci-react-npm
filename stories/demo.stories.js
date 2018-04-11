import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Demo } from "../src";

storiesOf("Demo", module)
  .add("with text", () => (
    <Demo onClick={action("clicked")} />
  ));
