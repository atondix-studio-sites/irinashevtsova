# Irina Shevtsova

Eigenständige, originalgetreue Next.js-Migration von [irinashevtsova.de](https://irinashevtsova.de).

## Enthalten

- App Router mit statisch erzeugten Seiten
- Startseite, Leistungen, Aktuell, Über mich und Kontakt
- migrierte Fassungen von Impressum und Datenschutzerklärung
- originalgetreues Layout mit Courgette, Open Sans, Farben und Seitenstruktur des WordPress-Auftritts
- lokale Bilder und das Startseitenvideo aus dem bisherigen WordPress-Auftritt
- Redirects für die bisherigen `/index.php/...`-Adressen
- Sitemap, Robots-Datei und Seiten-Metadaten
- responsive Navigation ohne Client-JavaScript

## Lokal starten

```bash
pnpm install
pnpm dev
```

Produktionsprüfung:

```bash
pnpm lint
pnpm build
```

## Migration

`migration/pages.json` und `migration/media.json` sind öffentliche REST-Exporte
vom 22. August 2026. Sie dienen als nachvollziehbare Quelle für Inhalte und
Medien; der laufende Next.js-Auftritt benötigt kein WordPress. Der vollständige
WordPress-Export bleibt bewusst außerhalb des Git-Repositorys, da er interne
Autor-Metadaten enthalten kann.

Die Rechtstexte wurden inhaltlich aus dem bestehenden Auftritt übernommen. Vor
einer Veröffentlichung sollten Datenschutz, Hosting-Angaben und die angebotenen
Kontaktwege fachlich geprüft und auf den neuen Betrieb angepasst werden.

## Deployment

Das Projekt erwartet Node.js 20+ und kann als eigenständiges Repository auf
Vercel oder einem Node-Host betrieben werden. Die Produktionsdomain ist in den
Metadaten auf `https://irinashevtsova.de` gesetzt.
