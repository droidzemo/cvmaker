## 2025-05-19 - [Optimized re-renders with React.memo and useCallback]
**Learning:** In applications where state is managed at the top level and updated on every keystroke, the entire component tree re-renders by default. This is especially impactful when there are multiple complex forms and a live preview. Stable function references via `useCallback` and memoization via `React.memo` are critical for maintaining a responsive UI.
**Action:** Always check for top-level state updates and ensure child components are memoized if they only depend on specific slices of that state. Extract static maps outside of components to avoid unnecessary re-initialization.

## 2025-05-20 - [Debounced localStorage Sync]
**Learning:** Synchronous operations like `JSON.stringify` and `localStorage.setItem` inside a `useEffect` that triggers on every keystroke can cause significant UI jank as the state grows. Debouncing these operations is a low-effort, high-impact optimization for "auto-save" features.
**Action:** Implement debouncing for any side effects that involve heavy serialization or I/O triggered by frequent state changes.
