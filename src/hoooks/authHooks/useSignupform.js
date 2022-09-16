import { useState } from 'react'
import { omit } from 'lodash';

const useSignupForm = (Callback) => {
    const [values, setValues] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        userName:''
    });
    const [errors, setErrors] = useState({});

    const Validate = (event, name, value) => {
        //A function to validate each input values
        switch (name) {

            case 'firstName':
                if (!new RegExp('[A-Za-z0-9]').test(value)){
                    setErrors({
                        ...errors,
                        firstName:'first name should be alphanumeric'
                    })
                }
                break;
              case 'lastName':
             
                if (!new RegExp('[A-Za-z0-9]').test(value)){
                    setErrors({
                        ...errors,
                        lastName:'last name should be alphanumeric'
                    })
                }
                break;


                case 'userName':

                    if (!new RegExp('[A-Za-z0-9]').test(value)){
                        setErrors({
                            ...errors,
                            userName:'user name should be alphanumeric'
                        })
                    }
                    break;
    
              
                
            case 'email':
                if (
                    !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        email: 'Enter a valid email address'
                    })
                } else {

                    let newObj = omit(errors, "email");
                    setErrors(newObj);
                }
                break;
            case 'password':
                if (
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        password: 'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                    })
                } else {

                    let newObj = omit(errors, "password");
                    setErrors(newObj);

                }
                break;
            default:
                break;
        }
    }

    //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();
        let name = event.target.name;
        let val = event.target.value;
        Validate(event, name, val);
        //Let's set these values in state

        if(name==="firstName"){
            setValues({
                ...values,
                firstName:val
            })
        }

        if(name==="lastName"){
            setValues({
                ...values,
                lastName:val
            })
        }

        if (name === "userName") {
            setValues({
                ...values,
                userName: val
            })
        }

        if (name === "email") {
            setValues({
                ...values,
                email: val
            })
        }
        if (name === 'password') {
            setValues({
                ...values,
                password: val
            })
        }
    }

    // const asGuest = (e) => {
    //     e.preventDefault();
    //     console.log('login as guest')
    //     setValues({
    //         username: "shivam@gmail.com".trim(),
    //         passsword: "Pret@spirit3".trim()
    //     });
    // }

    return {
        values,
        errors,
        handleChange,
        // asGuest
    }
}

export default useSignupForm
