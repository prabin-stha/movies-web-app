class Movie {
	id;
	title;
	date;
	imageURL;
	rating;

	constructor(
		id: number,
		title: string,
		date: string,
		imageURL: string,
		rating: number
	) {
		this.id = id;
		this.title = title;
		this.date = date;
		this.imageURL = imageURL;
		this.rating = rating;
	}
}

export default Movie;
