/// <reference types="cypress" />

describe("E2E - Home page",() => {
    it("Should open home page - javacoffee and top menu", () => {
        cy.visit("/")
        cy.contains('[title="KAWA"]', 'KAWA').click();
        cy.get('[class="logo img-responsive"]').click();
        cy.contains('[title="NAPOJE ROŚLINNE"]','NAPOJE ROŚLINNE').click();
        cy.get('[class="logo img-responsive"]').click();
        cy.contains('[title="SUBSKRYPCJA"]','SUBSKRYPCJA').click();
        cy.get('[class="logo img-responsive"]').click();
        cy.contains('[title="HERBATA"]','HERBATA').click();
        cy.get('[class="logo img-responsive"]').click();
        cy.contains('[title="AKCESORIA DO KAWY NA PREZENT"]','AKCESORIA DO KAWY NA PREZENT').click();
        cy.get('[class="logo img-responsive"]').click();
        cy.contains('[title="SZKOLENIA"]','SZKOLENIA').click();
        cy.get('[class="logo img-responsive"]').click();
        cy.contains('[title="Blog"]','Blog').click();
        cy.get('[id="menu-item-4104"]').click();
        cy.contains('[title="Współpraca"]','Współpraca').click();
        cy.get('[id="menu-item-4104"]').click();
    })
    it("Sprawdzanie poprawności opisu zakładek górnego menu",() =>{
        cy.get('[title="KAWA"]').should("contain","KAWA");
        cy.get('[title="NAPOJE ROŚLINNE"]').should("contain","NAPOJE ROŚLINNE");
        cy.get('[title="SUBSKRYPCJA"]').should("contain","SUBSKRYPCJA");
        cy.get('[title="HERBATA"]').should("contain","HERBATA");
        cy.get('[title="AKCESORIA DO KAWY NA PREZENT"]').should("contain","AKCESORIA DO KAWY NA PREZENT");
        cy.get('[title="SZKOLENIA"]').should("contain","SZKOLENIA");
        cy.get('[title="Blog"]').should("contain","Blog");
        cy.get('[title="Współpraca"]').should("contain","Współpraca");
    })
    it("Weryfikacja rozwijanego menu KAWA",() => {
        cy.get('[title="KAWA"]').eq(0).trigger("focus")
        cy.get('li.sfHover a[title="ESPRESSO"]').click()

    })
})