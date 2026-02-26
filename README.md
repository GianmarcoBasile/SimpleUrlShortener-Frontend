# URL Shortener (Frontend)

Interfaccia web per accorciare URL, costruita con **React + TypeScript + Vite**.
L’app invia l’URL originale a un backend, riceve uno short code e mostra il link breve con funzionalità di copia negli appunti.

## Funzionalità

- Inserimento URL da accorciare tramite form.
- Chiamata HTTP `POST` al backend per generare lo short link.
- Visualizzazione del link breve restituito dal backend.
- Pulsante per copiare rapidamente il link.

## Stack tecnico

- React 19
- TypeScript
- Vite 7
- Axios
- Tailwind CSS 4
- Componenti UI stile shadcn

## Requisiti

- Node.js 18+ (consigliato 20+)
- Un backend URL shortener in esecuzione (esposto su host/porta configurabili)

## Configurazione ambiente

Il progetto usa variabili Vite lette da `import.meta.env`.

Nel file `.env`:

```dotenv
VITE_BACKEND_URL=http://localhost
VITE_BACKEND_PORT=5227
```

## Avvio locale

Installa le dipendenze:

```bash
pnpm install
```

Avvia il server di sviluppo:

```bash
pnpm dev
```

L’app sarà disponibile di default su `http://localhost:5173`.

## Script disponibili

- `pnpm dev` — avvia Vite in sviluppo
- `pnpm build` — type-check + build di produzione
- `pnpm preview` — anteprima della build
- `pnpm lint` — esegue ESLint

## Contratto atteso del backend

Il frontend effettua:

- `POST {VITE_BACKEND_URL}:{VITE_BACKEND_PORT}/url`
- body JSON: `{ "originalUrl": "https://example.com" }`

Risposta attesa (esempio):

```json
{
	"shortURL": "abc123"
}
```

Il link mostrato nel frontend viene composto come:

`{VITE_BACKEND_URL}:{VITE_BACKEND_PORT}/url/{shortURL}`

## Struttura progetto (essenziale)

```text
src/
	App.tsx                # form, submit, risultato e copy
	main.tsx               # bootstrap React
	index.css              # stile globale (Tailwind + theme tokens)
	components/
		header.tsx
		ui/
			button.tsx
			input.tsx
```

## Note

- Il frontend non valida in modo approfondito l’URL prima dell’invio: la validazione principale è delegata al backend.
- In caso di errore API, al momento viene loggato in console.
