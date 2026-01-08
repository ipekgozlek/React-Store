<script>
  import { createEventDispatcher } from 'svelte'
  import { todos } from '../stores/todos'

  let text = ''
  const dispatch = createEventDispatcher()

  function submit() {
    if (!text.trim()) return
    todos.add(text)
    text = ''
    dispatch('added')
  }
</script>

<form class="todo-form" on:submit|preventDefault={submit}>
  <input
    class="todo-input"
    placeholder="Yeni todo ekle..."
    bind:value={text}
    aria-label="Yeni todo"
  />
  <button type="submit" class="btn">Ekle</button>
</form>
