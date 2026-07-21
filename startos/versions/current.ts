import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.30.8:0',
  releaseNotes: {
    en_US: `Updated n8n to 2.30.8.

This release also migrates the package to start-sdk 2.0 (requires StartOS 0.4.0-beta.10 or later). The 2.27–2.30 lines add S3/Azure execution-data storage, generally available data redaction, custom instance roles, and many fixes; n8n applies a database index migration automatically on first start. Your workflows and credentials are preserved.

Full release notes: https://github.com/n8n-io/n8n/releases`,
    es_ES: `Actualiza n8n a 2.30.8.

Esta versión también migra el paquete a start-sdk 2.0 (requiere StartOS 0.4.0-beta.10 o posterior). Las líneas 2.27–2.30 añaden almacenamiento de datos de ejecución en S3/Azure, redacción de datos con disponibilidad general, roles de instancia personalizados y numerosas correcciones; n8n aplica una migración de índice de base de datos automáticamente en el primer arranque. Tus flujos de trabajo y credenciales se conservan.

Notas de la versión completas: https://github.com/n8n-io/n8n/releases`,
    de_DE: `Aktualisiert n8n auf 2.30.8.

Diese Version stellt das Paket außerdem auf start-sdk 2.0 um (erfordert StartOS 0.4.0-beta.10 oder neuer). Die Reihen 2.27–2.30 ergänzen S3-/Azure-Speicher für Ausführungsdaten, allgemein verfügbare Datenschwärzung, benutzerdefinierte Instanzrollen und viele Fehlerbehebungen; n8n wendet beim ersten Start automatisch eine Datenbank-Index-Migration an. Ihre Workflows und Anmeldedaten bleiben erhalten.

Vollständige Versionshinweise: https://github.com/n8n-io/n8n/releases`,
    pl_PL: `Aktualizuje n8n do 2.30.8.

Ta wersja przenosi też pakiet na start-sdk 2.0 (wymaga StartOS 0.4.0-beta.10 lub nowszego). Linie 2.27–2.30 dodają przechowywanie danych wykonania w S3/Azure, ogólnie dostępne maskowanie danych, niestandardowe role instancji oraz wiele poprawek; n8n automatycznie stosuje migrację indeksu bazy danych przy pierwszym uruchomieniu. Twoje przepływy pracy i poświadczenia są zachowane.

Pełne informacje o wydaniu: https://github.com/n8n-io/n8n/releases`,
    fr_FR: `Met à jour n8n vers 2.30.8.

Cette version fait également passer le paquet à start-sdk 2.0 (nécessite StartOS 0.4.0-beta.10 ou une version ultérieure). Les séries 2.27 à 2.30 ajoutent le stockage des données d'exécution sur S3/Azure, la caviardage des données en disponibilité générale, des rôles d'instance personnalisés et de nombreux correctifs ; n8n applique automatiquement une migration d'index de base de données au premier démarrage. Vos flux de travail et identifiants sont conservés.

Notes de version complètes : https://github.com/n8n-io/n8n/releases`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
