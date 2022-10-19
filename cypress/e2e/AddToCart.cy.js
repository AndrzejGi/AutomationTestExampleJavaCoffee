/// <reference types="cypress" />

describe("E2E - Home page",() => {
    it("Dodawanie produktu do koszyka", () => {
        cy.visit("/")
        cy.contains('[title="KAWA"]', 'KAWA').click();
        cy.get('[class="replace-2x"]').eq(0).click();
        cy.get('[class="btn product_quantity_up"]').click();
        cy.get("#group_5").select(1);
        cy.get("#add_to_cart").click();
        cy.get("#layer_cart").should("be.visible");
        		

    })
})