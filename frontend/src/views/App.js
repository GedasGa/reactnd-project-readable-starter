import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Root from './Root/Root';
import PostDetail from './PostDetail/PostDetail';
import Error from './Error/Error';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
          <Header title="Readable" sections={sections} />
          <Switch>
            <Route exact path='/'>
              <Root />
            </Route>
            <Route exact path='categoryies/:category' render={(state) => (
              <Root filter={state.match.params.category} />
            )} />
            <Route exact path='categories/:category/posts/:postId' render={(state) => (
              <PostDetail postId={state.match.params.postId} />
            )} />
            <Route component={Error} />
          </Switch>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}

export default App;