///<reference types="Cypress"/>
class login
{
getUser()
{

    return cy.get('#username')
}

getPass()
{
    return cy.get('#password')
}

getStart()
{
    return cy.get('#login > .btn')
 
}

}
export default login;