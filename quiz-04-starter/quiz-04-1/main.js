const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");

let url_string = window.location.href;
let url = new URL(url_string);
let limit = url.searchParams.get("limit");
let page = url.searchParams.get("page");
console.log(page);

const renderTable = (page,limit) => {
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

	for (let i = 1; i <= limit; i++) {
		let rowCount = 1;
		for (const tour of tours.slice(
			limit * (page - 1),
			limit * (page - 1) + limit
		)) {
			if (rowCount > limit) return;
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

			rowCount += 1;
		}
	}
};

renderTable(page,limit);
