export class UserModel {
  photoURL: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  name: string;
  website: string;
  uid: string;
  image: string;

  build(user) {
    this.location = user && user.location || "";
    this.photoURL = user && user.photoURL || "";
    this.email = user && user.email || "";
    this.name = user && user.name || "";
    this.phone = user && user.phone || "";
    this.website = user && user.website || "";
    this.image = user && user.image || "";
    this.uid = user && user.uid || "";
    return this;
  }
}

export class ProfilePostModel {
  date: Date;
  image: string;
  description: string;
  likes: number = 0;
  comments: number = 0;
  liked: boolean = false;
}

export class ProfileModel {
  user: UserModel = new UserModel();
  following: Array<UserModel> = [];
  followers: Array<UserModel> = [];
  posts: Array<ProfilePostModel> = [];
}
