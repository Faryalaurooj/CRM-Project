# Overview 
This study evaluates the viability of developing a Customer Relationship Management (CRM) system that integrates functionalities from Agency Matrix, Levitate, and Trello, while also supporting IVANS policy downloads. The CRM aims to serve as a one-stop shop for customer support, marketing, and task management for an insurance agency.
The CRM will:
    • Centralize customer management (profiles, communication history, policy tracking) 
    • Automate IVANS policy downloads (daily sync of policies from carrier websites) 
    • Enable marketing and outreach (bulk emails, text messaging) 
    • Include task and workflow management (for 6 agency members) 
    • Provide a timeline display (showing all interactions per customer) 

# Technology Stack:
   ## 1. Frontend: React.js
        ◦ UI Library: Material UI 
        ◦ State Management: Redux (if needed for complex state handling) 
        ◦ Drag-and-Drop: React DnD 
   ## 2. Backend: Django (Django REST Framework)
        ◦ Authentication: JWT 
        ◦ API Documentation: DRF-YASG (Swagger) 
        ◦ Background Tasks (for IVANS automation): Celery + Redis 
   ## 3. Database: PostgreSQL
        ◦ Optimized for relational data storage. 
  ##  4. Integrations:
        ◦ Outlook API: Sync emails and auto-create tasks. 
        ◦ IVANS API: Automate policy downloads. 
        ◦ SendGrid: Bulk email campaigns. 
        ◦ Twilio: SMS messaging. 
        ◦ Aegis Cloud: Secure customer record storage. 
  ##  5. Deployment & Hosting:
        ◦ Backend: AWS EC2 / DigitalOcean Droplets 
        ◦ Frontend: Vercel / Netlify 
        ◦ Database: AWS RDS (PostgreSQL) / DigitalOcean Managed DB 
        ◦ Storage: AWS S3 for document uploads 
