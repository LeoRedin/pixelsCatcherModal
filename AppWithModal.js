import * as React from 'react';
import {Modal} from 'react-native';

import App from './App';

function AppWithModal() {
  return (
    <Modal visible>
      <App />
    </Modal>
  );
}

export {AppWithModal};
