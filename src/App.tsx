import './App.css'
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <TodoList />
    </>
  )
}

const WrappedWithAuth = withAuthenticator(App)

export default WrappedWithAuth
