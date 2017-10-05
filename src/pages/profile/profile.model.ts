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
    this.location = user.location || "";
    this.photoURL = user.photoURL || "";
    this.email = user.email || "";
    this.name = user.name || "";
    this.phone = user.phone || "";
    this.website = user.website || "";
    this.image = user.image || "";
    this.uid = user.uid || "";
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
