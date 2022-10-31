import MainNavigation from './src/navigation/MainNavigation';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import './server';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
