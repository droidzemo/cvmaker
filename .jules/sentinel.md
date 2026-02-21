## 2025-05-14 - [Mitigating Prototype Pollution and DoS in JSON Imports]
**Vulnerability:** The application blindly parsed JSON from user-uploaded files and updated the global state, making it vulnerable to prototype pollution and Denial of Service (DoS) via large files.
**Learning:** React state updates with untrusted objects can lead to prototype pollution if keys like `__proto__` are present. Large files can cause the browser to hang during parsing.
**Prevention:** Always implement file size limits (e.g., 1MB) and recursively sanitize imported objects to remove `__proto__` and `constructor` keys. Validate the object structure against an expected schema before merging into state.
