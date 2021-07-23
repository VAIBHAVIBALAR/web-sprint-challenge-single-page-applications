describe('Lambda Eats', ()=>{
    beforeEach(()=>{
    cy.visit('http://localhost:3000')
})
it('check for right elements showing', ()=>{
    //for textbox
    textInput().should('exist')

    //for submit button
    submitBtn().should('exist')

    //for topping
    cy.get('input[type="checkbox"]')
      .check(['onions','echeese','pepperoni']);
})
})

const textInput = () => cy.get('input[name=Name]')
const submitBtn = () => cy.get('button[id="order-button"]')