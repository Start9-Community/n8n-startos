import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.28.6:0',
  releaseNotes: {
    en_US:
      'Updated n8n to 2.28.6. Highlights across the 2.27 and 2.28 lines: S3 and Azure storage modes for execution data, tar/tar.gz support in the Compression node, data redaction now generally available with expanded secret-redaction patterns, scheduled-execution deduplication enabled by default, custom instance roles, and scope-based API access checks. The 2.27 release adds a database index migration that n8n applies automatically on first start. Full changelog: https://github.com/n8n-io/n8n/releases. Also includes internal updates for start-sdk 2.0.',
    es_ES:
      'Se actualizó n8n a 2.28.6. Novedades de las series 2.27 y 2.28: modos de almacenamiento S3 y Azure para los datos de ejecución, compatibilidad con tar/tar.gz en el nodo Compression, redacción de datos ahora disponible de forma general con patrones ampliados de ocultación de secretos, deduplicación de ejecuciones programadas activada por defecto, roles de instancia personalizados y comprobaciones de acceso a la API basadas en ámbitos. La versión 2.27 añade una migración de índice de base de datos que n8n aplica automáticamente al primer inicio. Registro de cambios completo: https://github.com/n8n-io/n8n/releases. También incluye actualizaciones internas para start-sdk 2.0.',
    de_DE:
      'n8n wurde auf 2.28.6 aktualisiert. Highlights der Reihen 2.27 und 2.28: S3- und Azure-Speichermodi für Ausführungsdaten, tar/tar.gz-Unterstützung im Compression-Node, Datenredaktion jetzt allgemein verfügbar mit erweiterten Mustern zur Geheimnis-Redaktion, standardmäßig aktivierte Deduplizierung geplanter Ausführungen, benutzerdefinierte Instanzrollen und bereichsbasierte API-Zugriffsprüfungen. Version 2.27 fügt eine Datenbank-Index-Migration hinzu, die n8n beim ersten Start automatisch anwendet. Vollständiges Änderungsprotokoll: https://github.com/n8n-io/n8n/releases. Enthält außerdem interne Aktualisierungen für start-sdk 2.0.',
    pl_PL:
      'Zaktualizowano n8n do 2.28.6. Najważniejsze zmiany w liniach 2.27 i 2.28: tryby przechowywania S3 i Azure dla danych wykonań, obsługa tar/tar.gz w węźle Compression, redakcja danych dostępna ogólnie z rozszerzonymi wzorcami ukrywania sekretów, domyślnie włączona deduplikacja zaplanowanych wykonań, niestandardowe role instancji oraz kontrola dostępu do API oparta na zakresach. Wersja 2.27 dodaje migrację indeksu bazy danych, którą n8n stosuje automatycznie przy pierwszym uruchomieniu. Pełny dziennik zmian: https://github.com/n8n-io/n8n/releases. Zawiera także wewnętrzne aktualizacje dla start-sdk 2.0.',
    fr_FR:
      'n8n a été mis à jour vers 2.28.6. Points forts des séries 2.27 et 2.28 : modes de stockage S3 et Azure pour les données d’exécution, prise en charge de tar/tar.gz dans le nœud Compression, rédaction des données désormais généralement disponible avec des motifs élargis de masquage des secrets, déduplication des exécutions planifiées activée par défaut, rôles d’instance personnalisés et contrôles d’accès à l’API basés sur les portées. La version 2.27 ajoute une migration d’index de base de données que n8n applique automatiquement au premier démarrage. Journal des modifications complet : https://github.com/n8n-io/n8n/releases. Inclut également des mises à jour internes pour start-sdk 2.0.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
