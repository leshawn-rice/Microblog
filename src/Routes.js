import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NewPostForm from './components/Forms/NewPostForm';
import EditPostForm from './components/Forms/EditPostForm';
import Post from './components/Post/Post';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/new">
        <NewPostForm />
      </Route>
      <Route exact path="/posts/:id/edit">
        <EditPostForm />
      </Route>
      <Route exact path="/posts/:id">
        <Post />
      </Route>
    </Switch>
  );
}

export default Routes;