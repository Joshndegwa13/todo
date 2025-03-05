import React, { useState } from 'react';
import { ListTodo, Plus, Trash2 } from 'lucide-react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // add function
  const addTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-black p-4 flex justify-center">
      <div className="w-full max-w-md bg-zinc-900 rounded-lg p-6 border border-purple-500">
        {/* Header */}
        <div className="flex gap-2 mb-6 justify-center">
          <ListTodo className="text-purple-500" />
          <h1 className="text-2xl text-white">Todo List</h1>
        </div>

        {/* Input */}
        <div className="mb-6">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="New task"
            className="w-full p-2 bg-zinc-800 text-white border border-purple-500 rounded-lg"
          />
          <button
            onClick={addTodo}
            className="w-full mt-2 bg-purple-600 text-white p-2 rounded-lg flex items-center justify-center gap-2"
          >
            <Plus />
            Add
          </button>
        </div>

      
        <ul className="space-y-2">
          {todos.map((todo, i) => (
            <li key={i} className="flex justify-between p-2 bg-zinc-800 rounded-lg">
              <span className="text-white">{todo}</span>
              <button
                onClick={() => setTodos(todos.filter((_, index) => index !== i))}
                className="text-purple-400"
              >
                <Trash2 />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;