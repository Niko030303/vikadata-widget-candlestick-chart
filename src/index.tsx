import React from 'react';
import { initializeWidget } from '@vikadata/widget-sdk';
import { Setting } from './setting';
import { KLinePreview } from './k_line_preview';

export const HelloWorld: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flexGrow: 1, overflow: 'auto', padding: '0 8px'}}>
        <KLinePreview />
      </div>
      <Setting />
    </div>
  );
};

initializeWidget(HelloWorld, process.env.WIDGET_PACKAGE_ID);
