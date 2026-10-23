import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.44.6:0',
  releaseNotes: {
    en_US: `Updated n8n to 2.44.6.

- Runs on Node.js 26.12.1, which fixes the October 2026 Node.js security vulnerabilities.
- Workflows that contain deprecated nodes can no longer be created or saved; replace those nodes first.
- Adds Google Vertex AI credentials and a WhatsApp agent channel.

[Full upstream release notes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.44.6)`,
    es_ES: `Actualiza n8n a 2.44.6.

- Funciona con Node.js 26.12.1, que corrige las vulnerabilidades de seguridad de Node.js de octubre de 2026.
- Ya no se pueden crear ni guardar flujos de trabajo que contengan nodos obsoletos; sustituya primero esos nodos.
- Añade credenciales de Google Vertex AI y un canal de agente de WhatsApp.

[Notas completas de la versión original](https://github.com/n8n-io/n8n/releases/tag/n8n%402.44.6)`,
    de_DE: `Aktualisiert n8n auf 2.44.6.

- Läuft auf Node.js 26.12.1, das die Node.js-Sicherheitslücken vom Oktober 2026 behebt.
- Workflows mit veralteten Nodes können nicht mehr erstellt oder gespeichert werden; ersetzen Sie diese Nodes zuerst.
- Fügt Google-Vertex-AI-Zugangsdaten und einen WhatsApp-Agentenkanal hinzu.

[Vollständige Upstream-Versionshinweise](https://github.com/n8n-io/n8n/releases/tag/n8n%402.44.6)`,
    pl_PL: `Aktualizuje n8n do wersji 2.44.6.

- Działa na Node.js 26.12.1, który naprawia luki bezpieczeństwa Node.js z października 2026.
- Przepływów pracy zawierających przestarzałe węzły nie można już tworzyć ani zapisywać; najpierw zastąp te węzły.
- Dodaje poświadczenia Google Vertex AI i kanał agenta WhatsApp.

[Pełne informacje o wydaniu upstream](https://github.com/n8n-io/n8n/releases/tag/n8n%402.44.6)`,
    fr_FR: `Met à jour n8n vers 2.44.6.

- Fonctionne avec Node.js 26.12.1, qui corrige les vulnérabilités de sécurité de Node.js d'octobre 2026.
- Les workflows contenant des nœuds obsolètes ne peuvent plus être créés ni enregistrés ; remplacez d'abord ces nœuds.
- Ajoute les identifiants Google Vertex AI et un canal d'agent WhatsApp.

[Notes de version complètes du projet amont](https://github.com/n8n-io/n8n/releases/tag/n8n%402.44.6)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
