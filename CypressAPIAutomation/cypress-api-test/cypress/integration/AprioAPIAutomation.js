describe('API Validation Suite', function () {

    it('Users API Validation', function () {
        cy.request(
            {
                method: 'POST',
                url: Cypress.config('baseURL') + '/users',
                headers: {
                    'content-type': 'application/json'
                },
                body: {
                    "name": "Gowtham Ambati",
                    "job": "QA Automation Engineer"
                }
            }).then((response) => {
                expect(response).property('status').to.equal(201)
                cy.log("********* Response ******** : "+JSON.stringify(response))

                const nameValue = response.body.name;
                cy.log("********* Name ******** : "+nameValue);

                const jobValue = response.body.job;
                cy.log("********* Job ******** : "+jobValue);

                const idValue = response.body.id;
                cy.log("********* ID ******** : "+idValue);

                const createdAtValue = response.body.createdAt;
                cy.log("********* Created At ******** : "+createdAtValue);

                expect({
                    name: nameValue,
                    job: jobValue,
                    id : idValue,
                    createdAt : createdAtValue

                })
            })

    })

    it('Login API Validation', function () {
        cy.request(
            {
                method: 'POST',
                url: Cypress.config('baseURL') + '/login',
                headers: {
                    'content-type': 'application/json'
                },
                body: {
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                }
            }).then((response) => {
                expect(response).property('status').to.equal(200)
                cy.log("********* Response ******** : "+JSON.stringify(response))
                const token = response.body.token;
                cy.log("********* Token ******** : "+token);
                expect({
                    token: token
                })
            })

    })

    it('User Details API Validation', function () {
        cy.request(
            {
                method: 'GET',
                url: Cypress.config('baseURL') + '/users/3',
                headers: {
                    'content-type': 'application/json'
                }
            }).then((response) => {
                return new Promise(resolve => {
                    expect(response).property('status').to.equal(200)
                    cy.log("********* Response ******** : "+JSON.stringify(response))
                    const email = response.body.data.email;
                    cy.log("********* Email ******** : "+email);
                    expect(email.endsWith('@reqres.in')).to.be.true
                    resolve(email)
                })
            })
    })

})