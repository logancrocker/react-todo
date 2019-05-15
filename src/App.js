import React from 'react';
import 'typeface-roboto';

import TodoList from './Components/TodoList';

function App() {
  return (
    <div style={ { align: 'right', } }>
      <TodoList />
    </div>
  );
}

export default App;
