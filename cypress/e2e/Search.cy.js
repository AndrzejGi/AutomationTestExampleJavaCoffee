/// <reference types="cypress" />


describe("E2E - Wyszukiwarka",() => {
    it("Wpisywanie tekstu w pole wyszukiwarki ", () => {
        cy.visit("/")
        cy.get("#search_query_top").type("Kawa", {delay:600})
        cy.get('[class="button-search"]').click();
    })

    it("Kliknięcie w lupkę ", () => {
        cy.get("#search_query_top").clear();
        cy.get('[class="button-search"]').click();
    })

    it("Czyszczenie pola input wyszukiwarki", () => {
        cy.get("#search_query_top").type("JAVACOFFE", {delay:600})
        cy.get("#search_query_top").clear();
    })

    it("Wpisywanie tekstu w pole wyszukiwarki ", () => {
        cy.get("#search_query_top").type("!@#$%śćł123", {delay:600})
        cy.get('[class="button-search"]').click();
    })

    it("Czyszczenie pola input wyszukiwarki", () => {
        cy.get("#search_query_top").clear();
    })

    it("Wpisywanie tekstu KAWA w pole wyszukiwarki/wybór produktu z popup ", () => {
        cy.get("#search_query_top").type("KAWA", {delay:600})
        cy.get('[class="ac_product_name"]').eq(0).click();
        
       
    })
})