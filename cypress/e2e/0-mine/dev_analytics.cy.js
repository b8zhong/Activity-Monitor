let url = Cypress.env('url'); // Pass the URL dynamically through environment variables
let art = Cypress.env('title'); // Pass the title dynamically through environment variables

function textFromVisible(selector) {
  // Visit the URL
  cy.visit(url);

  // Wait for the selected element to load
  cy.get(selector, { timeout: 10000 }).should('be.visible');
  cy.get(selector, { timeout: 10000 }).should('be.ok');

  // Get the text and return it
  return cy.get(selector).invoke('text').then((text) => text.trim());
}

describe('Comments on dev.to [' + art + ']', () => {
  it('checks the number of comments', () => {
    textFromVisible('span.js-comments-count').then((value) => {
      cy.writeFile(
        'analitycs-4-art.json',
        `{"title":"${art}","comments-count": "${value}",`,
        { flag: 'w+' }
      );
    });
  });
});

describe('Reactions on dev.to [' + art + ']', () => {
  it('checks and logs the number of reactions', () => {
    textFromVisible('span#reaction_total_count').then((value) => {
      cy.writeFile(
        'analitycs-4-art.json',
        `"reactions-count": "${value}"}`,
        { flag: 'a+' }
      );
    });
  });
});
