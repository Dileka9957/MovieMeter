
export class Movie_Review {

  // public id:Number;
  public movie_id: Number;
  public username:String;
  public comment :String;
  public rating : Number

  constructor(movie_id: Number,username:String,comment:String,rating:Number){

    // this.id = id,
    this.movie_id = movie_id,
    this.username = username,
    this.comment = comment,
    this.rating = rating
  }

}
