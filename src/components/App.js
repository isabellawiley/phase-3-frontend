
import { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { createGlobalStyle } from "styled-components"
import '../App.css';
import AllProduce from './AllProduce';
import AllRecipes from './AllRecipes';
import Header from './Header';
import NewRecipeForm from './NewRecipeForm';
import ProduceList from './ProduceList';
import RecipeList from './RecipeList';
import SeasonPage from './SeasonPage';
import ShoppingList from './ShoppingList';


const GlobalStyle= createGlobalStyle`
  body {
    background-color: #699e5c
  }

  h1 {
    font-family: 'Crimson Pro', serif;
    font-size: 7em;
  }

  h2 {
    font-family: 'Crimson Pro', serif;
    font-size: 4em;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  a {
    font-family: 'Crimson Pro', serif;
    font-size: 1.7em;
    padding-right: 15px;
  }
`

function App() {
  const [produceArr, setProduceArr] = useState([]);
  // const [recipeArr, setRecipeArr] = useState([]);
  // const [listArr, setListArr] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/produces`)
    .then(res => res.json())
    .then((produce) => setProduceArr(produce))
  },[])

  // useEffect(() => {
  //   fetch(`http://localhost:9292/recipes`)
  //   .then(res => res.json())
  //   .then((recipe) => setRecipeArr(recipe))
  // },[])

  // function handleAddProduceToList(itemsArr){
  //   const addItems = [...listArr, ...itemsArr];
  //   setListArr(addItems);
  // }

  // function handleRemoveProduceFromList(item){
  //   const removeItem = listArr.filter((produce) => produce !== item);
  //   setListArr(removeItem);
  // }

  // let deleteRecipe = (recipeName) => {
  //   let deletedRecipesArr = recipeArr.filter(recipe => recipe.name !== recipeName)
  //   setRecipeArr(deletedRecipesArr)
  // }

  // console.log(produceArr)
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/seasons"/>
        </Route>
        <Route exact path="/seasons">
          <SeasonPage />
        </Route>
        <Route exact path="/seasons/:id">
          <ProduceList />
        </Route>
        <Route exact path="/recipes/:id">
          <RecipeList />
        </Route>
        <Route exact path="/recipes">
          <AllRecipes />
        </Route>
        <Route exact path="/produce">
          <AllProduce/>
        </Route>
        <Route exact path="/new-recipe">
          <NewRecipeForm produceArr={produceArr}/>
        </Route>
        <Route exact path="/shopping-list">
          <ShoppingList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
