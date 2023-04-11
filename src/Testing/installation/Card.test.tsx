import {render, screen} from "@testing-library/react";
import ActionAreaCard from "../../Component/card";
import React from "react";
import {mockItem} from "../mockdata/cardprops";

describe('ActionAreaCard Component', () => {

    test('renders ActionAreaCard component correctly', () => {
        render(<ActionAreaCard props={mockItem} />);
        // Assert that the expected elements are rendered
        expect(screen.getByTestId('card-action-area')).toBeInTheDocument();
        expect(screen.getByTestId('card-media')).toBeInTheDocument();
        expect(screen.getByTestId('card-content')).toBeInTheDocument();

        expect(screen.getByText('Mock Common Name')).toBeInTheDocument();
        expect(screen.getByTestId('card-content').textContent).toBe("Mock Common NameMock Official Name(Mock Short Name)region:Mock Regiontimezone:Mock Timezonecapital:Mock CapitalUSD:Mock Currency Name Mock Currency Symbol")
    });
});
