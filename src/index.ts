import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for https://github.com/tianlugang/jupyterlab-theme-mine
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@https://github.com/tianlugang/jupyterlab-theme-mine:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@https://github.com/tianlugang/jupyterlab-theme-mine/index.css';

    manager.register({
      name: 'jupyterlab-theme-mine',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
