// Tiny HTML-string helpers used where the prototype built <img>/figure elements in JS (React.createElement).
// Output is injected with <Fragment set:html={…} />.

type StyleValue = string | number;
type StyleObject = Record<string, StyleValue | undefined>;

const UNITLESS = new Set(['fontWeight', 'lineHeight', 'opacity', 'zIndex', 'flex', 'flexGrow', 'flexShrink', 'order']);

export function esc(s: unknown): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** Design data stores asset paths relative ("assets/x.png"); pages live at different depths, so make them root-absolute. */
export function asset(src: string): string {
  return /^(https?:|data:|\/)/.test(src) ? src : '/' + src;
}

export function styleAttr(obj: StyleObject): string {
  return Object.entries(obj)
    .filter(([, v]) => v !== undefined && v !== '')
    .map(([k, v]) => {
      const prop = k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
      const val = typeof v === 'number' && v !== 0 && !UNITLESS.has(k) ? v + 'px' : String(v);
      return `${prop}:${val}`;
    })
    .join(';');
}

export function img(src: string, alt: string, style: StyleObject): string {
  return `<img src="${esc(asset(src))}" alt="${esc(alt)}" style="${esc(styleAttr(style))}">`;
}

export function el(tag: string, style: StyleObject, ...children: string[]): string {
  return `<${tag} style="${esc(styleAttr(style))}">${children.join('')}</${tag}>`;
}
