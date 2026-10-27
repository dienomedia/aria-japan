// View-model for the procedure detail page. Port of renderVals() from design-source/procedure.dc.html;
// every key below is consumed by src/pages/procedures/[slug].astro. Copy and fallbacks are unchanged.
import type { Category, FigureSpec, Procedure } from '../data/surgeries';
import { el, img } from './html';

function figEl(spec: FigureSpec): string {
  const labels = (spec.labels || []).map((lb) =>
    el(
      'span',
      {
        position: 'absolute', left: lb.x, top: lb.y, transform: 'translate(-50%,-50%)',
        background: lb.blue ? '#e9f1fb' : '#ffffff', color: lb.blue ? '#1f5fc0' : '#23303a',
        fontSize: 'clamp(8.5px,1.02vw,12.5px)', fontWeight: 700, lineHeight: 1.18,
        padding: '3px 8px', borderRadius: '999px', boxShadow: '0 1px 5px rgba(16,41,61,.22)',
        textAlign: 'center', maxWidth: lb.w || '120px', whiteSpace: lb.nowrap ? 'nowrap' : 'normal',
        pointerEvents: 'none',
      },
      lb.text.replace(/&/g, '&amp;').replace(/</g, '&lt;'),
    ),
  );
  const image = img(spec.img, spec.alt || '', { width: '100%', display: 'block', borderRadius: '16px' });
  return el('div', { position: 'relative', maxWidth: (spec.maxW || 920) + 'px', margin: '0 auto' }, image, ...labels);
}

function scImg(src: string | undefined, alt: string): string | null {
  if (!src) return null;
  return img(src, alt, { width: '100%', display: 'block', borderRadius: '12px', border: '1px solid #e6edf1' });
}

