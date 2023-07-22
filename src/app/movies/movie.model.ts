export class Movie {

    public id : Number;
    public name: String;
    public genres: String;
    public release_date: String;
    public language: String;
    public trailer: String;
    public imagePath: String;


    constructor(id: Number,name: String,genres: String,release_date: String,language: String ,trailer:String,imagePath: String){

      this.id= id,
      this.name = name,
      this.genres = genres,
      this.release_date = release_date,
      this.language = language,
      this.trailer = trailer,
      this.imagePath = imagePath
    }
}
