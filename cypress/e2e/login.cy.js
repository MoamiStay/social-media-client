describe("test login", () => {
    it("retrieves token", () => {
    cy.visit("/");
    cy.login("testuser@noroff.no", "12345qwe");

    expect(cy.getLocalStorage("token").length).to.not.be.null;
    })
})