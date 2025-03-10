import React, { useState } from 'react';
import { ListTodo, Plus, Trash2, CheckCircle, XCircle } from 'lucide-react';

function App() {
  const [input, setInput] = useState('');
  const [pendingTodos, setPendingTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = () => {
    if (input) {
      setPendingTodos([...pendingTodos, input]);
      setInput('');
    }
  };

  const completeTodo = (index) => {
    const todoToComplete = pendingTodos[index];
    setPendingTodos(pendingTodos.filter((_, i) => i !== index));
    setCompletedTodos([...completedTodos, todoToComplete]);
  };

  const undoComplete = (index) => {
    const todoToUndo = completedTodos[index];
    setCompletedTodos(completedTodos.filter((_, i) => i !== index));
    setPendingTodos([...pendingTodos, todoToUndo]);
  };

  const deleteTodo = (index, isCompleted) => {
    if (isCompleted) {
      setCompletedTodos(completedTodos.filter((_, i) => i !== index));
    } else {
      setPendingTodos(pendingTodos.filter((_, i) => i !== index));
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
            onKeyPress={e => e.key === 'Enter' && addTodo()}
            placeholder="New task"
            className="w-full p-2 bg-zinc-800 text-white border border-purple-500 rounded-lg"
          />
          <button
            onClick={addTodo}
            className="w-full mt-2 bg-purple-600 text-white p-2 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-700"
          >
            <Plus />
            Add
          </button>
        </div>

        {/* Pending Tasks */}
        <div className="mb-6">
          <h2 className="text-purple-500 font-semibold mb-2">Pending Tasks</h2>
          <ul className="space-y-2">
            {pendingTodos.map((todo, i) => (
              <li key={i} className="flex justify-between items-center p-2 bg-zinc-800 rounded-lg">
                <span className="text-white">{todo}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => completeTodo(i)}
                    className="text-green-400 hover:text-green-500"
                  >
                    <CheckCircle size={20} />
                  </button>
                  <button
                    onClick={() => deleteTodo(i, false)}
                    className="text-purple-400 hover:text-purple-500"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Completed Tasks */}
        <div>
          <h2 className="text-purple-500 font-semibold mb-2">Completed Tasks</h2>
          <ul className="space-y-2">
            {completedTodos.map((todo, i) => (
              <li key={i} className="flex justify-between items-center p-2 bg-zinc-800 rounded-lg opacity-75">
                <span className="text-white line-through">{todo}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => undoComplete(i)}
                    className="text-yellow-500 hover:text-yellow-500"
                  >
                    <XCircle size={20} />
                  </button>
                  <button
                    onClick={() => deleteTodo(i, true)}
                    className="text-purple-400 hover:text-purple-500"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;