///<reference types="Cypress"/>
import login from './Pages/loginElements'

const loginTest = new login ()
describe('loginTesting', () => {
  beforeEach (() =>{

    cy.visit('https://practice.expandtesting.com/login').wait(2000)
  
  
  })
    it('successful login ', () => {
     
      loginTest.getUser().type('practice')
      loginTest.getUser().should('have.value', 'practice')
      loginTest.getPass().type('SuperSecretPassword!')
      loginTest.getPass().should('have.value', 'SuperSecretPassword!')
      loginTest.getStart().click()
      cy.contains('You logged into a secure area!').should('be.visible') 
      cy.wait (2000)
    })
    
    it('failed login with wrong user', () => {
     
      loginTest.getUser().type('Dayannis_QA')
      loginTest.getUser().should('have.value', 'Dayannis_QA')
      loginTest.getPass().type('SuperSecretPassword!')
      loginTest.getPass().should('have.value', 'SuperSecretPassword!')
      loginTest.getStart().click()
      cy.contains('Your username is invalid!').should('be.visible') 
      cy.wait (2000)
  
    })
  
    it('failed login with wrong password', () => {
  
      loginTest.getUser().type('practice')
      loginTest.getUser().should('have.value', 'practice')
      loginTest.getPass().type('KWI7oz43t9cuv..')
      loginTest.getPass().should('have.value', 'KWI7oz43t9cuv..')
      loginTest.getStart().click()
      cy.contains('Your password is invalid!').should('be.visible') 
      cy.wait (2000)
    })
  
    it('failed login without user', () => {
  
      loginTest.getUser().should('have.value', '')
      loginTest.getPass().type('SuperSecretPassword!')
      loginTest.getPass().should('have.value', 'SuperSecretPassword!')
      loginTest.getStart().click()
      cy.contains('Your username is invalid!').should('be.visible') 
      cy.wait (2000)
    })
  
    it('failed login without pass', () => {
  
      loginTest.getUser().type('practice')
      loginTest.getUser().should('have.value', 'practice')
      loginTest.getPass().should('have.value', '')
      loginTest.getStart().click()
      cy.contains('Your password is invalid!').should('be.visible') 
      cy.wait (2000)
    })
    it('failed login without pass and user', () => {
  
      loginTest.getUser().should('have.value', '')
      loginTest.getPass().should('have.value', '')
      loginTest.getStart().click()
      cy.contains('Your username is invalid!').should('be.visible') 
      cy.wait (2000)
    })
  
  
  })
