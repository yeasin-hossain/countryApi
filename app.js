// initial render country name to select option
const getAllCountry = (() => {
	fetch(`https://restcountries.eu/rest/v2/all`)
		.then((res) => res.json())
		.then((data) => {
			const all__countries = document.querySelector('#all__countries');
			const country = data
				.map((country) => {
					return `<option value="${country.name}"  >${country.name}</option>`;
				})
				.join('');
			all__countries.innerHTML = country;
		});
})();

// Choices country info render in a card
const getCountryInfo = (e) => {
	fetch(`https://restcountries.eu/rest/v2/name/${e}`)
		.then((res) => res.json())
		.then((data) => {
			const country = data[0];
			const single__Country = document.querySelector('#single__Country');
			single__Country.innerHTML = `
            <div class="card mt-5 d-block m-auto" style="width: 25rem">
				<img src="${country.flag}" class="card-img-top" alt="${country.name}" />
				<div class="card-body">
					<h5 class="card-title">Name:- ${country.name}</h5>
					<h6 class="card-text">Capital:- ${country.capital}</h6>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">Region:- ${country.region}</li>
					<li class="list-group-item">Population:- ${country.population}</li>
					<li class="list-group-item">Timezones:- ${country.timezones}</li>
					<li class="list-group-item">Native Name:- ${country.nativeName}</li>
				</ul>

			</div>
            `;
		});
};
