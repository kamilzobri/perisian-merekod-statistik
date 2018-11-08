const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
var Excel = require('exceljs');
var workbook = new Excel.Workbook();

var today = new Date();
var hari = today.getDate();
var bulan = today.getMonth() + 1; //January is 0!
var tahun = today.getFullYear();

var bulanLetter;

switch (bulan) {
    case 1:
        bulanLetter = "JANUARI";
        break;
    case 2:
        bulanLetter = "FEBRUARI";
        break;
    case 3:
        bulanLetter = "MAC";
        break;
    case 4:
        bulanLetter = "APRIL";
        break;
    case 5:
        bulanLetter = "MEI";
        break;
    case 6:
        bulanLetter = "JUN";
        break;
    case 7:
        bulanLetter = "JULAI";
        break;
    case 8:
        bulanLetter = "OGOS";
        break;
    case 9:
        bulanLetter = "SEPTEMBER";
        break;
    case 10:
        bulanLetter = "OKTOBER";
        break;
    case 11:
        bulanLetter = "NOVEMBER";
        break;
    case 12:
        bulanLetter = "DISEMBER";
        break;
}

today = hari + ' ' + bulanLetter + ' ' + tahun;


//generate file excel
var bulanDipilih = 11;// kena buat option untuk pilih
var tahunDipilih = 2018;// kena buat option untuk pilih

function cetakExcel(){
workbook.xlsx.readFile('formatOriginalJANGANEDIT.xlsx')
    .then(function () {


        var worksheet = workbook.getWorksheet(1);

        worksheet.getRow(10).getCell(1).value = `STATISTIK PENGGUNA, PENGUNJUNG DAN KEAHLIAN PERPUSTAKAAN BULAN ${bulanLetter} TAHUN ${tahunDipilih}`;

        worksheet.getRow(27).getCell(1).value = `JUMLAH PENGGUNA (${bulanLetter} ${tahunDipilih})`;
        worksheet.getRow(27).getCell(11).value = `JUMLAH PENGUNJUNG (${bulanLetter} ${tahunDipilih})`;
        worksheet.getRow(27).getCell(24).value = `JUMLAH AHLI BARU (${bulanLetter} ${tahunDipilih})`;


        worksheet.getRow(51).getCell(1).value = `STATISTIK KEAHLIAN & PENGGUNA MENGIKUT KAUM BAGI BULAN ${bulanLetter} TAHUN ${tahunDipilih}`;
        
        worksheet.getRow(68).getCell(1).value = `JUMLAH KEAHLIAN MENGIKUT KAUM (${bulanLetter} ${tahunDipilih})`;
        worksheet.getRow(68).getCell(18).value = `JUMLAH PENGGUNA MENGIKUT KAUM (${bulanLetter} ${tahunDipilih})`;
        
        
        worksheet.getRow(91).getCell(1).value = `STATISTIK PENGUNJUNG MENGIKUT KAUM BAGI BULAN ${bulanLetter} TAHUN ${tahunDipilih}`;

        worksheet.getRow(101).getCell(1).value = `JUMLAH PENGUNJUNG MENGIKUT KAUM (${bulanLetter} ${tahunDipilih})`;
        
        
        
        
        
        
        for (var i = 0; i < 31; i++) {
            worksheet.getRow(15).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.pengguna.melayu`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.pengguna.cina`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.pengguna.india`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.pengguna.lainlain`).value()
                ;

            worksheet.getRow(19).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.pengunjung.melayu`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.pengunjung.cina`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.pengunjung.india`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.pengunjung.lainlain`).value()
                ;

            worksheet.getRow(23).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.ahliBaru.melayu`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.ahliBaru.cina`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.ahliBaru.india`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.ahliBaru.lainlain`).value()
                ;

            worksheet.getRow(16).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.pengguna.melayu`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.pengguna.cina`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.pengguna.india`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.pengguna.lainlain`).value()
                ;

            worksheet.getRow(20).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.pengunjung.melayu`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.pengunjung.cina`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.pengunjung.india`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.pengunjung.lainlain`).value()
                ;

            worksheet.getRow(24).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.ahliBaru.melayu`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.ahliBaru.cina`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.ahliBaru.india`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.ahliBaru.lainlain`).value()
                ;

            worksheet.getRow(56).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.ahliBaru.melayu`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.ahliBaru.melayu`).value();

            worksheet.getRow(57).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.ahliBaru.cina`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.ahliBaru.cina`).value();

            worksheet.getRow(58).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.ahliBaru.india`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.ahliBaru.india`).value();

            worksheet.getRow(59).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.ahliBaru.lainlain`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.ahliBaru.lainlain`).value();


            worksheet.getRow(62).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.pengguna.melayu`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.pengguna.melayu`).value();

            worksheet.getRow(63).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.pengguna.cina`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.pengguna.cina`).value();

            worksheet.getRow(64).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.pengguna.india`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.pengguna.india`).value();

            worksheet.getRow(65).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.pengguna.lainlain`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.pengguna.lainlain`).value();





            worksheet.getRow(95).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.pengunjung.melayu`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.pengunjung.melayu`).value();

            worksheet.getRow(96).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.pengunjung.cina`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.pengunjung.cina`).value();

            worksheet.getRow(97).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.pengunjung.india`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.pengunjung.india`).value();

            worksheet.getRow(98).getCell(i + 2).value =
                db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.dewasa.pengunjung.lainlain`).value()
                + db.get(`${tahunDipilih}.${bulanDipilih}.${1 + i}.belia.pengunjung.lainlain`).value();


        }
        worksheet.getRow().commit();
        return workbook.xlsx.writeFile(`statistik bulan ${bulanLetter} ${tahun}.xlsx`);





    })

}

module.exports.cetakExcel = cetakExcel;