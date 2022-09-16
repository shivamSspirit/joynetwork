import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [

  {
    _id: uuid(),
    content:
      "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others. -shivam soni",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/ddwkxn8ak/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1661221955/social/jeet-dhanoa-sR1BaDlRSKM-unsplash_url8ra.jpg",
      original_filename: "shivam-profile",
    },
    userId: "shivam-soni-test-userId",
    firstName: "shivam",
    lastName: "soni",
    username: "shivamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },


  {
    _id: uuid(),
    content:
      "knowledge without practise none of work. - elon soni",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/ddwkxn8ak/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1661221878/social/107101580-1660095651939-gettyimages-1395371348-dk023772_07aa4cd1-36c0-4f46-9752-7e238d4fb187_siwkbm.jpg",
      original_filename: "Elon-profile",
    },
    userId: "elon-soni-test-userId",
    firstName: "elon",
    lastName: "soni",
    username: "elon-soni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },


  {
    _id: uuid(),
    content:
      "knowledge is never lost —dan soni",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/ddwkxn8ak/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1661221734/social/photo-1661051830189-54dfcfcf3a0f_krd7yf.jpg",
      original_filename: "dan-profile",
    },
    userId: "dan-soni-test-userId",
    firstName: "dan",
    lastName: "soni",
    username: "dansoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Arise awake and fcuk everything —robo soni",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/ddwkxn8ak/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1661221812/social/photo-1661009396062-f8a247bfdc3a_cduiid.jpg",
      original_filename: "robo-profile",
    },
    userId: "robo-soni-test-userId",
    firstName: "robo",
    lastName: "soni",
    username: "robosoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },


];
