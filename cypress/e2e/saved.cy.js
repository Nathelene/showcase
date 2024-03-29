
beforeEach(() => {
  cy.intercept("GET", "https://meowfacts.herokuapp.com/?count=50", {
    statusCode:200,
    fixture:"facts"
  }).as('fact')
  cy.intercept("GET", "https://cataas.com/cat/gif",{
    statusCode:200,
    fixture:"response.gif"
  }).as('gif')
  cy.visit("http://localhost:3000/")
})


it('should allow the user to save a fact and delete the fact on the saved fact page', () => {
  cy.wait('@fact', {timeOut: 10000})
  cy.wait('@gif')
  cy.wait(5000)
  cy.get(".get-random-button").click({ force: true }).get(".fact-container")
    .get(".fact-container").should('be.visible').within(() => {
      cy.get(".fact-card").contains("p", "Almost 10% of a cat's bones are in its tail, and the tail is used to maintain balance.").should('be.visible')
        .get(".save-button").should('be.visible').click({ force: true })
    })
    .get(".saved-button").click({ force: true })
    .url().should("include", "/saved")
    .get(".saved-facts-container").contains("h3", "1 saved facts").should('be.visible')
    .get(".saved-facts-container")
    .within(() => {
      cy.get(".saved-card").contains("p", "Almost 10% of a cat's bones are in its tail, and the tail is used to maintain balance.")
        .get(".delete-button").should("exist")
        .get(".delete-button").click({ force: true })
        .get(".saved-card").should("not.exist")
    })
    .get(".saved-facts-container").contains("h3", "0 saved facts")
    .get(".back-button").click({force:true}).get('.fact-container').should('be.visible')
})