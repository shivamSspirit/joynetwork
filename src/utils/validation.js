// import { omit } from 'lodash'


// export const Validate = (event, name, value) => {
//     //A function to validate each input values
//     const [logerrors,setErrors] = useState({});

//     switch (name) {

//         case 'email':
//             if (
//                 !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
//             ) {
//                 setErrors({
//                     ...errors,
//                     email: 'Enter a valid email address'
//                 })
//             } else {

//                 let newObj = omit(errors, "email");
//                 setErrors(newObj);

//             }
//             break;

//         case 'password':
//             if (
//                 !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
//             ) {
//                 setErrors({
//                     ...errors,
//                     password: 'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
//                 })
//             } else {

//                 let newObj = omit(errors, "password");
//                 setErrors(newObj);

//             }
//             break;

//         default:
//             break;
//     }

//     return logerrors;
// }