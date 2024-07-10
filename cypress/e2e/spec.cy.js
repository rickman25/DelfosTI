describe('Automation Exercise', () => {

  beforeEach (function () {
    cy.visit('http://www.saucedemo.com/')
  //  cy.getCookies().should('not.be.empty')
    cy.clearCookies()
    cy.getCookies().should('be.empty')
    cy.wait(1000)
  })

  it("Iniciar Sesión", function () {

    //Cambiar Lenguaje
    cy.get('[data-test="username"]').click()
    cy.get('[data-test="username"]').type('standard_user')
    cy.wait(1000)
    cy.get('[data-test="password"]').click()
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.wait(1500)
  
  })

  it("Comprar Producto", function () {

    //Ingresar al Login

    cy.get('[data-test="username"]').click()
    cy.get('[data-test="username"]').type('standard_user')
    cy.wait(1000)
    cy.get('[data-test="password"]').click()
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    //Elegir Producto
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.wait(1000)
    cy.get('[data-test="shopping-cart-link"]').click()
    
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Ejemplo')
    cy.get('[data-test="lastName"]').type('QA')
    cy.get('[data-test="postalCode"]').type('2555')

    cy.get('[data-test="continue"]').click()
    
    cy.get('[data-test="finish"]').click()
  })
})