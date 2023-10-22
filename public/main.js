const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const indexPath = isDev
    ? `http://localhost:3000`
    : `file://${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(indexPath);
}

app.whenReady().then(createWindow);
