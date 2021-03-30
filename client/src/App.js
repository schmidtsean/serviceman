import { Route, Switch } from 'react-router-dom';
import Handymen from './components/handymen/Handymen';
import Handyman from './components/handymen/Handyman';
import Services from './components/services/Services';
import Home from './components/shared/Home';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import { Container, Sticky } from 'semantic-ui-react';

const App = () => (
  <>
    <Sticky>
      <Navbar />
    </Sticky>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/handymen" component={Handymen} />
        <Route exact path="/handymen/:id/services" component={Services} />
        <Route component= {NoMatch} />
      </Switch>
    </Container>
  </>
)
export default App;

