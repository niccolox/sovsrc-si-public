(() => {
  const search = document.getElementById('document-search');
  if (search) {
    const items = [...document.querySelectorAll('.document-item')];
    const status = document.getElementById('search-status');
    const empty = document.getElementById('no-results');
    document.querySelector('.library-search').hidden = false;
    const filter = () => {
      const terms = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
      let matches = 0;
      for (const item of items) {
        const text = item.dataset.search.toLocaleLowerCase();
        item.hidden = !terms.every(term => text.includes(term));
        if (!item.hidden) matches += 1;
      }
      status.hidden = terms.length === 0;
      status.textContent = `${matches} of ${items.length} documents`;
      empty.hidden = matches !== 0;
    };
    search.addEventListener('input', filter);
    document.getElementById('clear-search').addEventListener('click', () => {
      search.value = '';
      filter();
      search.focus();
    });
    filter();
  }

  const headings = [...document.querySelectorAll('.markdown-body h2[id]')];
  const contents = document.querySelector('.contents');
  if (headings.length && contents) {
    const list = document.getElementById('section-links');
    for (const heading of headings) {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${encodeURIComponent(heading.id)}`;
      link.textContent = heading.textContent;
      item.append(link);
      list.append(item);
    }
    contents.hidden = false;
    if (window.matchMedia('(max-width: 1000px)').matches) {
      contents.querySelector('details').open = false;
    }
  }

  for (const table of document.querySelectorAll('.markdown-body table')) {
    table.tabIndex = 0;
    table.setAttribute('aria-label', 'Comparison table; scroll horizontally if needed');
  }

  const diagrams = [...document.querySelectorAll('pre > code.language-mermaid')];
  if (diagrams.length) {
    import('https://cdn.jsdelivr.net/npm/mermaid@11.12.0/dist/mermaid.esm.min.mjs')
      .then(async ({ default: mermaid }) => {
        mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', theme: 'neutral' });
        for (const [index, code] of diagrams.entries()) {
          try {
            const { svg } = await mermaid.render(`source-diagram-${index}`, code.textContent);
            const figure = document.createElement('div');
            figure.className = 'mermaid';
            figure.innerHTML = svg;
            code.parentElement.replaceWith(figure);
          } catch {
            // Keep the readable source when a diagram cannot be rendered.
            document.getElementById(`dsource-diagram-${index}`)?.remove();
          }
        }
      })
      .catch(() => { /* The document remains readable without the optional renderer. */ });
  }
})();
