const loginFields= [
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Entrez votre adresse e-mail"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Entrez votre mot de passe"
    }
]
const signupFields = [
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Entrez votre adresse e-mail"

    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Entrez votre mot de passe"
    },
    {
        labelText: "Confirm Password",
        labelFor: "confirm-password",
        id: "confirm-password",
        name: "confirm-password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Confirmez votre mot de passe"
    }
]
export {loginFields, signupFields}