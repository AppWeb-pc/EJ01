export class Book {
    constructor(title = '', originalTitle = '', description = '', pages = '', cover = '', releaseDate = ''){
        this.title = title;
        this.originalTitle = originalTitle;
        this.description = description;
        this.pages = pages;
        this.cover = cover;
        this.releaseDate = releaseDate;
    }
}