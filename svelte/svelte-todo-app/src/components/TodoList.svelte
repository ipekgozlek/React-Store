<script>
  import { todos } from '../stores/todos'
  import TodoItem from './TodoItem.svelte'
</script>

{#if $todos.length === 0}
  <p class="empty">Henüz bir todo yok. Başlamak için ekleyin.</p>
{:else}
  <ul class="todo-list">
    {#each $todos as item (item.id)}
      <TodoItem {item} />
    {/each}
  </ul>
{/if}

<style>
.todo-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column}
.empty{color:var(--muted);padding:1rem 0}
</style>
