import * as React from 'react';
import {registerSnapshot, runSnapshots, Snapshot} from 'pixels-catcher';

import {name as appName} from './app.json';

import App from './App';
import {AppWithModal} from './AppWithModal';

class AppSnapshot extends Snapshot {
  static snapshotName = 'AppSnapshot';

  renderContent() {
    return <App />;
  }
}

class AppWithModalSnap extends Snapshot {
  static snapshotName = 'AppWithModal';

  renderContent() {
    return <AppWithModal />;
  }
}

registerSnapshot(AppSnapshot);
registerSnapshot(AppWithModalSnap);

runSnapshots(appName);
