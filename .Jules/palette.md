## 2025-05-14 - [Form Accessibility & Empty States]
**Learning:** For dynamic lists (Experience/Education), simply having labels is insufficient for accessibility; they must be explicitly linked to unique IDs (e.g., `role-${item.id}`). Additionally, providing an empty state with a tailored CTA (e.g., "Add your first role") significantly improves the initial user onboarding experience.
**Action:** Always ensure dynamic form fields generate unique IDs and implement descriptive aria-labels for action buttons that specify which item is being acted upon.
