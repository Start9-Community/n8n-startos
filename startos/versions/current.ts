import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.35.3:1',
  releaseNotes: {
    en_US: `- Open UI opens n8n at its primary URL when your connection can reach it.
- Reset Owner Password asks for confirmation before running.
- A task asks you to choose the primary URL while none is chosen or the chosen address is unavailable. Until then n8n uses its public domain if it has one, otherwise its .local address, and it returns to your choice when that address does.`,
    es_ES: `- Abrir interfaz abre n8n en su URL principal cuando tu conexión puede alcanzarla.
- Restablecer contraseña del propietario pide confirmación antes de ejecutarse.
- Una tarea te pide elegir la URL principal mientras no haya ninguna elegida o la dirección elegida no esté disponible. Hasta entonces n8n usa su dominio público si tiene uno y, si no, su dirección .local, y vuelve a tu elección cuando esa dirección regresa.`,
    de_DE: `- „Oberfläche öffnen“ öffnet n8n unter seiner primären URL, wenn Ihre Verbindung sie erreichen kann.
- „Eigentümer-Passwort zurücksetzen“ fragt vor der Ausführung nach einer Bestätigung.
- Eine Aufgabe fordert Sie auf, die primäre URL zu wählen, solange keine gewählt ist oder die gewählte Adresse nicht verfügbar ist. Bis dahin verwendet n8n seine öffentliche Domain, falls vorhanden, sonst seine .local-Adresse, und kehrt zu Ihrer Wahl zurück, sobald diese Adresse wieder verfügbar ist.`,
    pl_PL: `- „Otwórz interfejs” otwiera n8n pod jego głównym adresem URL, gdy Twoje połączenie może go osiągnąć.
- „Zresetuj hasło właściciela” prosi o potwierdzenie przed uruchomieniem.
- Zadanie prosi o wybranie głównego adresu URL, dopóki żaden nie jest wybrany lub wybrany adres jest niedostępny. Do tego czasu n8n używa swojej domeny publicznej, jeśli ją ma, a w przeciwnym razie swojego adresu .local, i wraca do Twojego wyboru, gdy ten adres znów będzie dostępny.`,
    fr_FR: `- Ouvrir l'interface ouvre n8n sur son URL principale lorsque votre connexion peut l'atteindre.
- Réinitialiser le mot de passe propriétaire demande une confirmation avant de s'exécuter.
- Une tâche vous demande de choisir l'URL principale tant qu'aucune n'est choisie ou que l'adresse choisie n'est pas disponible. En attendant, n8n utilise son domaine public s'il en a un, sinon son adresse .local, et revient à votre choix dès que cette adresse est de nouveau disponible.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
