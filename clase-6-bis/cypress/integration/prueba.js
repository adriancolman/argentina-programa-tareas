context("formPruebas", () =>{
    before(()=>{
        cy.visit("http://127.0.0.1:8080")
    })
    it('comprueba los inputs de edad' , ()=>{
        cy.get('#cantidad-de-familiares')
        .type(3).should('have.value', 3)
        cy.get('#ingresar-cantidad')
        .click()
        cy.get('.edad').should('have.length', 3 )
    });

    it('comprueba los resultados de calculo de edad', ()=>{
        cy.get('.edad').eq(0)
        .type(10).should('have.value', 10)
        cy.get('.edad').eq(1)
        .type(20).should('have.value', 20)
        cy.get('.edad').eq(2)
        .type(30).should('have.value', 30)
        cy.get('#boton-calcular').click()
        cy.get('#menor-edad').should('have.text', 'la menor edad de un familiar es 10')
        cy.get('#mayor-edad').should('have.text', 'la mayor edad de un familiar es 30')
        cy.get('#promedio-familiar').should('have.text', 'la edad promedio familiar es 20')
    })

    it('comprueba los checkbox e inputs de salario', ()=>{
        cy.get('.boton-check').should('have.length', 3)
        cy.get('.boton-check').eq(0).check()
        cy.get('.boton-check').eq(1).check()
        cy.get('.input-salario').should('have.length', 2)
        cy.get('.input-salario').eq(0)
        .type(1200)
        cy.get('.input-salario').eq(1)
        .type(500)
    })

    it('comprueba el funcionamiento de calcular salario',() =>{
        cy.get('.boton-salario').click()
        cy.get('#mayor-salario').should('not.have.text')
        cy.get('.input-salario').eq(1).clear()
        .type(6000)
        cy.get('.boton-salario').click()
        cy.get('#mayor-salario').should('have.text', 'el mayor salario de un familiar es $ 6000')
        cy.get('#menor-salario').should('have.text', 'el menor salario de un familiar es $ 1200')
        cy.get('#salario-promedio').should('have.text', 'el salario promedio familiar es $ 3600')
    })

    it('comprueba el funcionamiento del reset', ()=>{
        cy.get('.boton-reset').click()
        cy.get('.input-salario').should('not.exist')
        cy.get('.boton-salario').should('not.exist')
        cy.get('.boton-reset').should('not.exist')
        cy.get('.edad').should('not.exist')


    })
    
})