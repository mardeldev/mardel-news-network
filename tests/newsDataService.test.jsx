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
            expect(axios.get).toHaveBeenCalledWith('https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=121530fe-30bb-4e77-af58-f964b4fb4640');
        })

        test('2. should have a successful request with the correct data returned', async () => {
            // Arrange
            axios.get.mockResolvedValueOnce({ data: testArticles });
            // Act
            const result = await getNewsArticle();
            // Assert
            expect(result).toEqual(testArticles);
        })

        test('3. should have an unsuccessful request returning an error object', async () => {
            // Arrange
            const error = { message: 'Error' };
            axios.get.mockRejectedValueOnce(error);
            // Act
            const result = await getNewsArticle();
            // Assert
            expect(result).toBe(error);
        })
    })
})