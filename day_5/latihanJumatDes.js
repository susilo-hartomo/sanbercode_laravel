let alamat = 'gang haji boang 148, jalan kalimantan 1 nomor 71, kecamatan jombang, kelurahan ciputat, tangsel 15414';

function vokal(alamat) {
	let jumlahVokal = 0;

	for (let i = 0; i < alamat.length; i++) {
		if (alamat[i] === 'a' || alamat[i] === 'e' || alamat[i] === 'i' || alamat[i] === 'u' || alamat[i] === 'o') {
			jumlahVokal++;
		}
	}

	return jumlahVokal;
}

let banyaknya = vokal(alamat);
console.log(banyaknya);
//'gang haji boang 148, jalan kalimantan 1 nomor 71, kecamatan jombang, kelurahan ciputat, tangsel 15414';
