import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.29.10:0',
  releaseNotes: {
    en_US: `Updated n8n to 2.29.10.

- Adds configurable blocked hostnames for outbound requests.
- Adds an Azure storage mode for binary data and database connection-pool metrics.
- Adds Microsoft Entra, GitHub App, and Microsoft OneDrive/Outlook service-principal credentials.
- Adds scheduled messages and user lookup by email to the Slack node.
- Shows canvas groups in the execution view, and turns Chat Hub off by default on instances that do not use it.
- Rolls up ten bug-fix releases, including OAuth2 refresh-token rotation, webhook paths containing stray whitespace, graceful shutdown now letting in-flight executions finish, and partially installed community packages no longer blocking startup.

Full release notes: https://github.com/n8n-io/n8n/releases/tag/n8n%402.29.10`,
    es_ES: `Actualiza n8n a 2.29.10.

- Añade nombres de host bloqueados configurables para las solicitudes salientes.
- Añade un modo de almacenamiento de Azure para los datos binarios y métricas del grupo de conexiones de la base de datos.
- Añade credenciales de entidad de servicio para Microsoft Entra, GitHub App y Microsoft OneDrive/Outlook.
- Añade mensajes programados y búsqueda de usuarios por correo electrónico al nodo Slack.
- Muestra los grupos del lienzo en la vista de ejecución y desactiva Chat Hub de forma predeterminada en las instancias que no lo utilizan.
- Reúne diez versiones de corrección de errores, entre ellas la rotación de tokens de actualización de OAuth2, las rutas de webhook con espacios sobrantes, el apagado ordenado que ahora permite finalizar las ejecuciones en curso y los paquetes de la comunidad instalados parcialmente que ya no bloquean el arranque.

Notas de la versión completas: https://github.com/n8n-io/n8n/releases/tag/n8n%402.29.10`,
    de_DE: `Aktualisiert n8n auf 2.29.10.

- Fügt konfigurierbare blockierte Hostnamen für ausgehende Anfragen hinzu.
- Fügt einen Azure-Speichermodus für Binärdaten sowie Metriken für den Datenbank-Verbindungspool hinzu.
- Fügt Dienstprinzipal-Anmeldedaten für Microsoft Entra, GitHub App und Microsoft OneDrive/Outlook hinzu.
- Fügt dem Slack-Node geplante Nachrichten und die Benutzersuche per E-Mail hinzu.
- Zeigt Canvas-Gruppen in der Ausführungsansicht an und deaktiviert Chat Hub standardmäßig auf Instanzen, die ihn nicht verwenden.
- Bündelt zehn Fehlerbehebungsversionen, darunter die Rotation von OAuth2-Refresh-Tokens, Webhook-Pfade mit überflüssigen Leerzeichen, das ordnungsgemäße Herunterfahren, bei dem laufende Ausführungen nun abgeschlossen werden, und teilweise installierte Community-Pakete, die den Start nicht mehr blockieren.

Vollständige Versionshinweise: https://github.com/n8n-io/n8n/releases/tag/n8n%402.29.10`,
    pl_PL: `Aktualizuje n8n do 2.29.10.

- Dodaje konfigurowalne zablokowane nazwy hostów dla żądań wychodzących.
- Dodaje tryb przechowywania Azure dla danych binarnych oraz metryki puli połączeń z bazą danych.
- Dodaje poświadczenia jednostki usługi dla Microsoft Entra, GitHub App oraz Microsoft OneDrive/Outlook.
- Dodaje zaplanowane wiadomości i wyszukiwanie użytkowników po adresie e-mail do węzła Slack.
- Pokazuje grupy kanwy w widoku wykonania i domyślnie wyłącza Chat Hub na instancjach, które go nie używają.
- Zbiera dziesięć wydań naprawczych, w tym rotację tokenów odświeżania OAuth2, ścieżki webhooków ze zbędnymi spacjami, płynne zamykanie pozwalające teraz dokończyć trwające wykonania oraz częściowo zainstalowane pakiety społeczności, które nie blokują już uruchamiania.

Pełne informacje o wydaniu: https://github.com/n8n-io/n8n/releases/tag/n8n%402.29.10`,
    fr_FR: `Met à jour n8n vers 2.29.10.

- Ajoute des noms d'hôte bloqués configurables pour les requêtes sortantes.
- Ajoute un mode de stockage Azure pour les données binaires ainsi que des métriques du pool de connexions à la base de données.
- Ajoute des identifiants de principal de service pour Microsoft Entra, GitHub App et Microsoft OneDrive/Outlook.
- Ajoute les messages programmés et la recherche d'utilisateur par e-mail au nœud Slack.
- Affiche les groupes du canevas dans la vue d'exécution et désactive Chat Hub par défaut sur les instances qui ne l'utilisent pas.
- Regroupe dix versions correctives, dont la rotation des jetons de rafraîchissement OAuth2, les chemins de webhook contenant des espaces superflus, l'arrêt progressif qui laisse désormais les exécutions en cours se terminer, et les paquets communautaires partiellement installés qui ne bloquent plus le démarrage.

Notes de version complètes : https://github.com/n8n-io/n8n/releases/tag/n8n%402.29.10`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
