///<reference types= "cypress" />
 
import massa from '../fixtures/example.json'
 
it("Visitar url" , ()=>{
    cy.visit(massa.url)
})