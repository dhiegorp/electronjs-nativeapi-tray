const electron = require('electron');
const { Menu, app, BrowserWindow, Tray } = electron;
const path = require('path')

let mainWindow;


app.on('ready', _ => {
    const appName = electron.app.getName();

    mainWindow = new BrowserWindow();
    const tray = new Tray(path.join('src', 'spellbook.png'));
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Wow',
            click: _ => console.log('wow')
        },
        {
            label: 'Awesome',
            click: _ => console.log('awesome')
        }

    ]);
    tray.setToolTip(`${appName}`);
    tray.setContextMenu(contextMenu);

});