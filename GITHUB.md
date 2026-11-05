# SALAMAP — publicar no GitHub Pages

## 1. Criar o repositório
1. github.com → New repository
2. Nome: `salamap`
3. Public (o Pages gratuito precisa de repositório público)
4. Create repository

## 2. Carregar os ficheiros
1. Add file → Upload files
2. Arrastar **todos** os ficheiros desta pasta:
   - index.html
   - sw.js
   - manifest.webmanifest
   - icon-192.png
   - icon-512.png
   - apple-touch-icon.png
   - favicon.ico
   - favicon-32.png
   - logo-salamap.png
3. Commit changes

## 3. Ligar o Pages
1. Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: **main** · pasta **/ (root)**
4. Save

Ao fim de 1 a 2 minutos o endereço fica:
`https://SEU-UTILIZADOR.github.io/salamap/`

## 4. Instalar no tablet
**Android (Chrome):** abrir o endereço → menu ⋮ → "Adicionar ao ecrã principal"
**iPad (Safari):** abrir o endereço → Partilhar → "Adicionar ao ecrã principal"

Depois da primeira abertura com rede, a app abre sem ligação.

## 5. Atualizar a app mais tarde
Substituir o `index.html` no repositório. O tablet recebe a versão nova na abertura seguinte com rede.

## Notas
- O Pages tem de ser HTTPS, por isso o endereço é `https://` — é o que permite instalar.
- A pasta tem de ficar na raiz do repositório: o `index.html` e o `sw.js` lado a lado.
- Nunca apagar o `sw.js`: é ele que dá o modo offline.
