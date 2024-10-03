describe('Products API integration', () => {
  let products = [];

  beforeEach(() => {
    cy.request('/api/products').then((response) => {
      expect(response.status).to.eq(200);
      products = response.body;
    });
  });

  it('fetches products from /api/products', () => {
    expect(products).to.be.an('array');
    expect(products.length).to.be.greaterThan(0);
    products.forEach((product) => {
      expect(product).to.have.all.keys(
        'image',
        'code',
        'name',
        'color',
        'capacity',
        'dimensions',
        'features',
        'energyClass',
        'price'
      );
    });
  });

  it('displays products fetched from the API', () => {
    cy.intercept('GET', '/api/products').as('getProducts');
    cy.visit('/');
    cy.wait('@getProducts');
    cy.get('.flex.flex-col.bg-white.rounded-2xl.p-6').should('have.length', products.length);
    cy.get('.flex.flex-col.bg-white.rounded-2xl.p-6').first().contains('Pralka QuickDrive™');
  });
});

describe('Error Boundary', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it('displays error message when failing to connect with API', () => {
    cy.intercept('GET', '/api/products', { statusCode: 500 });
    cy.visit('/');
    cy.get('.error-message').contains('Nie udało się połączyć z API.');
  });
});