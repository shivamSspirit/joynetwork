import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [

  {
    _id: uuid(),
    content:{content:{status:"Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others. -shivam soni",postMedia: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1664078063/social/photo-1662581872342-3f8e0145668f_rbl3ya.jpg',}},
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [],
    
    profileImage: {
      url: "https://res.cloudinary.com/ddwkxn8ak/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1661221955/social/jeet-dhanoa-sR1BaDlRSKM-unsplash_url8ra.jpg",
      original_filename: "shivam-profile",
    },
    userId: "shivam-soni-test-userId",
    firstName: "shivam",
    lastName: "soni",
    username: "shivam@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },


  {
    _id: uuid(),
    content:{content:{status:"knowledge without practise none of work. - elon soni",postMedia: "https://res.cloudinary.com/ddwkxn8ak/image/upload/v1664078021/social/photo-1663765583971-8804289c2f38_ds7gib.jpg"}},
      
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [],
     profileImage: {
      url: "https://res.cloudinary.com/ddwkxn8ak/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1661221878/social/107101580-1660095651939-gettyimages-1395371348-dk023772_07aa4cd1-36c0-4f46-9752-7e238d4fb187_siwkbm.jpg",
      original_filename: "Elon-profile",
    },
    userId: "elon-soni-test-userId",
    firstName: "elon",
    lastName: "soni",
    username: "Elon@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },


  {
    _id: uuid(),
    content:{content:{status:"knowledge is never lost —dan soni",postMedia: "https://res.cloudinary.com/ddwkxn8ak/image/upload/v1664077968/social/photo-1663860096666-b29086678e9a_eqhzlw.jpg"}},
     
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [],
   
    profileImage: {
      url: "https://res.cloudinary.com/ddwkxn8ak/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1661221734/social/photo-1661051830189-54dfcfcf3a0f_krd7yf.jpg",
      original_filename: "dan-profile",
    },
    userId: "dan-soni-test-userId",
    firstName: "dan",
    lastName: "soni",
    username: "Dan@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:{content:{status:"Arise awake and fcuk everything —robo soni", postMedia: "https://res.cloudinary.com/ddwkxn8ak/image/upload/v1664077906/social/photo-1664056350275-f7121af5cff0_c7nndq.jpg"}},
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [],
   
    profileImage: {
      url: "https://res.cloudinary.com/ddwkxn8ak/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1661221812/social/photo-1661009396062-f8a247bfdc3a_cduiid.jpg",
      original_filename: "robo-profile",
    },
    userId: "robo-soni-test-userId",
    firstName: "robo",
    lastName: "soni",
    username: "robo@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },


];
