import React from "react";
import App from './App'
import '@testing-library/jest-dom';
import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';

describe('Testing..', () => {

    beforeEach(() => <App />)

    test('header test', () => {
        const header = screen.getByText('Emoji Search')
        expect(header).toBeInTheDocument
    })

    test('all-rendered test', () => {
        const copyText = screen.getAllByText('Click to copy emoji')
        expect(copyText.length).toEqual(20)
    })

    test('filter test', () => {
        const input = screen.getByTestId('search')
        const value = '1234'
        userEvent.type(input, value)
        expect(screen.getByText(value)).toBeInTheDocument
    })

    test('copy test', () => {
        const copy = screen.getByText('Grin')
        userEvent.click(copy)
        expect(copyEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch("😁")
    })
})