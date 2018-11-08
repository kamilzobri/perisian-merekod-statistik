

//function lama yang diganti dengan constructor updateData()

//function update belia
function updateCinaBeliaPengguna() {
    var cinaBelia = +document.getElementById("cinaBeliaPengguna").value;
    db.update(`${tahun}.${bulan}.${hari}.belia.pengguna.cina`, n => n + cinaBelia)
      .write()
    db.update(`${tahun}.${bulan}.${hari}.belia.pengunjung.cina`, n => n + cinaBelia)
      .write()
    document.getElementById("cinaBeliaPengguna").value = 1;
    document.getElementById("cinaBeliaPenggunaSemasa").value = db.get(`${tahun}.${bulan}.${hari}.belia.pengguna.cina`).value();
    document.getElementById("cinaBeliaPengunjungSemasa").value = db.get(`${tahun}.${bulan}.${hari}.belia.pengunjung.cina`).value();
    lastUpdate(`Pengguna Cina Belia + ${cinaBelia}`)
  }
  function updateCinaBeliaPengunjung() {
    var cinaBelia = +document.getElementById("cinaBeliaPengunjung").value;
    db.update(`${tahun}.${bulan}.${hari}.belia.pengunjung.cina`, n => n + cinaBelia)
      .write()
    document.getElementById("cinaBeliaPengunjung").value = 1;
    document.getElementById("cinaBeliaPengunjungSemasa").value = db.get(`${tahun}.${bulan}.${hari}.belia.pengunjung.cina`).value();
  
    lastUpdate(`Pengunjung Cina Belia + ${cinaBelia}`)
  
  }
  function updateCinaBeliaAhliBaru() {
    var cinaBelia = +document.getElementById("cinaBeliaAhliBaru").value;
    db.update(`${tahun}.${bulan}.${hari}.belia.ahliBaru.cina`, n => n + cinaBelia)
      .write()
    document.getElementById("cinaBeliaAhliBaru").value = 1;
    document.getElementById("cinaBeliaAhliBaruSemasa").value = db.get(`${tahun}.${bulan}.${hari}.belia.ahliBaru.cina`).value();
  
    lastUpdate(`Ahli Baru Cina Belia + ${cinaBelia}`)
  }
  
  function updateMelayuBeliaPengguna() {
    var melayuBelia = +document.getElementById("melayuBeliaPengguna").value;
    db.update(`${tahun}.${bulan}.${hari}.belia.pengguna.melayu`, n => n + melayuBelia)
      .write()
    db.update(`${tahun}.${bulan}.${hari}.belia.pengunjung.melayu`, n => n + melayuBelia)
      .write()
    document.getElementById("melayuBeliaPengguna").value = 1;
    document.getElementById("melayuBeliaPenggunaSemasa").value = db.get(`${tahun}.${bulan}.${hari}.belia.pengguna.melayu`).value();
    document.getElementById("melayuBeliaPengunjungSemasa").value = db.get(`${tahun}.${bulan}.${hari}.belia.pengunjung.melayu`).value();
  
    lastUpdate(`Pengguna Melayu Belia + ${melayuBelia}`)
  
  }
  function updateMelayuBeliaPengunjung() {
    var melayuBelia = +document.getElementById("melayuBeliaPengunjung").value;
    db.update(`${tahun}.${bulan}.${hari}.belia.pengunjung.melayu`, n => n + melayuBelia)
      .write()
    document.getElementById("melayuBeliaPengunjung").value = 1;
    document.getElementById("melayuBeliaPengunjungSemasa").value = db.get(`${tahun}.${bulan}.${hari}.belia.pengunjung.melayu`).value();
  
    lastUpdate(`Pengunjung Melayu Belia + ${melayuBelia}`)
  }
  function updateMelayuBeliaAhliBaru() {
    var melayuBelia = +document.getElementById("melayuBeliaAhliBaru").value;
    db.update(`${tahun}.${bulan}.${hari}.belia.ahliBaru.melayu`, n => n + melayuBelia)
      .write()
    document.getElementById("melayuBeliaAhliBaru").value = 1;
    document.getElementById("melayuBeliaAhliBaruSemasa").value = db.get(`${tahun}.${bulan}.${hari}.belia.ahliBaru.melayu`).value();
  
    lastUpdate(`Ahli Baru Melayu Belia + ${melayuBelia}`)
  }
  
  
  function updateIndiaBeliaPengguna() {
    var indiaBelia = +document.getElementById("indiaBeliaPengguna").value;
    db.update(`${tahun}.${bulan}.${hari}.belia.pengguna.india`, n => n + indiaBelia)
      .write()
    db.update(`${tahun}.${bulan}.${hari}.belia.pengunjung.india`, n => n + indiaBelia)
      .write()
    document.getElementById("indiaBeliaPengguna").value = 1;
    document.getElementById("indiaBeliaPenggunaSemasa").value = db.get(`${tahun}.${bulan}.${hari}.belia.pengguna.india`).value();
    document.getElementById("indiaBeliaPengunjungSemasa").value = db.get(`${tahun}.${bulan}.${hari}.belia.pengunjung.india`).value();
  
    lastUpdate(`Pengguna India Belia + ${indiaBelia}`)
  }
  function updateIndiaBeliaPengunjung() {
    var indiaBelia = +document.getElementById("indiaBeliaPengunjung").value;
    db.update(`${tahun}.${bulan}.${hari}.belia.pengunjung.india`, n => n + indiaBelia)
      .write()
    document.getElementById("indiaBeliaPengunjung").value = 1;
    document.getElementById("indiaBeliaPengunjungSemasa").value = db.get(`${tahun}.${bulan}.${hari}.belia.pengunjung.india`).value();
  
    lastUpdate(`Pengunjung India Belia + ${indiaBelia}`)
  
  }
  function updateIndiaBeliaAhliBaru() {
    var indiaBelia = +document.getElementById("indiaBeliaAhliBaru").value;
    db.update(`${tahun}.${bulan}.${hari}.belia.ahliBaru.india`, n => n + indiaBelia)
      .write()
    document.getElementById("indiaBeliaAhliBaru").value = 1;
    document.getElementById("indiaBeliaAhliBaruSemasa").value = db.get(`${tahun}.${bulan}.${hari}.belia.ahliBaru.india`).value();
  
    lastUpdate(`Ahli Baru India Belia + ${indiaBelia}`)
  }
  
  
  function updateLainLainBeliaPengguna() {
    var lainBelia = +document.getElementById("lainlainBeliaPengguna").value;
    db.update(`${tahun}.${bulan}.${hari}.belia.pengguna.lainlain`, n => n + lainBelia)
      .write()
    db.update(`${tahun}.${bulan}.${hari}.belia.pengunjung.lainlain`, n => n + lainBelia)
      .write()
    document.getElementById("lainlainBeliaPengguna").value = 1;
    document.getElementById("lainlainBeliaPenggunaSemasa").value = db.get(`${tahun}.${bulan}.${hari}.belia.pengguna.lainlain`).value();
    document.getElementById("lainlainBeliaPengunjungSemasa").value = db.get(`${tahun}.${bulan}.${hari}.belia.pengunjung.lainlain`).value();
    lastUpdate(`Pengguna Lain-lain Belia + ${lainBelia}`)
  
  }
  function updateLainLainBeliaPengunjung() {
    var lainBelia = +document.getElementById("lainlainBeliaPengunjung").value;
    db.update(`${tahun}.${bulan}.${hari}.belia.pengunjung.lainlain`, n => n + lainBelia)
      .write()
    document.getElementById("lainlainBeliaPengunjung").value = 1;
    document.getElementById("lainlainBeliaPengunjungSemasa").value = db.get(`${tahun}.${bulan}.${hari}.belia.pengunjung.lainlain`).value();
  
    lastUpdate(`Pengunjung Lain-lain Belia + ${lainBelia}`)
  
  }
  function updateLainLainBeliaAhliBaru() {
    var lainBelia = +document.getElementById("lainlainBeliaAhliBaru").value;
    db.update(`${tahun}.${bulan}.${hari}.belia.ahliBaru.lainlain`, n => n + lainBelia)
      .write()
    document.getElementById("lainlainBeliaAhliBaru").value = 1;
    document.getElementById("lainlainBeliaAhliBaruSemasa").value = db.get(`${tahun}.${bulan}.${hari}.belia.ahliBaru.lainlain`).value();
  
    lastUpdate(`Ahli Baru Lain-lain Belia + ${lainBelia}`)
  }
  
  
  
  
  
  //function update dewasa
  
  function updateMelayuDewasaPengguna() {
    var melayuDewasa = +document.getElementById("melayuDewasaPengguna").value;
    db.update(`${tahun}.${bulan}.${hari}.dewasa.pengguna.melayu`, n => n + melayuDewasa)
      .write()
    db.update(`${tahun}.${bulan}.${hari}.dewasa.pengunjung.melayu`, n => n + melayuDewasa)
      .write()
    document.getElementById("melayuDewasaPengguna").value = 1;
    document.getElementById("melayuDewasaPenggunaSemasa").value = db.get(`${tahun}.${bulan}.${hari}.dewasa.pengguna.melayu`).value();
    document.getElementById("melayuDewasaPengunjungSemasa").value = db.get(`${tahun}.${bulan}.${hari}.dewasa.pengunjung.melayu`).value();
  
    lastUpdate(`Pengguna Melayu Dewasa + ${melayuDewasa}`)
  
  }
  function updateMelayuDewasaPengunjung() {
    var melayuDewasa = +document.getElementById("melayuDewasaPengunjung").value;
    db.update(`${tahun}.${bulan}.${hari}.dewasa.pengunjung.melayu`, n => n + melayuDewasa)
      .write()
    document.getElementById("melayuDewasaPengunjung").value = 1;
    document.getElementById("melayuDewasaPengunjungSemasa").value = db.get(`${tahun}.${bulan}.${hari}.dewasa.pengunjung.melayu`).value();
  
    lastUpdate(`Pengunjung Melayu Dewasa + ${melayuDewasa}`)
  }
  function updateMelayuDewasaAhliBaru() {
    var melayuDewasa = +document.getElementById("melayuDewasaAhliBaru").value;
    db.update(`${tahun}.${bulan}.${hari}.dewasa.ahliBaru.melayu`, n => n + melayuDewasa)
      .write()
    document.getElementById("melayuDewasaAhliBaru").value = 1;
    document.getElementById("melayuDewasaAhliBaruSemasa").value = db.get(`${tahun}.${bulan}.${hari}.dewasa.ahliBaru.melayu`).value();
  
    lastUpdate(`Ahli Baru Melayu Dewasa + ${melayuDewasa}`)
  }
  
  
  function updateCinaDewasaPengguna() {
    var cinaDewasa = +document.getElementById("cinaDewasaPengguna").value;
    db.update(`${tahun}.${bulan}.${hari}.dewasa.pengguna.cina`, n => n + cinaDewasa)
      .write()
    db.update(`${tahun}.${bulan}.${hari}.dewasa.pengunjung.cina`, n => n + cinaDewasa)
      .write()
    document.getElementById("cinaDewasaPengguna").value = 1;
    document.getElementById("cinaDewasaPenggunaSemasa").value = db.get(`${tahun}.${bulan}.${hari}.dewasa.pengguna.cina`).value();
    document.getElementById("cinaDewasaPengunjungSemasa").value = db.get(`${tahun}.${bulan}.${hari}.dewasa.pengunjung.cina`).value();
  
    lastUpdate(`Pengguna Cina Dewasa + ${cinaDewasa}`)
  }
  function updateCinaDewasaPengunjung() {
    var cinaDewasa = +document.getElementById("cinaDewasaPengunjung").value;
    db.update(`${tahun}.${bulan}.${hari}.dewasa.pengunjung.cina`, n => n + cinaDewasa)
      .write()
    document.getElementById("cinaDewasaPengunjung").value = 1;
    document.getElementById("cinaDewasaPengunjungSemasa").value = db.get(`${tahun}.${bulan}.${hari}.dewasa.pengunjung.cina`).value();
  
    lastUpdate(`Pengunjung Cina Dewasa + ${cinaDewasa}`)
  }
  function updateCinaDewasaAhliBaru() {
    var cinaDewasa = +document.getElementById("cinaDewasaAhliBaru").value;
    db.update(`${tahun}.${bulan}.${hari}.dewasa.ahliBaru.cina`, n => n + cinaDewasa)
      .write()
    document.getElementById("cinaDewasaAhliBaru").value = 1;
    document.getElementById("cinaDewasaAhliBaruSemasa").value = db.get(`${tahun}.${bulan}.${hari}.dewasa.ahliBaru.cina`).value();
  
    lastUpdate(`Ahli Baru Cina Dewasa + ${cinaDewasa}`)
  }
  
  
  
  function updateIndiaDewasaPengguna() {
    var indiaDewasa = +document.getElementById("indiaDewasaPengguna").value;
    db.update(`${tahun}.${bulan}.${hari}.dewasa.pengguna.india`, n => n + indiaDewasa)
      .write()
    db.update(`${tahun}.${bulan}.${hari}.dewasa.pengunjung.india`, n => n + indiaDewasa)
      .write()
    document.getElementById("indiaDewasaPengguna").value = 1;
    document.getElementById("indiaDewasaPenggunaSemasa").value = db.get(`${tahun}.${bulan}.${hari}.dewasa.pengguna.india`).value();
    document.getElementById("indiaDewasaPengunjungSemasa").value = db.get(`${tahun}.${bulan}.${hari}.dewasa.pengunjung.india`).value();
  
    lastUpdate(`Pengguna India Dewasa + ${indiaDewasa}`)
  }
  function updateIndiaDewasaPengunjung() {
    var indiaDewasa = +document.getElementById("indiaDewasaPengunjung").value;
    db.update(`${tahun}.${bulan}.${hari}.dewasa.pengunjung.india`, n => n + indiaDewasa)
      .write()
    document.getElementById("indiaDewasaPengunjung").value = 1;
    document.getElementById("indiaDewasaPengunjungSemasa").value = db.get(`${tahun}.${bulan}.${hari}.dewasa.pengunjung.india`).value();
    lastUpdate(`Pengunjung India Dewasa + ${indiaDewasa}`)
  }
  function updateIndiaDewasaAhliBaru() {
    var indiaDewasa = +document.getElementById("indiaDewasaAhliBaru").value;
    db.update(`${tahun}.${bulan}.${hari}.dewasa.ahliBaru.india`, n => n + indiaDewasa)
      .write()
    document.getElementById("indiaDewasaAhliBaru").value = 1;
    document.getElementById("indiaDewasaAhliBaruSemasa").value = db.get(`${tahun}.${bulan}.${hari}.dewasa.ahliBaru.india`).value();
  
    lastUpdate(`Ahli Baru India Dewasa + ${indiaDewasa}`)
  }
  
  
  function updateLainLainDewasaPengguna() {
    var lainDewasa = +document.getElementById("lainlainDewasaPengguna").value;
    db.update(`${tahun}.${bulan}.${hari}.dewasa.pengguna.lainlain`, n => n + lainDewasa)
      .write()
    db.update(`${tahun}.${bulan}.${hari}.dewasa.pengunjung.lainlain`, n => n + lainDewasa)
      .write()
    document.getElementById("lainlainDewasaPengguna").value = 1;
    document.getElementById("lainlainDewasaPenggunaSemasa").value = db.get(`${tahun}.${bulan}.${hari}.dewasa.pengguna.lainlain`).value();
    document.getElementById("lainlainDewasaPengunjungSemasa").value = db.get(`${tahun}.${bulan}.${hari}.dewasa.pengunjung.lainlain`).value();
  
    lastUpdate(`Pengguna Lain-lain Dewasa + ${lainDewasa}`)
  }
  function updateLainLainDewasaPengunjung() {
    var lainDewasa = +document.getElementById("lainlainDewasaPengunjung").value;
    db.update(`${tahun}.${bulan}.${hari}.dewasa.pengunjung.lainlain`, n => n + lainDewasa)
      .write()
    document.getElementById("lainlainDewasaPengunjung").value = 1;
    document.getElementById("lainlainDewasaPengunjungSemasa").value = db.get(`${tahun}.${bulan}.${hari}.dewasa.pengunjung.lainlain`).value();
  
    lastUpdate(`Pengunjung Lain-lain Dewasa + ${lainDewasa}`)
  }
  function updateLainLainDewasaAhliBaru() {
    var lainDewasa = +document.getElementById("indiaDewasaAhliBaru").value;
    db.update(`${tahun}.${bulan}.${hari}.dewasa.ahliBaru.lainlain`, n => n + lainDewasa)
      .write()
    document.getElementById("lainlainDewasaAhliBaru").value = 1;
    document.getElementById("lainlainDewasaAhliBaruSemasa").value = db.get(`${tahun}.${bulan}.${hari}.dewasa.ahliBaru.lainlain`).value();
  
    lastUpdate(`Ahli Baru Lain-lain Dewasa + ${lainDewasa}`)
  }
  