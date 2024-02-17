const {test, expect} = require('@playwright/test')

var userid;

test('Get', async({request}) => {

    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)

})

test('Post', async({request}) => {

const response = await request.post('https://reqres.in/api/users',
                                    {
                                        data:{"name":"Suganya", "job":"Tester"},
                                        headers:{"Accept":"application/json"}
                                    }
)
console.log(await response.json())
expect(response.status()).toBe(201)

var res = await response.json()
userid = res.id

})

test('put', async({request}) => {

    const response = await request.post('https://reqres.in/api/users'+userid,
    {
        data:{"name":"Suganya", "job":"AutomationTester"},
        headers:{"Accept":"application/json"}
    }
)
console.log(await response.json())
expect(response.status()).toBe(201)   

})

test('delete', async({request}) => {

const response = await request.delete('https://reqres.in/api/users'+userid)
expect(response.status()).toBe(204)

})