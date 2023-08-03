
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
  cy.wait('@fact')
  cy.wait('@gif')
  cy.get(".get-random-button").click({ force: true }).get(".fact-container")
    .get(".fact-container")
     .within(() => {
      cy.get(".fact-card").contains("p", "Almost 10% of a cat's bones are in its tail, and the tail is used to maintain balance.")
        .get(".save-button").click({ force: true })
    })
    .get(".saved-button").click({ force: true })
    .url().should("include", "/saved")
    .get(".saved-facts-container").contains("h3", "1 saved facts")
    .get(".saved-facts-container")
    .within(() => {
      cy.get(".saved-card").contains("p", "Almost 10% of a cat's bones are in its tail, and the tail is used to maintain balance.")
        .get(".delete-button").should("exist")
        .get(".delete-button").click({ force: true })
        .get(".saved-card").should("not.exist")
    })
    .get(".saved-facts-container").contains("h3", "0 saved facts")
})