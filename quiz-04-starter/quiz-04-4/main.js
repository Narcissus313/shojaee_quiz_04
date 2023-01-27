const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");

let url_string = window.location.href;
let url = new URL(url_string);
let filterKey;
let filterValue;
try {
	filterKey = url.search.split("?")[1].split("=")[0];
	// console.log("filterKey: ", filterKey);
	filterValue = url.search.split("?")[1].split("=")[1];
	// console.log("filterValue: ", filterValue);
} catch (error) {}

const renderTable = () => {
	tableHead.innerHTML = `
		<tr>
			<th scope="col">No.</th>
			<th scope="col">Tour ID</th>
			<th scope="col">Name</th>
			<th scope="col">Location</th>
			<th scope="col">Price</th>
			<th scope="col">Group Size</th>
			<th scope="col">difficulty</th>
			<th scope="col">duration</th>
			<th scope="col">Ratings Average</th>
			<th scope="col">Ratings Quantity</th>
		</tr>`;

	let rowCount = 1;

	if (filterKey) {
		for (const tour of tours) {
			if (tour[filterKey] === filterValue) {
				tableBody.innerHTML += `
			<tr>
				<th scope="row">${rowCount}</th>
				<td>${tour.id}</td>
				<td>${tour.name}</td>
				<td>${tour.location}</td>
				<td>${tour.price}</td>
				<td>${tour.maxGroupSize}</td>
				<td>${tour.difficulty}</td>
				<td>${tour.duration}</td>
				<td>${tour.ratingsAverage}</td>
				<td>${tour.ratingsQuantity}</td>
			</tr>`;
			}
		}
		rowCount += 1;
		return;
	}

	for (const tour of tours) {
		tableBody.innerHTML += `
			<tr>
				<th scope="row">${rowCount}</th>
				<td>${tour.id}</td>
				<td>${tour.name}</td>
				<td>${tour.location}</td>
				<td>${tour.price}</td>
				<td>${tour.maxGroupSize}</td>
				<td>${tour.difficulty}</td>
				<td>${tour.duration}</td>
				<td>${tour.ratingsAverage}</td>
				<td>${tour.ratingsQuantity}</td>
			</tr>`;
	}

	rowCount += 1;
};

renderTable();
