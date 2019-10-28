import React, { useState } from 'react';
import { MouseTracker } from './composable-components/MouseTracker';
import { MouseTracker as MouseTrackerRenderProps } from './render-props/MouseTracker';

import { Cat } from './Cat';
import { Duck } from './Duck';
import { ErrorBoundary } from './error-boundary/ErrorBoundary';
import { ErrorThrower } from './error-boundary/ErrorThrower';
import { Person } from './prop-types/Person';
const App = () => {
  const [err, setErr] = useState(false);

  const handleThrowErrorClick = () => {
    setErr(true);
  };

  return (
    <div>
      <h1>App</h1>
      <h2>Composable Component</h2>
      <MouseTracker>
        <Cat />
        <Duck name="Donald" />
      </MouseTracker>
      <h2>Render Props</h2>
      <MouseTrackerRenderProps render={position => <Cat pos={position} />} />
      <ErrorBoundary>
        <ErrorThrower err={err} />
      </ErrorBoundary>
      <button onClick={handleThrowErrorClick}>Throw Error</button>
      <h2>PropTypes</h2>
      <Person name="Dayal" age={41} canDrive />
    </div>
  );
};

export { App };
