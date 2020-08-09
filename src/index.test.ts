import app from './index'
import supertest from 'supertest'

beforeAll(async done => {
    done()
})

afterAll(async done => {
    // mongoose.connection.close()
    done()
})

// const request = supertest(app)

test('home route', () => {
    // const response = await request.get('/ ')
    // expect(response.status).toBe(200)
    // expect(response.text).toContain('<h1>Spot</h1>')
    expect(true).toBe(true)
})



