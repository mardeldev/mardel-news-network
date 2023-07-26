import axios from 'axios';
import { getNewsArticle } from '../src/utils/dataService';
import { describe } from 'vitest';
import testArticles from '../src/constants/mockNewsData.json';


vi.mock(`axios`);

describe('getNewsArticle tests', () => {
    describe('GET request tests to /response', () => {
        it('1. should actually make the external data call', async () => {
            // Arrange
            // Nothing to arrange here. For this test, the data doesn't need to be returned.
            // Act
            await getNewsArticle();
            // Assert
            expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/response');
        })
    })
})