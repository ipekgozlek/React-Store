import { writable } from 'svelte/store'

const STORAGE_KEY = 'svelte_todos_v1'

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    console.error('Failed to load todos', e)
    return []
  }
}

function createTodos() {
  const { subscribe, set, update } = writable(load())

  subscribe((value) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    } catch (e) {
      console.error('Failed to save todos', e)
    }
  })

  return {
    subscribe,
    add: (text) => {
      const trimmed = text.trim()
      if (!trimmed) return
      update((items) => [{ id: Date.now(), text: trimmed, completed: false }, ...items])
    },
    remove: (id) => update((items) => items.filter((t) => t.id !== id)),
    toggle: (id) =>
      update((items) => items.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))),
    edit: (id, newText) => update((items) => items.map((t) => (t.id === id ? { ...t, text: newText } : t))),
    clear: () => set([])
  }
}

export const todos = createTodos()
