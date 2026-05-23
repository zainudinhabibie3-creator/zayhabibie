const SHEET_NAME = 'PohonSilsilah';

// Array Marga Gorontalo berdasarkan instruksi (dioptimalkan dalam array)
const MARGA_LIST = [
  "Abaidata","Abas","Abdul","Abdullah","Abijulu","Abjul","Abuba","Abubakar","Abudi","Ahmad","Ahaya","Akase","Akib","Alhasni","Alinti","Aloei","Amali","Amu","Amuda","Antu","Arbie","Asapa","Babunga","Babuta","Bachdar","Badaraf","Badaru","Baderan","Badjuka","Badolo","Badu","Badudu","Bagdala","Bagi","Bagu","Bahasoan","Bahatika","Bahu","Bahuwa","Bai","Baiti","Bakari","Bakir","Bala","Baladraf","Balu","Baluko","Baniti","Bantu","Bara","Baradja","Baruadi","Bashan","Basjir","Basri","Bau","Bilaleya","Bilatula","Bilondatu","Bilontalo","Bimbango","Bintah","Binumu","Bito","Bobihoe","Boekoes","Bokings","Bokingo","Bolango","Bolilio","Bolongkodu","Boludawa","Botutihe","Bou","Buata","Buhang","Buhungo","Bula","Bulalo","Bulango","Bulati","Bulatito","Bulo","Buloto","Buluati","Buludawa","Buludipu","Bunta","Buna","Bunto","Bunuyo","Buo","Busura","Buyungo",
  "Daaliwa","Dacing","Daeng","Daes","Dahlan","Daima","Daini","Dako","Dalanggo","Dale","Dali","Dalie","Daliman","Dalimunthe","Dama","Damail","Damaipa","Dambea","Damiti","Damu","Danial","Daniallo","Danupoyo","Daoed","Daud","Dapuda","Darise","Datau","Datuela","Datuko","Datunsolang","Dehi","Deu","Demolingo","Dengo","Diange","Dilapanga","Din","Djafar","Djafaruddin","Djakaria","Djaku","Djalil","Djamal","Djamaluddin","Djamalu","Djami","Djan","Djanggola","Djani","Djano","Djantji","Djapu","Djau","Djein","Djibran","Djiko","Djilan","Djio","Djou","Djubair","Djubedi","Djubu","Djuha","Djulaiha","Djuma","Djunaedi","Djunaid","Djunu","Djupri","Domili","Duawulu","Duengo","Duhe","Dui","Duke","Dulahi","Dulame","Dulango","Dulma","Dulu","Duludu","Dumbela","Dungga","Dunggio","Gani","Garadja","Gaib","Ghalib","Ghiyas","Giu","Gobel","Gobi","Gobol","Gobolango","Goboli","Goboloto","Gola","Goma","Gommo","Gonibala","Gorontalo","Guli","Gulo","Gusi",
  "Habib","Habibie","Hadis","Haditirta","Hadji","Hadju","Hado","Hafid","Haidir","Hairuddin","Hakim","Halada","Halid","Halim","Halimir","Halir","Halis","Haluti","Hamad","Hamadi","Hamami","Hamandja","Hamani","Hambali","Hamdani","Hamdan","Hamid","Hamim","Hamzah","Handat","Handjah","Hanis","Hansah","Hantu","Hantula","Hanuna","Haras","Harasid","Hardi","Hariadi","Harianto","Haridji","Haris","Harun","Hasan","Hasanuddin","Hasibuan","Hasiru","Hasni","Hassan","Hatta","Hatuhaha","Hatulalita","Hau","Haya","Helingo","Hemeto","Hengkeng","Heon","Hiola","Hipi","Hipingo","Hiyo","Hubalo","Hudji","Hulalata","Hulaleto","Hulima","Hulopi","Hulontalangi","Hulukati","Hulungo","Humalanggi","Humalo","Hume","Humiyel","Humolungo","Humonggio","Hunggio","Hunggimali","Hunggoyani","Hungiyalo","Hunowu","Huntalo","Huntua","Hurudji","Husain","Husen","Husnan","Iba","Ibrahim","Ichsan","Idris","Idrus","Igi","Ihsan","Ila","Ilahudu","Ilat","Ilato","Ilahude","Ilopa","Ilyas","Imalu","Imam","Inaku","Ino","Inolawan","Inon","Inusi","Ipa","Ipol","Irfan","Isa","Ishak","Isima","Iskandar","Islam","Ismail","Ismi","Ismaila","Ismanto","Iso","Issu","Iwan","Iyabu","Jassin","Junus",
  "Kaba","Kadir","Kai","Kaidu","Kaimuddin","Kaiya","Kalaku","Kalamu","Kale","Kali","Kalie","Kaliki","Kamah","Kamaru","Kamase","Kamba","Kamidin","Kamin","Kamis","Kamoni","Kamsir","Kamu","Kangiden","Kansai","Kantale","Kantili","Kantolo","Karama","Karamina","Karim","Kario","Karmin","Kartoredjo","Karundeng","Kasanga","Kasia","Kasim","Kasiran","Kasmat","Kasrum","Katili","Katiri","Katjili","Katon","Katu","Kawid","Kawon","Kawulusan","Kayi","Kece","Keis","Kelana","Kelo","Kepo","Kera","Keri","Key","Keya","Kiai","Kiay","Kilo","Kilole","Kilowang","Kindji","Kino","Kinol","Kinolawan","Kinta","Kintamani","Kinto","Kiraman","Koem","Koesnar","Kohongia","Koko","Kombi","Komendangi","Kondo","Kondoli","Koni","Koniyo","Konor","Konta","Kontesa","Konti","Kontu","Kontua","Koo","Kopi","Kora","Korompot","Koso","Kosso","Kota","Koyo","Kua","Kubais","Kubat","Kudai","Kude","Kudjo","Kudji","Kudrat","Kuera","Kuini","Kuka","Kula","Kulandji","Kulani","Kulele","Kuli","Kulit","Kullo","Kulo","Kum","Kumaji","Kumali","Kumendong","Kumisi","Kumu","Kuni","Kuno","Kunong","Kunongo","Kuntolo","Kunyi","Kunyo","Kupang","Kura","Kurais","Kuranga","Kurban","Kurdi","Kuria","Kuris","Kurniadi","Kurniawan","Kurnia","Kurniaty","Kursi","Kuruba","Kusnadi","Kusnan","Kusno","Kustanto","Kustia","Kusuma","Kuti","Kuto","Kutoyo","Kuwan",
  "Laba","Labadjo","Lahay","Lihawa","Machmud","Male","Mapo","Marali","Marruf","Masahor","Mase","Mayang","Mbuinga","Mobili","Mobonggi","Moha","Mohammad","Mohi","Mojo","Monoarfa","Mooduto","Moo","Mooni","Mootalu","Mopangga","Mopo","Moputi","Muharam","Mukmin","Musa","Mustafa",
  "Nadjmudin","Naid","Naie","Naki","Nalole","Napu","Nasaru","Naser","Nasir","Nusi","Nento","Ntoma","Ohi","Olilingo","Olii","Otoluwa","Pabbah","Pade","Pateda","Paneo","Pakaya","Palilati","Panigoro","Pasisingi","Pasua","Patamani","Payu","Pilomalo","Podungge","Polalo","Polapa","Polimengo","Polinggala","Polontalo","Poluti","Pomalingo","Popoi","Pora","Potale","Pou","Puyo","Puhi","Puluhulawa","Radjak","Rahim","Rahman","Rajak","Rauf","Razak","Rusli","Saboe","Sabu","Sadik","Sahi","Sahruddin","Said","Saini","Salam","Saleh","Salim","Salilama","Salihi","Samin","Samuda","Sanu","Saputra","Saripi","Shidiq","Solaiman","Sulaeman","Supu","Syafi'i","Syam","Syamsuddin","Tabo","Taha","Tahir","Tangahu","Tangguda","Tantu","Tanua","Tapu","Thaib","Tilame","Toatubun","Tolinggi","Tolohula","Tolo","Tuloli","Tumulo","Udin","Umar","Uno","Usman","Wadipalapa","Walangadi","Wartabone","Wumu","Yusuf","Yahya","Yunus","Zain","Zakaria","Zees","Zubedi","Zul"
];

