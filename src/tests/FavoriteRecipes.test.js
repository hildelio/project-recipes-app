import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
import { renderWithRouter } from './helpers/renderWithRouter';
import localStorageMock from '../mock/localStorage';
import FavoriteRecipes from '../pages/FavoriteRecipes';

const ALL = 'filter-by-all-btn';
const FILTER_MEALS_CATEGORY = 'filter-by-meal-btn';
const FILTER_DRINKS_CATEGORY = 'filter-by-drink-btn';
const TITLE_HEADER = 'page-title';
// const PICTURE_0 = '0-horizontal-image';
// const PICTURE_1 = '1-horizontal-image';

describe('Testando o componente FavoriteRecipes...', () => {
  beforeEach(() => {
    window.localStorage.setItem('favoriteRecipes', JSON.stringify(localStorageMock));
  });

  // afterEach(() => {
  //   window.localStorage.clear();
  // });
  test('Se existe elementos na tela e clicar em filtro de categoria', () => {
    renderWithRouter(<FavoriteRecipes />);
    const titleHeader = screen.getByTestId(TITLE_HEADER);
    const buttonAll = screen.getByTestId(ALL);
    const buttonMeals = screen.getByTestId(FILTER_MEALS_CATEGORY);
    const buttonDrink = screen.getByTestId(FILTER_DRINKS_CATEGORY);

    expect(titleHeader).toBeInTheDocument();
    expect(buttonAll).toBeInTheDocument();
    expect(buttonMeals).toBeInTheDocument();
    expect(buttonDrink).toBeInTheDocument();

    userEvent.click(buttonMeals);
    const figCorba = screen.getByRole('img', { name: /corba/i });
    expect(figCorba).toBeInTheDocument();

    userEvent.click(buttonAll);
    const figDrink = screen.getByRole('img', { name: /at&t/i });
    expect(figDrink).toBeInTheDocument();
  });
  test('Se existe elementos na tela e clicar em filtro de categoria', () => {
    renderWithRouter(<FavoriteRecipes />);
    const buttonShared = screen.getByTestId('0-horizontal-share-btn');

    // userEvent.click(buttonShared);
  //   const messageLink = screen.getByText(/link copied!/i);
  //   expect(messageLink).toBeInTheDocument();
  });
});
