## SIUE Equipment Checkout App

### **Phase 0: Pre-Development & Discovery (Due: End of September 2025)**

*This phase is about planning, research, and getting the necessary buy-in and information from stakeholders.*

-   [x] **(Lead: Developer)** Review and finalize all documentation files (`Blueprint.docx`, `Tech-Stack.docx`, `Info-Checklist.docx`, `Cost-Estimate.docx`, `Timeline.docx`).
-   [x] **(Lead: Developer)** Finalize Project Blueprint document with all agreed-upon features.
-   [x] **(Lead: Developer)** Send initial inquiry email to SIUE IT department regarding SSO, student data access, and hosting. *(Response received and noted)*
-   [ ] **(Lead: Broadcast Engineers)** Begin compiling the master equipment inventory spreadsheet. *(Can be done in parallel with other phases)*
-   [x] **(Lead: Developer)** Begin collecting branding assets (SIUE/Mass Comm logos). *(Task taken over by Developer)*
    -   [x] Add 6 Signature Line Type images (Red, White, Black; Center and Left aligned) to the `assets` folder.
    -   [x] Include `University-Marks-Quick-Guide.pdf` in the `assets` folder.
    -   [x] Document university color codes:
        -   **Print (CMYK)**:
            -   PMS 186 U (uncoated paper): C=0, M=100, Y=75, K=1
            -   PMS 186 C (coated paper): C=0, M=100, Y=80, K=5
        -   **Digital (online)**:
            -   HEX: #e5182d
            -   RGB: R=229, G=24, B=45
            -   HSL: 354º, 81%, 50%
            -   HSV: 354º, 90%, 90%
-   [ ] **(Lead: Broadcast Engineers)** Begin writing the text for equipment policies and FAQ pages. *(Can be done in parallel with other phases)*
-   [x] **(Lead: Developer)** Hold kickoff meeting with all stakeholders to approve the final blueprint and timeline. *(Completed)*

### **Phase 1: Project Setup & Backend Initialization (Due: Early October 2025)**

*Focuses on creating the development environment and getting the backend server running.*

-   [ ] **(Lead: Developer)** Create the private GitHub repository for the project.
-   [ ] **(Lead: Developer)** Set up the project scaffolding (Next.js frontend, backend directory structure).
-   [ ] **(Lead: Developer)** Configure the Ubuntu Server LTS machine in the broadcast cage for local hosting.
    -   [ ] Install Docker and Docker Compose.
    -   [ ] Set up the local Snipe-IT instance.
-   [ ] **(Lead: Developer)** Obtain Azure AD SAML endpoint details and credentials from SIUE IT for authentication.
-   [ ] **(Lead: Developer)** Set up environment variables and secrets for the backend:
    -   [ ] `APP_KEY` for Snipe-IT.
    -   [ ] Database credentials.
    -   [ ] SAML configuration details.
-   [ ] **(Lead: Developer)** Draft the API structure and endpoints for frontend-backend communication.
-   [ ] **(Lead: Developer)** Configure a CI/CD pipeline using GitHub Actions:
    -   [ ] Automated testing.
    -   [ ] Code quality checks.
    -   [ ] Deployment to the local development server.
-   [ ] **(Lead: Developer)** Successfully launch the local Snipe-IT server via Docker.
-   [ ] **(Lead: Developer)** Complete the Snipe-IT setup wizard and create the primary admin account.
-   [ ] **(Lead: Developer)** Seed the local Snipe-IT database with sample data:
    -   [ ] Create at least 4 equipment `Categories`.
    -   [ ] Create at least 2 `Manufacturers`.
    -   [ ] Create at least 5 equipment `Models`.
    -   [ ] Create at least 10 individual `Assets` and mark them as "Requestable".
    -   [ ] Create 3-4 sample student `Users`.

### **Phase 2: Frontend UI Development (Due: Mid-November 2025)**

*Building the visual "shell" of the student-facing application. All work is done with static, hard-coded data.*

-   [ ] **(Lead: Developer)** Create the main application layout (`Header`, `Footer`, navigation).
-   [ ] **(Lead: Developer)** Build the static "Dashboard" page (`/`).
-   [ ] **(Lead: Developer)** Build the static "Equipment Catalog" page (`/catalog`).
    -   [ ] Create the `EquipmentCard` component.
    -   [ ] Implement the search bar and filter UI elements.
-   [ ] **(Lead: Developer)** Build the static "Equipment Details" page (`/catalog/[itemID]`).
    -   [ ] Integrate the `FullCalendar` component for displaying reservation blocks.
