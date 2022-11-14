
describe("test user is logged out", () => {
    it("checks that 'profile' and 'token' is deleted", () => {
        cy.visit("/");
        cy.logout();

        expect(cy.getLocalStorage("token").length).to.equal(undefined);
        })
    })

    describe("test user is logged out", () => {
    it("checks that 'profile' and 'token' is deleted", () => {
        cy.visit("/");
        cy.logout();

        expect(cy.getLocalStorage("profile").length).to.equal(undefined);
        })
    })