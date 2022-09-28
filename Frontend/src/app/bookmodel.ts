export class IBook{
    constructor(
     public bookId: number,
     public bookName: string,
     public authorName: string,
     public releaseDate: string,
     public description: string,
     public price:number,
     public starRating: number,
     public imageUrl: string){}
 }
 