# n8n for StartOS
# Uses the official n8n Docker image - no custom build required
FROM docker.n8n.io/n8nio/n8n:latest

# StartOS expects services to run as non-root where possible
# n8n runs as 'node' user by default - this is fine

# Default data directory - StartOS will mount a persistent volume here
ENV N8N_USER_FOLDER=/data
ENV N8N_PORT=5678
ENV N8N_PROTOCOL=http

# Security settings
ENV N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
ENV N8N_DIAGNOSTICS_ENABLED=false
ENV N8N_VERSION_NOTIFICATIONS_ENABLED=false

# Use SQLite (built-in, no external DB dependency)
ENV DB_TYPE=sqlite
ENV DB_SQLITE_DATABASE=/data/database.sqlite

# Disable telemetry
ENV N8N_PERSONALIZATION_ENABLED=false
ENV N8N_TEMPLATES_ENABLED=true

EXPOSE 5678

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD wget -qO- http://localhost:5678/healthz || exit 1
