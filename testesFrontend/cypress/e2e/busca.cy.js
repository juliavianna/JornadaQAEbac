
/// <reference types="cypress" />

describe('US-012: Funcionalidade de cadastro de membros', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('buscar filmes com sucesso', () => {
        cy.get('#search-input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Matrix')
    })

    it.only('buscar filmes de uma lista com sucesso', () => {
        cy.fixture('filmes').each((filmes) => {
            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes.titulo)
        })
    });
});