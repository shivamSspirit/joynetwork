import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */


export const users = [
  {
    _id: uuid(),
    firstName: "shivam",
    lastName: "soni",
    username: "shivam@gmail.com",
    password: "Pret@spirit3",
    bio: "Hi i am curious about web3",
    bookmarks: [],
    githubUrl: "https://github.com/shivamsoni00",
    profileImage: {
      url: "https://res.cloudinary.com/ddwkxn8ak/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1661221955/social/jeet-dhanoa-sR1BaDlRSKM-unsplash_url8ra.jpg",
      original_filename: "shivam-profile",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstName: "Elon",
    lastName: "soni",
    username: "Elon@gmail.com",
    password: "Elon@spirit3",
    bio: "Be yourself!",
    bookmarks: [],
    githubUrl: "https://github.com/shivamsoni00",
    profileImage: {
      url: "https://res.cloudinary.com/ddwkxn8ak/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1661221878/social/107101580-1660095651939-gettyimages-1395371348-dk023772_07aa4cd1-36c0-4f46-9752-7e238d4fb187_siwkbm.jpg",
      original_filename: "Elon-profile",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstName: "Dan",
    lastName: "soni",
    username: "Dan@gmail.com",
    password: "Dan@spirit3",
    bio: "Be yourself everyTime!",
    bookmarks: [],
    githubUrl: "https://github.com/shivamsoni00",
    profileImage: {
      url: "https://res.cloudinary.com/ddwkxn8ak/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1661221734/social/photo-1661051830189-54dfcfcf3a0f_krd7yf.jpg",
      original_filename: "dan-profile",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstName: "Robo",
    lastName: "soni",
    username: "robo@gmail.com",
    password: "Robo@spirit3",
    bio: "go in industry",
    bookmarks: [],
    githubUrl: "https://github.com/shivamsoni00",
    profileImage: {
      url: "https://res.cloudinary.com/ddwkxn8ak/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1661221812/social/photo-1661009396062-f8a247bfdc3a_cduiid.jpg",
      original_filename: "robo-profile",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

];
