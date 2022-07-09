/// <reference types = 'cypress' />

describe('bestaan van input', () =>{
    beforeEach('setup mocks', () =>{
        cy.intercept('http://api.weatherapi.com/v1/forecast.json?q=ams&days=3' , {
            fixture : 'amsterdam_weather.json'
        })
        cy.intercept('http://api.weatherapi.com/v1/forecast.json?q=new&days=3' , {
            fixture : 'new_weather.json'
        })
        cy.intercept('http://api.weatherapi.com/v1/forecast.json?q=new y&days=3' , {
            fixture : 'new_y_weather.json'
        })
    } )
    
    it('contain input', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy=main-input]').should("exist") 
        cy.get('[data-cy=main-input]').invoke('attr', 'placeholder').should('contain', 'Amsterdam')
    })

    it('should contain amsterdam at default', () => {
        cy.get("[data-cy=input-location]").should('contain', 'Amsterdam')
    })

    it('should change api', () => { 
        cy.get('[data-cy=main-input]').click().type('new ')
        cy.get('[data-cy=main-input]').click().type('york')
        cy.get("[data-cy=input-location]").should('contain', 'New York')
    })
    
} )