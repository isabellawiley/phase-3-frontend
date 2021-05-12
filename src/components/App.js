
import { Route, Switch } from 'react-router';
import '../App.css';
import Header from './Header';
import NewRecipeForm from './NewRecipeForm';
import ProduceList from './ProduceList';
import RecipeList from './RecipeList';
import SeasonPage from './SeasonPage';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <div>
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
        <Route exact path="/recipes/new-recipe">
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
