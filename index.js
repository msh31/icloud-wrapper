const { app, BrowserWindow } = require('electron');

function createWindow () {
  const window = new BrowserWindow({
    width: 1200,
    height: 720,
    webPreferences: {
      nodeIntegration: false,
    }
  });

  window.loadURL('https://www.icloud.com/notes');
  window.setMenu(null);
}

app.whenReady().then(createWindow);