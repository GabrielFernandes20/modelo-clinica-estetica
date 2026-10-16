# Site institucional — template para empresas de beleza (Itatiba/SP)

Site institucional de uma página, feito para gerar contatos pelo WhatsApp.
Construído para ser reaproveitado em múltiplos clientes do mesmo segmento
(salões, esmalterias, estética) trocando apenas um arquivo de dados.

Os dados atuais ("Espaço Bella Estética") são um **exemplo ilustrativo** para
demonstração — nenhuma informação real foi inventada sobre uma empresa
existente.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Zero dependências além de React (ícones e imagens são SVG próprios)

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (geralmente `http://localhost:5173`).

Build de produção:

```bash
npm run build
npm run preview
```

## Como adaptar para um novo cliente

Edite **apenas** `src/data/company.ts`:

- `name`, `shortName`, `segment`, `city`, `state`
- `whatsappNumber` e `whatsappDefaultMessage`
- `instagramHandle` / `instagramUrl`
- `address` (usado no rodapé, seção de localização e no mapa incorporado)
- `hours`
- `hero`, `about`, `services`, `differentials`, `gallery`
- `seo` (title/description usados no `<head>`)

Nenhum outro arquivo precisa ser alterado para trocar de cliente.

### Trocando as imagens

As imagens ainda não foram fornecidas pelo cliente, então o site usa o
componente `PlaceholderArt` (uma textura editorial em SVG, sem dependências
externas) como espaço reservado nas seções Hero, Serviços, Sobre e Galeria.

Para usar fotos reais, troque `<PlaceholderArt ... />` por uma tag `<img>`
apontando para a foto (coloque os arquivos em `src/assets/` ou `public/`),
mantendo as mesmas classes de tamanho/`aspect-ratio` já definidas.

### Cores e tipografia

Definidas em `tailwind.config.js` (`theme.extend.colors` e `fontFamily`).
As fontes (Fraunces + Manrope) são carregadas via Google Fonts no
`index.html`.

## Estrutura

```
src/
  components/   Header, Footer, botão flutuante do WhatsApp, ícones, placeholder visual
  sections/     Hero, Serviços, Sobre, Galeria, Diferenciais, CTA final, Localização
  data/         company.ts (dados do cliente) + whatsapp.ts (link com mensagem pré-preenchida)
  hooks/        useSeo.ts (title, meta tags, JSON-LD LocalBusiness)
```

## Checklist já verificado

- `npm run build` e `tsc --noEmit` sem erros
- `npm run lint` sem avisos
- Sem overflow horizontal em 360/390/768/1024/1440px
- Navegação por teclado e foco visível
- Links de WhatsApp, Instagram e Google Maps funcionais (edite os dados reais antes de publicar)
- Meta tags, Open Graph e schema LocalBusiness básicos incluídos

## Antes de apresentar a um cliente real

1. Substitua os dados de exemplo em `src/data/company.ts` pelos dados reais.
2. Substitua os `PlaceholderArt` por fotos profissionais do espaço/serviços.
3. Confirme o número de WhatsApp e o link do Google Maps.
