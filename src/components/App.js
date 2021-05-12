
import { Route, Switch } from 'react-router';
import { createGlobalStyle } from "styled-components"
import '../App.css';
import Header from './Header';
import NewRecipeForm from './NewRecipeForm';
import ProduceList from './ProduceList';
import RecipeList from './RecipeList';
import SeasonPage from './SeasonPage';
import ShoppingList from './ShoppingList';


const GlobalStyle= createGlobalStyle`
  body {
    background-color: #FBE9B1
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/seasons">
          <SeasonPage />
        </Route>
        <Route exact path="/seasons/:id">
          <ProduceList/>
        </Route>
        <Route exact path="/recipes/:id">
          <RecipeList/>
        </Route>
        <Route exact path="/new-recipe">
          <NewRecipeForm/>
        </Route>
        <Route exact path="/shopping-list">
          <ShoppingList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