-   [ ] **(Lead: Developer)** Build the static "My Account" page (`/account`).
-   [ ] **(Lead: Developer)** Build the "Reservation Confirmation" screen/modal.
-   [ ] **(Lead: Developer)** Ensure all UI components are responsive and mobile-friendly.
-   [ ] **(Lead: Developer)** Set up automated frontend testing (unit and integration tests).

### **Phase 3: API Integration & Core Logic (Due: End of November 2025)**

*Connecting the frontend to the backend and implementing the app's rules.*

-   [ ] **(Lead: Developer)** Create a centralized API service file for communicating with the Snipe-IT API.
-   [ ] **(Lead: Developer)** Write initial API documentation for custom endpoints and integration logic.
-   [ ] **(Lead: Developer)** Connect the "Equipment Catalog" page to the API to fetch and display real asset data.
-   [ ] **(Lead: Developer)** Connect the "Equipment Details" page to the API to fetch data for a single asset.
-   [ ] **(Lead: Developer)** Implement the core reservation logic:
    -   [ ] Send a checkout request to the Snipe-IT API when a user clicks "Reserve".
    -   [ ] Implement the "3 blocks per week, per item type" rule.
-   [ ] **(Lead: Developer)** Implement the class-based permission logic (based on IT's data solution).
-   [ ] **(Lead: Developer)** Connect the "Dashboard" and "My Account" pages to the API to show user-specific reservation data.
-   [ ] **(Lead: Developer)** Set up automated backend testing (unit and integration tests).

### **Phase 4: Staff Features & Final Integration (Due: Early December 2025)**

*Implementing features for the staff and integrating with university systems.*

-   [ ] **(Lead: Developer)** Build the simple, staff-only page for QR code check-in/check-out.
    -   [ ] Integrate the `html5-qrcode` library.
-   [ ] **(Lead: Developer)** Implement the university SSO login system based on IT department specifications.
-   [ ] **(Lead: Developer)** Set up the production server environment (either on university servers or a cloud VPS).
-   [ ] **(Lead: Developer)** Configure CI/CD pipelines for automated deployment and code quality checks.

### **Phase 5: Testing & Content Population (Due: Mid-December 2025)**

*This is a critical phase for stakeholder involvement to ensure the app is ready.*

-   [ ] **(Lead: Broadcast Engineers)** Provide the final, complete equipment inventory spreadsheet.
-   [ ] **(Lead: Developer)** Perform a bulk import of all official equipment data into the production Snipe-IT database.
-   [ ] **(Lead: Broadcast Engineers)** Provide the final text for all policies, FAQs, and contact pages.
-   [ ] **(Lead: Developer)** Deploy a testing version of the app for User Acceptance Testing (UAT).
-   [ ] **(Lead: Broadcast Engineers)** Conduct thorough UAT:
    -   [ ] Test the reservation workflow with multiple users.
    -   [ ] Verify all equipment rules and permissions are working correctly.
    -   [ ] Test on various devices (desktop, phone).
    -   [ ] Provide consolidated feedback and bug reports to the developer.

### **Phase 6: Final Polish & Launch (Due: Mid-January 2026)**

*The final push to get the app ready for the start of the semester.*

-   [ ] **(Lead: Developer)** Address all critical feedback and bugs from the UAT phase.
-   [ ] **(Lead: Developer)** Perform final security and performance checks.
-   [ ] **(Lead: Broadcast Engineers)** Give final sign-off for launch.
-   [ ] **(Lead: Developer)** Deploy the application to the live production server.
-   [ ] **(Lead: Developer)** **LAUNCH!**
-   [ ] **(Lead: Developer)** Provide "hyper-care" support for the first two weeks of the semester to quickly address any issues.
-   [ ] **(Lead: Developer)** Schedule and conduct a final hand-off/training session with the Broadcast Engineers on managing the Snipe-IT backend.

### **Phase 7: Post-Launch & Ongoing Maintenance (Ongoing)**

*Tasks for ensuring the long-term health and success of the application.*

-   [ ] **(Lead: Developer)** Transition from "hyper-care" to a standard support/maintenance plan.
-   [ ] **(Lead: Developer)** Establish a regular schedule for software updates and security patches (for the server, Snipe-IT, and Next.js).
-   [ ] **(Lead: Broadcast Engineers)** Manage user access and equipment inventory on a semester-by-semester basis using the Snipe-IT admin panel.
-   [ ] **(Lead: All)** Schedule a post-launch review meeting (e.g., 1 month after launch) to discuss what went well and gather feedback for future improvements.
-   [ ] **(Lead: All)** Create a backlog for "Version 2.0" features based on user feedback.