export function procedureVals(p: Procedure, c: Category) {
  const siblings = c.procedures.filter((x) => x.slug !== p.slug).slice(0, 6);
  const sg: any = p.stepGallery;
  const sc: any = p.splitCompare;
  const fn: any = p.figureNote;
  return {
    name: p.name,
    summary: p.summary,
    catName: c.name,
    catSlug: c.slug,
    heroLabel: p.name + ' — illustration',
    heroImg: p.heroImg || '',
    hasHeroImg: !!p.heroImg,
    noHeroImg: !p.heroImg,
    heroImgEl: p.heroImg ? img(p.heroImg, p.name + ' — illustration', { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }) : null,
    diagramLabel: p.name + ' — before / after',
    aboutParas: (p.about || []).map((t) => ({ text: t })),
    hasAbout: !!((p.about && p.about.length) || (p.aboutSections && p.aboutSections.length)),
    noAbout: !((p.about && p.about.length) || (p.aboutSections && p.aboutSections.length)),
    aboutGroups: (p.aboutSections || []).map((s) => ({
      heading: s.heading,
      paras: (s.paras || []).map((t) => ({ text: t })),
      hasImages: !!(s.images && s.images.length),
      images: (s.images || []).map((im) => ({ el: img(im.img, im.alt || '', { width: '100%', display: 'block', borderRadius: '16px', border: '1px solid #e6edf2' }) })),
    })),
    hasAboutFigure: !!(p.aboutFigure && p.aboutFigure.img),
    aboutFigEl: p.aboutFigure && p.aboutFigure.img ? img(p.aboutFigure.img, (p.name || '') + ' anatomy', { width: '100%', display: 'block' }) : null,
    afLegend: ((p.aboutFigure && p.aboutFigure.legend) || []).map((l) => ({ color: l.color, label: l.label })),
    afCaption: (p.aboutFigure && p.aboutFigure.caption) || '',
    hasAfMeta: !!(p.aboutFigure && ((p.aboutFigure.legend && p.aboutFigure.legend.length) || p.aboutFigure.caption)),
    hasAfSide: !!(p.aboutFigure && p.aboutFigure.sideParas && p.aboutFigure.sideParas.length),
    noAfSide: !(p.aboutFigure && p.aboutFigure.sideParas && p.aboutFigure.sideParas.length),
    afSideParas: ((p.aboutFigure && p.aboutFigure.sideParas) || []).map((t) => ({ text: t })),
    hasMethods: !!(p.methods && p.methods.rows && p.methods.rows.length),
    methodsHeading: (p.methods && p.methods.heading) || '',
    methodRows: ((p.methods && p.methods.rows) || []).map((r) => ({
      title: r.title || '', text: r.text || '',
      imgEl: r.img ? img(r.img, r.title || 'Method', { width: '100%', display: 'block' }) : null,
    })),
    hasCompareFigure: !!(p.compareFigure && p.compareFigure.items && p.compareFigure.items.length),
    hasCartilageGallery: !!(p.cartilageGallery && p.cartilageGallery.items && p.cartilageGallery.items.length),
    hasSeptumFigure: !!p.septumFigure,
    septumHeading: (p.septumFigure && p.septumFigure.heading) || '',
    hasStabilityGraph: !!p.stabilityGraph,
    stabilityHeading: (p.stabilityGraph && p.stabilityGraph.heading) || '',
    stabilityIntro: (p.stabilityGraph && p.stabilityGraph.intro) || '',
    stabilityPoints: ((p.stabilityGraph && p.stabilityGraph.points) || []).map((t) => ({ text: t })),
    septumPara: (p.septumFigure && p.septumFigure.para) || '',
    septumPanels: ((p.septumFigure && p.septumFigure.panels) || []).map((pn) => ({
      title: pn.title, sub: pn.sub, caption: pn.caption,
      imgEl: img(pn.img, pn.title, { width: '100%', maxWidth: '300px', display: 'block', margin: '0 auto' }),
    })),
    cartilageItems: ((p.cartilageGallery && p.cartilageGallery.items) || []).map((it) => ({
      label: it.label,
      desc: it.desc,
      imgEl: img(it.img, it.label, { width: '100%', aspectRatio: '824 / 902', objectFit: 'cover', borderRadius: '12px', display: 'block' }),
    })),
    hasTypeGallery: !!(p.typeGallery && p.typeGallery.items && p.typeGallery.items.length),
    typeGalleryItems: ((p.typeGallery && p.typeGallery.items) || []).map((it, i) => ({
      num: ('0' + (i + 1)).slice(-2),
      label: it.label,
      imgEl: img(it.img, it.label, { width: '100%', aspectRatio: '81 / 88', objectFit: 'cover', borderRadius: '12px', display: 'block' }),
    })),
    compareTitle: (p.compareFigure && p.compareFigure.title) || '',
    compareItems: ((p.compareFigure && p.compareFigure.items) || []).map((ci) => ({
      lead: ci.lead,
      desc: ci.desc,
      imgEl: img(ci.img, ci.lead, { width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '14px', display: 'block' }),
    })),
    hasRichFigures: !!(p.richFigures && p.richFigures.length),
    richFigures: (p.richFigures || []).map((s) => ({
      heading: s.heading || '', intro: s.intro || '', captionLead: s.captionLead || '', caption: s.caption || '',
      el: figEl(s),
    })),
    hasVsTable: !!(p.vsTable && p.vsTable.rows && p.vsTable.rows.length),
    vsLeftTitle: (p.vsTable && p.vsTable.leftTitle) || '',
    vsRightTitle: (p.vsTable && p.vsTable.rightTitle) || '',
    vsRows: (p.vsTable && p.vsTable.rows) || [],
    hasFigureGroups: !!(p.figureGroups && p.figureGroups.length),
    figureGroups: (p.figureGroups || []).map((g) => ({
      heading: g.heading || '', intro: g.intro || '',
      panels: (g.panels || []).map((pn, i) => ({
        num: i + 1, captionLead: pn.captionLead || '', caption: pn.caption || '',
        el: figEl(pn),
      })),
    })),
    techniques: (p.techniques || []).map((tch) => ({
      title: tch.title,
      blocks: (tch.blocks || []).map((b) => ({
        isPara: b.type === 'para',
        isSubhead: b.type === 'subhead',
        isOlist: b.type === 'olist',
        isUlist: b.type === 'ulist',
        text: b.text || '',
        items: (b.items || []).map((it, i) => ({
          num: i + 1,
          text: it.text,
          sub: (it.sub || []).map((s) => ({ text: s.text })),
          hasSub: !!(it.sub && it.sub.length),
        })),
      })),
    })),
    hasTechniques: !!(p.techniques && p.techniques.length),
    hasCases: !!(p.cases && p.cases.length),
    caseList: (p.cases || []).map((cs) => ({
      badge: cs.badge || '', title: cs.title || '', aspect: cs.aspect || '4 / 3',
      gridClass: 'step-grid-' + ((cs.steps || []).length === 2 || (cs.steps || []).length === 4 ? (cs.steps || []).length : 3),
      steps: (cs.steps || []).map((st) => ({
        caption: st.caption || '',
        imgEl: st.img ? img(st.img, cs.title || 'Case', { width: '100%', height: '100%', objectFit: 'cover', display: 'block' }) : null,
      })),
    })),
    techHeading: p.techHeading || '手術方法',
    benefitList: (p.benefits || []).map((t) => ({ text: t })),
    benefitGroups: (p.benefitGroups || []).map((g) => ({ title: g.title, items: (g.items || []).map((t) => ({ text: t })) })),
    faqs: (p.faq || []).map((f) => ({ q: f.q, a: f.a })),
    hasFaqs: !!(p.faq && p.faq.length),
    hasStepGallery: !!(sg && sg.steps && sg.steps.length),
    stepHeading: (sg && sg.heading) || '',
    stepIntro: ((sg && sg.intro) || []).map((t: string) => ({ text: t })),
    stepItems: ((sg && sg.steps) || []).map((s: any, i: number) => ({
      n: s.n, title: s.title || '', caption: s.caption || '',
      // prototype used 'Step ' + s.n, which printed "Step undefined" for steps without an n; fall back to the position
      imgEl: img(s.img, 'Step ' + (s.n ?? i + 1), { width: '100%', aspectRatio: (sg && sg.aspect) || '1 / 1', objectFit: 'cover', display: 'block', borderRadius: '12px' }),
    })),
    stepGridClass: 'step-grid-' + (sg && (sg.cols === 2 || sg.cols === 4) ? sg.cols : 3),
    hasSplitCompare: !!p.splitCompare,
    hasFigureNote: !!(fn && fn.img),
    fnHeading: (fn && fn.heading) || '',
    fnImg: (fn && fn.img) || '',
    fnImgEl: fn && fn.img ? img(fn.img, '切開・施術部位', { width: '100%', display: 'block' }) : null,
    fnIntro: ((fn && fn.intro) || []).map((t: string) => ({ text: t })),
    hasFnExtra: !!(fn && fn.extra && fn.extra.text),
    fnExtraHeading: (fn && fn.extra && fn.extra.heading) || '',
    fnExtraText: (fn && fn.extra && fn.extra.text) || '',
    hasSurgMethods: !!(p.surgMethods && p.surgMethods.items && p.surgMethods.items.length),
    smHeading: (p.surgMethods && p.surgMethods.heading) || '',
    smItems: ((p.surgMethods && p.surgMethods.items) || []).map((m) => ({
      title: m.title || '',
      imgEl: img(m.img, m.title || 'Method', { width: '100%', display: 'block' }),
      paras: (m.paras || []).map((t) => ({ text: t })),
      groups: (m.groups || []).map((g) => ({
        label: g.kind === 'dis' ? 'デメリット・注意事項' : 'メリット',
        color: g.kind === 'dis' ? '#c2603a' : '#1f7e96',
        iconName: g.kind === 'dis' ? 'alert-triangle' : 'circle-check',
        iconColor: g.kind === 'dis' ? '#e07a3e' : '#2e9fc0',
        items: (g.items || []).map((t) => ({ text: t })),
      })),
    })),
    hasDualFeature: !!(p.dualFeature && p.dualFeature.items && p.dualFeature.items.length),
    dfHeading: (p.dualFeature && p.dualFeature.heading) || '',
    dfIntro: ((p.dualFeature && p.dualFeature.intro) || []).map((t) => ({ text: t })),
    dfItems: ((p.dualFeature && p.dualFeature.items) || []).map((it) => ({
      title: it.title || '', desc: it.desc || '',
      imgEl: img(it.img, it.title || 'Feature', { width: '100%', display: 'block', borderRadius: '16px', border: '1px solid #ecf0f2' }),
    })),
    hasIdealFor: !!(p.idealFor && p.idealFor.items && p.idealFor.items.length),
    idealForHeading: (p.idealFor && p.idealFor.heading) || 'こんな方におすすめ',
    idealForItems: ((p.idealFor && p.idealFor.items) || []).map((t) => ({ text: t })),
    scHeading: (sc && sc.heading) || '',
    scIntro: (sc && sc.intro) || '',
    scLeftTitle: (sc && sc.leftTitle) || '',
    scRightTitle: (sc && sc.rightTitle) || '',
    scIncisionLeft: (sc && sc.incisionLeft) || '',
    scIncisionRight: (sc && sc.incisionRight) || '',
    scAgeLeft: (sc && sc.ageLeft) || '',
    scAgeRight: (sc && sc.ageRight) || '',
    scLiftLeft: (sc && sc.liftLeft) || '',
    scLiftRight: (sc && sc.liftRight) || '',
    scCandLeft: (sc && sc.candidatesLeft) || '',
    scCandRight: (sc && sc.candidatesRight) || '',
    scImgMiniIncision: scImg(sc && sc.incisionLeftImg, 'ミニ切開リフトの切開位置'),
    scImgFullIncision: scImg(sc && sc.incisionRightImg, '切開リフトの切開位置'),
    scImgMiniDissection: scImg(sc && sc.dissectionLeftImg, 'ミニ切開リフトの剥離範囲'),
    scImgFullDissection: scImg(sc && sc.dissectionRightImg, '切開リフトの剥離範囲'),
    hasBenefits: !!((p.benefitGroups && p.benefitGroups.length) || (p.benefits && p.benefits.length)),
    noBenefits: !((p.benefitGroups && p.benefitGroups.length) || (p.benefits && p.benefits.length)),
    factDuration: (p.facts && p.facts.duration) || '要確認',
    factAnesthesia: (p.facts && p.facts.anesthesia) || '要確認',
    factPrice: (p.facts && p.facts.price) || '要確認',
    factPriceNote: (p.facts && p.facts.priceNote) || '',
    stayRows: (p.facts && p.facts.stay) || [],
    hasStaySchedule: !!(p.facts && p.facts.stay && p.facts.stay.length),
    factStay: (p.facts && !p.facts.stay && p.facts.stayText) || '要確認',
    stayNote: (p.facts && p.facts.stayNote) || '',
    hasStayNote: !!(p.facts && p.facts.stayNote),
    hasFacts: !!p.facts,
    noFacts: !p.facts,
    siblings,
    hasSiblings: siblings.length > 0,
  };
}
