var items = [
	['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'],
	['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
	['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
	['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg'],
];

function generateCard(item) {
	let hasil = `<div class="col-3">
                  <div class="card w-100 p-2" style="height: 360px;">
                      <img src="image/${item[4]}" class="card-img-top" alt="..." height="140px" >
                      <div class="card-body">
                          <h5 class="card-title" id="itemName">${item[1]}</h5>
                          <p class="card-text" id="itemDesc">${item[3]}</p>
                          <p class="card-text">Rp ${item[2]}</p>
                          <a href="#" class="btn btn-primary" onclick={addChart()} id="addCart">Add to Cart</a>
                      </div>
                  </div>
                </div>`;
	return hasil;
}

function printInnerHtml(items) {
	let element = '';
	for (let i = 0; i < items.length; i++) {
		element += generateCard(items[i]);
	}

	document.getElementById('listBarang').innerHTML = element = `<div class="row">${element}</div>`;
}

printInnerHtml(items);

var form = document.getElementById('formItem');
form.addEventListener('keyup', function (event) {
	event.preventDefault();
	var search = document.getElementById('keyword').value;

	let filter = [];
	for (let i = 0; i < items.length; i++) {
		if (items[i][1].toLowerCase().match(search.toLowerCase())) {
			filter.push(items[i]);
		}
	}

	printInnerHtml(filter);
});

var cart = document.getElementById('cart');
var addCart = document.getElementById('addCart');

cart = 0;

addCart.addEventListener('click', function (event) {
	event.preventDefault();
	cart++;
	document.getElementById('cart').innerHTML = `<i class="fas fa-shopping-cart"></i>(${cart})`;
});
