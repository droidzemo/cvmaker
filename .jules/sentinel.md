## 2025-05-14 - [Insecure JSON Import Validation]
**Vulnerability:** Lack of structural validation and security checks in JSON file import logic.
**Learning:** Client-side applications that allow importing JSON data into application state are vulnerable to application crashes, malformed state, and potentially prototype pollution if the data is not validated before being applied. Using a reviver function in `JSON.parse` can mitigate some risks, and structural validation ensures the app remains stable.
**Prevention:** Always validate the structure and types of user-provided data (especially from files or external APIs) before merging it into the application state. Implement file size limits for client-side file reading to prevent basic DoS.
