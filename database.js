const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

var today = new Date();
var hari = today.getDate();
var bulan = today.getMonth() + 1; //January is 0!
var tahun = today.getFullYear();


//today = hari + ' ' + bulan + ' ' + tahun;
//document.write(today);


//set data baru jika tiada lagi. tahun.bulan.hari
if (!db.has(`${tahun}`).value()) {
  db.set(`${tahun}`, {}).write()
}
if (!db.has(`${tahun}.${bulan}`).value()) {
  db.set(`${tahun}.${bulan}`, {}).write()
  for (var h = 1; h < 32; h++) {
    db.set(`${tahun}.${bulan}.${h}`, {}).write()
    db.set(`${tahun}.${bulan}.${h}.belia.pengunjung.melayu`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.dewasa.pengunjung.melayu`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.belia.pengunjung.cina`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.dewasa.pengunjung.cina`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.belia.pengunjung.india`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.dewasa.pengunjung.india`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.belia.pengunjung.lainlain`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.dewasa.pengunjung.lainlain`, 0).write()
  
    db.set(`${tahun}.${bulan}.${h}.belia.pengguna.melayu`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.dewasa.pengguna.melayu`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.belia.pengguna.cina`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.dewasa.pengguna.cina`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.belia.pengguna.india`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.dewasa.pengguna.india`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.belia.pengguna.lainlain`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.dewasa.pengguna.lainlain`, 0).write()
  
    db.set(`${tahun}.${bulan}.${h}.belia.ahliBaru.melayu`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.dewasa.ahliBaru.melayu`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.belia.ahliBaru.cina`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.dewasa.ahliBaru.cina`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.belia.ahliBaru.india`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.dewasa.ahliBaru.india`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.belia.ahliBaru.lainlain`, 0).write()
    db.set(`${tahun}.${bulan}.${h}.dewasa.ahliBaru.lainlain`, 0).write()
  }
}


function updateData(userType, userRace, usia) {
  jumlahTambah = +document.getElementById('bilNakUpdate').value;
  this.userType = userType;
  this.userRace = userRace;
  this.usia = usia;
  var usiaUppercase = usia.charAt(0).toUpperCase() + usia.slice(1);
  var userTypeUppercase = userType.charAt(0).toUpperCase() + userType.slice(1);
  db.update(`${tahun}.${bulan}.${hari}.${usia}.${userType}.${userRace}`, n => n + jumlahTambah)
    .write()

  if (userType == 'pengguna') {
    db.update(`${tahun}.${bulan}.${hari}.${usia}.pengunjung.${userRace}`, n => n + jumlahTambah)
      .write()
    document.getElementById(`${userRace + usiaUppercase}PengunjungSemasa`).value = db.get(`${tahun}.${bulan}.${hari}.${usia}.pengunjung.${userRace}`).value();
  }
  document.getElementById("bilNakUpdate").value = 1;
  document.getElementById("userType").selectedIndex = 0;
  lastUpdate(`${userType} ${userRace} ${usia} +${jumlahTambah}`)

  document.getElementById(`${userRace + usiaUppercase + userTypeUppercase}Semasa`).value = db.get(`${tahun}.${bulan}.${hari}.${usia}.${userType}.${userRace}`).value();


}

function lastUpdate(value) {
  var masa = new Date();
  var jam = masa.getHours();
  var minit = masa.getMinutes();
  if (minit < 10) {
    minit = '0' + minit;
  }


  masaSekarang = jam + ':' + minit;

  document.getElementById("lastUpdate3").value = document.getElementById("lastUpdate2").value;
  document.getElementById("lastUpdate2").value = document.getElementById("lastUpdate1").value;
  document.getElementById("lastUpdate1").value = masaSekarang + ' ' + value;
}

