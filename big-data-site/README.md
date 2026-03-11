# Big Data Site

Este é um site moderno e interativo em HTML, CSS e JavaScript desenvolvido para
ser utilizado em uma apresentação de trabalho em grupo sobre o tema **Big Data**.

## Estrutura
- **Navbar** fixa com navegação suave entre seções.
- **Seção Hero** com título chamativo em gradient, subtítulo, ícones flutuantes, estatísticas animadas e indicador "Role para baixo"; fundo animado com parallax.
- **Seção "O que é Big Data"** em layout dividido texto + ilustração com animações de slide.
- **Seção "Pilares"** com 3 cards grandes em glassmorphism e animação slide-up.
- **Seção "Exemplos"** com 4 cards interativos (hover e slide-up).
- **Seção "Conclusão"** com destaque visual e animação.
- **Footer** simples com direitos autorais.

## Recursos visuais
- Tema escuro futurista com gradientes neon e background animado.
- Tipografia moderna usando Google Fonts (Orbitron e Roboto).
- Animações de scroll reveal: fade, slide, zoom; cards flutuantes com glassmorphism.
- Parallax suave no background e elementos.
- Contadores animados exibindo estatísticas no hero.
- Indicador "Role para baixo" com animação bounce.
- Efeitos hover sofisticados nos cards (brilho deslizante).
- **Seção interativa** com QR Code gerado dinamicamente (aponta para a URL atual, ideal para GitHub Pages) e quiz rápido de 3 perguntas.

```markdown
⚠️ Para que o QR funcione corretamente quando publicado, assegure-se de que a página esteja hospedada em uma URL pública (por exemplo, GitHub Pages). O script usa `window.location.href` para gerar o código.
```
- Layout responsivo adaptado para apresentações grandes e móveis.

## JavaScript
- **Scroll suave** para seções.
- **Destaque do link ativo** na barra de navegação.
- **Menu mobile** expansível com animação.
- **IntersectionObserver** para disparar animações quando elementos entram na
  viewport.

## Como usar
1. Abra o arquivo `index.html` em um navegador moderno.
2. Navegue pela página usando o menu superior ou rolando.
3. Em dispositivos móveis, toque no ícone de menu para abrir a navegação.

## Personalização
- As cores podem ser alteradas no arquivo `css/style.css` usando as variáveis
  no `:root`.
- Os textos das seções ficam em `index.html` e podem ser ajustados livremente.
- Ícones foram inseridos como emoji e SVG inline; podem ser substituídos por
  imagens ou outra biblioteca.

## Deploy
O site é puramente estático e pode ser hospedado em qualquer serviço que
sirva arquivos HTML (GitHub Pages, Netlify, Vercel, etc.).

## Responsividade
Testado em vários tamanhos de tela — nav se transforma em menu hamburger e os
cards se reorganizam numa única coluna em telas pequenas.

---

**Pronto para apresentação!**
