describe("Run Way Space", () => {
  it("empty area", () => {
    cy.server();
    // cy.route("GET", "/*").as("fetchArticle");
    cy.visit("/");

    cy.getByTestId("articleSearchInput").type("School{enter}");
    cy.onRoute("articleList");
    cy.contains("VueSchool").click();

    cy.onRoute("article");
  });
});
