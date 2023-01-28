import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FetchContext from '../context/FetchContext';
import useFetch from '../hooks/useFetch';

function Drinks() {
  const { isLoading, errors } = useContext(FetchContext);
  const { makeFetch } = useFetch();
  const [slicedCocktails, setSlicedCocktails] = useState({});

  useEffect(() => {
    async function requestFetch() {
      const LENGTH_TWELVE = 12;
      const data = await makeFetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const twelveCocktails = data.drinks.splice(0, LENGTH_TWELVE);
      setSlicedCocktails(twelveCocktails);
    }
    requestFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      {
        isLoading && (
          <p>Loading...</p>
        )
      }
      {
        slicedCocktails.length > 0 && (
          slicedCocktails.map(({ strDrinkThumb, strDrink }, index) => (
            <card data-testid={ `${index}-recipe-card` } key={ `${strDrink}${index}` }>
              <img
                src={ strDrinkThumb }
                alt={ strDrink }
                data-testid={ `${index}-card-img` }
              />
              <p
                data-testid={ `${index}-card-name` }
              >
                {strDrink}
              </p>
            </card>)))
      }
      {
        errors && (
          <p>Erro Fatal!!! Seu computador se autodestruirá em 5 segundos!!</p>
        )
      }
      <Footer />
    </div>
  );
}

export default Drinks;
