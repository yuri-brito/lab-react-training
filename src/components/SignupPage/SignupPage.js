import './SignupPage.css'
import {Form,FormGroup,Label,Input,Button,FormFeedback} from 'reactstrap'
import { useState } from 'react'

function SignupPage(){
    const [emailValid,setEmailValid]=useState(false)
    const [emailInvalid,setEmailInvalid]=useState(false)
    function validarEmail(e){
        let email = e.target.value
        if (email===''){
            setEmailValid(false)
            setEmailInvalid(false)
            return
        }
        if (email.includes('@')&&email.includes('.com')) {
            setEmailValid(true)
            setEmailInvalid(false)
         } else {
            setEmailInvalid(true)
            setEmailValid(false)
         }  
    }

    const [passValid,setPassValid]=useState(false)
    const [passInvalid,setPassInvalid]=useState(false)
    function validarPass(e){
        let pass = e.target.value
        if (pass===''){
            setPassValid(false)
            setPassInvalid(false)
            return
        }
        if (pass.length<=5) {
            setPassValid(false)
            setPassInvalid(true)
         } else {
            setPassInvalid(false)
            setPassValid(true)
         }  
    }

    function subForm(e){
        e.preventDefault();
        let email=e.target.children[0].children[1].value
        let lang=e.target.children[2].children[1].value
        let div=e.target.children[4]

        if (lang==='German'){
            div.innerHTML=`<p>Hallo</p><p>Your email is: ${email}</p><p>Your email address is correct</p>`
        }else if (lang==='French'){
            div.innerHTML=`<p>Bonjour</p><p>Your email is: ${email}</p><p>Your email address is correct</p>`
        }else{
            div.innerHTML=`<p>Hello</p><p>Your email is: ${email}</p><p>Your email address is correct</p>`
        }
        console.log(e.target.children[4])


    }


    return(
        <Form className='form' onSubmit={subForm}>
            <FormGroup>
                <Label for="exampleEmail">
                Email
                </Label>
                <Input
                id="exampleEmail"
                name="email"
                placeholder="Enter your email"
                type="email"
                onChange={validarEmail}
                valid={emailValid}
                invalid={emailInvalid}
                />
                <FormFeedback valid>
                    You typed a valid email
                </FormFeedback>
                <FormFeedback>
                    You typed a invalid email
                </FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">
                Password
                </Label>
                <Input
                id="examplePassword"
                name="password"
                placeholder="Enter your password"
                type="password"
                onChange={validarPass}
                valid={passValid}
                invalid={passInvalid}
                />
                <FormFeedback valid>
                    Your password is great security
                </FormFeedback>
                <FormFeedback>
                    Your password is too weak
                </FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">
                Nationality
                </Label>
                <Input
                id="exampleSelect"
                name="select"
                type="select"
                >
                <option>
                    German
                </option>
                <option>
                    French
                </option>
                <option>
                    English
                </option>
                </Input>
            </FormGroup>
            <Button type='submit' color='primary'>
                Sign up
            </Button>
            <div>
                
            </div>
        </Form>
    )
}
export default SignupPage;