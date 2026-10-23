import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.44.6:0',
  releaseNotes: {
    en_US: `Updated n8n to 2.44.6.

- Runs on Node.js 26.12.1, which fixes the October 2026 Node.js security vulnerabilities.
- Deprecated nodes can no longer be added or modified. Existing workflows keep running and can be saved if those nodes remain unchanged.
- Adds Google Vertex AI credentials and a WhatsApp agent channel.

[Full upstream release notes](https://github.com/n8n-io/n8n/releases/tag/n8n%402.44.6)`,
    es_ES: `Actualiza n8n a 2.44.6.

- Funciona con Node.js 26.12.1, que corrige las vulnerabilidades de seguridad de Node.js de octubre de 2026.
- Ya no se pueden añadir ni modificar nodos obsoletos. Los flujos de trabajo existentes siguen ejecutándose y pueden guardarse si esos nodos permanecen sin cambios.
- Añade credenciales de Google Vertex AI y un canal de agente de WhatsApp.

[Notas completas de la versión original](https://github.com/n8n-io/n8n/releases/tag/n8n%402.44.6)`,
    de_DE: `Aktualisiert n8n auf 2.44.6.

- Läuft auf Node.js 26.12.1, das die Node.js-Sicherheitslücken vom Oktober 2026 behebt.
- Veraltete Nodes können nicht mehr hinzugefügt oder geändert werden. Bestehende Workflows laufen weiter und können gespeichert werden, wenn diese Nodes unverändert bleiben.
- Fügt Google-Vertex-AI-Zugangsdaten und einen WhatsApp-Agentenkanal hinzu.

[Vollständige Upstream-Versionshinweise](https://github.com/n8n-io/n8n/releases/tag/n8n%402.44.6)`,
    pl_PL: `Aktualizuje n8n do wersji 2.44.6.

- Działa na Node.js 26.12.1, który naprawia luki bezpieczeństwa Node.js z października 2026.
- Nie można już dodawać ani modyfikować przestarzałych węzłów. Istniejące przepływy pracy nadal działają i można je zapisywać, jeśli te węzły pozostaną niezmienione.
- Dodaje poświadczenia Google Vertex AI i kanał agenta WhatsApp.

[Pełne informacje o wydaniu upstream](https://github.com/n8n-io/n8n/releases/tag/n8n%402.44.6)`,
    fr_FR: `Met à jour n8n vers 2.44.6.

- Fonctionne avec Node.js 26.12.1, qui corrige les vulnérabilités de sécurité de Node.js d'octobre 2026.
- Les nœuds obsolètes ne peuvent plus être ajoutés ni modifiés. Les workflows existants continuent de fonctionner et peuvent être enregistrés si ces nœuds restent inchangés.
- Ajoute les identifiants Google Vertex AI et un canal d'agent WhatsApp.

[Notes de version complètes du projet amont](https://github.com/n8n-io/n8n/releases/tag/n8n%402.44.6)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
