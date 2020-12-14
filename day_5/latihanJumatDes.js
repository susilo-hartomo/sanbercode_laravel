// let alamat = 'gang haji boang 148, jalan kalimantan 1 nomor 71, kecamatan jombang, kelurahan ciputat, tangsel 15414';

// function vokal(alamat) {
// 	let jumlahVokal = 0;

// 	for (let i = 0; i < alamat.length; i++) {
// 		if (alamat[i] === 'a' || alamat[i] === 'e' || alamat[i] === 'i' || alamat[i] === 'u' || alamat[i] === 'o') {
// 			jumlahVokal++;
// 		}
// 	}
// 	return jumlahVokal;
// }

// let banyaknya = vokal(alamat);

// // console.log(banyaknya);

// // ==============

// let alamat2 = 'gang haji boang 148, jalan kalimantan 1 nomor 71, kecamatan jombang, kelurahan ciputat, tangsel 15414';

// function tambahAngka(alamat2) {
// 	let hasil1 = 0;

// 	for (let i = 0; i < alamat2.length; i++) {
// 		if (alamat2[i] > 0) {
// 			hasil1 = hasil1 + Number(alamat2[i]);
// 			console.log(typeof alamat2[i]);
// 		}
// 	}
//
// 	return tambahAngka;
// }
// tambahAngka(alamat2);

// =====================

// let alamat3 = 'gang haji boang 148, jalan kalimantan 1 nomor 71, kecamatan jombang, kelurahan ciputat, tangsel 15414';

// function tambahAngka(alamat3) {
// 	let hasil2 = '';
// 	let hasil3 = 0;

// 	for (let i = 0; i < alamat3.length; i++) {
// 		if (alamat3[i] > 0) {
// 			hasil2 = hasil2 + alamat3[i];
// 		} else {
// 			hasil3 += Number(hasil2);

// 			hasil2 = '';
// 		}
// 	}

// 	if (hasil2) {
// 		hasil3 += Number(hasil2);
// 	}

// 	// console.log(hasil2);
// 	console.log(hasil3);

// 	return tambahAngka;
// }
// tambahAngka(alamat3);

// ==============

let dataSiswa = [
	['budi', 'ani', 'iwan', 'susi', 'andi'],
	['1a', '2d', '3a', '2d', '1b'],
	[80, 68, 90, 100, 77],
];

// let dataSiswa2 = [
// 	['budi', 'ani', 'iwan', 'susi', 'andi', 'banu'],
// 	['1a', '2d', '3a', '2d', '1b', '3a'],
// 	[100, 68, 90, 100, 77, 76],
// ];

// // Buat nilai rata-rata siswa
// function nilaiRata2(arr) {
// 	let totalNilai = 0;

// 	for (let i = 0; i < arr[2].length; i++) {
// 		totalNilai += arr[2][i];
// 	}

// 	let nilaiRataRata = 0;
// 	nilaiRataRata = totalNilai / arr[2].length;

// 	return nilaiRataRata.toFixed(2);
// }

// let nilaiRataRata = nilaiRata2(dataSiswa2);

// console.log(nilaiRataRata);

let dataSiswa2 = [
	['budi', 'ani', 'iwan', 'susi', 'andi', 'banu'],
	['1a', '2d', '3a', '2d', '1b', '3a'],
	[100, 68, 90, 100, 77, 76],
];

function mengelompokkanSiswa(bahan) {
	let hasil = [];

	for (let i = 0; i < bahan[0].length; i++) {
		let siswa = {
			nama: '',
			kelas: '',
			nilai: 0,
		};

		siswa.nama = bahan[0][i];
		siswa.kelas = bahan[1][i];
		siswa.nilai = bahan[2][i];
		hasil.push(siswa);
	}
	return hasil;
}

let hasilAkhir = mengelompokkanSiswa(dataSiswa2);
console.log(hasilAkhir);

console.log(mengelompokkanSiswa(dataSiswa));
