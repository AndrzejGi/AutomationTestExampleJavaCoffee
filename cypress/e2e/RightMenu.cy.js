/// <reference types="cypress" />


describe("E2E - Right Menu",() => {
    it("Should open right menu ", () => {
        cy.visit("/")
        cy.contains('[title="KAWA"]', 'KAWA').click();
        
    })
    it("Sprawdzanie poprawności opisu zakładek górnego menu KAWA",() =>{
        cy.get('[title="KAWA"]').should("contain","KAWA");
    })
    it("Sprawdzanie poprawności wyświetlania zakładek menu KAWA",() =>{
        cy.get('[class="grower OPEN"]').click();
        cy.get('[class="grower CLOSE"]').eq(0).click();
        cy.get('[title="FILTR / DRIP"]').should("be.visible");
        cy.contains('[title="FILTR / DRIP"]','FILTR / DRIP').click({ force: true });
        cy.contains('[title="ESPRESSO"]','ESPRESSO').click({ force: true });
        cy.contains('[title="ZESTAWY TESTOWE"]','ZESTAWY TESTOWE').click({ force: true });
        
    })
})

    
