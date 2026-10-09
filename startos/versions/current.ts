import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.42.5:0',
  releaseNotes: {
    en_US: `Updated n8n from 2.35.3 to 2.42.5.

**Highlights**
- Custom roles can be given view, use, or manage access to instance credentials, and project roles can view and delete executions.
- Webhooks that use n8n User Auth can now authenticate through a browser OAuth2 flow.
- Environments: projects can be pushed to and pulled from a Git connection, and you can choose which workflows to promote.
- n8n's HTML pages now carry a nonce-based Content-Security-Policy.
- Many node and editor fixes across the seven intervening releases.
- n8n now sees each client's own address behind the StartOS proxy, so its login rate limit applies per client.

Full notes: https://github.com/n8n-io/n8n/releases`,
    es_ES: `n8n actualizado de 2.35.3 a 2.42.5.

**Novedades destacadas**
- Los roles personalizados pueden recibir acceso para ver, usar o administrar las credenciales de la instancia, y los roles de proyecto pueden ver y eliminar ejecuciones.
- Los webhooks que usan n8n User Auth ahora pueden autenticarse mediante un flujo OAuth2 en el navegador.
- Entornos: los proyectos se pueden enviar a una conexión Git y recibir desde ella, y puedes elegir qué flujos de trabajo promover.
- Las páginas HTML de n8n ahora incluyen una Content-Security-Policy basada en nonce.
- Numerosas correcciones en nodos y en el editor a lo largo de las siete versiones intermedias.
- n8n ahora ve la dirección propia de cada cliente detrás del proxy de StartOS, por lo que su límite de intentos de inicio de sesión se aplica por cliente.

Notas completas: https://github.com/n8n-io/n8n/releases`,
    de_DE: `n8n von 2.35.3 auf 2.42.5 aktualisiert.

**Höhepunkte**
- Benutzerdefinierte Rollen können Anzeige-, Nutzungs- oder Verwaltungszugriff auf Instanz-Zugangsdaten erhalten, und Projektrollen können Ausführungen anzeigen und löschen.
- Webhooks mit n8n User Auth können sich jetzt über einen OAuth2-Ablauf im Browser authentifizieren.
- Umgebungen: Projekte lassen sich an eine Git-Verbindung übertragen und von dort abrufen, und Sie können auswählen, welche Workflows befördert werden.
- Die HTML-Seiten von n8n tragen jetzt eine nonce-basierte Content-Security-Policy.
- Zahlreiche Korrekturen an Nodes und im Editor über die sieben dazwischenliegenden Versionen.
- n8n sieht hinter dem StartOS-Proxy jetzt die eigene Adresse jedes Clients, sodass sein Anmelde-Ratenlimit pro Client gilt.

Vollständige Hinweise: https://github.com/n8n-io/n8n/releases`,
    pl_PL: `Zaktualizowano n8n z 2.35.3 do 2.42.5.

**Najważniejsze zmiany**
- Role niestandardowe mogą otrzymać dostęp do wyświetlania, używania lub zarządzania poświadczeniami instancji, a role projektowe mogą wyświetlać i usuwać wykonania.
- Webhooki korzystające z n8n User Auth mogą teraz uwierzytelniać się przez przepływ OAuth2 w przeglądarce.
- Środowiska: projekty można wysyłać do połączenia Git i pobierać z niego, a także wybierać, które przepływy pracy promować.
- Strony HTML n8n mają teraz Content-Security-Policy opartą na nonce.
- Liczne poprawki węzłów i edytora w siedmiu wydaniach pośrednich.
- n8n widzi teraz własny adres każdego klienta za proxy StartOS, więc jego limit prób logowania obowiązuje dla każdego klienta osobno.

Pełne informacje: https://github.com/n8n-io/n8n/releases`,
    fr_FR: `n8n mis à jour de 2.35.3 vers 2.42.5.

**Points forts**
- Les rôles personnalisés peuvent recevoir un accès en consultation, utilisation ou gestion aux identifiants de l'instance, et les rôles de projet peuvent consulter et supprimer les exécutions.
- Les webhooks utilisant n8n User Auth peuvent désormais s'authentifier via un flux OAuth2 dans le navigateur.
- Environnements : les projets peuvent être envoyés vers une connexion Git et récupérés depuis celle-ci, et vous pouvez choisir quels workflows promouvoir.
- Les pages HTML de n8n portent désormais une Content-Security-Policy basée sur un nonce.
- De nombreux correctifs de nœuds et de l'éditeur sur les sept versions intermédiaires.
- n8n voit désormais l'adresse propre de chaque client derrière le proxy StartOS, de sorte que sa limite de tentatives de connexion s'applique par client.

Notes complètes : https://github.com/n8n-io/n8n/releases`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
