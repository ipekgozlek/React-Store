<script>
  import { todos } from '../stores/todos'
  export let item;

  let editing = false;
  let draft = '';
  let inputEl;

  function startEdit() {
    editing = true;
    draft = item.text;
  }

  function cancel() {
    editing = false;
  }

  function save() {
    const text = draft.trim()
    if (!text) return
    todos.edit(item.id, text)
    editing = false
  }

  function remove() {
    todos.remove(item.id)
  }

  function toggle() {
    todos.toggle(item.id)
  }

  $: if (editing && inputEl) requestAnimationFrame(() => inputEl.focus())
</script>

<li class="todo-item">
  <label class="checkbox">
    <input type="checkbox" checked={item.completed} on:change={toggle} />
  </label>

  {#if editing}
    <input
      class="edit-input"
      bind:this={inputEl}
      bind:value={draft}
      on:keydown={(e) => e.key === 'Enter' && save()}
      on:keydown={(e) => e.key === 'Escape' && cancel()}
    />
    <button class="btn small" on:click={save}>Kaydet</button>
    <button class="btn small muted" on:click={cancel}>İptal</button>
  {:else}
    <span class:completed={item.completed} class="text" on:dblclick={startEdit}>{item.text}</span>
    <div class="actions">
      <button class="btn small" on:click={startEdit}>Düzenle</button>
      <button class="btn small danger" on:click={remove}>Sil</button>
    </div>
  {/if}
</li>

<style>
.todo-item{display:flex;align-items:center;gap:.6rem;padding:.5rem 0}
.text{flex:1}
.completed{text-decoration:line-through;color:var(--muted)}
.actions{display:flex;gap:.4rem}
.btn.small{padding:.25rem .5rem;font-size:.9rem}
.danger{background:#e74c3c;color:white}
.muted{background:#eee}
.edit-input{flex:1;padding:.4rem}
</style>
