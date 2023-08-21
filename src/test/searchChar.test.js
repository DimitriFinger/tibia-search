import assert from "assert"
import { describe, it } from "mocha"
import SearchChar from '../services/searchChar.js'

describe('API Tests', () => {
    it('Should return status code 200', async () => {
        const response = await SearchChar.searchChar("Dime Vanillia");
        assert.strictEqual(response.status, 200, new Error('Bad request!'));

    });

    it('Should return a specific character', async () => {
        const response = await SearchChar.searchChar("Dime Vanillia");
        assert.strictEqual(response.data.characters.character.name, "Dime Vanillia", new Error('Character not found!'))
    })

    it('Should return an empty string if character does not exist', async () => {
        const response = await SearchChar.searchChar("No existent character");
        assert.strictEqual(response.data.characters.character.name.length, 0, new Error('A character with that name exists.'))
    })



})