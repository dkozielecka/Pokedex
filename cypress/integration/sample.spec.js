describe('The Home Page', function() {

  it('successfully loads', function() {
    cy.visit('/');
  });

  it('header has content', function() {
    cy.visit('/');
    cy.get('h1').contains('Pokédex');
  });

  it('should send request to correct endpoint', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://api.pokemontcg.io/v1/cards'
    }).as('pokemonApi');
    cy.visit('/');
    cy.wait('@pokemonApi').then((xhr) => {
      assert.isNotNull(xhr.response.body.data);
    })
  });
});
