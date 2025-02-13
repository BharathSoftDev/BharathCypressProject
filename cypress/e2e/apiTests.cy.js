describe('API Testing with Cypress', () => {
    const apiUrl = 'https://reqres.in/api/users'; // Sample API for testing

    it('GET request - Fetch list of users', () => {
        cy.request('GET', apiUrl).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.be.an('array');
            expect(response.body.data.length).to.be.greaterThan(0);
        });
    });

    it('GET request - Fetch a single user', () => {
        cy.request('GET', `${apiUrl}/2`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.property('id', 2);
            expect(response.body.data).to.have.property('email');
        });
    });

    it('POST request - Create a new user', () => {
        cy.request('POST', apiUrl, {
            name: 'John Doe',
            job: 'QA Engineer',
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('name', 'John Doe');
            expect(response.body).to.have.property('job', 'QA Engineer');
            expect(response.body).to.have.property('id');
        });
    });

    it('PUT request - Update user details', () => {
        cy.request('PUT', `${apiUrl}/2`, {
            name: 'John Updated',
            job: 'Senior QA Engineer',
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', 'John Updated');
            expect(response.body).to.have.property('job', 'Senior QA Engineer');
        });
    });

    it('DELETE request - Delete a user', () => {
        cy.request('DELETE', `${apiUrl}/2`).then((response) => {
            expect(response.status).to.eq(204); // No content expected
        });
    });

});


