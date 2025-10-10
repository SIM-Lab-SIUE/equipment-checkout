# Backend Environment Variables

Below is the list of environment variables required for the backend setup:

## General Configuration
- `APP_KEY`: A unique application key for Snipe-IT. Generate using `php artisan key:generate --show`.
- `APP_ENV`: Set to `development` for local hosting.
- `APP_DEBUG`: Set to `true` for debugging during development.
- `APP_URL`: The base URL for the application (e.g., `http://localhost:8080`).

## Database Configuration
- `DB_CONNECTION`: Set to `mysql`.
- `DB_HOST`: Hostname for the database (e.g., `localhost` or `snipe-it-db`).
- `DB_PORT`: Port for the database (default: `3306`).
- `DB_DATABASE`: Name of the database (e.g., `snipeit`).
- `DB_USERNAME`: Database username (e.g., `snipeit`).
- `DB_PASSWORD`: Database password.

## SAML Authentication Configuration
- `SAML_IDP_ENTITY_ID`: The Azure AD SAML entity ID provided by SIUE IT.
- `SAML_IDP_SSO_URL`: The SSO URL for Azure AD SAML.
- `SAML_IDP_CERT`: The certificate for Azure AD SAML.
- `SAML_SP_ENTITY_ID`: The service provider entity ID (e.g., `http://localhost:8080/saml/metadata`).
- `SAML_SP_ASSERTION_URL`: The assertion consumer service URL (e.g., `http://localhost:8080/saml/acs`).

## Additional Notes
- Ensure all sensitive variables are stored securely and not hardcoded in the source code.
- Use a `.env` file to manage these variables locally.

---

# Frontend-Backend API Structure

## Base URL
- The frontend will communicate with the backend via the base URL: `http://localhost:8080/api`.

## Endpoints

### Authentication
- `POST /auth/login`
  - Description: Authenticate users via Azure AD SAML.
  - Request Body: `{ username: string, password: string }`
  - Response: `{ token: string, user: object }`

### Equipment Catalog
- `GET /equipment`
  - Description: Fetch a list of all equipment.
  - Response: `[{ id: number, name: string, category: string, status: string }]`

- `GET /equipment/:id`
  - Description: Fetch details for a specific equipment item.
  - Response: `{ id: number, name: string, description: string, availability: array }`

### Reservations
- `POST /reservations`
  - Description: Create a new reservation.
  - Request Body: `{ userId: number, equipmentId: number, startDate: string, endDate: string }`
  - Response: `{ success: boolean, message: string }`

- `GET /reservations`
  - Description: Fetch reservations for the logged-in user.
  - Response: `[{ id: number, equipment: object, startDate: string, endDate: string }]`

---

This structure will evolve as development progresses. Let me know if you need further details or adjustments.