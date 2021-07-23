describe('Lambda Eats', ()=>{
    beforeEach(()=>{
    cy.visit('http://localhost:3000')
})
it('check for right elements showing', ()=>{
    textInput().should('exist')
    submitBtn().should('exist')
})
})

const textInput = () => cy.get('input[name=Name]')
const submitBtn = () => cy.get('button[id="order-button"]')