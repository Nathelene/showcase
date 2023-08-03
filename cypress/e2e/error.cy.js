describe('The user will be notified of failed connection and 404 error when necessary', () => {
 

    it('should display an error message if cat fact network request fails', () => {
      cy.intercept("GET", "https://meowfacts.herokuapp.com/?count=50", {
        statusCode: 500,
        fixture: "facts.json"
      }).as('500')
      
      cy.intercept("GET", "https://cataas.com/cat/gif",{
        statusCode:200,
        fixture:"response.gif"
      }).as('gif')
      
      cy.visit("http://localhost:3000/")

      cy.wait(['@500','@gif']).then((intercept) => {
        cy.get('.home').get(".error-message").should('be.visible');
        
      })
    
    })

    
  it('should display an error message if cat gif network request fails', () => {
    cy.intercept("GET", "https://meowfacts.herokuapp.com/?count=50", {
      statusCode:200,
      fixture:"facts"
    }).as('fact')
  
    cy.intercept("GET", "https://cataas.com/cat/gif", {
      statusCode: 500,
      fixture: "response.gif"
    }).as('500')
 
    cy.visit("http://localhost:3000/")
  
    cy.wait(['@500','@fact']).then((intercept) => {
      cy.get('.home').get(".error-message").should('be.visible');
    })
   
  })

  it('should display a 404 error when route is not recognized',() => {
    cy.intercept("GET", "https://cataas.com/cat/gif",{
      statusCode:200,
      fixture:"response.gif"
    })

    cy.intercept("GET", "https://meowfacts.herokuapp.com/?count=50", {
      statusCode: 200,
      fixture: "facts.json"
    })

    cy.visit('http://localhost:3000/cat')
    .get('.page-not-found').contains('h2', '404 page not found')
    .get('.error-home').contains('p', 'Please Try Again')
    .get('.error-home').click()
    .url().should('include', '/')
  })
})