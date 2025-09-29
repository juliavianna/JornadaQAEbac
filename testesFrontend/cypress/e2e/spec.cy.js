
/// <reference types="cypress" />

describe('US-012: Funcionalidade de cadastro de membros', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('cadastro de campos obrigatórios', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#signup-firstname').type('Lucas')
    cy.get('#signup-lastname').type('AAA')
    cy.get('#signup-email').type('lucas.silva@example.com')
    cy.get('#signup-phone').type('1234567890')
    cy.get('#signup-password').type('senhaForte123!')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('validação de formato de email inválido', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#signup-firstname').type('Teste')
    cy.get('#signup-lastname').type('Dias')
    cy.get('#signup-email').type('teste.silva@example')
    cy.get('#signup-phone').type('1234567890')
    cy.get('#signup-password').type('senhaForte123!')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })

  it('envio sem preencher campos obrigratórios', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')
  })

  it('validação de bloqueio de senha fraca', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#signup-firstname').type('Ana Julia')
    cy.get('#signup-lastname').type('Albuquerque')
    cy.get('#signup-email').type('alo@example.com')
    cy.get('#signup-phone').type('1234567890')
    cy.get('#signup-password').type('oi123') // senha fraca
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial')

  it('cadastro de email duplicado', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#signup-firstname').type('Lucas')
    cy.get('#signup-lastname').type('Outro')
    cy.get('#signup-email').type('luscas.silva@example.com')
    cy.get('#signup-phone').type('1234567890')
    cy.get('#signup-password').type('senhaForte123!')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado')
  })
})
});


