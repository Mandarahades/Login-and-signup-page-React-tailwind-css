import Header from "../components/header";
import Signup from "../components/signup";

export default function SignupPage(){
    return(
        <>
            <Header
              heading="Inscrivez-vous pour créer un compte"
              paragraph= "Vous avez déjà un compte ?"
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>
        </>
    )
}