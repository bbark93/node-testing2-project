const { INTERNAL } = require('sqlite3')
const request = require('supertest')
const db = require('../data/db-config.js')
const server = require('../server.js')
const Joke = require('./jokesModel.js')

const joke1 = { joke: "Why did the chicken cross the road?", punchline: "Because it was free range" }
const joke2 = { joke: "Why did the chicken cross the road?", punchline: "to get to the other side" }

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db("jokes").truncate()
})

afterAll(async () => {
    await db.destroy()
})

it("correct env var", () => {
    console.log(process.env.NODE_ENV);
    expect(process.env.DB_ENV).toBe("testing")
})

describe("jokes model functions", () => {
    describe("create joke", () => {
        it("adds joke to the db", async () => {
            let jokes
            await Joke.createJoke(joke1)
            jokes = await db('jokes')
            expect(jokes).toHaveLength(1)
        })
    })
})