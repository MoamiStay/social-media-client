describe('testing to create new post', () => {
  it('can create post', () => {
    cy.visit('/');
    cy.login('testuser@noroff.no', '12345qwe');

    cy.createPost('Post Title', 'Post content text').then((postTest) => {
      expect(postTest.id).to.not.be.null;
    });
  });
});
