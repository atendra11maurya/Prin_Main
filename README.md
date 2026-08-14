# Prof. Yogeshwar Sharma — Academic Leadership Portfolio

A four-route editorial portfolio for Prof. Yogeshwar Sharma, Principal of Motilal Nehru College and Professor of Chemistry at the University of Delhi.

## Run locally

```bash
npm install
npm run dev
```

The default local address is `http://localhost:3000`.

## Routes

- `/` — long-form academic leadership narrative
- `/research` — research focus and selected publication index
- `/leadership` — educational vision, governance and institutional milestones
- `/academic` — teaching, scholarship and academic journey

## Authentic image assets

The interface intentionally renders designed neutral fallbacks until authentic files are supplied. To replace them, add:

- `public/images/yogeshwar-sharma.jpg`
- `public/images/mlnc-campus.jpg`

No generated photograph is presented as a real portrait or campus image.

## Validation

```bash
npm run lint
npx tsc --noEmit --incremental false
npm test
```
