
/// <reference types="cypress" />

describe('US-012: Funcionalidade de cadastro de membros', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('cadastro de campos obrigatórios', () => {
    var email = `julia${Date.now()}@testes.com`
    cy.preencherCadastro('Julia', 'Silva', email, '1234567890', 'senhaForte123!')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('validação de formato de email inválido', () => {
    cy.preencherCadastro('Teste', 'Dias', 'teste.silva@example', '1234567890', 'senhaForte123!')
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })

  it('envio sem preencher campos obrigratórios', () => {
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')
  })

  it('validação de bloqueio de senha fraca', () => {
    cy.preencherCadastro('Ana Julia', 'Albuquerque', 'alo@example.com', '1234567890', 'oi123')
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial')

  it('cadastro de email duplicado', () => {
    cy.preencherCadastro('Lucas', 'Outro', 'luscas.silva@example.com', '1234567890', 'senhaForte123!')
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado')
  })
})
});


