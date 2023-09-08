describe("First counter",()=>{

    beforeEach(()=>{
        cy.visit("http://localhost:3000/")
    })

    it("textcontent Counter App",()=>{
        cy.get(".head").should("have.text","Counter App")
    })

   
    it("should increment count",()=>{
       
        cy.get('[data-cy="count-display"]').should("contain","Count: 0")
        cy.get('[data-cy="increment-button"]').click()
        cy.get('[data-cy="count-display"]').should("contain","Count: 1")
      
    })
    it("should decrement count",()=>{
     
        cy.get('[data-cy="count-display"]').should("contain","Count: 0")
        cy.get('[data-cy="decrement-button"]').click()
        cy.get('[data-cy="count-display"]').should("contain","Count: -1")
        cy.get('[data-cy="decrement-button"]').click()
        cy.get('[data-cy="count-display"]').should("contain","Count: -2")
    })


})