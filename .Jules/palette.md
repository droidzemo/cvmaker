# Palette's Journal

## 2025-05-14 - [A11y Foundations in Dynamic Forms]
**Learning:** Dynamic lists in CV/resume builders often fail at basic label-input association because simple static IDs (like `role`) would duplicate. Screen reader users then lose the connection between what they are typing and the field purpose.
**Action:** Always use item IDs to generate unique, context-prefixed IDs (e.g., `id={`role-${item.id}`}`) for dynamic form fields and match them with `htmlFor` on labels.

## 2025-05-14 - [Contextual Destructive Actions]
**Learning:** In lists of similar items, "Remove" or "Delete" buttons without context are confusing for screen reader users (e.g., hearing "Remove button" five times).
**Action:** Provide contextual `aria-label`s for list actions by interpolating key item fields (e.g., `aria-label={`Remove experience: ${item.role} at ${item.company}`}`).
