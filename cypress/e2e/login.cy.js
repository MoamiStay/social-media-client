describe("test login", () => {
    it("retrieves token", () => {
    cy.visit("/");
    cy.login("testuser@noroff.no", "12345qwe");

    cy.getLocalStorage("token").then((token) => {
      expect(token.length).to.not.be.null;
    // expect(cy.getLocalStorage("token").length).to.not.be.null;
    })
})
})