
//atas ni untuk dapatkan list tahun untuk letak dalam menu


// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu, dialog } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 600, height: 550, resizable: false, maximizable: false, alwaysOnTop: true })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  var today = new Date();
  var hariIni = today.getDate();
  var bulan = today.getMonth() + 1; //January is 0!
  var tahun = today.getFullYear();
  const template = [
    {
    },
    {
      label: 'Laporan',
      submenu: [
        {
          label: 'Hasilkan Laporan Hari ini',
          click() {
            
            const pathArray = dialog.showOpenDialog({ properties: ['openDirectory'], buttonLabel: 'Hasilkan', title: 'Sila Pilih Lokasi untuk Hasilkan Laporan' })
            require('./laporan.js').cetakExcel(pathArray, hariIni, bulan, tahun)
          }


        },
        {
          label: 'Hasilkan Laporan bulanan',
          submenu: [],
        }
      ]
    },

  ]

  //prosesing untuk buat dynamic menu untuk hasilkan mengikut tahun n bulan. x siap lagi
  for (var t = 2018; t <= tahun; t++) {
    const x = t;

    template[1].submenu[1].submenu.push({
      label: `${x}`, submenu: [
        {
          label: `Januari`,
          click() {
            const pathArray = dialog.showOpenDialog({ properties: ['openDirectory'], buttonLabel: 'Hasilkan', title: 'Sila Pilih Lokasi untuk Hasilkan Laporan' })
            require('./laporan.js').cetakExcel(pathArray, "", 1, x)
          }
        },
        {
          label: `Februari`,
          click() {
            const pathArray = dialog.showOpenDialog({ properties: ['openDirectory'], buttonLabel: 'Hasilkan', title: 'Sila Pilih Lokasi untuk Hasilkan Laporan' })
            require('./laporan.js').cetakExcel(pathArray, "", 2, x)
          }
        },
        {
          label: `Mac`,
          click() {
            const pathArray = dialog.showOpenDialog({ properties: ['openDirectory'], buttonLabel: 'Hasilkan', title: 'Sila Pilih Lokasi untuk Hasilkan Laporan' })
            require('./laporan.js').cetakExcel(pathArray, "", 3, x)
          }
        },
        {
          label: `April`,
          click() {
            const pathArray = dialog.showOpenDialog({ properties: ['openDirectory'], buttonLabel: 'Hasilkan', title: 'Sila Pilih Lokasi untuk Hasilkan Laporan' })
            require('./laporan.js').cetakExcel(pathArray, "", 4, x)
          }
        },
        {
          label: `Mei`,
          click() {
            const pathArray = dialog.showOpenDialog({ properties: ['openDirectory'], buttonLabel: 'Hasilkan', title: 'Sila Pilih Lokasi untuk Hasilkan Laporan' })
            require('./laporan.js').cetakExcel(pathArray, "", 5, x)
          }
        },
        {
          label: `Jun`,
          click() {
            const pathArray = dialog.showOpenDialog({ properties: ['openDirectory'], buttonLabel: 'Hasilkan', title: 'Sila Pilih Lokasi untuk Hasilkan Laporan' })
            require('./laporan.js').cetakExcel(pathArray, "", 6, x)
          }
        },
        {
          label: `Julai`,
          click() {
            const pathArray = dialog.showOpenDialog({ properties: ['openDirectory'], buttonLabel: 'Hasilkan', title: 'Sila Pilih Lokasi untuk Hasilkan Laporan' })
            require('./laporan.js').cetakExcel(pathArray, "", 7, x)
          }
        },
        {
          label: `Ogos`,
          click() {
            const pathArray = dialog.showOpenDialog({ properties: ['openDirectory'], buttonLabel: 'Hasilkan', title: 'Sila Pilih Lokasi untuk Hasilkan Laporan' })
            require('./laporan.js').cetakExcel(pathArray, "", 8, x)
          }
        },
        {
          label: `September`,
          click() {
            const pathArray = dialog.showOpenDialog({ properties: ['openDirectory'], buttonLabel: 'Hasilkan', title: 'Sila Pilih Lokasi untuk Hasilkan Laporan' })
            require('./laporan.js').cetakExcel(pathArray, "", 9, x)
          }
        },
        {
          label: `Oktober`,
          click() {
            const pathArray = dialog.showOpenDialog({ properties: ['openDirectory'], buttonLabel: 'Hasilkan', title: 'Sila Pilih Lokasi untuk Hasilkan Laporan' })
            require('./laporan.js').cetakExcel(pathArray, "", 10, x)
          }
        },
        {
          label: `November`,
          click() {
            const pathArray = dialog.showOpenDialog({ properties: ['openDirectory'], buttonLabel: 'Hasilkan', title: 'Sila Pilih Lokasi untuk Hasilkan Laporan' })
            require('./laporan.js').cetakExcel(pathArray, "", 11, x)
          }
        },
        {
          label: `Disember`,
          click() {
            const pathArray = dialog.showOpenDialog({ properties: ['openDirectory'], buttonLabel: 'Hasilkan', title: 'Sila Pilih Lokasi untuk Hasilkan Laporan' })
            require('./laporan.js').cetakExcel(pathArray, "", 12, x)
          }
        },

      ]
    })

  }


  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);










  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
