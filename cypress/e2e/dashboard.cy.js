describe('home page', () => {

beforeEach(() => {
  cy.intercept("GET", "https://meowfacts.herokuapp.com/?count=50", {
    statusCode:200,
    fixture:"facts"
  }).as('fact')

  cy.intercept("GET", "https://cataas.com/cat/gif",{
    statusCode:200,
    fixture:"response.gif"
  }).as('gif')
  
})


  it('should display a welcome message on page load and display a fact when new fact button is clicked', () => {
   
    cy.visit("http://localhost:3000/")

    cy.wait('@fact')
    cy.wait('@gif')

    cy.get(".nav").should("exist")
      .get(".nav").contains("h1", "Feline Facts")
      .get(".saved-button").should("exist")
      .get(".intro").contains("h2", "Welcome Cat Lovers!")
      .get(".intro").contains("p","Click below to learn more about your Meow-velous companion!")
      .get(".get-random-button").should("exist")
      cy.wait('@fact')
      cy.wait('@gif')
      .get(".get-random-button").click({force:true}).get(".fact-container")
      .get(".cat-gif").should("have.attr", "src").should("include", "https://cataas.com/cat/gif")
      cy.get("img").should("be.visible")
      .get(".fact-container")
      .within(() => {
        cy.get(".fact-card").contains("p", "Almost 10% of a cat's bones are in its tail, and the tail is used to maintain balance.")
          .get(".save-button").should("exist")
      })
  });

  // it('should display an error message if cat fact network request fails', () => {
  //   cy.intercept("GET", "https://meowfacts.herokuapp.com/?count=50", {
  //     statusCode: 500,
  //     fixture: "facts.json"
  //   }).as('500')
    
  //   cy.wait('@fact')
  //   cy.wait('@gif')
  //   cy.wait('@500',{ timeout: 10000 })
  //     .get('.home').get(".error-message")
  // })

  // it('should display an error message if cat gif network request fails', () => {
  //   cy.intercept("GET", "https://cataas.com/cat/gif", {
  //     statusCode: 500,
  //     fixture: "response.gif"
  //   }).as('500')

  //   cy.wait('@500')
  //   .get('.home').get(".error-message")
  // })

  // it('should display a 404 error when route is not recognized',() => {
  //   cy.intercept("GET", "https://meowfacts.herokuapp.com/?count=50", {
  //     statusCode:200,
  //     fixture:"facts"
  //   })
  //   cy.visit('http://localhost:3000/cat')
  //   .get('.page-not-found').contains('h2', '404 page not found')
  //   .get('.error-home').contains('p', 'Please Try Again')
  //   .get('.error-home').click()
  //   .url().should('include', '/')
  // })
})