
/// <reference types="cypress" />

describe('US-015: Funcionalidade de recomendações de filmes', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('verificar se aparecem 5 recomendacoes', () => {
        cy.get('#recommendations').children().should('have.length', 5)
    })

    it('verificar se cada recomendação tem capa e titulo', () => {
        cy.get('#recommendations').children().should('have.length', 5)
        .each(($child) => {
            cy.wrap($child).find('img').should('be.visible');
            cy.wrap($child).find('p').should('be.visible').and('not.be.empty');
        });
    })

});