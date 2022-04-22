// средства маршрутизации
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
// стили
import { Container } from 'react-bootstrap'
// компоненты
import { Home } from './components/Home'
// import { ChatRoom } from './components/ChatRoom'

// маршруты
const routes = [
  { path: '/', name: 'Home', Component: Home },
  // { path: '/:roomId', name: 'ChatRoom', Component: ChatRoom }
]

export const App = () => (
  <div>asd{Home}</div>
)

// export const App = () => (
//   <Router>
//     <Container style={{ maxWidth: '512px' }}>
//       <h1 className='mt-2 text-center'>React Chat App</h1>
//       <Switch>
//         {routes.map(({ path, Component }) => (
//           <Route key={path} path={path} exact>
//             <Component />
//           </Route>
//         ))}
//       </Switch>
//     </Container>
//   </Router>
// )


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
