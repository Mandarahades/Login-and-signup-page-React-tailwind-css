import Header from "../components/header"
import Login from "../components/login"

export default function LoginPage(){
    return(
        <>
         <Header
                heading="Connectez-vous à votre compte"
                paragraph= "Vous n'avez pas encore de compte ? "
                linkName="Signup"
                linkUrl="/signup"
                />
        <Login/>
        </>
    )
}