function doGet(e) {
  const html = HtmlService.createTemplateFromFile('Index');
  // Passing data marga langsung ke HTML saat load pertama untuk performa
  html.margaList = MARGA_LIST; 
  return html.evaluate()
    .setTitle('Sistem Silsilah Keluarga Gorontalo')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Fungsi Wajib Eksekusi Pertama: Membangun Arsitektur Database di Spreadsheet
 */
function setupDatabase() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    
    const headers = [
      "UUID", "Nama Lengkap", "Marga", "Tahun Lahir", 
      "Nama Ayah", "Nama Ibu", "Kakek (Pihak Ayah)", "Nenek (Pihak Ayah)",
      "Kakek (Pihak Ibu)", "Nenek (Pihak Ibu)", "Timestamp"
    ];
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers])
         .setFontWeight("bold").setBackground("#1a1d29").setFontColor("#ffffff");
    
    // Auto-setup Data Validation untuk Marga (Maks 500 item aman di GAS)
    const rule = SpreadsheetApp.newDataValidation().requireValueInList(MARGA_LIST).build();
    sheet.getRange("C2:C1000").setDataValidation(rule);
    
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, headers.length);
  }
  return "Infrastruktur Database Berhasil Dibangun.";
}

function generateUUID() {
  return Utilities.getUuid();
}

/**
 * Logika CRUD & Anomaly Detection (Server-Side Truth)
 */
function submitSilsilah(formData) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  // getValues() dipanggil SEKALI untuk optimasi performa array memory
  const dataDb = sheet.getDataRange().getValues(); 
  
  const { nama, marga, tahun, ayah, ibu, kakekAyah, nenekAyah, kakekIbu, nenekIbu } = formData;
  
  // 1. SISTEM DETEKSI ANOMALI
  // Loop dimulai dari 1 untuk melewati Header
  for (let i = 1; i < dataDb.length; i++) {
    // Validasi ketat: Nama sama persis + Marga sama + Tahun lahir sama = DITOLAK
    if (String(dataDb[i][1]).toLowerCase() === String(nama).toLowerCase() && 
        String(dataDb[i][2]) === String(marga) && 
        String(dataDb[i][3]) === String(tahun)) {
      throw new Error(`Anomali: Anggota dengan nama "${nama}" marga "${marga}" (Lahir: ${tahun}) sudah terdaftar di Pohon Silsilah!`);
    }
  }
  
  // 2. SIMPAN DATA JIKA LOLOS VALIDASI
  const newId = generateUUID();
  const timestamp = new Date();
  
  sheet.appendRow([
    newId, nama, marga, tahun, ayah, ibu, kakekAyah, nenekAyah, kakekIbu, nenekIbu, timestamp
  ]);
  
  return { 
    status: 'success', 
    message: `Data ${nama} Marga ${marga} berhasil diintegrasikan ke sistem silsilah.` 
  };
}

/**
 * Fungsi kalkulasi statistik real-time untuk dashboard frontend
 */
function fetchDashboardStats() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) return { total: 0 };
  
  // Hitung jumlah baris dikurangi 1 (header)
  const totalAnggota = Math.max(0, sheet.getLastRow() - 1);
  return { total: totalAnggota };
}
