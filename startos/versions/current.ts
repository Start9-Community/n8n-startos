import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.35.3:0',
  releaseNotes: {
    en_US: `Updated n8n to 2.35.3, and fixed the URLs n8n hands out.

Webhook URLs shown in the editor, the "production" URLs you register with an external service, the OAuth Redirect URL you paste into Google or Slack when connecting a credential, and the links in the emails n8n sends were all built as http://localhost:5678 — correct inside the container and useless anywhere else. n8n is now told which of your addresses to use, and a new **Set Primary URL** action lets you choose it. The choice is seeded for you on install and re-picked automatically if the address it points at stops being published.

Existing webhooks registered with external services still point at the old URL — re-copy the URL from the editor and update it in the service that calls it.

The 2.31–2.35 lines add admin-managed instance credentials, private credentials on by default, custom instance roles, public API endpoints for SAML/OIDC/LDAP configuration, and a misfire policy for the durable scheduler, alongside many fixes. Your workflows, credentials, and users are preserved.

Full release notes: https://github.com/n8n-io/n8n/releases`,
    es_ES: `Actualiza n8n a 2.35.3 y corrige las URL que n8n publica.

Las URL de webhook mostradas en el editor, las URL de «producción» que registras en un servicio externo, la URL de redirección de OAuth que pegas en Google o Slack al conectar una credencial y los enlaces de los correos que envía n8n se construían como http://localhost:5678: correcto dentro del contenedor e inútil en cualquier otro sitio. Ahora se le indica a n8n cuál de tus direcciones debe usar, y una nueva acción **Establecer URL principal** te permite elegirla. La elección se inicializa por ti durante la instalación y se vuelve a elegir automáticamente si la dirección deja de publicarse.

Los webhooks ya registrados en servicios externos siguen apuntando a la URL antigua: vuelve a copiar la URL desde el editor y actualízala en el servicio que la invoca.

Las líneas 2.31–2.35 añaden credenciales de instancia gestionadas por el administrador, credenciales privadas activadas por defecto, roles de instancia personalizados, endpoints de API pública para la configuración de SAML/OIDC/LDAP y una política de disparos fallidos para el planificador duradero, además de numerosas correcciones. Tus flujos de trabajo, credenciales y usuarios se conservan.

Notas de la versión completas: https://github.com/n8n-io/n8n/releases`,
    de_DE: `Aktualisiert n8n auf 2.35.3 und korrigiert die von n8n ausgegebenen URLs.

Die im Editor angezeigten Webhook-URLs, die „Produktions"-URLs, die Sie bei einem externen Dienst registrieren, die OAuth-Weiterleitungs-URL, die Sie beim Einrichten von Anmeldedaten bei Google oder Slack hinterlegen, und die Links in den von n8n versendeten E-Mails wurden alle als http://localhost:5678 gebildet — innerhalb des Containers korrekt und überall sonst nutzlos. n8n wird nun mitgeteilt, welche Ihrer Adressen zu verwenden ist, und eine neue Aktion **Primäre URL festlegen** lässt Sie diese auswählen. Die Auswahl wird bei der Installation für Sie vorbelegt und automatisch neu getroffen, wenn die Adresse nicht mehr veröffentlicht wird.

Bereits bei externen Diensten registrierte Webhooks zeigen weiterhin auf die alte URL — kopieren Sie die URL erneut aus dem Editor und aktualisieren Sie sie in dem Dienst, der sie aufruft.

Die Reihen 2.31–2.35 ergänzen administrativ verwaltete Instanz-Anmeldedaten, standardmäßig aktivierte private Anmeldedaten, benutzerdefinierte Instanzrollen, Public-API-Endpunkte für die SAML-/OIDC-/LDAP-Konfiguration sowie eine Fehlzündungsrichtlinie für den dauerhaften Planer, dazu viele Fehlerbehebungen. Ihre Workflows, Anmeldedaten und Benutzer bleiben erhalten.

Vollständige Versionshinweise: https://github.com/n8n-io/n8n/releases`,
    pl_PL: `Aktualizuje n8n do 2.35.3 i naprawia adresy URL udostępniane przez n8n.

Adresy URL webhooków wyświetlane w edytorze, adresy „produkcyjne" rejestrowane w usłudze zewnętrznej, adres przekierowania OAuth wklejany w Google lub Slacku przy podłączaniu poświadczeń oraz linki w wiadomościach e-mail wysyłanych przez n8n były budowane jako http://localhost:5678 — poprawnie wewnątrz kontenera i bezużytecznie wszędzie indziej. Teraz n8n otrzymuje informację, którego z Twoich adresów ma używać, a nowa akcja **Ustaw główny adres URL** pozwala go wybrać. Wybór jest ustawiany za Ciebie podczas instalacji i wybierany ponownie automatycznie, jeśli wskazywany adres przestanie być publikowany.

Webhooki już zarejestrowane w usługach zewnętrznych nadal wskazują stary adres URL — skopiuj adres ponownie z edytora i zaktualizuj go w usłudze, która go wywołuje.

Linie 2.31–2.35 dodają poświadczenia instancji zarządzane przez administratora, domyślnie włączone poświadczenia prywatne, niestandardowe role instancji, punkty końcowe publicznego API do konfiguracji SAML/OIDC/LDAP oraz zasadę obsługi nieudanych wyzwoleń dla trwałego harmonogramu, a także wiele poprawek. Twoje przepływy pracy, poświadczenia i użytkownicy są zachowane.

Pełne informacje o wydaniu: https://github.com/n8n-io/n8n/releases`,
    fr_FR: `Met à jour n8n vers 2.35.3 et corrige les URL que n8n communique.

Les URL de webhook affichées dans l'éditeur, les URL « de production » que vous enregistrez auprès d'un service externe, l'URL de redirection OAuth que vous collez dans Google ou Slack lors de la connexion d'un identifiant et les liens des e-mails envoyés par n8n étaient tous construits sous la forme http://localhost:5678 — correct à l'intérieur du conteneur et inutilisable partout ailleurs. n8n sait désormais laquelle de vos adresses utiliser, et une nouvelle action **Définir l'URL principale** vous permet de la choisir. Le choix est initialisé pour vous à l'installation et refait automatiquement si l'adresse visée cesse d'être publiée.

Les webhooks déjà enregistrés auprès de services externes pointent toujours vers l'ancienne URL — recopiez l'URL depuis l'éditeur et mettez-la à jour dans le service qui l'appelle.

Les séries 2.31 à 2.35 ajoutent des identifiants d'instance gérés par l'administrateur, des identifiants privés activés par défaut, des rôles d'instance personnalisés, des points de terminaison d'API publique pour la configuration SAML/OIDC/LDAP et une politique de déclenchement manqué pour le planificateur durable, ainsi que de nombreux correctifs. Vos flux de travail, identifiants et utilisateurs sont conservés.

Notes de version complètes : https://github.com/n8n-io/n8n/releases`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
