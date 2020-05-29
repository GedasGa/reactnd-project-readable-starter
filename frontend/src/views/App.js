import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, withRouter, Switch } from "react-router-dom";
import Container from '@material-ui/core/Container';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Root from './Root/Root';
import PostDetail from './PostDetail/PostDetail';
import Error from './Error/Error';
import { getCategories, getPosts } from '../actions/index';

function App() {
  const dispatch = useDispatch();

  const categories = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getPosts());
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="lg">
          <Header title="Readable" categories={categories} />
          <Switch>
            <Route exact path='/'>
              <Root />
            </Route>
            <Route exact path='/:category' render={(state) => (
              <Root filter={state.match.params.category} />
            )} />
            <Route exact path='/:category/:postId' render={(state) => (
              <PostDetail postId={state.match.params.postId} />
            )} />
            <Route component={Error} />
          </Switch>
      </Container>
      <Footer title="Readable" description="A content and comment web app!" />
    </React.Fragment>
  );
}

export default withRouter(App);