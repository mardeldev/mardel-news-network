import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { Article } from '../src/components';
import testArticle from '../src/constants/mockNewsData.json';
import { describe, expect } from 'vitest';

describe('Article Summary Page Tests', () => {
    describe('article selection test', () => {
        it('1. should render the correct article chosen', async () => {
            // Arrange
            const headline = testArticle.response.response.results[0].fields.headline;
            const routes = [
                {
                    path: "/article/:id",
                    element: <Article articles={testArticle.response.response.results} />
                },
                {
                    path: "/",
                    element: <></>
                }
            ]
            const router = createMemoryRouter(
                routes,
                {
                    initialEntries: [`/article/${testArticle.response.response.results[0].id.replace(/\//g, '_')}`],
                    initialIndex: 0
                }
            );
            // Act
            render(<RouterProvider router={router} />);
            //Assert
            await waitFor(() => {
                expect(screen.getByText(headline)).toBeInTheDocument();
            })

        })
    })
})