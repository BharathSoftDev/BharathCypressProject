/// <reference types="cypress" />


describe('End to End ecommerce Test ', function () {

    it('Submit Order', function () {

        let product1;
        let product2;
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#")
        cy.get("#username").type("rahulshettyacademy")
        cy.get("#password").type("learning")
        cy.contains("Sign In").click ()
        cy.contains("Shop Name").should("be.visible")
        cy.get('app-card').should ('have.length',4)
        cy.get('app-card').filter(':contains("Nokia Edge")').then($element => {
            cy.wrap($element).should('have.length',1)
            cy.get('h5').contains('$24.99').then(($el) => {
                product1 = $el.text(); // Store the text in the variable
                cy.log(product1); // Logs the value in Cypress UI for debugging
            });
            cy.wrap($element).contains('button', 'Add').click()
        })
        cy.get('app-card').eq(0)
         
    })

})

