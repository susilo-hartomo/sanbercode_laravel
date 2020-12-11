var items = [
	['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpeg'],
	['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpeg'],
	['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
	['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpeg'],
];

var img = ['image/logitek.jpg', 'image/msi.jpg', 'image/genius.jpeg', 'image/jerry.jpg'];

function generateCard(item, img) {
	let hasil = `<div class="col-3">
                  <div class="card w-100 p-2" style="height: 360px;">
                      <img src="${img}" class="card-img-top" alt="..." height="140px" >
                      <div class="card-body">
                          <h5 class="card-title" id="itemName">${item[0]}</h5>
                          <p class="card-text" id="itemDesc">${item[3]}</p>
                          <p class="card-text">Rp ${item[2]}</p>
                          <a href="#" class="btn btn-primary" id="addCart">Add to Cart</a>
                      </div>
                  </div>
                </div>`;
	return hasil;
}

let element = '';
for (let i = 0; i < items.length; i++) {
	element += generateCard(items[i], img[i]);
}

document.getElementById('listBarang').innerHTML = element = `<div class="row">${element}</div>`;

var form = document.getElementById('formItem');
form.addEventListener('submit', function (event) {
	event.preventDefault();
	var search = document.getElementById('keyword').value;

	let filter = [];
	let index = [];
	for (let i = 0; i < items.length; i++) {
		if (items[i][1].toLowerCase().match(search.toLowerCase())) {
			filter.push(items[i]);
			index.push(i);
		}
	}
	console.log('index: ', index);

	let element = '';
	for (let i = 0; i < filter.length; i++) {
		element += generateCard(filter[i], img[index[i]]);
	}
	document.getElementById('listBarang').innerHTML = element = `<div class="row">${element}</div>`;
});

var cart = document.getElementById('cart');
var addCart = document.getElementById('addCart');

cart = 0;

addCart.addEventListener('click', function (event) {
	event.preventDefault();
	cart++;
	document.getElementById('cart').innerHTML = `<i class="fas fa-shopping-cart"></i>(${cart})`;
});
