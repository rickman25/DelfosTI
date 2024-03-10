describe('Automation Exercise', () => {

  beforeEach (function () {
    cy.visit('https://shop.aseastage.com')
    cy.wait(1000)
  })

  it("Realizar Orden", function () {

    //Cambiar Lenguaje
    cy.get('.v-input__icon > .v-icon').click()
    cy.wait(1000)
    cy.get('#list-item-80-14').click()
    cy.get('[data-test="btn-select-language"]').click()
    cy.wait(10000)
    
    //Elegir producto
    cy.get('[data-item-id="83"] > :nth-child(2) > :nth-child(1) > .mx-auto').click()
    cy.wait(5000)
    cy.get('[data-cy="plus-box"]').dblclick()
    cy.get('[data-cy="modify-product-from-detail"]').click()
    cy.wait(5000)

    cy.get('[data-cy="badge-show-cart"] > .v-icon').click()
    cy.get(':nth-child(2) > .text-capitalize > .v-btn__content').click()

    
    //Ingresar Datos de Usuario
    cy.get('[data-cy="email"]').type('ricardo@peruslab.com')
    cy.get('[data-cy="firstName"]').type('Ricardo')
    cy.get('[data-cy="lastName"]').type('Rojas')
    cy.get('[data-cy="phone"]').type('991-251-2391')

    cy.get('[data-cy="addressLine1"]').type('9277 S. Peruvian Drive')
    cy.get('[data-cy="addressLine2"]').type('Unit 2112')

    cy.get('[data-cy="countryCity"]').type('COTTONWOOD HEIGHTS')
    cy.get('[data-cy="zipCode"]').type('84093')
    cy.get('[data-cy="state"]').type('UTAH')
    cy.wait(1000)
    cy.get('#list-item-572-0').click()
    cy.get('.mt-8 > .no-uppercase').click()
    cy.wait(6000)
    cy.get('.white--text').click()

    //Ingresar Datos de Tarjeta
    cy.wait(8000)
    cy.get(':nth-child(1) > .d-flex > :nth-child(4) > span > .v-form > .container > .row > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > [data-test="cardName-field"]').type('test')
    cy.get(':nth-child(1) > .d-flex > :nth-child(4) > span > .v-form > .container > .row > .mt-3.col > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > [data-test="cardNumber-field"]').type('5454545454545454')
    cy.get(':nth-child(1) > .d-flex > :nth-child(4) > span > .v-form > .container > .row > :nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > [data-test="expMonth-field"]').type('01')
    cy.get(':nth-child(1) > .d-flex > :nth-child(4) > span > .v-form > .container > .row > :nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > [data-test="expYear-field"]').type('2030')
    cy.get(':nth-child(1) > .d-flex > :nth-child(4) > span > .v-form > .container > .row > :nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > [data-test="ccv-field"]').type('456')
    
    cy.get(':nth-child(3) > .col > .v-radio > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()



    //Ingresar Usuario Contraseña
    cy.get('[data-test="siteId-field"]').type('ricardorojas'+Math.floor(Math.random()*1000))
    cy.get('[data-test="password-field"]').type('PerusLab.2024')
    cy.get('[data-test="confirmPassword-field"]').type('PerusLab.2024')

    cy.get('.v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
    cy.wait(4000)

    cy.get('[data-test="continue"]').click()

    cy.wait(10000)


  })

  xit("Iniciar Sesión Fallida", function () {

    //Ingresar al Login
    
  })
})