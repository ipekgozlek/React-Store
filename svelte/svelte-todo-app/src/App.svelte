<script>
  import TodoForm from './components/TodoForm.svelte'
  import TodoList from './components/TodoList.svelte'
  import { todos } from './stores/todos'

  let count = 0
  const unsubscribe = todos.subscribe((v) => (count = v.length))
  import { onDestroy } from 'svelte'
  onDestroy(unsubscribe)
</script>

<main class="container">
  <h1>Todo Uygulaması</h1>
  <TodoForm />
  <div class="meta">Toplam: <strong>{count}</strong></div>
  <TodoList />
</main>

<style>
:root{--bg:#f9f9fb;--card:#fff;--primary:#4f46e5;--muted:#6b7280}
body{font-family:Inter,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:var(--bg);margin:0}
.container{max-width:700px;margin:3rem auto;padding:1.5rem;background:var(--card);box-shadow:0 6px 18px rgba(2,6,23,.06);border-radius:8px}
h1{margin:0 0 1rem 0}
.meta{color:var(--muted);margin-bottom:1rem}
.btn{background:var(--primary);color:white;border:none;padding:.5rem .8rem;border-radius:6px;cursor:pointer}
.btn:hover{opacity:.95}
.todo-form{display:flex;gap:.6rem;margin-bottom:1rem}
.todo-input{flex:1;padding:.6rem;border:1px solid #e5e7eb;border-radius:6px}

</style>
