// Typed port of design-source/surgery-data.js — data below is unchanged (values and shape preserved).
// Prices are already in JPY; do not convert or reformat.

export interface TextItem { text: string; sub?: { text: string }[] }
export interface TechniqueBlock {
  type: 'para' | 'subhead' | 'ulist' | 'olist';
  text?: string;
  items?: TextItem[];
}
export interface Technique { title: string; blocks?: TechniqueBlock[] }
export interface BenefitGroup { title?: string; items: string[] }
export interface StayRow { day: string; label: string }
export interface Facts {
  duration?: string;
  anesthesia?: string;
  stay?: StayRow[];
  stayText?: string;
  stayNote?: string;
  price?: string;
  priceNote?: string;
}
export interface FigureLabel { text: string; x: string; y: string; blue?: boolean; w?: string; nowrap?: boolean }
export interface FigureSpec {
  img: string;
  alt?: string;
  maxW?: number;
  heading?: string;
  intro?: string;
  captionLead?: string;
  caption?: string;
  labels?: FigureLabel[];
}
export interface Procedure {
  slug: string;
  name: string;
  summary: string;
  heroImg?: string;
  heroFit?: string;
  about?: string[];
  aboutSections?: { heading: string; paras?: string[]; images?: { img: string; alt?: string }[] }[];
  aboutFigure?: { img: string; legend?: { color: string; label: string }[]; caption?: string; sideParas?: string[] };
  benefits?: string[];
  benefitGroups?: BenefitGroup[];
  techHeading?: string;
  techniques?: Technique[];
  facts?: Facts;
  compareFigure?: { title: string; items: { img: string; lead: string; desc: string }[] };
  richFigures?: FigureSpec[];
  vsTable?: { leftTitle: string; rightTitle: string; rows: { label: string; left: string; right: string }[] };
  figureGroups?: { heading?: string; intro?: string; panels?: FigureSpec[] }[];
  typeGallery?: { items: { label: string; img: string }[] };
  cartilageGallery?: { items: { label: string; img: string; desc: string }[] };
  stabilityGraph?: { heading: string; intro: string; points: string[] };
  faq?: { q: string; a: string }[];
  septumFigure?: { heading: string; para: string; panels: { title: string; sub: string; img: string; caption: string }[] };
  stepGallery?: { heading: string; cols?: number; aspect?: string; intro?: string[]; steps: { n?: number | string; title?: string; img: string; caption?: string }[] };
  splitCompare?: Record<string, string>;
  idealFor?: { heading?: string; items: string[] };
  dualFeature?: { heading: string; intro?: string[]; items: { img: string; title: string; desc: string }[] };
  figureNote?: { heading?: string; img: string; intro?: string[]; extra?: { heading?: string; text: string } };
  cases?: { badge?: string; title?: string; aspect?: string; steps?: { img?: string; caption?: string }[] }[];
  methods?: { heading: string; rows: { img?: string; title?: string; text?: string }[] };
  surgMethods?: { heading: string; items: { img: string; title: string; paras?: string[]; groups?: { kind: 'pro' | 'dis' | string; items: string[] }[] }[] };
}
export interface Category {
  slug: string;
  name: string;
  shot: string;
  desc: string;
  intro?: string;
  introBlocks?: { heading?: string; text?: string; items?: string[] }[];
  heroImg?: string;
  heroFit?: string;
  heroAspect?: string;
  more: string;
  tags: string[];
  detail?: { benefitGroups?: BenefitGroup[]; risks?: { title: string; items: string[] } };
  procedures: Procedure[];
}

// Single source of truth for Aria Korea surgery categories + sub-procedures.
// Used by: homepage (grid + nav mega-menu), category pages, procedure detail pages.
// Each procedure: { slug, name, summary }. summary = short placeholder description.
export const SURGERY_CATEGORIES: Category[] = [
  {
    slug: 'eye-surgery',
    name: '目の整形',
    shot: 'Eye surgery photo',
    desc: '自然ですっきりとした明るい目元を実現します。',
    intro: '最近の目元整形では、単に目を大きく見せるだけでなく、お顔全体のバランスに馴染み、個性を引き立てる目の形が好まれる傾向にあります。そのため、誰にでも同じ手法を当てはめる画一的なデザインは避けるべきです。\nご自身に合った美しい目元を実現するには、目元のタイプや特徴を精密に分析し、専門医との丁寧なカウンセリングを通じてデザインを決めることが何よりも大切です。',
    heroImg: 'assets/eye-surgery-hero.png',
    more: '目の施術を見る',
    tags: ['二重まぶた', '目つき矯正', '目頭・目尻切開'],
    procedures: [
      { slug: 'double-eyelid-surgery', name: '二重手術', summary: '上まぶたに自然な二重ラインを作り、明るくメリハリのある華やかな目元を実現します。', heroImg: 'assets/double-eyelid-before-after.png',
        about: [
          '二重手術は、一重まぶたから二重のラインを作る、韓国で非常に人気の高い美容手術です。上まぶたのラインを自然に作り、顔全体の調和を保ちながら目をより大きく、はっきりとさせ、目元を明るく見せます。主な手法は非切開法（埋没法）と切開法の2つです。カウンセリングでは、まぶたの構造や皮膚の厚み、筋肉の状態、ご希望の仕上がりを踏まえ、最適な方法を専門医が判断します。',
        ],
        aboutSections: [
          { heading: 'ご自身に合った手術方法とは', paras: [
            '切開法・非切開法どちらが適しているかは、まぶたの構造、皮膚の弾力性、無駄な皮膚の量、ご希望の仕上がりなど複数の要素によって決まります。非切開法の短い回復期間にメリットを感じる方もいれば、切開法でより長期的な結果を得られる方もいます。',
            '経験豊富な専門医との個別カウンセリングが、あなたの目標に最も適した施術を見極める一番の方法です。',
          ] },
          { heading: '二重手術に韓国が選ばれる理由', paras: [
            '韓国は高度な美容技術と顔面施術の専門性で世界的に知られています。韓国の専門医は毎年多数の二重手術を執刀しており、自然な仕上がり・精密さ・個別対応を重視した現代的な技術を用いています。',
            '当院のチームは、クリニック選びやカウンセリングの日程調整から通訳サービス、宿泊のサポート、術後のフォローまで、医療渡航のすべての工程を国際患者様がスムーズかつ快適に進められるようサポートします。',
          ] },
        ],
        benefitGroups: [
          { title: '審美面でのメリット', items: [
            '目をより大きく「パッチリ」と見せる可視的なラインを作る',
            '二重幅がしっかりできるため、アイシャドウやメイクが塗りやすく、メイクが映えやすくなる',
            '重たく・はれぼったいまぶたの方は、より知的ですっきりした印象になる',
            '他のパーツとのバランスを整える目的でもよく行われる',
          ] },
          { title: '機能面でのメリット', items: [
            '垂れた皮膚（眼瞼下垂や余剰皮膚）がある場合、視野の改善にもつながります',
            '一重の構造によって生じやすい逆まつげを軽減・解消',
            '眼球が見える面積が増えるため、コンタクトレンズの装着や衛生管理が楽になる方も',
          ] },
        ],
        techniques: [
          { title: '非切開法（埋没法）', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングとマーキング——座った状態で、閉じたまぶたに希望のライン・高さの位置をマーキングします（横になると皮膚のたるみ方が変わるため）' },
              { text: '麻酔——まぶたに局所麻酔を注射します。意識はありますが感覚はなくなります' },
              { text: '小さな穴あけ——切開の代わりに、マーキングしたライン上に3～5カ所の小さな穴（時には針穴程度）を開けます' },
              { text: '糸の通し方——細い医療用糸をこの小さな穴に通し、皮膚と深部の瞼板または挙筋をつなぐようにまぶたの組織にループさせます' },
              { text: '結紮——糸を結んで皮膚の下に埋め込み、外からは見えないようにします。これにより目を開けたときにラインができます（皮膚が糸に「引っかかり」内側に折れ込みます）' },
              { text: '切開や抜糸なし——結び目は体内にあるため、術後に取り除くものは何もありません' },
              { text: '回復——直後はアイスパックを使用し、腫れは最初の2～3日でピークになり、1～2週間でほぼ落ち着きます' },
            ] },
            { type: 'para', text: '手術時間は通常20～40分程度で、局所麻酔下で行われ、睡眠麻酔を使わないことも多いです。' },
            { type: 'para', text: '非切開法は、まぶたに小さな穴を開けて専用の糸を通すことで、完全な外科的切開を行わずに二重のラインを作ります。' },
            { type: 'subhead', text: '向いている方' },
            { type: 'ulist', items: [
              { text: 'まぶたに余分な皮膚が少ない方' },
              { text: '皮膚の弾力性が良好な若い方' },
              { text: '回復期間を短くしたい方' },
              { text: '自然な仕上がりのラインをご希望の方' },
            ] },
            { type: 'para', text: 'ほとんどの方は数日以内に日常生活に戻れます。腫れは通常1～2週間で大きく改善し、最終的な結果はその後数カ月かけて、より明らかになります。' },
            { type: 'subhead', text: 'メリット' },
            { type: 'ulist', items: [
              { text: '完全な切開が不要' },
              { text: '腫れ・あざが少ない' },
              { text: '回復が早い' },
              { text: '傷跡が最小限' },
              { text: '施術時間が短い' },
            ] },
          ] },
          { title: '切開法二重手術', blocks: [
            { type: 'para', text: '2つの主な方法のうち、より「外科的」なアプローチで、糸だけでなくまぶたに沿って実際に切開を行います。' },
            { type: 'subhead', text: '施術の仕組み' },
            { type: 'olist', items: [
              { text: 'マーキング——目の形、眉の位置、ご希望（ラインの幅など）に基づき、新しいラインの位置をマーキングします。' },
              { text: '切開——上まぶたの目の丸みに沿ってマーキングしたラインを切開します。' },
              { text: '組織の除去——この切開部から、次のような処置が可能です：', sub: [
                { text: '余った皮膚の除去（たるみや眼瞼下垂の場合に有効）' },
                { text: '余分な脂肪の除去または再配置' },
                { text: 'まぶたを開ける筋肉（挙筋）の調整・強化——これにより眼瞼下垂も同時に修正できます' },
              ] },
              { text: 'ライン形成——皮膚の端を、下層の組織と癒合するように縫合し、目を開けたときに恒久的な折り目・ラインができるようにします。' },
              { text: '縫合——細い糸で切開部を閉じ、通常は約1週間後に抜糸します。' },
            ] },
            { type: 'subhead', text: '専門医がこの方法を選ぶ理由' },
            { type: 'ulist', items: [
              { text: 'より高い自由度——実際に開口部ができるため、専門医が皮膚・脂肪・筋肉を直接見ながら調整できます。' },
              { text: 'より複雑な症例に対応——次のような方に適しています：', sub: [
                { text: '厚みのある・むくみやすいまぶた' },
                { text: '余剰・たるんだ皮膚' },
                { text: '脂肪の蓄積が多い場合' },
                { text: '瞼が下がりやすい場合（筋肉の修正が必要な眼瞼下垂）' },
                { text: 'より精密な調整が必要な左右非対称の目' },
              ] },
              { text: 'より長持ち——ラインが実際の組織癒合によって形成されるため（単に糸で皮膚を留めるだけではないため）、非切開法に比べて時間の経過でゆるんだり、薄れたり、消えたりしにくくなります。' },
              { text: 'カスタマイズ性——ラインの高さ、二重のデザイン、幅をかなり精密にデザインできます。' },
            ] },
            { type: 'para', text: '回復——最初の1週間は腫れとあざが出ますが、4～8週間かけて徐々に落ち着き、最終的な仕上がりは2～3カ月経つまで完全には分からないことが多く、6カ月で完全に回復します。' },
            { type: 'subhead', text: 'メリット' },
            { type: 'ulist', items: [
              { text: '永続的な結果' },
              { text: 'より多くのまぶたタイプに対応可能' },
              { text: '複数の悩みを同時に解消できる' },
              { text: 'より精密なラインのカスタマイズ' },
              { text: '大幅な変化に向いている' },
              { text: '長期的に予測しやすい結果' },
            ] },
          ] },
        ],
        facts: {
          duration: '1～1.5時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          stayNote: '抜糸を自国で行える場合は、2日目の早い段階での帰国も可能です。',
          price: '約90,100～340,000円',
          priceNote: '非切開手術の場合',
        } },
      { slug: 'ptosis-correction', name: '目つき矯正', summary: 'まぶたを持ち上げる筋肉（上眼瞼挙筋）を引き締め、たるみや下がりを改善して目を大きくパッチリと開かせます。', heroImg: 'assets/ptosis-correction-illustration.png',
        about: [
          '上まぶたが重たく、疲れたような、左右不均一な印象に見える場合、目つき修正が効果的です。この施術は、まぶたを持ち上げる筋肉を強化して垂れたまぶたを持ち上げ、より大きくメリハリのある目元を作ります。見た目の向上に加え、快適性や視覚機能の改善にもつながり、より知的で若々しく、自信のもてる表情になります。',
        ],
        benefitGroups: [
          { title: 'メリット', items: [
            '可視的なまぶたのラインができ、目が大きく開いて見える',
            'アイメイクがしやすくなる',
            'より知的で明るい印象に',
            '顔の左右対称・バランスを改善',
            '重たい・垂れた皮膚が視野を遮っていた場合、視力の改善にも',
            '無意識に前頭を上げたり首を傾けたりする目の疲労を軽減',
            'お子さんの弱視・乱視予防にもつながる場合があります',
          ] },
        ],
        facts: {
          duration: '1～1.5時間',
          anesthesia: '睡眠麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          stayNote: '抜糸を自国で行える場合は、2日目の早い段階での帰国も可能です。',
          price: '二重手術の費用＋約56,900～114,000円',
        } },
      { slug: 'lower-blepharoplasty', name: '下眼瞼形成術', summary: '目の下の余分な脂肪やたるみを除去・再配置し、膨らみやくま、はれぼったさを改善してすっきりとした目元に整えます。', heroImg: 'assets/lower-blepharoplasty-illustration.png',
        about: [
          '目元に疲れた印象があると、実年齢より上に見られてしまうことがあります。\n下眼瞼形成術は、目の下の膨らみやたるみ、余分な皮膚を改善し、目元全体を若々しくすっきりとした印象へリフレッシュさせます。目の下のラインを滑らかに引き締め、自然な表情を保ちながら、しっかり休んだ後のような明るく生き生きとした目元に仕上げます。',
        ],
        facts: {
          duration: '1時間',
          anesthesia: '睡眠麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '5日目', label: '抜糸' },
            { day: '6日目', label: '帰国' },
          ],
          stayNote: '抜糸を自国で行える場合は、2日目の早い段階での帰国も可能です。',
          price: '約147,000～406,000円',
        },
        benefitGroups: [
          { title: 'メリット', items: [
            '眼窩脂肪の膨らみの除去・軽減',
            '脂肪の影によるくぼみ・黒クマの改善',
            '余剰皮膚の切除による小ジワ・たるみケア',
            '疲労感をなくし、明るく若々しい目元へ',
            '下まぶたのゆるみや目尻のたるみ改善',
            '皮膚の被さりによるコンタクトレンズ装用時の不快感軽減',
            '下まぶたの支持力強化と引き締め効果',
          ] },
        ] },
      { slug: 'upper-blepharoplasty', name: '上眼瞼形成術', summary: '被さった余分な上まぶたの皮膚を切除し、重たく見えがちな目元をすっきりと明るい印象に整えます。', heroImg: 'assets/upper-blepharoplasty-illustration.png',
        about: [
          'まぶたのたるみや重みは、疲れた印象を与えたり、実年齢より老けて見られてしまう大きな原因となります。\n上まぶた手術は、被さった余分な皮膚や組織を取り除くことで、重たい目元をすっきりと若々しい印象へと導く施術です。本来の自然な目の形を引き立てながら目元のメリハリを改善し、たるんだ皮膚で遮られていた視野の狭さも解消します。パッチリと明るく知的な目元を叶え、自信に満ちた洗練された表情を作り出します。',
        ],
        benefitGroups: [
          { title: 'メリット', items: [
            '視界の改善',
            '多様なまぶたのタイプ・症例に対応',
            '複合的な目元の悩みを一度に解消',
            'より緻密で自由度の高いラインデザイン',
            'ハッキリとした変化や理想のデザインを実現',
            '後戻りが少なく長期的に安定した仕上がり',
          ] },
        ],
        facts: {
          duration: '1時間',
          anesthesia: '睡眠麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '5日目', label: '抜糸' },
            { day: '6日目', label: '帰国' },
          ],
          stayNote: '抜糸を自国で行える場合は、2日目の早い段階での帰国も可能です。',
          price: '約158,000～406,000円',
        } },
      { slug: 'inner-canthoplasty', name: '目頭切開', summary: '目頭を覆う蒙古ひだを開き、目の横幅を内側に広げてすっきりと大きな目元に整えます。', heroImg: 'assets/inner-canthoplasty-illustration.png',
        about: [
          '目頭に被さった皮膚（蒙古ひだ）によって目の横幅が短く、ぼんやりとした印象に見える場合、目頭切開が効果的です。\n目頭を覆う皮膚のひだを整えることで、目をより大きく、横に長く、バランスの良い状態へと導きます。二重手術と組み合わせるケースも多く、元々の自然な雰囲気を損なうことなく立体感をプラスし、より洗練された華やかな目元を作り出します。',
        ],
        benefitGroups: [
          { title: 'メリット', items: [
            '目頭を覆う皮膚（蒙古ひだ）を解消・軽減',
            '目の横幅が広がり、切れ長で洗練された印象へ',
            '目頭の露出度を高め、明るく華やかな目元に',
            '二重ラインを内側まで綺麗に伸ばし、二重手術の効果を極大化',
            '目の横幅を広げることで、「小ささ」や「丸み」による幼い印象を改善',
          ] },
        ],
        facts: {
          duration: '30分',
          anesthesia: '睡眠麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '5日目', label: '抜糸' },
            { day: '6日目', label: '帰国' },
          ],
          stayNote: '抜糸を自国で行える場合は、2日目の早い段階での帰国も可能です。',
          price: '約90,100～226,000円',
        } },
      { slug: 'outer-canthoplasty', name: '目尻切開', summary: '目尻を切開して横幅を外側に広げ、より大きく印象的なアーモンドアイに整えます。', heroImg: 'assets/outer-canthoplasty-illustration.png',
        about: [
          '目尻を外側に広げて整えることで、目の形状や顔全体のバランスを美しく改善します。お顔立ちに馴染む自然な仕上がりを保ちながら、しっかりとした横幅を作り出せるのが特徴です。他の目元施術と組み合わせるケースも多く、よりやわらかくバランスの取れたエレガントな目元をつくり、明るく表情豊かな印象を叶えます。',
        ],
        compareFigure: {
          title: '目尻切開の種類・タイプ別の選び方',
          items: [
            { img: 'assets/canthoplasty-type-1.png', lead: '目の横幅を広げたい方（出目・横幅が狭いタイプ）', desc: '目尻を外側に切開し、横方向に広げることで、すっきりとした大きな目元に整えます。' },
            { img: 'assets/canthoplasty-type-2.png', lead: '目元全体の開きを良くしたい方（眠そうに見えやすいタイプ）', desc: '目尻を上下方向に広げるように切開し、縦・横の立体感を出すことで、パッチリと印象的な目元を作ります。' },
            { img: 'assets/canthoplasty-type-3.png', lead: 'キツい印象を改善したい方（つり目タイプ）', desc: '目尻を横から下方向へ切開・移動させることで、目元の角度を下げ、やわらかく優しげな印象の目の形に仕上げます。' },
          ],
        },
        benefitGroups: [
          { title: 'メリット', items: [
            '目尻を外側に拡張し、目の横幅を広げる',
            '切れ長で大人っぽい「アーモンドアイ」を形成',
            '目尻のラインを微調整し、さりげなく華やかな目元（キャットアイ風）を演出',
            '目が丸く横幅の短さが気になる場合の全体バランスを調整',
          ] },
        ],
        facts: {
          duration: '30分',
          anesthesia: '睡眠麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '5日目', label: '抜糸' },
            { day: '6日目', label: '帰国' },
          ],
          stayNote: '抜糸を自国で行える場合は、2日目の早い段階での帰国も可能です。',
          price: '約90,100～226,000円',
        } },
      { slug: 'lower-canthoplasty', name: 'グラマラスライン形成', summary: '目尻のラインを下げて目元をやわらかな印象に整え、優しく愛らしい表情を作り出します。', heroImg: 'assets/lower-canthoplasty-illustration.png',
        about: [
          'パッチリとした大きな目元をご希望の方には、グラマラスライン形成がおすすめです。\n目尻ラインの位置をやさしく下げて調整することで、よりやわらかく華やかな印象へ導き、目元全体のバランスを美しく整えます。他の目元整形と組み合わせるケースも多く、過度な変化を避けた自然な仕上がりを保ちながら、より明るく表情豊かな目元を叶えます。',
        ],
        compareFigure: {
          title: '目尻切開　vs　グラマラスライン形成',
          items: [
            { img: 'assets/lower-cantho-compare-outer.png', lead: '目尻切開', desc: '目尻を外側（横方向）へ広げ、目の横幅を長く延長します。' },
            { img: 'assets/lower-cantho-compare-lower.png', lead: 'グラマラスライン形成', desc: '目尻を下方向へ引き下げ、目の縦幅を広げてパッチリとした印象にします。' },
          ],
        },
        benefitGroups: [
          { title: 'メリット', items: [
            '丸みや下がりが気になる下まぶたのラインを整え、綺麗な「アーモンドアイ」へ',
            '黒目の下の白目の露出（三白眼）を調整し、目が丸すぎる印象を和らげる',
            '下まぶたのきわや角度を美しく補正し、より若々しく洗練された目元へ',
          ] },
        ],
        facts: {
          duration: '30分',
          anesthesia: '睡眠麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '5日目', label: '抜糸' },
            { day: '6日目', label: '帰国' },
          ],
          stayNote: '抜糸を自国で行える場合は、2日目の早い段階での帰国も可能です。',
          price: '約90,100～226,000円',
        } },
      { slug: 'eye-fat-repositioning', name: '目の下脂肪再配置', summary: '目の下の脂肪を適切に再配置し、くぼみ・膨らみ・クマを改善して滑らかで明るい目元へ導きます。', heroImg: 'assets/eye-fat-repositioning-illustration.png',
        about: [
          '目の下のクマやくぼみ、たるみは、しっかり休息を取っていても疲れている印象を与えてしまう大きな要因です。\n目の下脂肪再配置は、目の下の余分な脂肪を適正な位置へ再配置し、下まぶたから目元にかけてのラインをなめらかに整える専門的な施術です。単に脂肪を除去するのではなく、くぼんだ部分に脂肪を移動させることで影をなくし、ふっくらとした若々しいボリュームをプラスします。明るくすっきりとした印象へ導き、健康的な若返り効果を叶えます。',
        ],
        compareFigure: {
          title: '目の下脂肪再配置の手順',
          items: [
            { img: 'assets/eyefat-step-1.png', lead: 'ステップ1', desc: '目の下の余分な脂肪と、くぼみの状態を詳しく確認・診断します。' },
            { img: 'assets/eyefat-step-2.png', lead: 'ステップ2', desc: 'まぶたの裏側（結膜）を微細に切開してアプローチするため、顔の表面に傷跡が残る心配はありません。' },
            { img: 'assets/eyefat-step-3.png', lead: 'ステップ3', desc: '脂肪をくぼみの位置へ移動（再配置）し、脂肪を支える膜（眼窩隔膜）にしっかり固定して再発を防ぎます。' },
            { img: 'assets/eyefat-step-4.png', lead: 'ステップ4', desc: '明るく滑らかで、すっきりとした目元に整います。' },
          ],
        },
        benefitGroups: [
          { title: 'メリット', items: [
            '目の下のくぼみ（涙袋下の溝）をフラットに整える',
            '脂肪を全切除しないため、術後のこけ（ゲッソリ感）を防ぎつつ目袋をケア',
            '目元から頬にかけてのライン（ゴルゴ線）をなめらかにし、若々しい印象へ',
            '脂肪の膨らみによる影クマや黒クマを根本から改善',
          ] },
        ],
        facts: {
          duration: '30分',
          anesthesia: '睡眠麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '5日目', label: '抜糸' },
            { day: '6日目', label: '帰国' },
          ],
          stayNote: '抜糸を自国で行える場合は、2日目の早い段階での帰国も可能です。',
          price: '約94,800～226,000円',
        } },
      { slug: 'eye-revision-surgery', name: '目の再手術', summary: '過去に行われた目元整形の結果を、より理想的で自然な仕上がりへ修正・改善します。', heroImg: 'assets/eye-revision-illustration.png',
        about: [
          '以前の目元手術の結果にご満足いただけない場合や、経年変化によるお悩みが生じた場合、目の再手術（修正術）によって理想のバランスと機能美、そして自信を取り戻すことができます。\n本手術では、左右差・傷跡・三重まぶた・不自然なラインといった様々なお悩みに対し、過去の手術状態を精密に分析した上で丁寧に修正を行います。お一人おひとりのご希望に合わせたオーダーメイド施術により、元々の魅力を活かしながら、より自然で調和の取れた美しさを追求します。',
        ],
        richFigures: [
          { img: 'assets/revision-compare-band.png', maxW: 1000, alt: '目の再手術の技術',
            heading: '目の再手術の仕組み',
            intro: '既存のラインの癒着を剥離し、希望の位置に新しいラインを作ります。主な方法は2つです：',
            labels: [
              { x: '20%', y: '34%', text: '既存のライン' },
              { x: '40.5%', y: '45%', text: '皮膚・組織の除去' },
              { x: '8.5%', y: '57%', text: '新しいライン', blue: true },
              { x: '60.5%', y: '37%', text: '解除、皮膚は保持' },
              { x: '85%', y: '38%', text: '既存のラインを解除' },
              { x: '89%', y: '66%', text: '新しいライン', blue: true },
            ] },
        ],
        vsTable: {
          leftTitle: 'ライン下げ法',
          rightTitle: '二重ライン法',
          rows: [
            { label: '方法', left: '旧ラインと新ラインの間の皮膚を除去し、以前のラインを消します。', right: '旧ラインの結合のみを解除し、すぐ下に新しいラインを作ります。' },
            { label: '皮膚のゆとり', left: '余分な皮膚がある場合。', right: '余分な皮膚が少ない場合。' },
            { label: '適しているケース', left: 'ラインを少し下げればよい場合。', right: '二重幅を狭くし、自然な目頭のラインにしたい場合' },
          ],
        },
        figureGroups: [
          { heading: 'ライン下げ法——手術プロセス',
            intro: '以前の切開ラインを含む組織を除去し、高い位置の固定を解除して、より低い位置でラインを再固定します。',
            panels: [
              { img: 'assets/revision-low-1.png', maxW: 560, alt: '皮膚と組織の除去', captionLead: '皮膚・組織の除去', caption: '以前の手術による瘢痕組織と切開ラインを除去します。',
                labels: [
                  { x: '15.5%', y: '50.5%', text: '既存のライン' },
                  { x: '47.5%', y: '37%', text: '皮膚・組織の除去' },
                  { x: '77.5%', y: '64%', text: '新しいライン', blue: true },
                ] },
              { img: 'assets/revision-low-2.png', maxW: 560, alt: '剥離して低い位置に再固定', captionLead: '剥離して低い位置に再固定', caption: '癒着を剥離した後、ライン固定位置を下げて新しいラインを作ります。',
                labels: [
                  { x: '74%', y: '45%', text: '解除後の低い固定位置' },
                  { x: '80%', y: '67%', text: '新しいラインの形成' },
                ] },
            ] },
          { heading: '二重ライン法——手術プロセス',
            intro: '古いラインの下に新しいラインを作ります。以前の高い位置の癒着を剥離することで元のラインが薄れ、より低いところに新しいラインが形成されます。',
            panels: [
              { img: 'assets/revision-dbl-1.png', maxW: 560, alt: '古いラインの下に新しいラインを切開', captionLead: '古いラインの下を切開', caption: '既存の高い位置のラインの下に新しいライン切開を行います。',
                labels: [
                  { x: '30.6%', y: '20%', text: '高い位置の癒着' },
                  { x: '24%', y: '46%', text: '新しい低い位置での切開', blue: true },
                ] },
              { img: 'assets/revision-dbl-2.png', maxW: 560, alt: '古い癒着を剥離', captionLead: '古い癒着を剥離', caption: '上方に剥離を進め、古い高い位置のライン癒着をなくします。',
                labels: [
                  { x: '46%', y: '13%', text: '挙筋' },
                  { x: '30%', y: '24.5%', text: '高い位置の癒着' },
                  { x: '30%', y: '46%', text: '解除のため上方に剥離', blue: true },
                  { x: '80.5%', y: '50.5%', text: '古い瘢痕・癒着' },
                ] },
              { img: 'assets/revision-dbl-3.png', maxW: 560, alt: '古いラインが薄れる', captionLead: '古いラインが薄れる', caption: '古い高い位置の癒着が解放されると、以前のラインの跡が薄れます。',
                labels: [
                  { x: '28%', y: '21%', text: '古いラインの跡が薄れる', blue: true },
                ] },
              { img: 'assets/revision-dbl-4.png', maxW: 560, alt: '再癒着により新しいラインが形成される', captionLead: '新しいラインの形成', caption: 'より低い位置で再癒着させることで、新しいラインが形成されます。',
                labels: [
                  { x: '31%', y: '36%', text: '新しい低い位置のライン', blue: true },
                  { x: '67%', y: '60%', text: '新しい癒着' },
                ] },
            ] },
        ],
        benefitGroups: [
          { title: 'メリット', items: [
            '以前の手術で生じた左右差を修正',
            '以前の二重手術で不自然に高くなったラインや、消えかけたラインを修正',
            '失敗した切開手術による傷跡やひきつり、「多重ライン」を改善',
            '削りすぎた皮膚・脂肪により失われた自然な目の形を回復',
            '以前の過剰修正によるドライアイや違和感を修正',
            '以前の手術で眼瞼下垂の修正が不十分だった場合の視野障害を改善',
            '以前の手術の傷跡組織によるつっぱり感や引きつり感を軽減',
          ] },
        ],
        facts: {
          duration: '1～1.5時間',
          anesthesia: '睡眠麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          stayNote: '抜糸を自国で行える場合は、2日目の早い段階での帰国も可能です。',
          price: '約283,000～903,000円',
          priceNote: '切開手術の場合',
        } },
    ],
  },
  {
    slug: 'nose-surgery',
    name: '鼻の整形',
    shot: 'Rhinoplasty photo',
    desc: '鼻筋と鼻先を整え、バランスのとれた顕を作ります。',
    intro: '鼻の手術（鼻整形）は、見た目の改善だけでなく、呼吸問題の解消、事故や先天的トラブルの修正など、目的に応じて鼻の構造を整える施術です。一人ひとり鼻の状態や理想のゴールが異なるため、美容外科の中でも特にオーダーメイド性の高い施術の一つといえます。\n代表的な種類には、美容目的の鼻整形、機能を改善する鼻整形、再手術、鼻尖形成（鼻先整形）、隆鼻術（鼻筋を高くする施術）、鷲鼻矯正などがあります。\n鼻整形は個人の顔立ちに合わせたアプローチが極めて重要であり、誰かに似合う形が必ずしも自分に合うとは限りません。呼吸のしやすさ、お顔全体のバランス、そしてご希望の変化について専門医とじっくり話し合い、ご自身の鼻の構造や皮膚の厚みに適した「現実的な目標」を見極めることが、満足のいく仕上がりへの第一歩となります。',
    heroImg: 'assets/nose-surgery-hero.png',
    more: '鼻の施術を見る',
    tags: ['鼻整形', '鼻尖形成', '再手術'],
    procedures: [
      { slug: 'rhinoplasty', name: '鼻整形', summary: '鼻筋・鼻先・バランスを整えて顔全体のバランスを整えます。', heroImg: 'assets/rhinoplasty-illustration.png',
        about: [
          '鼻は顔全体の調和とバランスにおいて、中心的な役割を果たします。鼻整形は、あなた本来の顔立ちの魅力を活かしながら、鼻の形や大きさ、バランスを整えるオーダーメイドの手術です。\n「ハンプ（鷲鼻）をなめらかにしたい」「鼻筋を高くしたい」「鼻先をシャープにしたい」「左右の非対称を改善したい」といった一人ひとりのご要望に合わせ、全体のバランスがとれた、自信の持てる美しい鼻（フェイスライン）を作ります。また、見た目の改善だけでなく、場合によっては呼吸機能の改善につながることもあります。\nあなたの個性を大切にしながら、顔全体の横顔の美しさを引き立てる、自然で美しい鼻を実現します。',
        ],
        typeGallery: { items: [
          { label: '低い鼻', img: 'assets/nose-type-low.png' },
          { label: '曲がった鼻', img: 'assets/nose-type-deviated.png' },
          { label: '鷲鼻', img: 'assets/nose-type-hump.png' },
          { label: '丸みのある鼻先', img: 'assets/nose-type-bulbous.png' },
        ] },
        cartilageGallery: { items: [
          { label: '耳軟骨（耳介軟骨）', img: 'assets/cartilage-ear.png', desc: '自然な鼻先の形を作ります。切開の痕は目立たず、採取後も耳の形に大きな変化はありません。' },
          { label: '鼻中隔軟骨', img: 'assets/cartilage-septal.png', desc: '鼻先をシャープに仕上げる際によく使用されます。角度を精密に調整できるため、鼻整形で最も基本的な軟骨です。' },
          { label: '肋軟骨', img: 'assets/cartilage-rib.png', desc: '他の軟骨が不足する場合に使用されます。通常第6～9肋軟骨から採取します。' },
          { label: '真皮移植', img: 'assets/cartilage-dermal.png', desc: '以前の手術で皮膚が薄くなっている場合や、シリコンを避けたい場合に、鼻筋の高さ出しに使用されます。' },
        ] },
        benefitGroups: [
          { title: '審美面', items: [
            '鼻筋の形を整える——低く平坦な鼻筋を高くしたり、目立つ鷲鼻を矯正したり',
            '幅が広く・丸みのある鼻先をシャープにして細く整える',
            '幅が広い鼻孔・鼻の基底を細くする',
            '曲がった鼻や左右非対称の鼻をまっすぐに',
            '顔全体の調和・バランス（鼻と顔のバランス）を改善',
            'ご希望に応じて鼻の印象をやわらかくもシャープにも調整可能（例：鼻先の突出度を高めるなど）',
          ] },
          { title: '機能面', items: [
            '鼻中隔弯曲を修正し、気道と呼吸を改善',
            '鼻弁の降下を軽減し、慢性的な鼻詰まりに対応',
            '以前の外傷（鼻の骨折など）による呼吸障害を修正できる場合も',
            '鼻詰まりに関連するイビキを改善し、睡眠の質向上にもつながる場合があります',
            '鼻の構造的な通りにくさが原因でにおいを感じにくくなっていた場合、嗅覚の改善につながることもあります。',
          ] },
        ],
        facts: {
          duration: '1～1.5時間',
          anesthesia: '睡眠麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '7日目', label: 'ギプスと抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          stayNote: '抜糸を自国で行える場合は、2日目の早い段階での帰国も可能です。',
          price: '約283,000～621,000円',
        } },
      { slug: 'revision-rhinoplasty', name: '鼻の再手術', summary: '以前に手術した鼻の機能や形を改善します。', heroImg: 'assets/revision-rhinoplasty-before-after.png',
        about: [
          '以前受けた鼻整形の結果に満足できていない方や、時間の経過による変化が気になる方には、鼻の再手術（修正手術）がおすすめです。見た目の美しさだけでなく、機能面の改善も期待できます。この手術では、過去の手術による左右非対称や不自然なライン、構造的な問題、呼吸のしづらさなどを解消するために、お一人おひとりの状態に合わせた丁寧なデザインを行います。お客様の骨格やご希望をしっかりとカウンセリングしたうえで、よりバランスの取れた自然な仕上がりと、スムーズな通気（鼻呼吸）を叶え、自信を取り戻すお手伝いをいたします。',
        ],
        stabilityGraph: {
          heading: '鼻の再手術はいつ可能か？',
          intro: '再手術を行う際は、最低でも前の手術から6カ月～1年は待つことをお勧めします。',
          points: [
            '再手術を成功させるには、組織が十分に安定していることが不可欠です。',
            '回復のスピードには個人差があるため、丁寧なカウンセリングを通して適切な時期を見極める必要があります。',
            'なお、鼻筋を高くするだけのシンプルな手術であれば、術後3か月ほどで再手術が可能です。',
            'ただし、手術部位の炎症やプロテーゼ（シリコン）のずれ、皮膚の変色によって穿孔（穴があくこと）のリスクがある場合などは、すぐに再手術を行う必要があります。',
          ],
        },
        faq: [
          { q: '初回の鼻整形と同じプロテーゼを使用しますか？', a: '初回の鼻の手術で使用したプロテーゼに特に問題がなければ、再手術時に必ずしも交換する必要はありません。しかし、形への不満以外にも、プロテーゼが透けて見える、炎症が起きているなどの理由で、ほとんどの場合既存のプロテーゼは使われません。' },
          { q: '時間が経つと再手術後の鼻も上向き（ブタ鼻）になりますか？', a: '上向きの鼻先の再手術を、以前と同じ方法で単に鼻先を下げるだけで行うと、時間の経過とともに再び上がってくる傾向があります。しかし、自家軟骨を用いて鼻先をしっかりと下げ、鼻翼軟骨に確実に固定すれば、徐々な上向き化を防ぎ、自然で持続的な改善が可能です。' },
          { q: '鼻の再手術のクリニックを選ぶ際に注意すべき点は？', a: '初回手術による炎症、拘縮、組織変化のため、鼻の再手術はより難しい手術の一つです。以前の結果の原因を正確に診断・分析し、それに合わせて手術を組み立てる必要があります。不安から決断を急ぎすぎず、豊富な再手術経験と深い解剖学的知識を持つ専門医と十分に相談したうえで決めることをお勧めします。' },
        ],
        benefitGroups: [
          { title: '鼻の再手術—メリット', items: [
            '以前の鼻整形で生じた目立つ左右差やラインの不均衡を補正',
            '軟骨の削りすぎによるピンチノーズを修正',
            '前回の施術後に残った鼻筋の凹凸や変形を修復し、自然な美ラインへ',
            '初回手術で上がりすぎてしまった鼻先（アップノーズ・ブタ鼻）の角度を調整',
            '初回で納得がいかなかった横顔（Eライン）の全体バランスを改善',
            '皮下に生じた傷跡組織（瘢痕）による凹凸や変形を滑らかに補正',
            '前回の手術による通気障害を改善し、スムーズな鼻呼吸を回復',
            '軟骨の削りすぎによる「鼻弁（ノーズバルブ）の落ち込み」を修正',
            '過剰に削られた軟骨構造を補強し、見た目の美しさと鼻通りの両方を改善',
            '術後の傷跡や内部構造の変化による慢性的な鼻詰まりを解消',
          ] },
        ],
        facts: {
          duration: '1～1.5時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '7日目', label: 'ギプスと抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約395,000～1,073,000円',
        } },
      { slug: 'functional-rhinoplasty', name: '機能改善のための鼻整形', summary: '見た目を保ちながら構造上の問題を修正し、呼吸問題を改善します。', heroImg: 'assets/functional-rhinoplasty-illustration.png',
        about: [
          '快適に呼吸できることは、生活の質に直結します。機能改善のための鼻整形は、鼻の気流を改善し、呼吸困難や鼻詰まりを引き起こす可能性のある構造上の問題を修正するための施術です。鼻中隔湾曲や鼻の土台構造の弱化などの問題に対応し、自然な見た目を保ちながら適切な鼻の機能を回復します。',
        ],
        septumFigure: {
          heading: '機能改善のための鼻整形のポイント：鼻中隔弯曲',
          para: '鼻中隔（左右の鼻孔を隔てる壁）が大きく曲がっていると、空気の通り道が狭くなり鼻通りが悪化します。この曲がりによって片側または両道の鼻の粘膜組織が圧迫・肥大化し、慢性的な鼻詰まりの原因となります。\n鼻詰まりが長期化すると鼻粘膜や神経が刺激され、睡眠障害や慢性副鼻腔炎（蓄膿症）、いびき、睡眠時無呼吸、頭痛など、適切な治療を要する症状を引き起こす恐れがあります。',
          panels: [
            { title: '鼻中隔弯曲', sub: '鼻通りの悪化・慢性的な鼻詰まり', img: 'assets/septum-deviated.png', caption: '‹ 鼻中隔弯曲 ›' },
            { title: '正常な鼻', sub: '左右対称な鼻通り・鼻詰まりなし', img: 'assets/septum-normal.png', caption: '‹ 正常な鼻の構造 ›' },
          ],
        },
        benefitGroups: [
          { title: '機能改善のための鼻整形—メリット', items: [
            '鼻中隔弯曲を矯正し、片側または両側の鼻通りを改善',
            '鼻中隔の手術だけでは改善しにくい慢性的な鼻詰まりの原因「内側鼻弁（ノーズバルブ）の倒れ込み」を修復',
            '息を吸ったときに小鼻が落ち込む「外側鼻弁（ノーズバルブ）の凹み・倒れ込み」を修復',
            '薬物療法では改善しない慢性的な鼻閉塞・鼻詰まりを緩和・解消',
            '下鼻甲介手術と併せて行うことで、粘膜肥大による気流の乱れを改善',
            '鼻骨折などの外傷によって生じた内部構造の変形と、それに伴う呼吸困難を改善',
            '鼻閉塞が原因で起こる「いびき」や「軽度の睡眠時無呼吸・睡眠障害」を軽減',
            '軟骨移植（スプレッダーグラフト等）により、脆弱化した鼻の側壁を構造的に補強・回復',
          ] },
        ],
        facts: {
          duration: '1～1.5時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '7日目', label: 'ギプスと抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約395,000～1,073,000円',
        } },
      { slug: 'tip-plasty', name: '鼻尖形成', summary: '鼻先の形や高さ、シャープなラインを美しく整えます。', heroImg: 'assets/tip-plasty-illustration.png',
        about: [
          '「鼻全体の形には満足しているけれど、鼻先だけを整えたい」という方に適した施術です。鼻先の形を整え、高さや立体感、左右のバランスを改善することに特化しています。丸みがある・下がっている・幅が広い・立体感がないといったお悩みも、自然さを損なわずに洗練された印象へと仕上げます。',
        ],
        faq: [
          { q: '鼻の手術後は鼻先が必ず下がりますか？', a: '術後の腫れが引く過程で、最初の1ヶ月間は鼻先が下がったように見える場合があります。しかし、6ヶ月経っても改善されない場合は、鼻内部の軟骨などの補強不足や、皮膚の厚み・弾力などが原因です。アリアでは、時間の経過による鼻先の後戻りを防ぐため、緻密な執刀プランを立てて施術を行っています' },
          { q: '鼻尖形成後、鼻先は硬く感じますか？', a: 'アリアでは人工物を一切使わず、自家組織のみでスマートな鼻先をつくります。術後も見た目・触り心地ともに自然で柔らかく、異物感がありません。人工物を挿入しないため、異物反応や炎症のリスクを最小限に抑えられます。' },
        ],
        benefitGroups: [
          { title: '鼻尖形成—メリット', items: [
            '鼻筋の美しさはそのままに、丸みのある団子鼻をスッキリ整える',
            '鼻先に高さと立体感をプラスし、よりメリハリのあるシャープな印象へ',
            '広がった鼻翼軟骨（小翼軟骨）を補強・修正し、幅の広い鼻先をきゅっと細くする',
            '笑ったときに下を向いてしまう『垂れ鼻・矢印鼻』を改善',
            '鼻先の角度を繊細に調整し、過度な垂れ鼻や上向き（ブタ鼻）をバランスよく改善',
          ] },
        ],
        facts: {
          duration: '1時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '7日目', label: 'ギプスと抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約305,000～542,000円',
        } },
      { slug: 'nose-bridge-augmentation', name: '鼻筋高さ修正', summary: 'プロテーゼや軟骨移植を使い、低くのっぺりとした鼻筋を高くします。', heroImg: 'assets/nose-bridge-augmentation-illustration.png',
        about: [
          'すっきりと整った鼻筋は、お顔全体のバランスを向上させ、洗練された美しいEライン（横顔）をつくり出します。「鼻筋高さ修正」は、鼻筋に適度な高さと立体感を与え、お顔全体と美しく調和する立体的な鼻へと導く施術です。お一人おひとりの骨格に合わせたオーダーメイドの手術法と最適な素材を用いることで、やりすぎ感のない自然な高まりと美しい輪郭を実現します。理想の横顔と存在感のある美しさを叶え、ご自身の魅力をさらに引き出します。',
        ],
        stepGallery: {
          heading: '垂れた鼻先の修正——手術方法',
          intro: [
            '下に垂れた長い鼻先は、老けた印象を与えがちです。',
            '軟骨組織が豊富なケースが多く、これは大掛かりな手術をせずとも良い結果を得やすい好条件です。',
            '鼻先の軟骨の向きを変え、余分な部分があれば整えます。',
          ],
          steps: [
            { n: '1', img: 'assets/longnose-step-1.png', caption: '手術前' },
            { n: '2', img: 'assets/longnose-step-2.png', caption: '鼻翼軟骨を引き上げて縫合します。' },
            { n: '3', img: 'assets/longnose-step-3.png', caption: '鼻中隔延長（移植）を行い、軟骨を上方へ移動・固定します。' },
            { n: '4', img: 'assets/longnose-step-4.png', caption: '鼻先下制筋を処理し、術後の垂れや後戻りを防ぎます。' },
            { n: '5', img: 'assets/longnose-step-5.png', caption: '必要に応じてプロテーゼで鼻筋を高くし、自家軟骨を追加して鼻先の角度や高さを整えます。' },
            { n: '6', img: 'assets/longnose-step-6.png', caption: '手術後' },
          ],
        },
        benefitGroups: [
          { title: '鼻筋高さ修正—メリット', items: [
            '低く平坦な鼻筋に、自然な高さをプラス',
            '眉間から鼻先へ真っ直ぐ伸びる、メリハリのある美しい鼻筋ラインを形成',
            'のっぺり感を解消し、立体感のある洗練された横顔へ',
            'お顔全体のバランスを整え、馴染みの良い印象に仕上げる（アジア人の方に非常に人気の手術です）',
            '鼻筋中央にハイライトを作り、幅広に見える印象を和らげる',
            '鼻先形成と組み合わせることで、より自然でバランスの取れた仕上がりに',
          ] },
        ],
        facts: {
          duration: '1時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '7日目', label: 'ギプスと抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約305,000～542,000円',
        } },
      { slug: 'hump-reduction', name: '鷲鼻矯正', summary: '鼻筋のハンプを削って、すっきりとした鼻筋を作ります。', heroImg: 'assets/hump-reduction-illustration.png',
        about: [
          '鼻筋のハンプが気になる方には、なめらかでバランスの取れた横顔を叶える「鷲鼻矯正」がおすすめです。突出した余分な骨や軟骨を丁寧に削って鼻筋を整えることで、ゴツゴツとした印象を和らげ、洗練されたやわらかな鼻筋へと仕上げます。お顔本来の魅力を生かしながら全体との調和を整え、美しく上品な横顔をつくります。',
        ],
        benefitGroups: [
          { title: '鷲鼻矯正—メリット', items: [
            '鼻筋の目立つ隆起（ハンプ）を削り、なめらかに整える',
            '眉間から鼻先まで、すっきりと美しいストレートラインを形成',
            '鷲鼻・かぎ鼻のゴツゴツ感を和らげ、美しく上品な横顔（Eライン）へ',
            '突出した部分を自然に整えることで、鼻全体の存在感や主張を軽減',
            '男性的な角ばった印象を解消し、柔らかく洗練された顔立ちに仕上げる',
          ] },
        ],
        facts: {
          duration: '1時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '7日目', label: 'ギプスと抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約305,000～542,000円',
        } },
    ],
  },
  {
    slug: 'anti-aging',
    name: 'アンチエイジング手術',
    shot: 'Facelift photo',
    desc: '高度な手技で顔のラインをリフトし、若々しさを取り戻します。',
    heroImg: 'assets/anti-aging-facelift.png',
    introBlocks: [
      { heading: 'アンチエイジング手術とは？', text: 'アンチエイジング手術とは、たるみやシワ、ボリュームの減少といった加齢のサインを目立たなくし、若々しくスッキリした印象を取り戻すための手術です。外科的な手術から切らない施術まで幅広くあり、より自然で長持ちする効果を得るために組み合わせることもあります。' },
      { heading: 'ご自身に適しているか', text: 'アンチエイジング治療は「全く別の顔になる」ためのものではなく、「本来の自分らしさを保ちながら、生き生きとした若々しさを取り戻す」ための施術です。最適な治療法は、お肌の状態や気になる部位、許容できるダウンタイムの期間によって一人ひとり異なります。単独の施術が良いか、複数の施術を組み合わせるのが効果的か、専門医とのカウンセリングを通して最適なお手入れプランを立てていきましょう。' },
    ],
    more: 'アンチエイジング施術を見る',
    tags: ['フェイスリフト', '眉上切開', 'ネックリフト'],
    procedures: [
      { slug: 'forehead-lift', name: '額リフト', summary: '重く垂れ下がった額を引き上げ、深く刻まれた横シワを軽減します。', heroImg: 'assets/forehead-lift-illustration.png',
        about: [
          '額リフトでは、髪の生え際に沿った小さな切開から、額と眉の組織を丁寧を引き上げ・再配置します。これにより額のシワが目立たなくなり、下がった眉が引き上がることで、自然な表情を保ちながら明るく若々しい印象へと導きます。',
          '額リフトは、眉を引き上げ、額のシワや顔の上半分のたるみを改善する施術です。滑らかで張りがあり、すっきりとした若々しい表情に仕上げます',
        ],
        techHeading: '手術の流れ',
        techniques: [
          { title: '', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングと手術計画——担当医が額の状態、眉の位置、皮膚の弾力性、顔全体のバランスを評価し、カスタム施術プランを立てます。' },
              { text: '麻酔——快適さを最大限確保するため、通常は局所麻酔＋睡眠麻酔または全身麻酔で行われます。' },
              { text: '目立たない切開——髪の生え際や頭皮内に小さな切開を行い、目立たないようにします。' },
              { text: 'リフトと再配置——深部組織と額の皮膚をやさしく持ち上げて再配置し、眉を挙上し、額のシワをなめらかにし、たるみを軽減します。' },
              { text: '縫合——切開部を丁寧に縫合し、持ち上げた組織を固定して満足のいく結果を得られます。' },
            ] },
          ] },
        ],
        stepGallery: {
          heading: '額リフト——手術方法',
          cols: 4,
          aspect: '833 / 675',
          intro: [
            '髪の生え際の中に隠れる小さな切開から行う低侵襲な内視鏡手術です。たるんだ額の組織を丁寧に再配置し、自然で若々しい印象を長く維持できます。',
          ],
          steps: [
            { n: '01', img: 'assets/forehead-step-1.png', caption: '髪の生え際内に1～2cmの切開を行い、目立つ傷跡を残しません。' },
            { n: '02', img: 'assets/forehead-step-2.png', caption: '切開部から内視鏡を挿入し、額の層を均一に剥離します。' },
            { n: '03', img: 'assets/forehead-step-3.png', caption: 'たるんだ部分を上方に引き上げた後、エンドタインで力を分散させて固定します。' },
            { n: '04', img: 'assets/forehead-step-4.png', caption: '以前よりも若々しい顔立ちを長持ちする効果とともに実現できます。' },
          ],
        },
        benefitGroups: [
          { title: '額リフト—メリット', items: [
            '下がった眉を持ち上げる',
            '額のシワや凹凸を軽減',
            '眉間の縦ジワを改善',
            'よりスッキリした若々しい印象に',
            '目立たない切開・最小限の傷跡',
            '結果が長持ちする',
          ] },
        ],
        facts: {
          duration: '1～2時間',
          anesthesia: '鎮静麻酔（セデーション）または全身麻酔',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約384,000～678,000円',
        } },
      { slug: 'full-facelift', name: '切開リフト（フェイスリフト）', summary: 'お顔の深層から引き上げ、中顔面・フェイスライン・首元をすっきり整えます。', heroImg: 'assets/full-facelift-illustration.png',
        about: [
          '切開リフトは、頬・フェイスライン・首を支える皮膚の下の深層組織「SMAS（表在性筋膜）」を引き上げ、元の位置に再配置する高度な若返り施術です。加齢に伴いSMAS層が徐々に下垂すると、頬のたるみや口元のもたつき（ブルドック顔）、深いほうれい線、首のシワ・たるみの原因となります。',
          '切開リフトは、単に皮膚表面を引き伸ばすのではなく、顔の深層構造そのものを若々しい位置へと引き上げるため自然で持続性の高い効果をもたらします。',
        ],
        stepGallery: {
          heading: '切開リフト手術の方法',
          aspect: '565 / 540',
          intro: [
            'もみあげの目立たない部分から耳の後ろにかけて最小限の切開を行い、SMAS（表在性筋膜）層からしっかりと引き上げることで、ハリと立体感のある顔立ちを長期間キープします。',
          ],
          steps: [
            { n: '01', title: '手術前', img: 'assets/facelift-step-1.png', caption: '顔と首にシワとたるみが見られます。' },
            { n: '02', title: '切開デザイン', img: 'assets/facelift-step-2.png', caption: 'もみあげの目立たない部分から耳の後ろにかけてたるみの範囲に沿って切開します。' },
            { n: '03', title: 'SMAS層の剥離と靭帯切離', img: 'assets/facelift-step-3.png', caption: 'SMAS層までしっかり引き上げ、余分な皮膚を切除します。' },
            { n: '04', title: 'リフトアップと余分な皮膚の除去', img: 'assets/facelift-step-4.png', caption: 'SMAS層までしっかり引き上げ、余分な皮膚を除去します。' },
            { n: '05', title: '切開部の縫合と消毒', img: 'assets/facelift-step-5.png', caption: '腫れを抑えリフト効果を高めるため、切開部を丁寧に繊細に縫合します。' },
            { n: '06', title: '手術後', img: 'assets/facelift-step-6.png', caption: '顔のたるみとシワが改善されています。' },
          ],
        },
        splitCompare: {
          heading: 'たるみの程度による切開・リフト範囲',
          intro: 'たるみ具合に合わせて切開・剥離範囲を調整することで、より確実なリフトアップ効果が得られます——初期のたるみには限定的なアプローチ、進行したたるみにはより広範囲なアプローチを行います。',
          leftTitle: 'ミニ切開リフト（MACS）',
          rightTitle: '切開リフト',
          incisionLeftImg: 'assets/compare-mini-incision.png',
          incisionRightImg: 'assets/compare-full-incision.png',
          incisionLeft: 'もみあげから耳周辺にかけて3～4mm。',
          incisionRight: 'こめかみから耳の周り、髪の生え際の後ろまで。',
          dissectionLeftImg: 'assets/compare-mini-dissection.png',
          dissectionRightImg: 'assets/compare-full-dissection.png',
          ageLeft: '30代～40代',
          ageRight: '50代以上',
          liftLeft: '頬のたるみ、ほうれい線、頬の垂れさがり、二重顎。',
          liftRight: '頬のたるみ、ほうれい線、頬の垂れさがり、二重顎、目元のシワ、首のシワ、顔全体のリフト。',
          candidatesLeft: '糸リフトで十分な効果が得られなかった方、または輪郭手術後に皮膚のたるみがある若い患者様。',
          candidatesRight: 'しっかりとしたリフトアップが必要な方、または一般的なリフト施術では十分な改善が得られない方。',
        },
        benefitGroups: [
          { title: '切開リフト—メリット', items: [
            '頬のたるみ・頬肉を引き上げる',
            '深いほうれい線やマリオネットラインを和らげる',
            'フェイスラインと首のメリハリを改善',
            '中顔面・下顔面をスッキリさせられる',
            '「突っ張った」印象のない自然な仕上がり',
            '長持ちする若返り効果',
            '目立ちづらい切開ライン',
          ] },
        ],
        facts: {
          duration: '3～4時間',
          anesthesia: '鎮静麻酔（セデーション）または全身麻酔',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約1,128,000～1,692,000円',
        } },
      { slug: 'mini-facelift', name: 'ミニフェイスリフト（ミニ切開リフト）', summary: '下顔面の初期のたるみに対応する、体への負担が少ないリフトです。', heroImg: 'assets/mini-facelift-illustration.png',
        about: [
          'ミニ切開リフトは、下顔面・フェイスラインの初期の加齢兆候に対応する、より負担が少ないたるみ改善のための手術です。顔の深層組織をリフトアップ・引き締めることで、軽度～中程度のたるみを改善し、頬の垂れさがりを軽減し、従来の切開リフトより短い回復期間でより若々しくスッキリした印象を取り戻せます。',
        ],
        idealFor: {
          heading: 'こんな方におすすめ',
          items: [
            '軽度～中程度の顔のたるみ',
            '初期の頬のたるみ',
            'フェイスラインのメリハリの低下',
            '従来の切開リフトよりダウンタイムの短いたるみ改善手術をお求めの方',
            '劇的な変化よりも自然で控えめな改善を求める方',
          ],
        },
        dualFeature: {
          heading: '傷跡の負担を抑えながら、確かなリフト効果を',
          intro: [
            'ミニ切開リフト（MACS）は、髪の生え際から耳の前までの小さな切開を通じて、皮膚のたるみの根本原因であるSMAS（表在性筋膜組織）層を引き上げ、加齢でたるんだ皮膚の弾力とシワを改善します。',
            '切開リフトより切開範囲が小さいため、傷跡の負担が少なく、日常生活への復帰も早くなります。',
          ],
          items: [
            { img: 'assets/mini-feature-layers.png', title: '皮膚のたるみを根本から改善', desc: 'SMAS層（真皮下層から筋肉まで）を一括でリフトするのではなく、この方法では軟部組織を皮膚・脂肪・筋肉の層に分けてそれぞれ個別にリフトします——表皮・真皮・脂肪・筋肉層にわたるたるみを根本的に改善します。' },
            { img: 'assets/mini-feature-incision.png', title: '最小限の生え際切開', desc: '髪の生え際に沿った最小限の切開で手術を行うため、目立つ傷跡は最小限に抑えられます。傷跡の程度には個人差がありますが、通常3カ月ほどでほとんど気にならなくなります。' },
          ],
        },
        benefitGroups: [
          { title: 'ミニ切開リフト—メリット', items: [
            '軽度～中程度の頬のたるみを改善',
            'フェイスラインにメリハリをつける',
            '下顔面のたるんだ組織を持ち上げる',
            '自然な見た目の手術',
            '切開が小さくダウンタイムも短い',
            '目立たない傷跡',
            '長持ちする結果',
          ] },
        ],
        facts: {
          duration: '1.5～2時間',
          anesthesia: '鎮静麻酔（セデーション）または全身麻酔',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約790,000～1,354,000円',
        } },
      { slug: 'brow-lift', name: '眉上切開', summary: '下がったまぶたを持ち上げ、目元を明るく見せ、疲れた印象を軽減します。', heroImg: 'assets/brow-lift-illustration.png',
        about: [
          'ブローリフトは、髪の生え際に隠れた小さな切開を通じて、眉の位置をやさしく持ち上げ、額のシワを目立たなくします。眉をより若々しい位置に戻すことで、自然な表情を保ちながら、明るく休息感のある印象を作ります。',
        ],
        techHeading: '施術の流れ',
        techniques: [
          { title: '', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングと顔の評価——担当医が眉の位置、額のシワ、皮膚の弾力性、顔全体のバランスを評価し、個別の施術プランを立てます。' },
              { text: '麻酔——快適さのため、通常は局所麻酔＋鎮静麻酔または全身麻酔で行われます。' },
              { text: '目立たない切開——髪の生え際や頭皮内に丁寧に小さな切開を行い、目立たないようにします。' },
              { text: '眉の再配置——深部の額の組織をやさしく持ち上げて再配置し、眉を挙上し、目の上の重さを軽減し、額のシワや眉間のシワをなめらかにします。' },
              { text: '組織の固定と縫合——持ち上げた組織を新しい位置に固定し、良好な治癒と自然な仕上がりのため丁寧に切開部を縫合します。' },
            ] },
          ] },
        ],
        stepGallery: {
          heading: 'ブローリフト手術の方法',
          cols: 2,
          aspect: '864 / 620',
          intro: [
            '髪の生え際の小さな切開と内視鏡を併用することで、額と眉間のシワを改善できます。同時に、下がった眉の位置や角度も調整でき、暗く厳しい印象を明るくやさしい印象に変えます。',
          ],
          steps: [
            { title: '生え際に3～5カ所の切開', img: 'assets/browlift-step-1.png', caption: '髪の生え際内の3～5カ所に小さな切開を行います。' },
            { title: '内視鏡による額の剥離', img: 'assets/browlift-step-2.png', caption: 'フルHD内視鏡デバイスを使用し、眉のエリアから額全体を剥離します。' },
            { title: 'リフト後の固定と縫合', img: 'assets/browlift-step-3.png', caption: '緩んだ額の皮膚と筋肉を上方に持ち上げ、エンドタインで固定・縫合します。' },
            { title: 'シワが改善し明るくなった額と目元', img: 'assets/browlift-step-4.png', caption: 'シワの寄ったたるんだ額が改善され、明るくメリハリのある目元になります。' },
          ],
        },
        benefitGroups: [
          { title: 'ブローリフト—メリット', items: [
            '下がった・重たい眉を持ち上げる',
            '目元を開いて明るくする',
            '額のシワを軽減',
            '眉間の縦ジワを和らげる',
            'より若々しくリフレッシュした印象に',
            '目立たない切開・最小限の傷跡',
            '長持ちする結果',
          ] },
        ],
        facts: {
          duration: '1.5～2時間',
          anesthesia: '鎮静麻酔（セデーション）＋局所麻酔',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約564,000～903,000円',
        } },
      { slug: 'neck-lift', name: 'ネックリフト', summary: 'たるんだ皮膚や筋を引き締め、すっきりとした首元を作ります。', heroImg: 'assets/neck-lift-illustration.png',
        about: [
          'ネックリフトは、広頸筋を引き締め、余分な脂肪を除去し、たるんだ皮膚をなくすことで首をスッキリさせます。よりなめらかな首のライン、メリハリのあるフェイスライン、自然でバランスの取れた若々しい印象を実現します。',
        ],
        techHeading: '手術の流れ',
        techniques: [
          { title: '', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングと評価——医師が首元、フェイスライン、皮膚の弾力、お顔全体のバランスを診察し、お一人おひとりに合わせた最適な施術プランをご提案します。' },
              { text: '麻酔——施術中の痛みやストレスを抑え、快適に受けていただけるよう、通常は局所麻酔と睡眠麻酔（または全身麻酔）を組み合わせて行います。' },
              { text: '切開（傷跡の配慮）——耳の後ろや顎の下など、目立ちにくい部位を小さく切開します。傷跡を最小限に抑えながら、首の深部組織へアプローチします。' },
              { text: '筋肉（広頸筋）の引き締め——首のたるみの原因となる筋肉（広頸筋）を引き締めて適切な位置に再固定し、美しい首元のラインを形成して縦じわを目立たなくします。' },
              { text: '脂肪除去・ライン形成——顎下や首周りの余分な脂肪を取り除いて整え、すっきりと洗練された横顔へ導きます。' },
              { text: '皮膚の引き上げ・縫合——たるんだ皮膚を優しく引き上げて余分な部分を処理し、傷跡が綺麗に仕上がるよう丁寧・緻密に縫合します。' },
            ] },
          ] },
        ],
        figureNote: {
          heading: '三重固定によるすっきりとしたフェイスライン',
          img: 'assets/neck-lift-incision.png',
          intro: [
            '広頸筋を三重に固定することで、すっきりとシャープなフェイスラインを形成します。\nまず中央で広頸筋を結び合わせ、さらに耳の後ろでしっかりと固定することで、引き締め効果を二重に高めます。これにより二重顎を効果的に改善し、キュッと引き締まった若々しいフェイスラインへと導きます。',
          ],
          extra: {
            heading: '追加手術',
            text: '二重顎のたるみが強い（重度の）場合は、耳の横（側頭部〜耳前部）に約1cmの追加切開を行います。広頸筋を耳の横でも固定することで、より強力な引き締め効果を発揮し、さらにすっきりと洗練されたフェイスラインへと導きます。',
          },
        },
        benefitGroups: [
          { title: 'ネックリフト—メリット', items: [
            'メリハリのあるラインへ',
            '皮膚のたるみをすっきりと改善',
            '首元のたるみ・シワを改善',
            '首の縦じわを目立たなく軽減',
            'なめらかで若々しい横顔のラインへ',
            '目立ちにくい切開で傷跡を最小限に',
            '効果が長く続く持続力',
          ] },
        ],
        facts: {
          duration: '1.5～2時間',
          anesthesia: '鎮静麻酔（セデーション）または全身麻酔',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約564,000～903,000円',
        } },
      { slug: 'forehead-reduction', name: '額縮小', summary: '広い額を下げて、狭くしバランスよく整えます。', heroImg: 'assets/forehead-reduction-illustration.png',
        about: [
          '生え際の位置の高さや広い額でお悩みの方には、額縮小がおすすめです。\nこの手術は、眉から生え際までの距離を縮めることで生え際を下げ、お顔全体のバランスを整えてより調和の取れた自然な印象へと導きます。',
          'フェイスラインをより美しく整えることで、お顔の左右バランスを高め、本来の魅力を引き立てます。\n全体的にやわらかく若々しい印象を与え、自信に満ちた自然で美しい表情へと導きます。',
        ],
        techHeading: '手術の流れ',
        techniques: [
          { title: '', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングと生え際のデザイン——担当医が額の高さ、生え際のライン、頭皮の柔軟性、顔全体のバランスを確認します。その上で、顔立ちに合わせ生え際と額の高さをデザインします。' },
              { text: '麻酔——手術中の快適さを確保するため、通常は全身麻酔または局所麻酔＋睡眠麻酔で行われます。' },
              { text: '生え際に沿った切開——もともとの生え際に沿って丁寧に切開を行い、治癒後は傷跡が生え際で隠れるようにします。' },
              { text: '生え際の位置を下げる——頭皮をやさしく緩めて前方へ引き下げ、額の広さをコンパクトに整えます。移動させる幅は、顔の骨格やご希望の仕上がりに合わせて最適な量を決定します。' },
              { text: '縫合——新しい位置に頭皮を固定し、傷跡が目立たないよう丁寧に切開部を縫合します。' },
            ] },
          ] },
        ],
        stepGallery: {
          heading: '額縮小——手術の手順',
          cols: 3,
          aspect: '171 / 150',
          intro: [
            '生え際の位置を下げ額を縮小させる手順を段階ごとに紹介します——マーキングと皮膚切除から深部筋膜の吊り上げ、丁寧な三層縫合まで分かりやすく解説します。',
          ],
          steps: [
            { title: 'マーキング', img: 'assets/fr-step-1.png', caption: '眼窩上神経を傷つけないよう配慮しながら、施術部位を繊細にデザイン・マーキングします。' },
            { title: '皮膚切除', img: 'assets/fr-step-2.png', caption: '毛嚢（毛根）を温存する45度の角度技術で、決まった量の皮膚を精密に除去します。' },
            { title: '頭皮の剥離', img: 'assets/fr-step-3.png', caption: '頭皮を繊細かつ精密に剥離し、下方向に引き下げます。' },
            { title: '深部固定', img: 'assets/fr-step-4.png', caption: '特殊な体内に吸収される糸を使用し、深部筋膜（頭皮の深い層）をしっかりと固定します。' },
            { title: '三層縫合', img: 'assets/fr-step-5.png', caption: '最も深い層から皮膚表面まで、丁寧に三層にわたって縫合します。' },
            { title: '術後', img: 'assets/fr-step-6.png', caption: '生え際が下がり、よりバランスの取れた額になります。' },
          ],
        },
        benefitGroups: [
          { title: '額縮小—メリット', items: [
            '高すぎる・後退した生え際を下げることで、額の広さをコンパクトに整える',
            '広すぎる額のバランスを整え、顔全体の印象を調和させる',
            '顔の縦の三分割（黄金比）を意識し、顔上下のバランスを美しく整える',
            '左右非対称な生え際を、なめらかで自然なラインに整える',
            '直線的・後退気味な生え際を丸みのあるデザインに整え、より若々しい印象へと導く',
            '額の広さによる面長な印象を和らげる',
          ] },
        ],
        facts: {
          duration: '1～2時間',
          anesthesia: '鎮静麻酔（セデーション）または全身麻酔',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約452,000～790,000円',
        } },
      { slug: 'face-neck-liposuction', name: '顔・顎下の脂肪吸引', summary: '顎下・顔の余分な脂肪を吸引し、すっきりとしたフェイスラインにします。', heroImg: 'assets/face-neck-lipo-illustration.png',
        about: [
          '顎の下やフェイスライン、首元の落ちにくい脂肪は、ダイエットや健康的な生活をしていても、すっきりしない印象の原因になりがちです。顔・首の脂肪吸引は、気になる余分な脂肪をやさしく取り除き、フェイスラインと首元のラインをきれいに整えて、スリムで洗練された印象を作る施術です。',
          'フェイスラインをキュッと引き締め、二重顎をもたつかせないことで、お顔全体のバランスがぐっと良くなります。横顔にもきれいなメリハリが生まれ、すっきりシャープな首元と、自信の持てる笑顔が手に入ります。',
        ],
        techHeading: '施術の流れ',
        techniques: [
          { title: '', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングと顔のバランス——担当医が顔の構造、皮膚の弾力性、余分な脂肪のある部位を評価し、審美的目標に合わせた個別の手術プランを立てます。' },
              { text: '麻酔——手術範囲に応じて、通常は局所麻酔＋睡眠麻酔または全身麻酔で行われます。' },
              { text: '小さく目立たない切開——顎の下や耳の後ろなど目立たない場所に小さな切開を行います。' },
              { text: '脂肪除去とライン調整——切開部位から細いカニューレ（専用の吸引管）を挿入し、顔・顎下の余分な脂肪を除去します。丁寧な吸引で輪郭を整え、自然で美しいラインを作ります。' },
              { text: '縫合と圧迫バンド——傷口を縫合し、圧迫バンドを着用します。腫れを最小限に抑え、理想のフェイスラインの定着を促します。' },
            ] },
          ] },
        ],
        stepGallery: {
          heading: '顔の脂肪吸引プロセス',
          cols: 4,
          aspect: '688 / 1088',
          intro: [
            '顔の脂肪吸引では、顎の下・耳の後ろ・こめかみなど傷跡を隠せる部位から均一に脂肪を吸引します。出血・腫れ・神経損傷を抑えるため、専用の細いカニューレで繊細な脂肪吸引を行います。',
          ],
          steps: [
            { title: '術前', img: 'assets/lipo-step-1.png', caption: '残す脂肪と除去する脂肪を考慮しながらプランを決めます。' },
            { title: 'マイクロ切開と溶液注入', img: 'assets/lipo-step-2.png', caption: '耳の後ろと顎の下をミリ単位で微小切開し、専用の液を注入します。' },
            { title: '顔の脂肪吸引', img: 'assets/lipo-step-3.png', caption: 'マイクロカニューレを使用し、細かく脂肪吸引を行います。' },
            { title: '術後', img: 'assets/lipo-step-4.png', caption: '顔用の圧迫バンドで手術部位を安定させます。' },
          ],
        },
        benefitGroups: [
          { title: '顔・顎下の脂肪吸引—メリット', items: [
            '顎下・首の余分な脂肪を軽減',
            'フェイスラインにメリハリを持たせる',
            'よりスリムな顔立ちに',
            '顔と首の境目を作り、輪郭を改善',
            '負担の少ない手術',
            '小さく目立たない切開',
            '健康的な生活習慣で長持ちする結果',
          ] },
        ],
        facts: {
          duration: '30分～1時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後処置' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約169,000～452,000円',
        } },
    ],
  },
  {
    slug: 'facial-contouring',
    name: '輪郭整形・顎整形',
    shot: 'Contouring photo',
    desc: 'スリムなシルエットと、やわらかで洗練されたフェイスラインを。',
    more: '輪郭整形を見る',
    tags: ['Vライン', '両顎手術', '頬骨縮小'],
    heroImg: 'assets/facial-contouring-sketch.png',
    heroFit: 'contain',
    introBlocks: [
      { heading: '輪郭整形・顎手術とは？', text: '輪郭整形とは、顔の構造——特に顎・あご先・頬——を再形成し、顔のバランス・左右非対称を改善する一連の手術です。純粋に審美的な目的のものも、噛み合わせなどの機能的な問題に対応するものもあり、負担が少ない手術から骨・組織の大規模な再形成まで幅広くあります。目標は、よりなめらかでバランスの取れた、Vラインや卵型に近い顔の形を作ることです——審美的な改善のためにも、機能的な噛み合わせ・顎の位置の問題を修正するためにも用いられます。' },
      { heading: '主なトレードオフ', text: '神経近くの骨を削る、比較的リスクの高い美容施術の一つで、軟部組織の手術より回復に時間がかかり（数カ月）、技術力が重要なため、経験豊富な専門医に手術を受けることが必要です。' },
    ],
    detail: {
      benefitGroups: [
        { title: '輪郭整形のメリット', items: [
          'エラや骨幅を縮小し、横幅のある四角い下顔面をスリムに改善',
          '突出したあごを下げたり、後退したあごを前に出す（オトガイ形成）',
          '男性的でボリュームのあるフェイスラインを、洗練されたVラインへ',
          '顔の左右非対称（ゆがみ）を整える',
          '頬骨の張りを抑え、すっきりとした卵型のラインへ',
          '上顔面・中顔面・下顔面全体のバランスを改善',
          '二重あごやたるみが気になる場合、あご下の脂肪吸引やあご削りとの併用で解消',
        ] },
        { title: '顎整形のメリット', items: [
          '顎矯正手術との併用で、噛み合わせの乱れ（不正咬合）を根本から改善',
          '骨格の左右非対称やズレによる咀嚼機能をスムーズに改善',
          '骨格の位置関係を整えることで、発音のしづらさや滑舌の改善が期待できる',
          'あごを適正位置に前進させて気道を広げ、睡眠時無呼吸症候群（SAS）の軽減に繋がることも',
          '正しい噛み合わせへの改善により、顎関節（TMJ）へかかる負担を和らげる',
        ] },
      ],
      risks: {
        title: '事前に知っておくべきリスク・注意点',
        items: [
            '⚠️ 神経損傷や痺れ（麻痺）のリスク 神経の近くにある骨を削るため、美容施術のなかでも比較的身体への負担やリスクが高い施術です。（下歯槽神経の損傷による痺れや違和感など）',
            '⚠️ 長めのダウンタイム 脂肪や皮膚などの軟部組織への施術に比べ、回復に時間を要します。数週間強い腫れが続き、最終的な仕上がり（完成）までに3〜6ヶ月ほどかかる場合があります。',
            '⚠️ 高度な技術と専門医の経験が必要 神経・歯根・主要な血管が集まる繊細な部位のため、経験豊富な専門医による執刀が必要です。',
            '⚠️ 左右差や再手術のリスク 左右非対称やラインの不均一、希望通りの変化が得られないことによる修正・再手術が必要になるケースがあります。',
            '⚠️ 複合施術による身体的負担の増加 エラ・あご先・頬骨などを組み合わせた複合施術（輪郭3点など）は、手術の難易度が高くなりダウンタイムも長くなります。',
            '⚠️ 術前・術後の歯列矯正（1年以上）が必要な場合も 噛み合わせの改善など機能的な問題（顎矯正手術など）を伴うケースでは、術前・術後に1年以上の歯列矯正期間が必要になることが多くあります。',
          ],
      },
    },
    procedures: [
      { slug: 'v-line-surgery', name: 'Vライン手術', summary: '幅広のあごや四角いフェイスラインを整え、スリムなVラインへ導きます。', heroImg: 'assets/v-line-illustration.png',
        about: [
          'すっきりとしたフェイスラインは、顔全体の調和と美しさを一段と引き立てます。Vライン手術は、フェイスラインとあご先の形状を整えることで下半顔をスリムにし、やわらかく洗練されたV字型の輪郭を作る施術です。',
          '横幅のある四角いあごの印象を和らげ、顔全体のバランスを美しく整えます。本来の魅力を活かしながら、なめらかで若々しい理想の輪郭へと導きます。',
        ],
        stepGallery: {
          heading: 'Vライン輪郭手術の方法',
          cols: 4,
          aspect: '653 / 770',
          steps: [
            { n: 1, title: 'あご先の骨切り', img: 'assets/vline-step-1.png', caption: 'あご先の形成には、T字骨切り術を用います。' },
            { n: 2, title: '中央部の骨除去', img: 'assets/vline-step-2.png', caption: '中央の不要な骨片を取り除き、左右の骨片を中央へ寄せてあご先の幅を縮めます。' },
            { n: 3, title: '確実な固定', img: 'assets/vline-step-3.png', caption: '医療用の安全な固定ピン（プレート）を使用し、寄せたあご先の骨を適切な位置へしっかりと固定します。' },
            { n: 4, title: 'ワンライン輪郭形成', img: 'assets/vline-step-4.png', caption: '神経ラインを避けながら、耳の下の下顎角から顎先まで、滑らかな一続きのラインで輪郭を整えます。' },
          ],
        },
        benefitGroups: [
          { title: 'Vライン手術—メリット', items: [
            'エラ張りや幅広のフェイスラインを、スリムでシャープなVラインへ',
            '下顎骨の一部を削る・切除することで、エラ（顎角）の横幅を縮小',
            'あご先まで同時に整えることで、途切れのない滑らかな輪郭に',
            '下半顔の輪郭を整え、洗練されたスマートな印象へ（韓国の輪郭整形で人気のデザイン）',
            '下半顔と顔全体のバランスを整え、黄金比を改善',
            '段差が生じやすいあごのラインを滑らかに補正',
          ] },
        ],
        facts: {
          duration: '1～2時間',
          anesthesia: '全身麻酔',
          stay: [
            { day: '1～2日目', label: '入院' },
            { day: '7日目', label: '1回目の抜糸' },
            { day: '14日目', label: '2回目の抜糸' },
            { day: '15日目', label: '帰国' },
          ],
          price: '約733,000～1,354,000円',
        } },
      { slug: 'two-jaw-surgery', name: '両顎手術', summary: '上下のあごの位置を調整し、噛み合わせ（咬合）と顔全体のバランスを整えます。', heroImg: 'assets/two-jaw-illustration.png',
        about: [
          '両顎手術は、上顎と下顎の両方の位置を調整し、顔のバランス・噛み合わせ・機能全体を改善する高度な矯正手術です。',
          'あごの強い左右非対称やしゃくれ・後退、顔の歪み、矯正歯科治療だけでは改善が難しい噛み合わせ（咬合）でお悩みの方に適した手術です。',
        ],
        aboutFigure: {
          img: 'assets/two-jaw-anatomy.png',
          legend: [],
          caption: '',
        },
        techHeading: '両顎手術（上下顎骨切り術）——手術の流れ',
        cases: [
          { badge: 'CASE 01', title: '不正咬合／出っ歯（受け口）', aspect: '828 / 618', steps: [
            { img: 'assets/twojaw-case1-1.png', caption: '上顎と下顎の骨を切ります。' },
            { img: 'assets/twojaw-case1-2.png', caption: '手術計画に基づき、骨切りした上下の顎骨を移動させて噛み合わせを整えます。' },
            { img: 'assets/twojaw-case1-3.png', caption: '移動した骨をしっかりと固定することで、正しい噛み合わせとバランスの取れた美しいお顔立ちへ導きます。' },
          ] },
          { badge: 'CASE 02', title: '顔の左右非対称', aspect: '652 / 665', steps: [
            { img: 'assets/twojaw-case2-1.png', caption: '上顎と下顎の骨を切ります。' },
            { img: 'assets/twojaw-case2-2.png', caption: '手術計画に基づき、骨切りした上下の顎骨を移動させて噛み合わせを整えます。' },
            { img: 'assets/twojaw-case2-3.png', caption: '移動した骨を頑丈に固定して安定させ、正しい噛み合わせとバランスの取れた美しく調和のとれたお顔立ちへと導きます。' },
          ] },
        ],
        techniques: [
          { title: '1. 初回カウンセリングと精密診断', blocks: [ { type: 'ulist', items: [
            { text: '専門医と歯科矯正医が、噛み合わせ・顔の左右対称性・上下の顎骨の骨格的な位置関係を総合的に評価します。' },
            { text: '3D CTスキャン、パノラマX線写真、デジタル咬合分析を活用し、骨の位置を正確に把握したうえで移動量を算出します。' },
            { text: '機能面の改善に加え、審美的な仕上がりも考慮した計画を立てるため、顔写真の撮影や計測を行います。' },
          ] } ] },
          { title: '2. 術前矯正', blocks: [ { type: 'ulist', items: [
            { text: '手術の6〜18か月前から矯正装置を装着し、上下それぞれの顎で歯並びを整えます。' },
            { text: '※この段階ではまだ噛み合わせを完成させず、手術で顎を移動した際に歯が正しく噛み合うよう下準備を行う期間となります。' },
            { text: '期間中は執刀医と矯正医が密に連携し、定期的に経過を確認します。' },
          ] } ] },
          { title: '3. 3D手術計画とスプリント作成', blocks: [ { type: 'ulist', items: [
            { text: '精密な画像データをもとに、各顎骨を何ミリ・どの方向（前後・上下・回転など）へ動かすかを綿密にシミュレーションします（3Dプリントによる手術ガイドやスプリントを多く用います）。' },
            { text: '手術中に顎骨を理想の位置へ正確に導くため、オーダーメイドの固定用マウスピースを作製します。' },
          ] } ] },
          { title: '4. 麻酔', blocks: [ { type: 'ulist', items: [
            { text: '全身麻酔のもと、安全に配慮された手術室で行われます。' },
          ] } ] },
          { title: '5. 上顎手術（ルフォーI型骨切り術）', blocks: [ { type: 'ulist', items: [
            { text: '上唇・歯茎の内側を切開するため、顔の表面に傷跡は残りません。' },
            { text: '歯根の上部で上顎骨を水平にカットし、頭蓋骨から慎重に分離します。' },
            { text: '術前計画に従い、上顎を適切な位置（前方・後方・上下・回転など）へと再配置します。' },
            { text: '医療用チタン製のプレートとスクリューで、新しい位置にしっかりと固定します。' },
          ] } ] },
          { title: '6. 下顎手術（下顎枝矢状分割術 / SSRO）', blocks: [ { type: 'ulist', items: [
            { text: '両側の奥歯付近（口の中）を切開します。' },
            { text: '下顎骨の自然な構造に沿って両側を分割し、前方の歯を含む骨と、後方の顎関節部分を切り離します。' },
            { text: 'これにより、顎関節の動きに影響を与えずに、歯を含む前方部分を自由（前後移動・回転など）に調整できます。' },
            { text: 'こちらもチタン製のプレートとスクリューで強固に固定します。' },
          ] } ] },
          { title: '7. 噛み合わせと対称性の確認', blocks: [ { type: 'ulist', items: [
            { text: '作製したマウスピースを用いて、新しい位置で歯が隙間なく噛み合っているかを確認します。' },
            { text: '最終的に骨を固定する前に、執刀医が噛み合わせと顔全体のバランス・対称性を微調整します。' },
          ] } ] },
          { title: '8. 併用可能な同時手術（オトガイ形成など）', blocks: [ { type: 'ulist', items: [
            { text: '新しい顎の位置に合わせて顎先（オトガイ）の調整が必要な場合、「オトガイ形成術」を同時に行うことがあります。' },
            { text: '顎骨の移動にともない顔の輪郭やラインが変わるため、必要に応じて唇や鼻の土台周辺の軟部組織（皮膚・筋肉）の微調整も行います。' },
          ] } ] },
          { title: '9. 縫合', blocks: [ { type: 'ulist', items: [
            { text: '口の中の切開部位を、溶ける糸で丁寧に縫合します。' },
            { text: '顔の表面を切開することはないため、目に見える傷跡が残る心配はありません。' },
          ] } ] },
        ],
        benefitGroups: [
          { title: '機能面のメリット（主目的）', items: [
            '重度の不正咬合の修正——出っ歯、受け口、かみ合わせの横ズレ、前歯が噛み合わない状態などの重度な噛み合わせ不良を根本から改善します。',
            '理想的な噛み合わせの実現——上顎と下顎の位置を同時に調整することで、正しく機能する噛み合わせへと導きます。',
            '咀嚼機能の改善・歯の負担軽減——しっかり噛めるようになることで咀嚼機能を高め、不正咬合による歯の不均一な摩耗やダメージを防ぎます。',
            '睡眠時無呼吸症候群の改善——顎骨を前に出すことで気道が広がり、閉塞性睡眠時無呼吸症候群が大幅に改善する場合があります。',
            '顎関節（TMJ）への負担軽減——慢性的な噛み合わせのズレを解消し、顎関節にかかる過剰なストレスや痛みを和らげます。',
            '発音の明瞭化——顎骨の著しいズレが原因で生じていた発音のしづらさを改善します。',
            '骨格レベルでの顔の非対称（歪み）の修正——皮膚や筋肉などの軟部組織だけでなく、土台となる骨格から顔の左右非対称を整えます。',
          ] },
          { title: '審美面のメリット', items: [
            '横顔と顔立ちの劇的な変化——表面的なアプローチではなく、骨格そのものを正しい位置へ戻すことで、横顔（Eラインなど）や全顔のバランスを大幅に整えます。',
            '骨格的な口元の突出・後退の改善——顎や中顔面の後退や、下顎の突出による受け口を根本から修正します。',
            '自然で美しい口元の実現——開咬や口元の緊張感が解消され、唇が自然に閉じやすくなるとともに、すっきりとした口元に導きます。',
            '顔のパーツバランスの調和——上顔面・中顔面・下顔面の縦の比率を整え、顔全体に上品な調和をもたらします。',
            '輪郭形成との組み合わせによる洗練された仕上がり——オトガイ形成（あご先整形）やVライン手術などを同時に行うことで、より洗練されたフェイスラインを追求できます。',
          ] },
        ],
        facts: {
          duration: '3～5時間',
          anesthesia: '全身麻酔',
          stay: [
            { day: '1～2日目', label: '入院' },
            { day: '7日目', label: '1回目の抜糸' },
            { day: '14日目', label: '2回目の抜糸' },
            { day: '15日目', label: '帰国' },
          ],
          price: '約1,693,000～2,821,000円',
        } },
      { slug: 'square-jaw-reduction', name: 'エラ削り（下顎角形成術）', summary: '目立つエラ（下顎角）の骨を削り、滑らかでスリムな下顔面（フェイスライン）を作ります。', heroImg: 'assets/square-jaw-illustration.png',
        about: [
          'エラ削り（下顎角形成）は、下顎骨を再形成し、よりスリムでやわらかく、バランスの取れた顔にする輪郭整形手術です。四角い・ゴツゴツした印象の原因となる下顎角の幅と張りを軽減することに重点を置いています。',
        ],
        methods: {
          heading: 'エラ削りの手術方法',
          rows: [
            { img: 'assets/square-method-1.png', title: '01. 下顎角形成術（骨切り）', text: '四角い印象は下顎全体がしっかり発達していることに由来する場合もありますが、多くは下顎角の突出によるものです。よりやわらかい顔の形にするため、この顎角を切除する手術が長く行われており、正面から見てよりスリムにするために皮質骨削りを併用することも多いです。下顎角を復元する再建手術もエラ削りの一種とされます。' },
            { img: 'assets/square-method-2.png', title: '02. 皮質骨削り（アウターコルテックス削り）', text: '下顎骨は、外側皮質骨・海綿骨・内側皮質骨の3層構造になっています。この手術では外側の皮質骨を薄く削ることで、あごの厚みを減らします。骨の厚みが減って回復するにつれて周囲の筋肉も自然と引き締まるため、正面から見たお顔がよりシャープで細い印象になります。' },
            { img: 'assets/square-method-3.png', title: '03. 下顎角再建（エラ再建）', text: '以前のエラ削りで骨を削りすぎ、耳の下の角が不足して見える場合で、顎角を復元したい患者様に行われます。自家骨またはボーンセメント、メドポア、チタンなどのインプラントを3Dでカスタムメイドし、再建に使用します。' },
          ],
        },
        techHeading: 'エラ削り（下顎角形成術）の手術の流れ',
        techniques: [
          { title: '1. カウンセリング・精密検査', blocks: [ { type: 'ulist', items: [
            { text: '専門医が顎の形態や骨の厚みを正確に診断し、エラが張って見える原因が「骨の幅」「咬筋（筋肉）の発達」「その両方」のいずれにあるのかを評価します。' },
            { text: '3D-CT撮影やパノラマX線写真検査を行い、下顎角の位置、骨の厚み、神経（下歯槽神経）の位置を立体的に把握した上で、骨削り・筋肉（咬筋）の調整・あるいはその併用のいずれが最適かを決定します。' },
          ] } ] },
          { title: '2. 麻酔', blocks: [ { type: 'ulist', items: [
            { text: '口腔内から骨をアプローチする手術となるため、全身麻酔下で安全に行われます。' },
          ] } ] },
          { title: '3. 切開', blocks: [ { type: 'ulist', items: [
            { text: '口腔内の奥歯付近、下歯茎のラインに沿って切開します。' },
            { text: '顔の表面を切開することはないため、傷跡が外から目立つ心配はありません。' },
          ] } ] },
          { title: '4. 顎骨の露出', blocks: [ { type: 'ulist', items: [
            { text: '専門医が周囲の軟部組織や筋肉を優しく剥離し（必要に応じて咬筋の一部を切離）、下顎角から下顎体にかけての骨をしっかりと露出させます。' },
          ] } ] },
          { title: '5. 骨削り（骨切り・皮質骨削り）', blocks: [ { type: 'ulist', items: [
            { text: '医療用の骨切り器具を使用し、エラの原因となっている不要な骨を除去します。' },
            { text: '単に直線的にカットするのではなく、あご本来の自然なカーブに沿って曲線的（またはL字型）に切除することで、術後に新たな角や不自然な段差ができないよう仕上げます。' },
            { text: '必要に応じて外側皮質骨削りも併用し、骨の構造的な強度を保ちつつ側面を薄く削ることで、正面から見てもすっきりと細いフェイスラインを作ります。' },
          ] } ] },
          { title: '6. 骨表面の平滑化', blocks: [ { type: 'ulist', items: [
            { text: '切除した骨を取り除いた後、骨の断面や端を特殊な器具で丁寧に研磨して滑らかに整えます。これにより、皮膚の上から触れたときに不自然な段差や凹凸が残るのを防ぎます。' },
          ] } ] },
          { title: '7. 筋肉（咬筋）の調整', blocks: [ { type: 'ulist', items: [
            { text: 'エラの張りに咬筋の発達が強く影響している場合は、骨削りと同時に筋肉の一部を部分切除して薄くします。' },
            { text: '手術による筋肉切除のほか、術後にエラボトックスで徐々に筋肉を縮小させるアプローチを選択される患者様もいらっしゃいます。' },
          ] } ] },
          { title: '8. 縫合・圧迫固定', blocks: [ { type: 'ulist', items: [
            { text: '口腔内の切開部を溶ける糸で丁寧に縫合します。' },
            { text: '術後の腫れを最小限に抑え、剥離した組織をしっかり定着させるため、専用の圧迫バンドで固定を行います。' },
          ] } ] },
          { title: '9. 回復（リカバリー）', blocks: [ { type: 'ulist', items: [
            { text: '麻酔から十分に覚めるまで回復室で経過を観察します。クリニックの方針や手術内容・経過に応じて、当日退院または1泊入院となります。' },
            { text: '手術時間: 約1.5〜3時間（筋肉の調整や皮質骨削りの併用有無によって異なります）' },
          ] } ] },
          { title: 'ダウンタイムと回復の経過', blocks: [ { type: 'ulist', items: [
            { text: '骨へのアプローチを伴うため、術後1〜2週間は大きめの腫れが生じやすく、他の顔の手術に比べて腫れが強く出やすい傾向があります。' },
            { text: '骨の定着・回復をスムーズにするため、術後2〜4週間は無理のない柔らかいお食事（おかゆ、スープ、うどん等）をおすすめしております。' },
            { text: '最終的なフェイスラインの完成は術後2〜3ヶ月頃となり、その後6ヶ月ほどかけてさらに自然になじんで落ち着いていきます。' },
          ] } ] },
        ],
        benefitGroups: [
          { title: 'エラ削り（下顎角形成術）—メリット', items: [
            'ゴツゴツとした四角いフェイスラインを、やわらかくシャープな印象へ',
            '顔の下半分が広く見える原因である目立つエラ（顎角）を軽減',
            '滑らかで綺麗な卵型やVラインのフェイスラインに',
            '上顔部・中顔部に対して下顔部が大きく見えてしまうお顔のバランスを改善',
            '韓国の輪郭整形でも人気が高い、垢抜けた洗練された印象のフェイスラインへ',
            'あご先や頬骨の手術をしなくても、重たい印象のエラ（顎）をすっきり改善',
          ] },
        ],
        facts: {
          duration: '1.5～2時間',
          anesthesia: '全身麻酔',
          stay: [
            { day: '1～2日目', label: '入院' },
            { day: '7日目', label: '1回目の抜糸' },
            { day: '14日目', label: '2回目の抜糸' },
            { day: '15日目', label: '帰国' },
          ],
          price: '約564,000～1,128,000円',
        } },
      { slug: 'zygoma-reduction', name: '頬骨縮小術（頬骨セットバック）', summary: '張った頬骨の位置を調整・削ることで、顔の横幅をすっきりとスリムに見せます。', heroImg: 'assets/zygoma-illustration.png',
        aboutSections: [
          { heading: '頬骨縮小術（頬骨弓形成術）とは？', paras: [
            '頬骨縮小術（頬骨削り・骨切り）は、張り出した幅広の頬骨を整え、より柔らかくすっきりとしたバランスの良い輪郭を作る施術です。顔全体に対して頬骨の横幅が広すぎる、高すぎる、または骨張っているとお悩みの方によく選ばれています。',
          ] },
        ],
        aboutFigure: {
          img: 'assets/zygoma-anatomy.png',
          sideParas: [
            '耳の前にある「側方頬骨（頬骨弓）」を削ると、顔の実際の横幅が小さくなり、輪郭がなめらかになって目が相対的に大きく見えます。ただし、削りすぎるともみあげのラインに沿って段差ができたり、頬がこけて見えたりして不自然になることがあります。',
            '東アジア人は目の下の「前方頬骨」が平坦な傾向がある一方で、斜め前方の「45度頬骨（頬骨体部）」が張り出しやすいのが特徴です。この頬骨体部を骨切りして内側に移動・固定することで、横幅や斜めの出っ張りを抑えつつ、前面に適度な立体感を出すことができます。ただし、移動量が大きすぎると不自然な印象を与えてしまうため、適切な調整が必要です。',
          ],
        },
        techHeading: '手術の仕組み',
        techniques: [
          { title: '1. 頬骨の構造評価', blocks: [ { type: 'ulist', items: [
            { text: '頬骨の張り出しが「前方」「側方（頬骨弓）」または「その両方」のどこに由来するかを医師が診察・評価し、最適な手術方法を決定します。' },
          ] } ] },
          { title: '2. 骨切り・骨削りの技術', blocks: [ { type: 'ulist', items: [
            { text: '一般的な施術では、口腔内（場合によっては生え際付近）を最小限切開して頬骨にアプローチします。骨を切除または再配置したのち、医療用の小さなプレートやスクリューを用いて目立たない位置で固定します。' },
          ] } ] },
          { title: '3. L字骨切り・削り手術', blocks: [ { type: 'ulist', items: [
            { text: '張り出しの形状に合わせて、骨を直接削るか「L字型骨切り（精密な切断と内側への移動・再配置）」を行い、前頭・側頭の両方の突出をバランスよく縮小します。' },
          ] } ] },
          { title: '4. 併用手術', blocks: [ { type: 'ulist', items: [
            { text: 'より全体的でバランスの取れた美しい輪郭を作るため、頬骨縮小術はエラ削り（顎関節形成）やオトガイ（あご先）形成術とあわせて行われることもあります。' },
          ] } ] },
        ],
        benefitGroups: [
          { title: '頬骨縮小術（頬骨セットバック）—メリット', items: [
            '張り出した頬骨を目立たなくする',
            'すっきりとシャープな輪郭へ',
            '顔全体のバランスと立体感を整える',
            '骨張った印象をやわらげ、優しい表情に',
            '目立たない部位の切開で傷跡を最小限に',
            '半永久的で自然な仕上がり',
          ] },
        ],
        facts: {
          duration: '1.5～2時間',
          anesthesia: '全身麻酔',
          stay: [
            { day: '1～2日目', label: '入院' },
            { day: '7日目', label: '1回目の抜糸' },
            { day: '14日目', label: '2回目の抜糸' },
            { day: '15日目', label: '帰国' },
          ],
          price: '約564,000～1,128,000円',
        } },
    ],
  },
  {
    slug: 'hair-transplant',
    name: '毛髪移植',
    shot: 'Hair transplant photo',
    desc: '髪のボリューム感と生え際を復元します。生え際の位置を下げることで、小顔効果も期待できます。',
    intro: '毛髪移植では、髪の毛がしっかり生えている部位（後頭部など）から健康な毛嚢を採取し、薄毛が気になる部分や毛髪が細くなっている部分へ丁寧に移植します。移植された毛嚢は定着後も自然に成長し続けるため、ボリューム感のある若々しい印象を取り戻すことができます。',
    more: '発毛移植を見る',
    heroImg: 'assets/hair-transplant-hero.png',
    tags: ['髪際修正', 'FUE', '密度強化'],
    procedures: [
      { slug: 'hair-transplant', name: '毛髪移植', summary: '髪のボリューム感と生え際を復元します。生え際の位置を下げることで、小顔効果も期待できます。', heroImg: 'assets/hair-transplant-illustration.png',
        about: [
          '毛髪移植は、小顔効果を得るための施術の中で、最も身体への負担が少ない選択肢の一つです。さらに、ヘアラインのデザインを美しく整えることで、より若々しい印象をつくることができます。',
          '一般的な施術では3,000毛前後を移植し、平均して生え際を約2cm下げることが可能です。移植可能な最大毛数は後頭部の状態を検査・診察した上で決定しますが、患者様の状態によっては1回の施術で4,000～7,000毛の大量移植も行えます。',
          '当院のサービスは、男性型脱毛症ケアと女性の髪際ケアに分かれています：',
        ],
        aboutSections: [
          { heading: '男性型脱毛症（AGA）', paras: [
            '男性の薄毛の多くは遺伝的要因によるものです。後頭部から採取した移植毛は男性型脱毛症の影響を受けにくいため、一度移植されると、その場所で生涯にわたり健やかに生え続けます。',
            '患者様の髪の状態に合わせて最適な毛嚢を選定し、既存の髪と移植毛が自然になじむようグラデーションをつけて移植を行います。M字型やC字型に後退した生え際の場合、「前方・中間・奥側」の3ゾーンに分け、奥に進むにつれて密度や太さを調整することで、よりナチュラルなグラデーションに仕上げます。\n生え際ゾーン（デザイン部位）： 1本毛・細い毛嚢を配置して繊細なラインを作成',
          ], images: [
            { img: 'assets/male-follicle-gradient.png', alt: '髪際ゾーン——複数毛包・単一毛包・細い毛包ユニット' },
            { img: 'assets/male-follicle-types.png', alt: '毛包タイプ——複数ユニット毛包・単一ユニット毛包・細い毛包' },
          ] },
          { heading: '女性の生え際・ヘアラインケア', paras: [
            '女性の薄毛・抜け毛は、主にストレスや環境要因など後天的な理由によって引き起こされます。多くの女性患者様は、部分的な薄毛の改善だけでなく、額のラインを下げてより若々しくバランスの取れた小顔印象を作る目的で毛髪移植を選択されています。',
          ] },
        ],
        aboutFigure: {
          img: 'assets/female-hairline-sideline.png',
          caption: '男性とは異なり、女性の生え際は丸みを帯びた柔らかいラインが特徴です。特に、額からこめかみへと続くカーブを滑らかにつなぎ、自然なグラデーションを作ることが重要です。横から見た際に角ばっていたり直線的すぎたりすると不自然な印象を与えてしまうためです。',
        },
        techHeading: '採取方法',
        techniques: [
          { title: '1. FUT（切開法）', blocks: [
            { type: 'para', text: '後頭部から帯状に頭皮を採取し、顕微鏡下で毛嚢単位（株）に細かく分けて移植株を作成する方法です。' },
            { type: 'ulist', items: [
              { text: 'メリット：手術時間が短く、コストパフォーマンスに優れた手術方法です。' },
              { text: '傷跡について：後頭部に線状の傷跡が残りますが、特殊な縫合・移植技術を用いて傷跡の境界部分にも毛髪を移植します。個人差はありますが、約2年経過すると目立たなくなるため、過度な心配は不要です。' },
            ] },
          ] },
          { title: '2. FUE（非切開法）', blocks: [
            { type: 'para', text: '後頭部から毛嚢（株）を専用のパンチ器具を用いて一つずつ丁寧に採取する方法です。' },
            { type: 'ulist', items: [
              { text: 'メリット：目立つ傷跡がほとんど残らず、ダウンタイムも少ないため、現在最も選ばれている人気の手術方法です。' },
              { text: '注意点：毛嚢を一つずつ手作業で採取するため手術時間が長くかかり、FUT（切開法）に比べて費用が高くなる傾向があります。' },
            ] },
          ] },
        ],
        figureNote: {
          img: 'assets/hair-harvest-methods.png',
          intro: [
            'イラストは2つの毛嚢採取技術（切開法と非切開法）を比較したものです。切開法（FUT）はドナー部位（後頭部）から帯状に頭皮を採取し、非切開法（FUE）は毛嚢（株）を一つずつ直接採取します。',
          ],
          extra: {
            heading: '施術方法の選び方',
            text: 'FUT（切開法）は手術時間が短く費用を抑えられるのがメリットであり、FUE（非切開法）は目立つ傷跡がほとんど残らないのが特徴です。ドナー部位の頭皮状態や傷跡に対するご希望、理想の仕上がりに合わせて、医師が最適な採取方法をご提案いたします。',
          },
        },
        benefitGroups: [
          { title: '毛髪移植—メリット', items: [
            '身体への負担が少ない小顔施術——骨切りや切開を伴う輪郭手術に比べ、ダウンタイムや身体への負担を抑えながら自然な小顔効果を得られる理想的な手術です。',
            '渡韓・旅行者にも安心の素早い回復——術後の負担が少なく、最短2日で帰国可能なため、短期滞在でお越しの方でも安心して受けていただけます。',
            '男性型脱毛症（AGA）への根本的な解決——AGAの影響を受けにくい後頭部の毛髪を移植するため、生え揃った後は半永久的な効果が持続します。',
            '過去の手術傷跡を自然にカバー——額縮小術やフェイスリフトなど、過去の手術によってできた目立つ傷跡を毛髪で自然に隠す（カモフラージュする）ことが可能です。',
            '生え際の位置を整えて若々しい印象へ——生え際（ヘアライン）を約2cm下げることで顔の余白を減らし、よりバランスの取れた若々しい印象をつくります。',
            '状態に合わせた柔軟な段階的施術——ご希望の密度や頭皮の状態に合わせて、1年以上の間隔を空けながら最大3回まで計画的に施術を行うことができます。',
          ] },
        ],
        facts: {
          duration: '3～5時間',
          anesthesia: '局所麻酔',
          stay: [
            { day: '2日目', label: '術後消毒・医療用シャンプー' },
            { day: '3日目', label: '帰国' },
          ],
          price: '約1,128,000～2,257,000円',
          priceNote: '3,000グラフト基準の価格',
        } },
    ],
  },
  {
    slug: 'lip-surgery',
    name: '唇の手術',
    shot: 'Lip surgery photo',
    heroImg: 'assets/lip-surgery-hero.png',
    heroFit: 'contain',
    desc: 'さりげな強調で、ふっくらとした魅力的な唇に。',
    more: '唇の施術を見る',
    tags: ['リップリフト', '人中', '口角挙上'],
    introBlocks: [
      { heading: 'リップ整形（唇の手術）とは？', text: 'リップ整形（唇の手術）とは、唇の形や厚み、バランスを整えたり、美しく際立たせたりする外科的・注入系の施術の総称です。ボリューム感や左右対称性、顔全体との調和を改善します。見た目の美しさを高める審美目的はもちろん、機能面の改善や先天的なお悩みの修正にも対応しています。' },
    ],
    detail: {
      benefitGroups: [
        { title: '施術の流れ', items: [
          'カウンセリング・診察——お悩みやご希望を丁寧にお伺いし、唇の構造や顔全体とのバランスを診察した上で、自然で美しい仕上がりを実現するための最適な施術方法をご提案いたします。',
          '施術当日——局所麻酔（ご希望や施術内容に応じて睡眠麻酔・静脈麻酔を併用）を用いて行うため、痛みを抑えて施術を受けられます。施術時間は施術内容や難易度により約30分〜2時間程度です。',
          'ダウンタイム・経過——術後1週間ほどは腫れや内出血が出やすい時期ですが、多くの方は数日程度で日常生活・お仕事に復帰していただけます。腫れが完全に引く数週間後には、より自然で美しい完成形へと落ち着きます。',
        ] },
        { title: 'リップ整形（唇の手術）—メリット', items: [
          '薄い唇に適度なボリュームを与えることで、より華やかでメリハリのある口元を作ります。',
          'M字リップを際立たせたり、唇の輪郭を鮮明に整えたりして、上下のバランスが良い魅力的な唇に仕上げます。',
          '左右のバランスを整え、美しく整ったシンメトリーな口元へと導きます。',
          '薄すぎる上唇や立体感のない平坦な唇を補正し、明るく豊かな表情をつくります。',
          '大きすぎたり厚すぎたりする唇をすっきりとサイズダウンし、顔全体と調和する上品な印象に整えます。',
          '伸びた上唇を引き上げて人中を短く見せることで、間延び感を解消し、キュートで若々しい顔立ちへと整えます。',
          '笑ったときに歯茎が広範囲に見えてしまうお悩みを、唇の位置や長さの調整・施術によって自然にカバーします。',
        ] },
      ],
    },
    procedures: [
      { slug: 'lip-lift', name: 'リップリフト', summary: '鼻と唇の距離を短く整え、上唇を立体的で魅力的に見せます。', heroImg: 'assets/lip-lift-illustration.png',
        about: [
          '唇リフトは、鼻と唇の間の距離を短くすることで上唇の印象を高めます。鼻の下の小さく目立たない切開を通じて上唇をやさしく持ち上げ、よりふっくらと若々しい印象と、明るく魅力的な笑顔を作ります——自然で長持ちする結果が得られます。',
        ],
        idealFor: {
          heading: 'こんな方におすすめ',
          items: [
            '上唇が長い方',
            'フィラーを使わずにふっくらとした上唇を求める方',
            '笑ったときに上の歯をより見せたい方',
            '永久的な唇の改善をお求めの方',
            '顔全体のバランスと調和の改善を求める方',
            'さりげなく自然なリジュビネーションを望む方',
          ],
        },
        cases: [
          { badge: 'CASE 01', title: '上唇の挙上', aspect: '750 / 460',
            steps: [
              { img: 'assets/lip-lift-step-1.png', caption: 'STEP 01・手術前。' },
              { img: 'assets/lip-lift-step-2.png', caption: 'STEP 02・上唇の赤唇縁に沿ってデザインを描き、細かい切開を行います。' },
              { img: 'assets/lip-lift-step-3.png', caption: 'STEP 03・唇の内側の粘膜を外側に引き出し、傷跡が唇の内側に隠れるようにします。' },
              { img: 'assets/lip-lift-step-4.png', caption: 'STEP 04・手術後。' },
            ] },
          { badge: 'CASE 02', title: '下唇の挙上', aspect: '750 / 460',
            steps: [
              { img: 'assets/lip-lift-c2-step-1.png', caption: 'STEP 01・手術前。' },
              { img: 'assets/lip-lift-c2-step-2.png', caption: 'STEP 02・従来の施術とは異なり、下唇の内側の粘膜に沿ってデザインと切開を行います。' },
              { img: 'assets/lip-lift-c2-step-3.png', caption: 'STEP 03・下唇の粘膜を外側に引き出し、傷跡が外から見えないようにします。' },
              { img: 'assets/lip-lift-c2-step-4.png', caption: 'STEP 04・手術後。' },
            ] },
          { badge: 'CASE 03', title: '唇の中央ボリュームアップ', aspect: '750 / 460',
            steps: [
              { img: 'assets/lip-lift-c3-step-1.png', caption: 'STEP 01・手術前。' },
              { img: 'assets/lip-lift-c3-step-2.png', caption: 'STEP 02・中央のボリュームアップのため、唇の内側に精密なデザインを描きます。' },
              { img: 'assets/lip-lift-c3-step-3.png', caption: 'STEP 03・中央部の唇内側の粘膜を広げ、傷跡を残さずボリュームを加えます。' },
              { img: 'assets/lip-lift-c3-step-4.png', caption: 'STEP 04・手術後。' },
            ] },
        ],
        techHeading: '施術の流れ',
        techniques: [
          { title: '', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングと唇の評価——担当医が唇の形、顔全体のバランス、鼻と上唇の距離を評価し、理想的な挙上量を決定します。' },
              { text: '麻酔——通常は局所麻酔下で行われ、快適でほぼ無痛の施術となります。' },
              { text: '目立たない切開——鼻の下の自然なシワに沿って丁寧に小さな切開を行い、傷跡をしっかり隠します。' },
              { text: '唇の挙上——鼻の下から皮膚を精密な帯状に除去し、上唇をやさしくより高い位置に持ち上げます。これにより上唇の見える面積が増え、自然な形が引き立ちます。' },
              { text: '縫合——良好な治癒と目立つ傷跡の最小化のため、細かい糸で丁寧に切開部を縫合します。' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: '唇リフト—メリット', items: [
            'ふっくらとした上唇に',
            '唇のメリハリと形を改善',
            '笑顔の美しさを高める',
            '笑ったときの上の歯の見え方を増やす',
            '繰り返しのフィラー注入に代わる永久的な選択肢',
            '自然な見た目の結果',
            '最小限のダウンタイム',
          ] },
        ],
        facts: {
          duration: '1～2時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後消毒' },
            { day: '3日目', label: '帰国' },
          ],
          price: '約226,000～564,000円',
        } },
      { slug: 'philtrum-reduction', name: '人中短縮手術', summary: '伸びた人中を短く整えることで間延び感を解消し、下顔面全体のバランスを美しく整えます。', heroImg: 'assets/philtrum-reduction-illustration.png',
        about: [
          '人中短縮手術は、鼻の下の皮膚を少量除去することで、鼻と上唇の間の距離を短くします。上唇がより若々しい位置に持ち上がり、ふっくらとした印象になり、顔全体の調和が改善されます。自然でリフレッシュした印象が長く続きます。',
        ],
        idealFor: {
          heading: 'こんな方におすすめ',
          items: [
            '人中が長い方',
            'フィラーを使わずにふっくらとした上唇を求める方',
            '顔のバランス改善を求める方',
            'より若々しい印象を求める方',
            '笑ったときに上の歯があまり見えない方',
            '永久的な唇の改善とリジュビネーションを望む方',
          ],
        },
        techHeading: '施術の流れ',
        techniques: [
          { title: '', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングと顔の評価——担当医が顔全体のバランス、唇の形、人中の長さ、審美的な目標を評価し、理想的な短縮量を決定します。' },
              { text: '麻酔——通常は局所麻酔下で行われ、快適でほぼ無痛の施術となります。' },
              { text: '目立たない切開——鼻の下の自然なシワに沿って丁寧に小さな切開を行い、傷跡をさりげなく隠します。' },
              { text: '人中の短縮——鼻の下から精密な量の皮膚を除去し、上唇を持ち上げて人中の長さを縮めます。' },
              { text: '縫合——良好な治癒と目立つ傷跡の最小化のため、細かい糸で丁寧に切開部を縫合します。' },
            ] },
          ] },
        ],
        dualFeature: {
          heading: '理想の唇バランスチェック',
          intro: [
            '施術前に、顔全体のバランスと調和するよう理想の唇バランスを確認します。',
          ],
          items: [
            { img: 'assets/philtrum-ratio-1.png', title: 'パーツを基準にした唇バランス', desc: '目頭と口角が均整の取れた比率を保ち、鼻筋の付け根と前歯の中点が一致し、人中が左右対称であること。' },
            { img: 'assets/philtrum-ratio-2.png', title: '正面から見た比率（高さ）', desc: '人中と上唇の比率は1、下唇と顎の比率は2。上唇6～8mm、下唇10～12mmが最も理想的とされ、黄金比は7:10です。' },
            { img: 'assets/philtrum-ratio-3.png', title: '正面から見た比率（幅）', desc: '唇の幅は鼻の付け根の幅より広いのが理想的で、目の幅は唇の長さの2倍より広いのが理想的です。' },
          ],
        },
        benefitGroups: [
          { title: '人中短縮手術—メリット', items: [
            '鼻と上唇の間の距離を短くする',
            'ふっくらとした上唇に',
            '顔のバランスとプロポーションを改善',
            '笑顔の美しさを高める',
            '笑ったときの上の歯の見え方を増やす',
            '永久的で長持ちする結果',
            '自然な見た目の改善',
          ] },
        ],
        facts: {
          duration: '1～2時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後消毒' },
            { day: '5～7日目', label: '抜糸' },
            { day: '6～8日目', label: '帰国' },
          ],
          price: '約338,000～678,000円',
        } },
      { slug: 'corner-lip-lift', name: '口角挙上手術', summary: '下がった口角をキュッと引き上げ、優しく明るい好印象な表情をつくります。', heroImg: 'assets/corner-lip-lift-illustration.png',
        about: [
          '口角挙上術は、下がった口角（口唇の両端）をキュッと上向きに引き上げることで、明るく若々しい笑顔をつくる手術です。不機嫌に見えたり老けた印象を与えたりする口元の悩みを補正し、自然な表情を保ちながら、親しみやすく華やかな印象へと導きます。',
        ],
        techHeading: '手術の流れ',
        techniques: [
          { title: '', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングと診察——医師が唇の形、口角の位置、顔全体のバランスを詳細に確認し、理想的な引き上げ量を決定します。' },
              { text: '麻酔——通常は局所麻酔（ご希望に応じて睡眠麻酔の併用も可能）で行われ、痛みを極力抑えて快適に施術を受けられます。' },
              { text: '精密な切開——唇の自然なラインに沿って、口角の目立たない位置に小さく丁寧に切開を行います。' },
              { text: '口角の引き上げ——余分な皮膚を最小限切除し、口角をより若々しく上向きの位置へと丁寧にリフトアップします。' },
              { text: '縫合——傷跡が綺麗に治りできる限り目立たなくなるよう、極細の医療用糸で切開部を丁寧に縫合します。' },
            ] },
          ] },
        ],
        dualFeature: {
          heading: '手術方法',
          intro: [
            '口角挙上術は、口周りの筋肉のバランスを再調整する3つの精密なステップにより、自然で美しい上向きの口角をつくります。',
          ],
          items: [
            { img: 'assets/corner-step-1.png', title: 'ステップ1：切開と筋肉バランスの調整', desc: '両側の口角に最小限の切開を行い、口角を下に引っ張る筋肉（口角降下筋）の力を弱め、口角を引き上げる筋肉の動きを相対的に強化します。' },
            { img: 'assets/corner-step-2.png', title: 'ステップ2：筋肉のリフトアップ', desc: '筋肉の引き上げ方向を斜め上へ再固定し、口角を自然な位置へリフトアップします。' },
            { img: 'assets/corner-step-3.png', title: 'ステップ3：極細マイクロ縫合', desc: '細かなマイクロ縫合技術で丁寧に仕上げることで、傷跡を最小限に抑え、綺麗な仕上がりと順調な回復を促進します。' },
          ],
        },
        benefitGroups: [
          { title: '口角挙上手術—メリット', items: [
            '下がった口角を引き上げ、口元を明るい印象に',
            '親しみやすく、優しくポジティブな表情をつくる',
            '唇の立体感とメリハリを出し、綺麗なフォルムに改善',
            '顔全体のバランスと調和を高める',
            '半永久的で自然な効果が長持ち',
            '周囲に気づかれにくい自然な仕上がり',
            'ダウンタイムや身体への負担が少ない',
          ] },
        ],
        facts: {
          duration: '1～2時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後消毒' },
            { day: '5～7日目', label: '抜糸' },
            { day: '6～8日目', label: '帰国' },
          ],
          price: '約338,000～678,000円',
        } },
    ],
  },
  {
    slug: 'body-contouring',
    name: 'ボディライン整形',
    shot: 'Body contouring photo',
    desc: '精密な脂肪吸引で体のラインを整えます。',
    heroImg: 'assets/body-contouring-hero.png',
    heroAspect: '2378 / 1760',
    heroFit: 'contain',
    intro: 'ボディライン整形は、食事制限や運動だけでは改善しにくいボディラインを整え、頑固な脂肪をすっきりと落としながらたるんだ皮膚を引き締め、メリハリのある美しいシルエットへ導く手術です。大幅な減量後や出産後の体型カバーをご希望の方から、特定の部位をピンポイントで整えたい方まで、お悩みやライフスタイルに合わせて手術・非手術の豊富な選択肢から最適な施術をご提案いたします。',
    detail: {
      benefitGroups: [
        { title: '施術の流れ', items: [
          '理想のボディラインを実現するには、お客様の体型とお悩みに合わせた複数の施術法を最適に組み合わせることが効果的です。',
          '脂肪吸引は、腹部・腰・太もも・二の腕などの頑固な脂肪を除去し、食事制限や運動だけでは落としきれないボディラインをすっきりと滑らかに整えます。',
          'ボディリフト（腹壁形成、腕リフト、太ももリフトなど）は余分な皮膚を取り除き、深層組織からしっかりと引き締めます。大幅な減量後や出産後の皮膚のたるみ改善に最適です。',
          '脂肪移植は、ご自身のボディから採取・精製した脂肪をヒップや腰周りなどボリュームの欲しい部位に移植し、自然な丸みとメリハリのある美しいバランスへと整えます。',
        ] },
      ],
    },
    more: 'ボディライン整形を見る',
    tags: ['脂肪吸引', '腹壁整形', '脂肪移植'],
    procedures: [
      { slug: 'upper-body-liposuction', name: '上半身脂肪吸引', summary: '二の腕・背中など、上半身の気になる部位をピンポイントでスリムに整えます。', heroImg: 'assets/upper-body-liposuction-illustration.png',
        about: [
          '上半身脂肪吸引は、二の腕・背中・胸周り・上腹部などの頑固な脂肪を除去し、メリハリのある美しいボディラインを形成する手術です。余分な脂肪を丁寧に吸引してボディラインをデザインすることで、華奢でバランスの取れた、リバウンドしにくいスリムなシルエットを実現します。',
        ],
        techHeading: '施術の流れ',
        techniques: [
          { title: '', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングと診察——医師が気になる部位、お体全体のバランス、皮膚の弾力性を詳細に確認し、ご希望に合わせたオーダーメイドの手術プランをご提案します。' },
              { text: '麻酔——手術部位や脂肪吸引量に応じて、局所麻酔に睡眠麻酔または全身麻酔を組み合わせて行うため、痛みを抑えて快適に受けていただけます。' },
              { text: '目立たない小さな切開——傷跡が目立ちにくい部位を厳選して切開を行い、傷跡を最小限に抑えます。' },
              { text: '脂肪吸引・ボディラインの形成——切開部位から細いカニューレ（専用の吸引管）を挿入し、余分な脂肪を丁寧に吸引します。全体のアウトラインとプロポーションを考慮し、なめらかで自然なボディラインに仕上げます。' },
              { text: '縫合と圧迫着の着用——切開部を丁寧に縫合した後、専用の圧迫着を着用します。腫れや内出血を軽減し、仕上がりのラインを美しく定着させます。' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: '上半身脂肪吸引—メリット', items: [
            '食事制限や運動では落としにくい頑固な脂肪をすっきり減少',
            '華奢で引き締まった理想の上半身へ',
            '二の腕・背中・胸周り・上腹部のラインを美しく整える',
            '全身のプロポーションとバランスを向上',
            '傷跡が目立ちにくい小さい切開で安心',
            'リバウンドしにくく、健康的な生活習慣で理想のラインが長期持続',
          ] },
        ],
        facts: {
          duration: '2～3時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後消毒' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約338,000～678,000円',
          priceNote: '部位ごとの脂肪吸引価格',
        } },
      { slug: 'lower-body-liposuction', name: '下半身脂肪吸引', summary: '太もも・お尻・下半身全体のラインをすっきりと美しく整えます。', heroImg: 'assets/lower-body-liposuction-illustration.png',
        about: [
          '下半身脂肪吸引は、お腹・腰・お尻・太もも・脚などの余分な脂肪を取り除き、すっきりと引き締まった美しいラインに整えます。身体本来の自然なメリハリを生かしながら、全体のバランスを整えることで、滑らかで長持ちする理想のシルエットを叶えます。',
        ],
        benefitGroups: [
          { title: '下半身脂肪吸引—メリット', items: [
            '食事制限や運動では落としにくい、お尻・太もも・ふくらはぎの頑固な脂肪を除去',
            '下半身のシルエットをスリムかつ滑らかに整え、バランスの取れたボディラインへ',
            '太もも外側の張り出した脂肪を改善し、腰から太ももにかけてのラインをすっきり整える',
            '内もものラインを綺麗に整え、皮膚同士の摩擦や擦れを軽減',
          ] },
        ],
        facts: {
          duration: '2～3時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後消毒' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約338,000～678,000円',
          priceNote: '部位ごとの脂肪吸引価格',
        } },
      { slug: '360-liposuction-arms', name: '360度 脂肪吸引（二の腕）', summary: '二の腕の全周から均一に脂肪を吸引し、どこから見ても華奢で美しい腕ラインをつくります。', heroImg: 'assets/360-arms-illustration.png',
        about: [
          '360°二の腕脂肪吸引は、前面・背面・内側・外側の360度全周から余分な脂肪を除去する手術です。あらゆる角度からアプローチすることで、すっきりと引き締まったバランスの良い腕ラインをつくります。',
        ],
        techHeading: '手術の流れ',
        techniques: [
          { title: '', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングと状態の確認——腕の形状、脂肪のつき方、皮膚の弾力性、お客様のご要望を丁寧に確認し、一人ひとりに合わせたオーダーメイドの手術プランをご提案します。' },
              { text: '麻酔——手術範囲に合わせて、通常は局所麻酔に睡眠麻酔を併用するか、全身麻酔で安全に行います。' },
              { text: '傷跡の目立たない切開——脇の下や腕のシワに沿った目立ちにくい位置を選んで小さく切開し、傷跡を最小限に抑えます。' },
              { text: '360°脂肪吸引＆ライン形成——小さな切開口から細いカニューレを挿入し、二の腕全体の余分な脂肪を取り除きます。前面・背面・内側・外側をバランスよく丁寧に整え、なめらかで自然な美しいラインをつくります。' },
              { text: '縫合・圧着固定——切開部を綺麗に縫合したあと、専用の圧着着を着用します。腫れやむくみを抑え、仕上がりの美しさとスムーズな回復をサポートします。' },
            ] },
          ] },
        ],
        dualFeature: {
          heading: '360°腕脂肪吸引の仕組み',
          intro: [],
          items: [
            { img: 'assets/arms360-full.png', title: '', desc: '' },
          ],
        },
        benefitGroups: [
          { title: '360度脂肪吸引—腕—メリット', items: [
            '二の腕の余分な脂肪をしっかり除去',
            '華奢で引き締まった腕ラインへ',
            'どの角度から見ても美しくメリハリのある仕上がり',
            '上半身全体のプロポーション・バランスが向上',
            '傷跡が目立たない小さな切開',
            '健康的な生活習慣の維持で、効果が長持ち',
          ] },
        ],
        facts: {
          duration: '2～3時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後消毒' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約338,000～678,000円',
          priceNote: '部位ごとの脂肪吸引価格',
        } },
      { slug: '360-liposuction-waist', name: '360度 脂肪吸引（ウエスト＆くびれ）', summary: 'ウエスト周り全体を360度脂肪吸引し、なめらかで美しいくびれラインをつくります。', heroImg: 'assets/360-waist-illustration.png',
        about: [
          '360°ウエスト＆くびれの脂肪吸引は、ウエスト・脇腹・腰回りを含む胴回り全体の余分な脂肪を取り除く手術です。全方位からラインを丁寧に整えることで、キュッと引き締まったくびれとなめらかなボディラインを作り出し、バランスの取れた美しいシルエットへ導きます。',
        ],
        idealFor: {
          heading: 'こんな方におすすめ',
          items: [
            'ウエストや脇腹の落ちにくい脂肪が気になる方',
            '食事制限や運動ではなかなか痩せない腰周りの脂肪にお悩みの方',
            'キュッと引き締まった、メリハリのあるウエストラインを目指す方',
            '標準体重に近いものの、理想のボディライン（くびれ）を整えたい方',
            '皮膚に適度な弾力性がある方',
            '胴回り全体をバランスよく整え、スタイルをよく見せたい方',
          ],
        },
        techHeading: '手術の流れ',
        techniques: [
          { title: '', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングと体型の診断——お体のライン、脂肪のつき方、皮膚の状態、ご要望を丁寧に確認し、一人ひとりに合わせたオーダーメイドの手術プランをご提案します。' },
              { text: '麻酔——手術範囲に合わせて、通常は局所麻酔に睡眠麻酔を併用するか、全身麻酔で安全に行います。' },
              { text: '傷跡の目立たない切開——ウエストや腰回りなどの目立ちにくい位置を選んで小さく切開し、傷跡を最小限に抑えます。' },
              { text: '360°脂肪吸引＆ライン形成——小さな切開口から細いカニューレを挿入し、ウエスト・脇腹・腰周りの余分な脂肪を取り除きます。胴回り全周を丁寧に整え、なめらかでメリハリのあるウエストラインをつくります。' },
              { text: '縫合・圧着固定——切開部を綺麗に縫合したあと、専用の圧着着を着用します。腫れやむくみを抑え、仕上がりの美しさとスムーズな回復をサポートします。' },
            ] },
          ] },
        ],
        dualFeature: {
          heading: '腹部脂肪吸引の主なポイント',
          intro: [
            '腹部は表層と深層の両方の脂肪層が発達しやすく、脂肪がつきやすい部位です。その反面、脂肪吸引によって最も変化を実感しやすい部位でもあります。',
            'お腹だけでなく、つながる脇腹や腰周りの脂肪も同時に整えることで、自然なくびれを保ちながら、引き締まったフラットなウエストラインをつくります。',
          ],
          items: [
            { img: 'assets/abdo-area-front.png', title: '正面から見た図', desc: '上腹部・下腹部、そして脇腹の内側まで丁寧に整え、正面から見てもなめらかでフラットなラインに仕上げます。' },
            { img: 'assets/abdo-area-side.png', title: '側面から見た図', desc: '脇腹から腰周りにかけてウエストラインになじませることで、どの角度から見てもバランスの取れた美しいシルエットを形成します。' },
          ],
        },
        benefitGroups: [
          { title: '360度脂肪吸引—ウエスト＆くびれ—メリット', items: [
            'ウエスト・脇腹の落ちにくい脂肪をしっかり除去',
            'よりスリムでメリハリのあるウエストラインへ',
            '女性らしい自然なボディライン・カーブを強調',
            '全身のプロポーション・バランスが向上',
            '傷跡が目立たない小さな切開',
            '健康的な生活習慣の維持で、効果が長持ち',
          ] },
        ],
        facts: {
          duration: '2～3時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後消毒' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約338,000～678,000円',
          priceNote: '部位ごとの脂肪吸引価格',
        } },
      { slug: 'back-liposuction', name: '背中の脂肪吸引', summary: 'ブラジャーの上に乗るはみ出し肉や背中のたるみを除去し、すっきりとした後ろ姿へと整えます。', heroImg: 'assets/back-liposuction-illustration.png',
        about: [
          '背中の脂肪吸引は、上背部・中背部・下背部、そしてブララインに溜まった頑固な脂肪を除去するボディライン整形です。余分な脂肪を取り除いてボディラインを整えることで、よりなめらかで引き締まったメリハリのあるボディへと導きます。',
        ],
        techHeading: '手術の流れ',
        techniques: [
          { title: '', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリング・診察——背中のライン、脂肪のつき方、皮膚の弾力性を精緻に診断し、ご希望の仕上がりに合わせたオーダーメイドの手術プランをご提案します。' },
              { text: '麻酔——手術範囲やご希望に応じて、局所麻酔＋睡眠麻酔または全身麻酔を行います。痛みのない快適な状態で手術をお受けいただけます。' },
              { text: '最小限の切開——傷跡が目立たない位置を計算して数ミリ程度の小さな切開を加え、安全にアプローチします。' },
              { text: '脂肪吸引・ボディデザイン——切開部から極細のカニューレを挿入し、気になる部位の余分な脂肪を丁寧に吸引します。単に減らすだけでなく、背中全体の滑らかなグラデーションとボディバランスを考慮して美しいラインに仕上げます。' },
              { text: '縫合・圧迫固定——切開部を丁寧に縫合した後、専用の圧迫着を着用します。腫れや内出血を最小限に抑え、回復を促すとともに、綺麗な仕上がりを定着させます。' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: '背中の脂肪吸引—メリット', items: [
            '頑固な背中の脂肪をすっきり除去',
            'ブララインのはみ出し肉や背中のたるみを改善',
            '滑らかで引き締まったメリハリのあるボディへ',
            '全身のプロポーション・バランスが向上',
            '傷跡が目立たない小さな切開',
            '健康的な生活習慣の維持で、効果が長持ち',
          ] },
        ],
        facts: {
          duration: '2～3時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後消毒' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約338,000～678,000円',
          priceNote: '部位ごとの脂肪吸引価格',
        } },
      { slug: 'tummy-tuck', name: '腹壁形成術', summary: '伸び切ったお腹の皮膚を取り除き、ゆるんだ腹筋（筋膜）を強力に引き締めます。', heroImg: 'assets/tummy-tuck-illustration.png',
        about: [
          '腹壁形成は、お腹の余分な皮膚や脂肪を除去し、開いた腹直筋を引き締めてボディラインを整える施術です。特に出産後や大幅なダイエット後、加齢によるぽっこりお腹やたるみを改善し、フラットで引き締まったお腹周りを実現します。',
        ],
        techHeading: '手術の流れ',
        techniques: [
          { title: '', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングと状態の確認——お腹の皮膚や脂肪の付き方、筋肉の開き具合、ご希望の仕上がりを確認し、お一人おひとりに合わせた手術プランを提案します。' },
              { text: '麻酔——手術中の痛みや不安をなくし、リラックスして受けていただけるよう、通常は全身麻酔で行います。' },
              { text: '切開ラインのデザイン——傷跡が目立ちにくいよう、通常はパンツラインの内側に沿って、お腹の下部を丁寧に水平切開します。' },
              { text: '筋肉（腹直筋）の縫縮・修復——筋肉が伸びたり離れたりしている（腹直筋離開）場合、中央に引き寄せてしっかりと縫い合わせ、引き締まった平らな腹壁を再現します。' },
              { text: '余分な皮膚・脂肪の除去——たるんだ皮膚と余分な脂肪を取り除き、残った皮膚をきれいに引き伸ばして、なめらかなウエストラインを形成します。' },
              { text: 'おへその再配置（形成）——全体的な腹壁形成（フル）では、皮膚を引き上げた後、おへそが自然な位置に収まるよう丁寧に再配置します。' },
              { text: '縫合と圧迫着の着用——切開部位を綺麗に縫合した後、腫れを抑え綺麗に仕上がるよう、専用の圧迫着を着用してダウンタイムをサポートします。' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: '腹壁形成—メリット', items: [
            '腹部の余分な皮膚の除去',
            '弱った・分離したお腹の筋肉の引き締め',
            'よりフラットで引き締まった腹部の実現',
            'ウエストラインのメリハリ改善',
            '減量や出産後による皮膚のたるみの軽減',
            '全身のボディラインの向上',
            '長期間持続する効果',
          ] },
        ],
        facts: {
          duration: '2～3時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後消毒' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約564,000～1,016,000円',
        } },
      { slug: 'body-lift', name: 'ボディリフト', summary: '大幅な減量後に生じる腰回り全体の皮膚のたるみを引き上げ、すっきりとリフトアップします。', heroImg: 'assets/body-lift-illustration.png',
        about: [
          'ボディリフトは、大幅な減量や出産、加齢によって生じた余分な皮膚を取り除き、美しいボディラインを再構築する施術です。たるんだ皮膚を引き締めて身体の輪郭を整えることで、引き締まったなめらかでバランスの良いシルエットへ導きます。',
        ],
        techHeading: '手術の流れ',
        techniques: [
          { title: '', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングと状態の確認——たるんだ皮膚の範囲やボディライン、皮膚の状態、ご希望の仕上がりを確認し、お一人おひとりに合わせた手術プランを提案します。' },
              { text: '麻酔——手術中の痛みや不安をなくし、リラックスして受けていただけるよう、全身麻酔で行います。' },
              { text: '切開ラインのデザイン——水着や下着で隠れる位置を選び、丁寧に切開を行います。※切開の位置や長さは手術部位によって異なります。' },
              { text: '余分な皮膚・脂肪の除去——腹部・ウエスト・腰・お尻・太ももなど、対象部位のたるんだ皮膚と余分な組織を取り除きます。' },
              { text: '深層組織のリフトと引き締め——残った皮膚と深層組織を引き上げて固定し、なめらかな輪郭と全身のメリハリのあるボディラインを整えます。' },
              { text: '縫合と圧迫着の着用——切開部位を綺麗に縫合した後、腫れを抑え美しい仕上がりを維持できるよう、専用の圧迫着を着用して回復をサポートします。' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: 'ボディリフト—メリット', items: [
            '余分な・たるんだ皮膚の除去',
            '体のシルエットとバランスの改善',
            '複数部位の引き締めとなめらかさの実現',
            '日常生活における快適さと動きやすさの向上',
            'より引き締まったボディラインの形成',
            '長期間持続する効果',
            '自信の回復と生活の質（QOL）の向上',
          ] },
        ],
        facts: {
          duration: '2～3時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後消毒' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約564,000～1,016,000円',
        } },
      { slug: 'fat-grafting', name: '脂肪移植', summary: 'ご自身の身体から採取・精製した脂肪を必要な部位に注入し、自然なボリュームを整えます。', heroImg: 'assets/fat-grafting-illustration.png',
        about: [
          '脂肪移植（脂肪注入）は、ご自身の体脂肪を用いて失われたボリュームを補い、顔の輪郭や部位のくぼみを整える施術です。主な施術部位には、顔全体・目の下・頬・こめかみ・額のほか、バストやヒップ（お尻）などがあります。',
        ],
        techHeading: '手術の流れ',
        techniques: [
          { title: '', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングと手術計画——手術部位や採取できる脂肪の量、ご希望の仕上がりを確認し、お一人おひとりに合わせた手術プランを提案します。' },
              { text: '麻酔——手術部位や移植する脂肪量に合わせて、通常は局所麻酔＋睡眠麻酔、または全身麻酔で行います。' },
              { text: '脂肪採取——脂肪吸引の技術を用いて、腹部・太もも・腰周りなどのドナー部位から、脂肪細胞を傷つけないよう丁寧に採取します。' },
              { text: '脂肪の精製・遠心分離——採取した脂肪を丁寧に処理・精製し、移植に適した健康で純度の高い脂肪細胞のみを抽出します。' },
              { text: '脂肪注入——精製した脂肪を手術部位へ均一かつ少量ずつ層状に注入し、なめらかで自然なボリュームと美しい輪郭を形成します。' },
              { text: '回復と定着——注入された脂肪は徐々に周辺組織と馴染み、血流が再開されることで定着します。一部は自然に吸収されますが、定着した脂肪は長期間効果を維持します。' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: '脂肪移植—メリット', items: [
            '失われたボリュームを自然に回復',
            '人工フィラー不使用・ご自身の自家脂肪を使用',
            '顔の輪郭とバランス（対称性）の改善',
            '柔らかくナチュラルな仕上がり',
            '複数部位の同時手術が可能',
            '脂肪吸引とボリュームアップのW効果',
            '長期間持続する効果',
          ] },
        ],
        facts: {
          duration: '2～3時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後消毒' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約203,000～1,016,000円',
          priceNote: '部位・量により価格が異なります',
        } },
      { slug: 'breast-fat-transfer', name: '胸の脂肪移植', summary: 'ご自身の脂肪を用いて、触り心地も自然で美しいバストへとボリュームアップします。', heroImg: 'assets/breast-fat-transfer-illustration.png',
        about: [
          '胸の脂肪移植（脂肪注入豊胸）は、ご自身の脂肪を用いてバストのボリューム・形・左右のバランスを整える、ナチュラルな豊胸術です。脂肪吸引と脂肪移植を組み合わせることで、シリコンを使わずに、自然で美しく仕上げます。',
        ],
        techHeading: '手術の流れ',
        techniques: [
          { title: '', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングと手術計画——バストの形や全身のバランス、採取できる脂肪の量、ご希望の仕上がりを確認し、お一人おひとりに合わせた手術プランを提案します。' },
              { text: '麻酔——手術中の痛みや不安をなくし、リラックスして受けていただけるよう、通常は全身麻酔または局所麻酔＋睡眠麻酔で行います。' },
              { text: '脂肪採取——脂肪吸引の技術を用いて、腹部・腰周り・太ももなどから余分な脂肪を丁寧に採取します。' },
              { text: '脂肪の精製・遠心分離——採取した脂肪を丁寧に処理・精製し、健康で純度の高い脂肪細胞のみを他の組織液と分離します。' },
              { text: 'バストへの脂肪注入——精製した脂肪をバストの各層へ均一かつ少量ずつ注入し、ボリュームと形を整えながら自然な輪郭を形成します。' },
              { text: '回復と定着——注入された脂肪は徐々に周辺組織と馴染み、血流が再開されることで定着します。一部は自然に吸収されますが、定着した脂肪はバストの一部として長期間維持されます。' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: '胸の脂肪移植—メリット', items: [
            'バストサイズの自然なボリュームアップ',
            'バストの形および左右バランスの改善',
            'シリコンを使わない自家脂肪の活用',
            '触り心地と見た目の柔らかく自然な仕上がり',
            '脂肪吸引による体型の同時メイキング',
            '異物注入やインプラント特有の懸念・リスクの解消',
            '定着による長期間持続する効果',
          ] },
        ],
        facts: {
          duration: '2～3時間',
          anesthesia: '鎮静麻酔（セデーション）',
          stay: [
            { day: '2日目', label: '術後消毒' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約564,000～1,128,000円',
        } },
    ],
  },
  {
    slug: 'breast-surgery',
    name: '胸の手術',
    shot: 'Breast surgery photo',
    desc: '形やボリューム、バランスを整えるオーダーメイドの施術。',
    heroImg: 'assets/breast-surgery-hero.png',
    heroAspect: '2802 / 1504',
    heroFit: 'contain',
    introBlocks: [
      { text: '胸の手術は、乳がん治療から術後の乳房再建、理想のボディラインを目指す美容目的まで、さまざまな理由で行われます。' },
      { heading: '手術の流れ', text: '術前：担当医が健康状態やご要望を丁寧にヒアリングし、お一人おひとりに最適な手術をご提案します。必要に応じて事前に画像検査（マンモグラフィーやMRIなど）を行います。' },
      { text: '手術中：多くの胸の手術は全身麻酔で行われ、手術内容や複雑さに応じて1～6時間かかります。' },
      { text: '回復：回復期間は手術によって異なります。数日程度の安静で済むものから、乳房再建術のように数週間かかるものまで様々です。医療スタッフが傷口のケア、活動制限、定期検診についてご案内します。' },
      { text: 'どのような理由であれ、目標は常に同じです——健康で快適、そして自信の持てる体を感じていただくことです。' },
    ],
    more: '胸の施術を見る',
    tags: ['豊胸手術', 'リフト', '縮小手術'],
    procedures: [
      { slug: 'breast-augmentation', name: '豊胸手術', summary: 'シリコンによりバストのサイズと形を整え、バランスの取れた理想のボリュームを実現します。', heroImg: 'assets/breast-augmentation-illustration.png',
        about: [
          '豊胸手術は、シリコンを用いてバストのサイズや形を整える手術です。より豊かなバストラインを目指す方はもちろん、左右差の改善、妊娠・授乳や減量によって失われたハリ・ボリュームを取り戻したい方に、広く選ばれている人気の美容外科手術です。',
        ],
        aboutSections: [
          { heading: '施術中に何が行われるか', paras: [] },
          { heading: '個別カウンセリング', paras: [
            '担当医がご希望を丁寧にお伺いし、お体に最も適したシリコンのサイズと形をご提案いたします。',
          ] },
          { heading: '手術', paras: [
            '手術は全身麻酔で行われるため、お休みいただいている間に痛みのなく快適に終了します。',
            '乳房下径線、乳輪周り、脇の下など、目立たない場所に小さな切開で行います。',
            'シリコンを最適な位置へ丁寧に挿入し、自然でバランスの取れた美しさに仕上げます。',
          ] },
          { heading: '回復', paras: [
            '術後数日間は、軽度の腫れや張り、痛みが生じることがあります。',
            '多くの方は1週間ほどで日常の生活や仕事に復帰していただけますが、激しい運動は数週間お控えいただく必要があります。',
          ] },
        ],
        benefitGroups: [
          { items: [
            'バストのサイズと理想的な膨らみを形成',
            'バストの形と左右のバランスを改善',
            '妊娠・授乳や減量により失われたボリュームを回復',
            '全体のバランスとシルエットの向上',
            '服がより綺麗に、自信を持って着られるように',
            '自然で美しい仕上がりの長期間維持',
          ] },
        ],
        figureNote: {
          heading: '最新HD内視鏡による精密手術',
          img: 'assets/breast-endoscope-system.png',
          intro: [
            '超高精細な内視鏡で視野を完全に確保し、繊細かつ正確な手術を行います。正常な組織を傷つけず、拘縮を引き起こす被膜組織を徹底的に除去。繰り返す合併症の不安を解消します。',
          ],
          extra: {
            heading: '直接視認による安心の手術',
            text: '術部を直接目で確認しながら行うため、組織への不要なダメージを最小限に抑え、被膜拘縮・痛み・傷跡・血腫（血液貯留）のリスクを大幅に軽減します。',
          },
        },
        surgMethods: {
          heading: '韓国における代表的な豊胸手術方法',
          items: [
            { img: 'assets/breast-method-dual-plane.png', title: 'デュアルプレーン法',
              paras: [
                'シリコンの一部を大胸筋の下、一部を乳腺組織の下に配置する手術法です。自然な見た目と柔らかい質感のバストを実現でき、体脂肪が少ない（痩せ型の）患者様でも安心して施術を受けられます。',
              ],
              groups: [
                { kind: 'dis', items: [
                  '筋肉の収縮に伴う胸の変形や、シリコンの下方へのズレ、外側への移動などが生じる場合があります。',
                ] },
              ] },
            { img: 'assets/breast-method-triple-plane.png', title: 'トリプルプレーン法',
              groups: [
                { kind: 'adv', items: [
                  '運動時の胸の変形やバストの外側への流出を防ぎ、垂れや下方へのズレをしっかり予防します。動きや角度を選ばず、あらゆるシーンで自然で理想的なバストの形を作り出します。',
                ] },
                { kind: 'dis', items: [
                  '輪郭の浮き・リップリング： 特に痩せ型の方では、シリコンの端が見えたり皮膚のヨレが生じることがあります。',
                  '手術の難易度の高さ： 高度な技術を要する手術のため、医療チームの習熟度により結果に差が生じる場合があります。',
                  '修正術の複雑化： 万が一の被膜拘縮などによる再手術の際、より複雑な処置が必要となります。',
                ] },
              ] },
            { img: 'assets/breast-method-fat-grafting.png', title: '脂肪注入による豊胸',
              groups: [
                { kind: 'adv', items: [
                  '自身の脂肪を使用するため、触れた質感や重力に伴う揺れ・動きが本物の乳腺組織とほぼ変わらない自然さを誇ります。シリコン特有のお椀のような不自然な膨らみがなく、なめらかで美しいバストラインに仕上がります。',
                ] },
                { kind: 'dis', items: [
                  'サイズの限界： 1回の施術でのサイズアップは通常1〜1.5カップ程度が限度となります。',
                  '体重変動の影響： 体重の減少に伴い、バストのボリュームも減少する可能性があります。',
                  '定着不全のリスク： 脂肪の定着状況によって、脂肪壊死やしこりなどの合併症が起こる場合があります。',
                ] },
              ] },
          ],
        },
        dualFeature: {
          heading: '胸の形に合わせたオーダーメイドの手術法',
          intro: [
            '単にサイズだけを追及するのではなく、体全体のバランスとバスト本来の形を考慮した体系的な検査・診断が不可欠です。お一人おひとりの骨格や状態に合わせた最適な手術をご提案します。',
          ],
          items: [
            { img: 'assets/breast-chest-protruding.png', title: '突出型（鳩胸）',
              desc: '鳩胸はシリコンが外側に移動しやすいため、内側の剥離を十分に行い、外側の剥離を最小限に抑えることで美しいポジションを維持します。' },
            { img: 'assets/breast-chest-sunken.png', title: '陥没型（漏斗胸）',
              desc: '漏斗胸は術後にバストが中央へ寄りがちなため、基本的な剥離をしつつも内側の剥離を控えめに調整し、バランスの取れた仕上がりを実現します。' },
            { img: 'assets/breast-chest-asymmetric.png', title: '左右非対称の胸',
              desc: '左右の高さに差がある場合は、それぞれ異なる高さ・位置にシリコンを入れ、対称的でバランスの取れた胸元に仕上げます。' },
          ],
        },
        facts: {
          duration: '1.5～2時間',
          anesthesia: '鎮静麻酔（セデーション）または全身麻酔',
          stay: [
            { day: '2日目', label: '術後消毒' },
            { day: '7日目', label: '抜糸（溶ける糸の場合は不要）' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約678,000～1,354,000円',
        } },
      { slug: 'breast-lift', name: 'バストリフト（乳房懸垂術）', summary: '下垂したバストを引き上げ、ハリのある若々しいバストラインへ導きます。', heroImg: 'assets/breast-lift-illustration.png',
        about: [
          '余分な皮膚を取り除き周囲の組織を引き締めることで、下垂したバストを持ち上げて再形成する手術です。若々しいバストラインと乳頭の位置を取り戻し、自然で健康的な印象に仕上げます。',
        ],
        aboutSections: [
          { heading: '手術の流れ', paras: [] },
          { heading: '個別カウンセリング', paras: [
            '担当医がバストの形状や皮膚の弾力性、ご希望の仕上がりを精細に診察・評価し、お一人おひとりに合わせたオーダーメイドの手術プランをご提案します。',
          ] },
          { heading: '手術', paras: [
            '術中の痛みや不安をなくし、快適に受けていただくため全身麻酔下で行います。余分な皮膚を切除し、乳腺組織の位置を再形成することでハリのある上向きなバストラインを形成。必要に応じて乳頭・乳輪の位置も理想的な高さへ調整します。',
          ] },
          { heading: '回復・アフターケア', paras: [
            '術後数日間は軽度の腫れや内出血、違和感が生じることがありますが、多くの方は1〜2週間ほどで無理のない日常活動へ戻ることができます。仕上がりを美しく維持し治癒を促進するため、一定期間は専用のサポートブラ（術後ブラ）をご着用いただきます。',
          ] },
        ],
        idealFor: {
          heading: 'こんな方におすすめ',
          items: [
            '出産や授乳後の弾力低下により、バストの垂れが気になる方',
            '加齢に伴う皮膚やクーパー靭帯の緩みで、下垂が進行している方',
            '大幅な体重の変化によって、バストの形状やハリが変わってしまった方',
            'バストラインや乳頭の位置が下がり、位置を改善したい方',
            '補正下着でもカバーが難しく、バストの見た目や自信を取り戻したい方',
          ],
        },
        stepGallery: {
          heading: '胸のたるみ（下垂）セルフ診断',
          cols: 4,
          intro: ['あなたはどの段階？'],
          steps: [
            { title: '正常なバスト', img: 'assets/breast-lift-stage-normal.png',
              caption: '乳頭の位置がバストの下のライン（乳房下溝）より約4〜5cm上にある状態です。' },
            { n: '1', title: '軽度の下垂', img: 'assets/breast-lift-stage-1.png',
              caption: '乳頭の位置が乳房下溝より約1cm下がっている状態です。' },
            { n: '2', title: '中等度の下垂', img: 'assets/breast-lift-stage-2.png',
              caption: '乳頭の位置が乳房下溝より約2cm下がっている状態です。' },
            { n: '3', title: '重度の下垂', img: 'assets/breast-lift-stage-3.png',
              caption: '乳頭の位置が乳房下溝より3cm以上下がっている状態です。' },
          ],
        },
        benefitGroups: [
          { items: [
            '垂れたバストを持ち上げて美しく再形成',
            'より引き締まった若々しいバストラインを回復',
            'バストの左右のバランスと輪郭を改善',
            '下向きになった乳頭の位置を整えて修正',
            '体全体のプロポーションとバランスの向上',
            '服やブラジャーがより綺麗に、快適に着られるように',
          ] },
        ],
        facts: {
          duration: '2～3時間',
          anesthesia: '全身麻酔',
          stay: [
            { day: '2日目', label: '術後消毒' },
            { day: '7日目', label: '抜糸（溶ける糸の場合は不要）' },
            { day: '8日目', label: '帰国' },
          ],
          price: '約678,000～1,354,000円',
        } },
      { slug: 'breast-reduction', name: '乳房縮小手術', summary: '過剰なバスト組織を除去して肩こりなどの不快感を軽減し、バランスの良い大きさに整えます。', heroImg: 'assets/breast-reduction-illustration.png',
        about: [
          '乳房縮小手術は、余分な乳腺組織・脂肪・皮膚を除去し、バストのサイズや重さを軽減する施術です。重みによる身体的な不快感を和らげ、お体とのバランスが整ったバストへと導きます。',
        ],
        techHeading: '手術中に何が行われるか',
        techniques: [
          { title: '個別カウンセリング', blocks: [
            { type: 'para', text: '担当医師がカウンセリングでお悩みを詳しくお聞きし、バストのサイズや状態を診察した上で、最適な手術プランをご提案いたします。' },
          ] },
          { title: '手術', blocks: [
            { type: 'ulist', items: [
              { text: '患者様の負担や不快感を軽減するため、手術は全身麻酔下で行われます。' },
              { text: '過剰な乳腺組織や脂肪、皮膚を丁寧に取り除きます。' },
              { text: '残った乳腺組織を再形成し、より小さく引き締まったバランスの良いバストラインへ整えます。' },
              { text: '新しいバストの形に合わせて、乳頭や乳輪を最適な位置へ調整する場合もあります。' },
            ] },
          ] },
          { title: '回復', blocks: [
            { type: 'ulist', items: [
              { text: '術後数週間は、軽度の腫れや内出血、痛みが生じることがあります。' },
              { text: 'ほとんどの患者様は、1〜2週間ほどで負担の少ない日常活動へ復帰が可能です。' },
              { text: '傷口の回復を促し、快適に過ごしていただくため、通常はサポート力の高い術後用ブラをご着用いただきます。' },
            ] },
          ] },
        ],
        dualFeature: {
          heading: '乳房固定術（バストリフト）の手術方法',
          intro: [
            'バストリフト手術とは、下垂したバスト（乳頭・乳輪を含む）を、より自然で若々しい位置へと引き上げて固定する施術です。',
          ],
          items: [
            { img: 'assets/breast-mastopexy-diagram.png', title: '', desc: '傷跡を最小限に抑えるため、切開は乳輪の周りのみにとどめます。内部の乳腺組織を円錐状に再形成し、大胸筋へしっかりと固定します。この手法により、乳頭の感覚を維持しながら、若々しく引き締まった美しく上向きなバストラインを形成できます。また、ご要望に応じて豊胸や乳房縮小を同時に行うことも可能です。' },
          ],
        },
        benefitGroups: [
          { title: '乳房縮小手術—メリット', items: [
            '重いバストによる首・肩・背中のこりや痛みを軽減',
            'お体とのバランスが整った、自然で美しいプロポーションへ',
            '姿勢が改善され、日常の身体的ストレスを緩和',
            '運動やアクティビティをより快適に楽しめる',
            'バスト下の皮膚のこすれや、かぶれ・炎症を予防',
            '好きな服をすっきりと着こなし、自分に自信が持てるように',
          ] },
        ],
        facts: {
          duration: '2～3時間',
          anesthesia: '全身麻酔',
          stay: [
            { day: '2日目', label: '術後消毒' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          stayNote: '溶ける糸を使用する場合、抜糸は不要です。',
          price: '約564,000～903,000円',
        } },
      { slug: 'breast-revision', name: '胸の修正手術', summary: '過去に行った胸の手術結果を修正・改善し、ご希望の仕上がりへ近づけます。', heroImg: 'assets/breast-revision-illustration.png',
        about: [
          '胸の再手術は、過去に行った豊胸・バストリフト・胸の縮小手術などに関するお悩みを解決するための手術です。\nシリコンのサイズ変更やバストラインの改善、術後の合併症への対応、経年化したシリコンの入れ替えなど、お客様の現在の理想に合わせた仕上がりを叶えます。',
        ],
        techHeading: '手術中に何が行われるか',
        techniques: [
          { title: '個別カウンセリング', blocks: [
            { type: 'ulist', items: [
              { text: '担当医が現在のバストの状態を診察し、お客様のお悩みをしっかりとお伺いした上で、最適なオーダーメイドの手術プランをご提案します。' },
              { text: 'シリコンや乳腺組織の状態を正確に確認するため、画像検査や詳細な診察を行う場合があります。' },
            ] },
          ] },
          { title: '手術', blocks: [
            { type: 'para', text: '手術は全身麻酔で行われます。お客様のご希望や状態に合わせて、以下のような処置を行います。' },
            { type: 'ulist', items: [
              { text: '既存のシリコンバッグの入れ替え・除去' },
              { text: 'シリコンバッグのサイズや種類の変更' },
              { text: 'シリコンバッグの位置の修正' },
              { text: '左右差の改善' },
              { text: 'シリコン周辺の硬化（被膜拘縮）への対応' },
              { text: 'より美しい形と引き上げ効果を得るための、バストリフトと再手術の併用' },
            ] },
          ] },
          { title: '回復', blocks: [
            { type: 'ulist', items: [
              { text: 'ダウンタイムは、手術の難易度や内容によって個人差があります。' },
              { text: 'ほとんどの方は1〜2週間程度で、日常の軽作業やデスクワークに復帰していただけます。' },
              { text: '腫れや違和感などの症状は、その後数週間をかけて徐々に落ち着いていきます。' },
            ] },
          ] },
        ],
        dualFeature: {
          heading: '胸の再手術が必要になる3つのケース',
          intro: [],
          items: [
            { img: 'assets/rev-type-1.png', title: '1. 両胸の非対称', desc: 'バストのサイズや形、アンダーバストのラインの位置に左右差がある場合、再手術でバランスを美しく整えることが可能です。' },
            { img: 'assets/rev-type-2.png', title: '2. 被膜拘縮', desc: '術後の感染や血腫、体質や術後の経過などにより被膜拘縮が生じた場合、修正のための再手術が必要となります。' },
            { img: 'assets/rev-type-3.png', title: '3. サイズ・形への不満', desc: '仕上がりのサイズがご希望より小さかった、または大きすぎた場合でも、再手術で理想の大きさに調整・改善できます。' },
          ],
        },
        benefitGroups: [
          { title: '胸の再手術—メリット', items: [
            '過去の胸の手術によるお悩みを解消',
            'バストの形・左右差・全体的な見た目の改善',
            '経年化・破損したシリコンバッグの入れ替え',
            '術後の合併症への適切な対応',
            '現在の理想やご希望に合わせた仕上がりへアップデート',
            'バストへの自信と快適な日常生活を取り戻す',
          ] },
        ],
        facts: {
          duration: '2～3時間',
          anesthesia: '全身麻酔',
          stay: [
            { day: '2日目', label: '術後消毒' },
            { day: '7日目', label: '抜糸' },
            { day: '8日目', label: '帰国' },
          ],
          stayNote: '溶ける糸を使用する場合、抜糸は不要です。',
          price: '約903,000～1,693,000円',
        } },
    ],
  },
  {
    slug: 'skin-care',
    name: 'スキンケア・非手術施術',
    shot: 'Skin care photo',
    desc: 'ダウンタイムの少ない、背を伎ばす皮膚施術。',
    more: 'スキンケアを見る',
    heroImg: 'assets/skin-care-hero.png',
    heroAspect: '2528 / 1684',
    tags: ['リフト施術', 'ブースター', 'ボトックス・フィラー'],
    introBlocks: [
      { heading: '非手術スキンケア施術とは？', text: 'スキンケアやプチ整形・メスを使わない施術（非手術施術）は、注入治療やレーザー機器、外用薬、切らない低侵襲な技術を用いることで、手術のようなダウンタイムやリスクを抑えながら、肌のキメ・トーン・全体的な美しさを改善します。\n施術効果を維持したい方をはじめ、初期のエイジングケアを始めたい方、肌本来の健康とツヤを高めたい方に人気の選択肢です。' },
      { heading: 'こんな方に向いています', text: '切らない施術（スキンケア・プチ整形）は、若々しい印象を取り戻したい方や、過去の手術・施術の効果を維持したい方、ダウンタイムを抑えながら気になるお悩みを段階的にケアしたい方に最適です。\n施術効果や持続期間は種類によって異なりますが、一般的には一定期間継続するものが多いため、担当医がお肌の目標やライフスタイルに合わせて、最適な施術を組み合わせたオーダーメイドプランをご提案いたします。' },
    ],
    detail: {
      benefitGroups: [
        { title: '審美面のメリット', items: [
          '肌全体のキメ・トーン・透明感の向上',
          'メスを使わない小ジワ・シワ・初期のエイジングケア',
          'ニキビ跡・色素沈着・肌の色ムラの改善',
          'ヒアルロン酸注入によるくぼみ・へこみのボリューム改善',
          'ボトックス注射による表情ジワの軽減',
          'コラーゲン増強によるお肌の引き締め・たるみケア',
          'くすみの改善と、パッと明るいツヤ感の向上',
          '毛穴の開きの引き締め・皮脂コントロールによる美肌効果',
        ] },
        { title: '機能面におけるメリット', items: [
          '非手術施術は主に審美・美容目的で行われますが、症状によっては健康面の改善や日常の快適さを高める効果も得られます。',
          'ボトックス治療など一部の施術は、多汗症の改善や緊張型頭痛・片頭痛の緩和といった医療目的の治療法としても確立されています。',
          '専門的なスキンケアや適切な施術を併用することで、赤ら顔や炎症性ニキビの症状を抑え、健やかな肌状態へ導くことが可能です。',
        ] },
      ],
    },
    procedures: [
      { slug: 'lifting-tightening', name: 'リフト・タイトニング', summary: 'たるんだお肌を引き締める、切らないレーザー・高周波（エネルギー）施術です。', heroImg: 'assets/lifting-tightening-illustration.png',
        about: [
          '年齢とともに肌のハリは失われ、頬のコケ・たるみ、フェイスラインのぼやけ、首元のシワなどが目立ちやすくなります。\nたるみの改善方法には、レーザーや注入による負担の少ないプチ整形から、本格的な外科手術まで幅広い選択肢がございます。症状の進行具合や理想の持続期間に応じて、お一人おひとりに合わせた最適なプランをご提案いたします。',
        ],
        techHeading: '施術の選択肢',
        techniques: [
          { title: 'たるみが軽度の場合：切らない肌引き締め（非手術）', blocks: [
            { type: 'para', text: '肌に優しく働きかけ、本来のハリを取り戻すきっかけをつくります。熱や超音波エネルギー（ウルセラやサーマクールなど）を活用し、肌の内側からコラーゲン生成を促進。メスを使わないため、ダウンタイムもほとんどありません。' },
            { type: 'ulist', items: [
              { text: 'おすすめの方：初期のエイジングサインが気になる方、切らずにリフレッシュしたい方' },
              { text: 'ダウンタイム：ほとんどなし（施術後すぐに日常の生活に戻っていただけます）' },
              { text: '効果：2～3ヶ月かけて緩やかに実感していただけます' },
              { text: 'ご注意点：効果を維持するため、定期的な施術をおすすめする場合があります' },
            ] },
          ] },
          { title: 'たるみが気になる方へ：フェイスリフト手術', blocks: [
            { type: 'para', text: 'たるみが進行している方（頬やフェイスラインのぼやけ、首元のたるみなど）には、確実で持続性の高いフェイスリフト手術がおすすめです。皮膚表面だけでなく、深層の支持組織（SMAS層）から丁寧に引き上げ、余分な皮膚を適切に除去。ツッパリ感のない、自然で若々しいお顔立ちに仕上げます。' },
            { type: 'ulist', items: [
              { text: 'おすすめの方：進行したたるみの改善、長期間の効果を重視する方' },
              { text: 'ダウンタイム：約2～3週間（日常生活への復帰目安）' },
              { text: '効果：7〜10年以上（個人差あり）' },
              { text: '備考：軽度のたるみには「ミニフェイスリフト」、首元も同時にケアしたい場合は「ネックリフト」との併用が可能です。' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: 'リフト・タイトニング—メリット', items: [
            '整形感（やった感）のない、自然で若々しい仕上がり',
            'ぼやけたフェイスラインや頬の輪郭をくっきりとシャープに',
            '肌のハリ・ツヤを高め、なめらかな素肌へ',
            '気になる首元のたるみ・シワの改善',
            '外科手術（フェイスリフト）なら7〜10年以上の高い持続効果',
            '写真写りや対面での印象が良くなり、自分に自信が持てる',
            '豊富な選択肢：ご希望の効果やダウンタイムに合わせて非手術〜手術まで調整可能',
            '傷跡が目立ちにくく、周囲に気づかれにくい自然な美しさ',
          ] },
        ],
        facts: {
          duration: '30分～1時間',
          anesthesia: '局所麻酔または局所麻酔クリーム',
          stay: [
            { day: '1日目', label: '当日施術・当日帰国' },
          ],
          price: '56,900円より',
          priceNote: 'アルテラピー・プライム 56,900円／100ショット・ソフウェーブ 147,000円／100パルス・サーマクールFLX 158,000円／300ショット',
        } },
      { slug: 'skin-boosters', name: 'スキンブースター', summary: '水光注射などの保湿ケアで、うるおいとツヤのある健やかな素肌へ導きます。', heroImg: 'assets/skin-boosters-illustration.png',
        about: [
          'スキンブースター（リジュラン、プロファイロ、ヒアルロン酸製剤など）は、ヒアルロン酸注入（フィラー）とは異なり、ボリュームを出したり形を整えたりする施術ではありません。肌の奥深くに潤いを与え、コラーゲンの生成を促すことで、肌本来の質と健康状態を根本から改善することを目的としています。',
        ],
        aboutSections: [
          { heading: 'スキンブースターとは', paras: [
            'スキンブースターは、ヒアルロン酸やコラーゲン生成を促す有効成分を、肌の浅い層へ細かく（マイクロ注射）注入していく施術です。ヒアルロン酸注入（フィラー）のようにボリュームを出したり輪郭を形成したりするのではなく、肌の保湿力・質感・弾力性を内側から根本的に改善します。',
          ] },
        ],
        techHeading: '施術の流れ',
        techniques: [
          { title: 'ステップごとの施術内容', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリング・診察——担当医がお肌の状態（乾燥具合、小ジワ、お肌のハリなど）を詳しく拝見し、ご希望に沿った最適な製剤と治療計画をご案内いたします。' },
              { text: '洗顔・施術準備——衛生面を保ち感染リスクを抑えるため、施術部位（顔・首・手など）を綺麗に洗浄・消毒いたします。' },
              { text: '麻酔——注射による細かな刺激をやわらげるため、施術前に15〜20分ほど麻酔クリームをお塗りすることができます。' },
              { text: '注入——非常に細い針やマイクロカニューレを使用し、お肌の浅い層（真皮層）へ丁寧に注入していきます。', sub: [
                { text: 'お肌の真皮層へ、バランスよく均一に注入します' },
                { text: '一箇所に固まらせず、皮下全体へしっかりとなじませます' },
                { text: 'お肌全体をムラなく潤すため、極小量を細かく注入する技法を用いることもございます' },
              ] },
              { text: '仕上げ——注入後、製剤がお肌にきれいに分散するよう、やさしくマッサージを施します。' },
              { text: 'アフターケア説明——腫れを和らげるためのアイシングを行い、お帰り後の過ごし方や注意事項について分かりやすくご説明いたします。' },
            ] },
          ] },
          { title: '施術後の経過', blocks: [
            { type: 'ulist', items: [
              { text: '施術直後：注射部位にエンボスや軽い赤みが生じますが、通常は数時間で落ち着きます。' },
              { text: '術後1〜2日：針痕に軽い内出血や腫れが生じる場合があります。' },
              { text: '1〜2週間後：製剤が肌になじみ、うるおいとなめらかさを実感し始めます。' },
              { text: '数週間〜数ヶ月後：コラーゲン生成を促す成分（リジュランやプロファイロなど）の働きにより、肌のハリや弾力が徐々に高まります。' },
            ] },
          ] },
          { title: '一般的な施術プラン', blocks: [
            { type: 'ulist', items: [
              { text: '推奨の施術ペース：2～4週間おきに2～3回の施術を1セットとして受けていただくのが効果的です。' },
              { text: '効果の持続期間：使用する製剤によって異なりますが、数ヶ月～約1年間効果が持続します。' },
              { text: 'メンテナンス：良い状態を維持するため、6～12ヶ月ごとの定期的な継続施術をおすすめしています。' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: 'スキンブースター—メリット', items: [
            '高保湿ケア：肌の奥深くまで直接うるおいを届け、内側からふっくらとしたハリを与えます。',
            '肌質の改善：時間の経過とともに、なめらかで柔らかい素肌へと導きます。',
            '小ジワの改善：気になる目元や口元のちりめんジワ（細かい小ジワ）を目立たなくします。※深いシワにはフィラーやボトックスの併用が効果的です。',
            'コラーゲン生成の促進：数週間〜数ヶ月かけて肌自体のコラーゲンやエラスチンの生成を促し、肌の再生力を高めます。',
            'ツヤ・透明感の向上：くすみをケアし、明るく生き生きとした健やかなツヤ肌へ導きます。',
          ] },
        ],
        facts: {
          duration: '30分～1時間',
          anesthesia: '局所麻酔または局所麻酔クリーム',
          stay: [
            { day: '1日目', label: '当日施術・当日帰国' },
          ],
          price: '約11,200～33,800円',
          priceNote: 'レジュランI（1cc）16,900円・レジュランヒーラー（2cc）33,800円・ジュベルックスキン（2cc）28,300円・リスネ（1cc）11,200円・水光注射（2.5cc）11,200円・サーモン注射／PDRN（3cc）11,200円',
        } },
      { slug: 'collagen-stimulators', name: 'コラーゲンブースター', summary: '肌本来のコラーゲン生成を促し、内側からハリを取り戻す注入治療です。', heroImg: 'assets/collagen-stimulators-illustration.png',
        aboutSections: [
          { heading: 'コラーゲンブースターとは', paras: [
            'ヒアルロン酸（フィラー）のように物理的にボリュームを出したり、スキンブースターのように保湿を主目的としたりする治療とは異なり、肌自身の細胞に働きかけて自らコラーゲンを生成させる施術です。効果が時間をかけて徐々に現れるため、外から物質を入れるのではなく自分自身の組織を再生させ、非常に自然で美しい仕上がりを実感していただけます。',
          ] },
        ],
        techHeading: '施術の流れ',
        techniques: [
          { title: '一般的な種類', blocks: [
            { type: 'ulist', items: [
              { text: 'ポリ乳酸（PLLA）（例：スカルプトラ）' },
              { text: 'カルシウムヒドロキシアパタイト（CaHA）（例：レディアス）' },
              { text: 'ポリヌクレオチド（PN）／PDRN（例：リジュラン）' },
              { text: 'ポリカプロラクトン（PCL）（例：エランセ）' },
            ] },
          ] },
          { title: 'ステップごとの施術内容', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリング・診察——担当医がお肌の状態を丁寧に拝見いたします。頬やこめかみのこけ、フェイスラインや目の下のたるみなど、気になる箇所を正確に評価したうえで最適な注入プランをご提案します。' },
              { text: '消毒・麻酔——施術部位を綺麗に消毒します。スキンブースターに比べてやや深めの層へアプローチするため、痛みを和らげる麻酔を行います。' },
              { text: '注入——極細の針やマイクロカニューレを用い、お肌の深い層（真皮深層または皮下層）へ注入していきます。製剤が偏らないよう、扇状や格子状のパターンでバランスよく広げていきます。' },
              { text: 'マッサージ——注入後、製剤をお肌になじませて仕上がりを滑らかにし、しこりの予防をするためにマッサージを施します（スカルプトラやレディアス等で非常に大切な工程です）。' },
              { text: 'アフターケア——仕上がりをより美しく保つため、ご自宅で数日間行っていただくセルフマッサージの方法について丁寧にご説明いたします。' },
            ] },
          ] },
          { title: '施術後の経過', blocks: [
            { type: 'ulist', items: [
              { text: '施術直後：注入液のボリュームにより一時的に膨らんで見えますが、数日で自然に落ち着きます。' },
              { text: '術後〜数週間：製剤が肌になじむ段階のため、見た目の大きな変化はまだ見られません。' },
              { text: '数週間〜数ヶ月後：製剤の周囲で徐々に新しいコラーゲンが生成され、お肌のハリやボリュームが少しずつ改善します。' },
              { text: '効果の完成（ピーク）：ご自身のコラーゲン生成を促す治療のため、完成までに通常2〜3ヶ月（場合によってはそれ以上）かかります。' },
            ] },
          ] },
          { title: 'この施術が選ばれる理由', blocks: [
            { type: 'ulist', items: [
              { text: '徐々に現れる自然な変化：急激な見た目の変化ではなく、時間をかけて段階的にお肌を改善します。' },
              { text: 'ボリューム感と肌質の同時ケア：ふっくらとしたボリュームを与えるだけでなく、時間とともにハリと厚みのある健やかな素肌へ導きます。' },
              { text: 'ヒアルロン酸（フィラー）より優れた持続性：単に凹みを埋めるだけでなく自己組織の再生を促すため、一般的に1〜2年以上の長期間効果が持続します。' },
              { text: 'お顔全体のエイジングケア（若返り）に最適：頬やこめかみのこけ、フェイスラインのもたつき、お肌全体のたるみ改善に広く用いられています。' },
            ] },
          ] },
          { title: '一般的な施術プラン', blocks: [
            { type: 'ulist', items: [
              { text: '推奨の施術ペース：4〜6週間おきに2〜3回の施術を1セットとしてお受けいただくのが効果的です。' },
              { text: '効果の現れ方：回数を重ねるごとに効果が蓄積され、より高い実感を得られます。' },
              { text: 'メンテナンス：良い状態を維持するため、1〜2年ごとの定期的な継続施術をおすすめしています。' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: 'コラーゲンブースター—メリット', items: [
            '徐々に現れる自然な変化：急激な変化ではなく、時間をかけて段階的にお肌を構築・改善します。',
            'コラーゲン生成の活性化：単にヒアルロン酸（フィラー）を補うだけでなく、肌自体のコラーゲンを刺激して内側から肌質を改善します。',
            'ハリと厚みの向上：ボリュームを出すだけでなく、お肌のハリ感や厚みも同時に高めます。',
            '優れた持続効果：従来のフィラーよりも長持ちし、一般的に1〜2年以上の効果が期待できます。',
            '凹み・こけのボリューム回復：気になる部分（頬・こめかみ・フェイスラインなど）の凹みを自然にふっくらとさせます。',
            'たるみ改善と若々しい印象：お顔全体のたるみを引き上げ、ピンとしたハリのある若々しい印象へ導きます。',
          ] },
        ],
        facts: {
          duration: '30分～1時間',
          anesthesia: '局所麻酔または局所麻酔クリーム',
          stay: [
            { day: '1日目', label: '当日施術・当日帰国' },
          ],
          price: '約67,800～147,000円',
          priceNote: 'ジュベルックボリューム（4cc）67,800円・リトウECMブースター（6cc）113,000円・ジュバセルECMブースター（6cc）90,200円・セルディーエムECMブースター（6cc）124,000円・スカルプトラ（1バイアル）147,000円',
        } },
      { slug: 'laser-treatments', name: 'レーザー治療', summary: '肌のキメ・色素沈着・ニキビ跡などのお悩みに合わせ、最適なレーザーでピンポイントにアプローチします。', heroImg: 'assets/laser-treatments-illustration.png',
        about: [
          'レーザー治療は、高密度の光エネルギーを照射し、シミ・色素沈着・毛穴・肌の質感・ニキビ跡などの肌悩みにピンポイントでアプローチする施術です。気になるシミをケアしながらコラーゲンの再生を促し、透明感となめらかなツヤのある健やかな素肌へと導きます。通常、ダウンタイムはほとんどありません。',
        ],
        techHeading: '施術の流れ',
        techniques: [
          { title: 'ステップごとの施術内容', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリング・診察——担当医がお肌の状態（シミや色素沈着、毛穴のひらき、お肌の弾力、ニキビ跡など）を拝見いたします。ご希望の仕上がりに合わせ、適切なレーザー機器と照射強度をご提案します。' },
              { text: '洗顔・施術準備——お肌のメイクや皮脂、汚れをきれいに落とすため、施術部位を丁寧にクレンジングいたします。' },
              { text: '麻酔（ご希望・必要に応じて）——刺激を感じやすいレーザー（炭酸ガスレーザーやフラクショナルレーザーなど）を使用する際は、痛みを和らげるため事前に20〜30分ほど麻酔クリームをお塗りします。' },
              { text: 'レーザー照射——担当医が気になる部位へ丁寧にレーザーを当てていきます。施術中はピリピリとした刺激やじんわりとした温かさを感じる場合がございます。' },
              { text: '鎮静・アフターケア——照射後すぐに冷却マスクや鎮静クリーム、回復用アンプルでお肌をやさしくケアし、赤みや熱感を和らげます。' },
              { text: '日焼け対策・ご注意点の説明——施術後のお肌は一時的にデリケートになっておりますので、日焼け止めの使用方法や日常での注意点について分かりやすくご案内いたします。' },
            ] },
          ] },
          { title: '施術後の経過', blocks: [
            { type: 'ulist', items: [
              { text: '施術直後〜1・2日目：軽度の赤み、ほてり感、わずかな腫れが生じる場合があります（※レーザーの出力や種類により異なります）。' },
              { text: '3〜7日目：出力の高いレーザー（CO2レーザーなど）の場合、微細なかさぶたの形成や、色素が一時的に濃くなる現象が生じることがあります（※自然に剥がれ落ちます）。' },
              { text: '1〜2週間後：お肌のトーンが明るくなり、なめらかな質感へと変わっていきます。' },
              { text: '数週間〜数ヶ月後：お肌の奥でコラーゲン再生が持続し、ハリ・毛穴の開き・ニキビ跡などが徐々に改善されます。' },
            ] },
          ] },
          { title: '一般的な施術プラン', blocks: [
            { type: 'ulist', items: [
              { text: '推奨の施術ペース：通常2～4週間おきに3～5回の施術を1セットとして受けていただくのが効果的です。' },
              { text: 'メンテナンス：効果を長く維持するため、定期的なメンテナンス施術をおすすめしています。' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: 'レーザー治療—メリット', items: [
            '肌トーンの改善：色素沈着・肝斑・シミをケアし、透明感のある肌へ',
            '毛穴・皮脂ケア：毛穴の開きを引き締め、皮脂バランスをコントロール',
            '肌質の改善：キメを整え、なめらかで均一な素肌へ',
            '傷跡・ニキビ跡ケア：ニキビ跡やクレーター状の凹凸を軽減',
            'コラーゲン再生の促進：肌奥のコラーゲン生成を促し、ハリと厚みをプラス',
            '赤み・赤ら顔の軽減：毛細血管の拡張による赤みをケア',
            '小ジワの改善：目元・口元などの細かな小ジワを目立たなく補正',
            'トーンアップ効果：施術直後からお肌のパッと明るいツヤ感を実感',
            '短いダウンタイム：日常への復帰がスムーズ（※レーザー出力により異なります）',
            'オーダーメイド治療：お一人おひとりの肌悩みに合わせたカスタマイズが可能',
          ] },
        ],
        facts: {
          duration: '30分～1時間',
          anesthesia: '局所麻酔または局所麻酔クリーム',
          stay: [
            { day: '1日目', label: '当日施術・当日帰国' },
          ],
          price: '約16,900～22,600円',
          priceNote: 'ピコシュアトーニング 16,900円・Vレーザー 22,600円・ジェネシストーニング 22,600円',
        } },
      { slug: 'acne-scar-treatments', name: 'ニキビ・ニキビ跡治療', summary: '複合的なアプローチでニキビ跡の凹凸をなめらかにし、進行中のニキビの炎症も落ち着かせます。', heroImg: 'assets/acne-scar-illustration.png',
        about: [
          'ニキビ・ニキビ跡治療では、レーザー、マイクロニードリング、サブシジョン、フィラー、各種注入治療などを組み合わせた対症療法・複合アプローチを行います。現在進行中のニキビ（炎症）をしっかり抑えながら、クレーターなどのニキビ跡をなめらかに修復。お一人おひとりのニキビや傷跡のタイプに合わせたオーダーメイドの施術プランで、今ある肌荒れと長引く凹凸・肌質トラブルの両方にアプローチします。',
        ],
        techHeading: '施術の流れ',
        techniques: [
          { title: 'ステップごとの施術内容（一般的な流れ）', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリング・肌診断——担当医がニキビの状態（進行中の炎症性ニキビか、治癒後のニキビ跡か）や、ニキビ跡のタイプ（アイスピック型、ボックスカー型、ローリング型、肥厚性瘢痕など）を詳しく診察し、最適な複合施術プランをご提案します。' },
              { text: 'クレンジング・洗顔——皮脂やメイク、汚れを綺麗に落とすため、施術部位を丁寧にクレンジング・洗浄します。' },
              { text: '麻酔（必要な場合）——マイクロニードリングやレーザー、サブシジョンなど刺激を感じやすい施術を行う場合は、事前に麻酔クリームを塗布し痛みを軽減します。' },
              { text: '施術の実施——お悩みの症状や施術法に合わせて丁寧に照射・注入を行います。', sub: [
                { text: 'レーザー / マイクロニードリング：ニキビ跡の部位へ規則正しく正確に照射・施術を行います' },
                { text: 'サブシジョン：ニキビ跡の下に医療用針を挿入し、皮膚を引き込んでいる癒着組織を切り離します' },
                { text: 'フィラー注入：凹んだニキビ跡の下に注入し、周囲の肌と同じ高さまでふっくらと持ち上げます' },
                { text: '進行中（炎症性）のニキビ：患部の圧出（面皰圧出）や炎症を抑えるニキビ注射（ステロイド注射等）を行います' },
              ] },
              { text: '鎮静・クーリングケア——赤みを抑え肌の回復を促すため、施術直後に冷却ジェルや鎮静パック、回復用アンプル（美容液）を塗布してお肌をケアします。' },
              { text: 'アフターケアのご案内——紫外線対策や施術部位への刺激を避ける注意点、ダウンタイム中のスキンケア方法について丁寧にご説明します。' },
            ] },
          ] },
          { title: '施術後の経過', blocks: [
            { type: 'ulist', items: [
              { text: '進行中（炎症性）ニキビの治療：1〜2日ほど軽い赤みや刺激感が生じる場合がありますが、炎症を起こしたニキビは数日以内に目に見えて落ち着いていきます。' },
              { text: 'ニキビ跡治療（レーザー・マイクロニードリング）：数日間の赤みや軽度の腫れのほか、場合によっては点状の出血やかさぶたが生じることがあります。' },
              { text: '術後1〜2週間：お肌の回復が進むにつれ、徐々にザラつきが取れてなめらかな質感へと変わっていきます。' },
              { text: '術後数ヶ月：肌の奥でコラーゲン再生が持続し、凹凸の深さや肌質が段階的に改善されます。\n※ニキビ跡治療の効果をしっかり実感いただくには、通常2〜3ヶ月以上かかり、複数回の継続施術が必要となる場合がございます。' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: 'ニキビ・傷跡治療—メリット', items: [
            '炎症ニキビケア：赤み・炎症を抑え、再発を防ぐ',
            '凹凸・クレーター補正：ニキビ跡を緩和',
            'キメ・肌質改善：なめらかで均一な肌表面へ',
            'コラーゲン再生：自活力を高め、凹んだ傷跡を修復',
            '色素沈着ケア：ニキビ跡のシミ・赤みを軽減',
            '立体的な修復：サブシジョン・フィラーで凹みを自然に引き上げ',
            '柔軟な複合施術：症状に応じた最適な組み合わせ治療',
            '透明感アップ：なめらかで美しい肌へ',
            'トータルケア：現在のニキビと過去のニキビ跡の両方を同時改善',
          ] },
        ],
        facts: {
          duration: '30分～1時間',
          anesthesia: '局所麻酔または局所麻酔クリーム',
          stay: [
            { day: '1日目', label: '当日施術・当日帰国' },
          ],
          price: '約3,300～33,800円',
          priceNote: 'ポテンツァ（RFマイクロニードル）16,900円・アービウムフラクセル 16,900円・ピコフラクセル 22,600円・Vレーザー（ニキビ赤み・傷跡）14,700円・サブシジョン＆レジュランS 20,400円・ASCE+エクソソーム（5cc）33,800円・肥厚性瘢痕／ケロイド（1cmあたり）3,300円',
        } },
      { slug: 'botox-fillers', name: 'ボトックス＆フィラー', summary: '表情ジワを和らげ、加齢によるボリュームダウンを手軽に改善するプチ整形です。', heroImg: 'assets/botox-fillers-illustration.png',
        about: [
          'ボトックスとフィラーはどちらも注入治療ですが、その作用やアプローチは大きく異なります。',
        ],
        aboutSections: [
          { heading: 'それぞれの違い', paras: [
            '【ボトックス（ボツリヌストキシン）】\n表情の繰り返しによってできるシワ（表情ジワ）を改善するため、筋肉の動きを一時的に和らげます。',
            '【フィラー（主にヒアルロン酸）】\n加齢などでボリュームが減少した部位にハリや立体感を与え、お顔のパーツや輪郭を美しく整えます。',
          ] },
        ],
        techHeading: '施術について',
        techniques: [
          { title: '一般的な用途', blocks: [
            { type: 'subhead', text: '【ボトックス】' },
            { type: 'ulist', items: [
              { text: '額のシワ' },
              { text: '眉間のシワ' },
              { text: '目尻のシワ' },
              { text: '鼻のシワ（バニーライン）' },
              { text: '小顔ボトックス（エラ）' },
              { text: '多汗症——脇、手のひら' },
              { text: 'ガミースマイルの改善' },
              { text: '首のシワ（広頸筋）' },
            ] },
            { type: 'subhead', text: '【フィラー】' },
            { type: 'ulist', items: [
              { text: '頬のボリューム・輪郭' },
              { text: '目の下のくぼみ' },
              { text: 'ほうれい線' },
              { text: '唇（ボリューム・形）' },
              { text: 'フェイスライン・あご先の輪郭' },
              { text: 'こめかみ' },
              { text: '鼻（場合により非手術鼻整形）' },
              { text: 'マリオネットライン' },
            ] },
          ] },
          { title: 'ステップごとの施術内容（両方共通）', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリング・診察——担当医がお顔の状態を丁寧に拝見いたします。ボトックスの場合は表情筋のクセや動きを、フィラーの場合は凹みや理想のお顔立ちを確認し、ご希望に沿った仕上がりをご提案します。' },
              { text: '消毒——安心・安全に施術をお受けいただくため、施術部位の汚れを落とし綺麗に消毒いたします。' },
              { text: '麻酔（ご希望に応じて）——唇などお痛みに敏感な箇所へ施術を行う場合は、ご希望に応じて事前に15〜20分ほど麻酔クリームをお塗りします。' },
              { text: '注入', sub: [
                { text: 'ボトックス：細い針を使用し、気になる筋肉のポイントへ少しずつ丁寧に注入していきます。' },
                { text: 'フィラー：極細針やカニューレを用い、お顔の立体感を出す深層から表面を整える浅層まで、状態に合わせてバランスよく注入します。' },
              ] },
              { text: '仕上がりの調整（フィラーのみ）——注入後、凹凸がなく自然で美しい輪郭になるよう、担当医が優しく手で形を整えます。' },
              { text: 'アフターケアのご説明——安心してダウンタイムをお過ごしいただけるよう、術後の注意点（ボトックス直後は横になったり擦ったりしない、フィラー直後は長湯や強い圧迫を避ける等）を丁寧にご説明します。' },
            ] },
          ] },
          { title: '施術後の経過', blocks: [
            { type: 'subhead', text: '【ボトックス】' },
            { type: 'ulist', items: [
              { text: '施術直後：小さな針跡や軽度の赤みが出る場合がありますが、すぐに落ち着きます。' },
              { text: '3〜7日後：筋肉の緊張が和らぎ、徐々に効果が現れ始めます。' },
              { text: '2週間後：効果がピークに達し、安定した仕上がりになります。' },
              { text: '持続期間：施術部位や体質・代謝により異なりますが、通常3〜6ヶ月ほど持続します。' },
            ] },
            { type: 'subhead', text: '【フィラー】' },
            { type: 'ulist', items: [
              { text: '施術直後：直後からボリューム感の変化を実感いただけます。一時的に多少の腫れ（特に唇など）が生じることがあります。' },
              { text: '3〜7日後：腫れが引くにつれ、より馴染んで自然な仕上がりになります。' },
              { text: '持続期間：使用する製剤や施術部位により異なりますが、通常6ヶ月〜2年ほど持続します。' },
            ] },
          ] },
          { title: '一般的な施術プラン', blocks: [
            { type: 'ulist', items: [
              { text: 'ボトックス：効果を維持するため、3～6ヶ月ごとの定期的な施術をおすすめしています。' },
              { text: 'フィラー：使用する製剤や部位により異なりますが、6～18ヶ月ごとのメンテナンスが目安です。' },
              { text: '併用治療：より高い若返り・エイジングケア効果を得るため、両方を組み合わせるケースも多くあります（表情ジワにはボトックス、ボリュームアップにはフィラー）。' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: '【ボトックス】', items: [
            '表情ジワ改善：額・眉間・目尻のシワを軽減',
            'シワ深化防止：継続的なケアで深い刻みジワを予防',
            '小顔・エラ張り補正：咬筋を緩めてシャープな輪郭へ',
            '多汗症ケア：気になる汗の量を手軽にセーブ',
            'ノーダウンタイム：施術直後から即日常復帰可能',
            '自然な変化：絶妙な注入量でバレない仕上がり',
          ] },
          { title: '【フィラー】', items: [
            'ボリューム復元：頬・こめかみ・目の下の凹みを補正',
            '深層シワ改善：ほうれい線やマリオネットラインを浅く',
            'メリハリのある輪郭：あご先・フェイスラインの立体感向上',
            'リップ形成：メスを使わずに魅惑的な唇へ',
            '即効性：施術したその場から明確な変化を実感',
            '修正可能：溶解剤でいつでも元に戻せる安心設計',
            '短時間ケア：当日中にそのまま普段の生活へ',
          ] },
        ],
        facts: {
          duration: '30分～1時間',
          anesthesia: '局所麻酔または局所麻酔クリーム',
          stay: [
            { day: '1日目', label: '当日施術・当日帰国' },
          ],
          price: '6,800円より',
          priceNote: '顎ボトックス（ゼオミン）50単位 11,200円・シワボトックス（ゼオミン）部位ごと 6,800円・スキンボトックス（ゼオミン）2cc 14,700円・顔フィラー（ベロテロ）1cc 33,800円・ボディフィラー（レナフィル）1ccあたり 9,000円',
        } },
      { slug: 'prp-stem-cell', name: 'PRP・幹細胞治療', summary: 'ご自身の成長因子や細胞の力を活用し、肌本来の再生力を高める再生医療です。', heroImg: 'assets/prp-stem-cell-illustration.png',
        about: [
          'どちらの施術も、ご自身の体から採取した生体材料を活用して組織の修復・再生・若返りを促す治療法です。合成物や外来物質を使わないため、他の美容施術に代わる「ナチュラルな選択肢」として、あるいは組み合わせによる相乗効果（補完治療）として大変人気を集めています。',
        ],
        aboutSections: [
          { heading: 'それぞれの特徴', paras: [
            'PRP（多血小板血漿）療法：ご自身の血液から血小板と成長因子を濃縮して抽出し、気になる部位へ再注入することで、コラーゲンの生成と皮膚組織の修復を促します。',
            '幹細胞治療：主に患者様ご自身の脂肪組織（または適正な供給源）から採取した幹細胞を活用し、細胞レベルから組織の再生・修復・若返りを強力に促進します。',
          ] },
        ],
        techHeading: '施術について',
        techniques: [
          { title: '一般的な用途', blocks: [
            { type: 'ulist', items: [
              { text: '肌の若返りとツヤ（※PRPとマイクロニードリングの併用は「ヴァンパイアフェイシャル」とも呼ばれます）' },
              { text: '目の下のくぼみ・クマ' },
              { text: '薄毛・脱毛の改善（頭皮へのPRP注入）' },
              { text: 'ニキビ跡の改善' },
              { text: '他施術後の傷跡・創傷の治癒サポート' },
              { text: '肌のキメ・ハリ・トーンの改善' },
              { text: '関節や腱の治療（※顔以外の応用例）' },
            ] },
          ] },
          { title: 'ステップごとの施術内容', blocks: [
            { type: 'subhead', text: 'PRP施術の手順' },
            { type: 'olist', items: [
              { text: '採血 — 腕から少量の血液を採血します。' },
              { text: '遠心分離 — 血液を遠心分離し、有効成分を含むPRP（多血小板血漿）を抽出・濃縮します。' },
              { text: '準備 — 抽出したPRPをシリンジに充填します。' },
              { text: '麻酔 — 施術部位に麻酔クリームを塗り、痛みを軽減します。' },
              { text: '施術', sub: [
                { text: '・注射： 目の下・頭皮・傷跡などへ直接注入します。' },
                { text: '・マイクロニードル塗布： 肌に細かい穴を開けてPRPを深部まで浸透させます（ヴァンパイアフェイシャル）。' },
              ] },
              { text: 'アフターケア — 赤みや腫れを冷やして鎮静し、紫外線対策を行います。' },
            ] },
            { type: 'subhead', text: '幹細胞治療の手順' },
            { type: 'olist', items: [
              { text: '採取 — 患者様ご自身の脂肪組織（脂肪吸引）などから幹細胞を採取します。' },
              { text: '処理 — ラボや専用機器を用いて細胞を分離し、高濃度に濃縮します。' },
              { text: '麻酔 — 採取部位と注入部位の両方に局所麻酔を行い、痛みを緩和します。' },
              { text: '注入 — 濃縮した幹細胞を対象部位（顔・頭皮・傷跡など）へ注入します。' },
              { text: 'アフターケア — 数日間は採取・注入部位に無駄な負担をかけないよう過ごしていただきます。' },
            ] },
          ] },
          { title: '施術後の経過', blocks: [
            { type: 'ulist', items: [
              { text: '直後：注入箇所に軽い赤み、腫れ、内出血が出ることがあります。' },
              { text: '数日後：肌が一時的にデリケートな状態になります。' },
              { text: '2〜4週間：肌の質感やツヤに改善が見られ始めます。' },
              { text: '2〜3ヶ月：コラーゲン生成と組織再生が促進され、より確かな効果があらわれます。' },
              { text: '発毛治療（PRP）：目に見える変化を得るには、数ヶ月間の継続的な施術が必要です。' },
            ] },
          ] },
          { title: '施術プラン目安', blocks: [
            { type: 'ulist', items: [
              { text: 'PRP： 4〜6週間隔で3〜4回実施後、6〜12ヶ月ごとのメンテナンスが目安です。' },
              { text: '幹細胞治療： 再生力が強いため回数は少なめで済みますが、1回あたりのスケールや費用は高くなります。' },
              { text: 'セット施術： マイクロニードリングやレーザーなど、他施術と組み合わせて効果を高めるアプローチも一般的です。' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: '', items: [
            '安心・安全の自己由来成分 — ご自身の生体材料を使用するため、アレルギーや拒絶反応のリスクが極めて低い治療です。',
            '自然な再生力を促進 — 肌本来のコラーゲン生成と組織再生を促します。',
            '肌質のトータル改善 — キメ・ツヤ・トーン・弾力性の向上を期待できます。',
            '目元の悩みを軽減 — 目の下のくぼみやクマを改善します。',
            '薄毛・脱毛のケア（PRP） — 頭皮環境を整え、発毛・育毛をサポートします。',
            'ニキビ跡の修復 — マイクロニードリングとの併用で、ニキビ跡の凹凸を滑らかに整えます。',
            'ナチュラルな変化 — 異物を使わず、時間をかけて自然で確実な変化をもたらします。',
            '短いダウンタイム — 外科手術に比べてダウンタイムが非常に短く、日常生活に大きな支障を与えません。',
            '相乗効果（コンビネーション治療） — 組織の治癒を早めて効果を高めるため、他施術（レーザー・マイクロニードリング・手術等）との併用にも適しています。',
            '幹細胞による強力な再生力 — 幹細胞治療はPRP以上の高い再生力を持ち、より深い組織修復や大きな悩みに対応します。',
          ] },
        ],
        facts: {
          duration: '2～4時間',
          anesthesia: '局所麻酔または鎮静麻酔（セデーション）',
          stay: [
            { day: '1日目', label: '当日施術・当日帰国' },
          ],
          price: '564,000円より',
          priceNote: '幹細胞（3億個）564,000円・幹細胞（7億個）1,016,000円・特許取得済みの遠心分離技術を使用',
        } },
    ],
  },
  {
    slug: 'dental',
    name: '歯科',
    shot: 'Dental photo',
    desc: '自信のもてる笑顔のための審美・修復歯科治療。',
    more: '歯科を見る',
    tags: ['ベニア', 'インプラント', '矯正'],
    heroImg: 'assets/dental-illustration.png',
    heroAspect: '2948 / 1440',
    introBlocks: [
      { heading: '診療内容', text: '歯科治療は、一般的な口腔ケアから審美治療まで多岐にわたり、双方を組み合わせた治療も多く行われます。噛み合わせや咀嚼などのお口の健康（機能面）を改善すると同時に、美しい笑顔（審美面）へと導きます。' },
    ],
    detail: {
      benefitGroups: [
        { title: '1. 一般・予防歯科', items: [
          '定期検診・予防クリーニング',
          '虫歯治療（充填・修復）',
          '歯周病治療',
          '根管治療（神経の治療）',
          '抜歯（親知らず等）',
        ] },
        { title: '2. 審美歯科', items: [
          'ホワイトニング：院内施術やホームキットにより、歯を明るくトーンアップさせます。',
          'ラミネートベニア：歯の表面に薄いシェル（セラミックやコンポジットレジン）を貼り付け、歯の形・色・歯並びを整えます。',
          'ダイレクトボンディング：コンポジットレジンを用いて、歯の欠け・隙間（すきっ歯）・変色を即日で修復・改善します。',
          'スマイルデザイン：複数の審美治療を組み合わせ、理想的な美しい笑顔を創出するオーダーメイドの総合治療プランです。',
        ] },
        { title: '3. 矯正歯科', items: [
          'ワイヤー矯正（表側矯正）：金属やセラミックのブラケットを装着し、歯を段階的に動かして歯並びを整えます。',
          'マウスピース型矯正（インビザライン等）：透明で目立ちにくく、取り外しが可能なマウスピースを用いて歯並びを整えます。',
          '噛み合わせを整える「機能面」と、美しい口元をつくる「審美面」の双方を改善します。',
        ] },
        { title: '4. 修復歯科', items: [
          'インプラント：チタン製の人工歯根と人工歯（クラウン）により、失った歯を補い、自分の歯のような噛み心地を再現します。',
          'クラウン（被せ物）：虫歯などで傷んだ歯や脆くなった歯を全体的に覆い、保護・修復します。',
          'ブリッジ：失った歯の両隣にある歯を支えにして、連なった人工歯を装着し補う治療法です。',
          '入れ歯：複数本またはすべての歯を失った際に用いられる、取り外し可能な補綴物です。',
        ] },
      ],
    },
    procedures: [
      { slug: 'cosmetic-dentistry', name: '審美歯科', summary: 'ラミネート・ホワイトニング・ボンディングで、明るく統一感のある美しい笑顔へ。', heroImg: 'assets/cosmetic-dentistry-illustration.png',
        about: [
          '審美歯科は、歯の色・形・大きさ・歯並びなど、口元全体の印象を整える治療です。負担が少なく手軽に始められるホワイトニングから、オーダーメイドで仕上げるラミネートベニアまで、ご希望に合わせた幅広い選択肢をご用意しています。',
        ],
        techHeading: '施術について',
        techniques: [
          { title: '1. ホワイトニング', blocks: [
            { type: 'subhead', text: 'ホワイトニングの仕組み' },
            { type: 'para', text: '専用の漂白成分が歯の表面にあるシミや黄ばみを分解し、歯全体のトーンを明るく仕上げます。' },
            { type: 'subhead', text: '院内施術' },
            { type: 'para', text: '歯科医院で行う即効性の高いホワイトニングです。' },
            { type: 'ulist', items: [
              { text: '歯茎を専用の保護ジェルで丁寧にカバーし、しみるのを防ぎます。' },
              { text: '濃度の高いホワイトニングジェルを歯に塗布します。' },
              { text: '専用のライトやレーザーを照射し、薬剤の分解効果を促進します。' },
              { text: '15〜20分の工程を繰り返し、約1時間ほどで終了します。' },
              { text: '施術直後から効果を実感しやすく、一度で数トーン明るい歯を目指せます。' },
            ] },
            { type: 'subhead', text: 'ホームホワイトニング' },
            { type: 'ulist', items: [
              { text: 'カスタムトレーの製作：お口の歯型を採取し、ぴったりフィットする専用マウスピース（トレー）を作製します。' },
              { text: '専用ジェルの処方：ご自宅で安心して使用できる低濃度のホワイトニングジェルをお渡しします。' },
              { text: '日々の装着：1〜2週間、毎日決まった時間（1日30〜60分程度）装着します。' },
              { text: 'マイルドで持続的な効果：院内での施術に比べて刺激が少なく、ご自身のペースで無理なく続けながら徐々に歯をトーンアップできます。' },
            ] },
            { type: 'subhead', text: 'メリット' },
            { type: 'ulist', items: [
              { text: '明るく若々しい笑顔を演出' },
              { text: '歯を削らない・傷つけない安全な施術' },
              { text: '即効性の「オフィス」とマイペースな「ホーム」から選択可能' },
              { text: '写真や日常会話での笑顔に自信がつく' },
              { text: '他の審美治療に比べ手頃な費用感' },
            ] },
          ] },
          { title: '2. ラミネートベニア', blocks: [
            { type: 'subhead', text: 'ベニアの仕組み' },
            { type: 'para', text: 'お一人おひとりに合わせて作られた薄いシェルを歯の表面に接着し、形や色、並びを一気に美しく整えます。ご自身の歯をベースに理想的な笑顔を叶える、お口元の「カバー」のような施術です。' },
            { type: 'subhead', text: '治療の流れ' },
            { type: 'olist', items: [
              { text: 'カウンセリング：理想の歯の形や色、笑顔のバランスについて詳しくご相談を伺います。' },
              { text: '歯の準備：ベニアをきれいにフィットさせるため、歯の表面をほんの少しだけ削ります。' },
              { text: '型取り・スキャン：ぴったり合うベニアを作るため、口の型（またはデジタルスキャン）を採取します。' },
              { text: '仮歯の装着：本番のベニアができるまでの期間、仮のベニアで保護します。' },
              { text: '仕上げ・装着：色や噛み合わせを確認したあと、専用の接着剤でしっかり固定して完了です。' },
            ] },
            { type: 'subhead', text: '種類' },
            { type: 'ulist', items: [
              { text: 'セラミックベニア（ポーセレン）：耐久性に優れ、着色・変色に強く、天然歯のような自然な透明感があります。作製のため通院が1〜2回必要となります（期間：数週間）。' },
              { text: 'コンポジットベニア（レジン）：歯科医師が1回の来院で直接歯に盛り付けて形成します。セラミックに比べて費用を抑えられますが、耐久性や変色への強さはやや劣ります。' },
            ] },
            { type: 'subhead', text: 'メリット' },
            { type: 'ulist', items: [
              { text: '1回の治療で歯の形・色・並びを劇的に改善' },
              { text: '長持ち（ポーセレン：適切なケアで10～15年以上）' },
              { text: '着色に強い（特にポーセレン）' },
              { text: '矯正なしで欠け・すき間・変色・軽度の不揃いを修正できる' },
              { text: '自然でカスタマイズ可能な見た目' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: 'ホワイトニング', items: [
            '明るく若々しい笑顔を演出',
            '非侵襲——歯の構造を変えない',
            '即効性（オフィス）または柔軟な自宅オプション',
            '他の審美治療に比べ手頃な価格',
            '笑顔や写真での自信を高める',
          ] },
          { title: 'ベニア', items: [
            '1回の治療で歯の形・色・並びを一新',
            '長持ち（ポーセレン：10～15年以上）',
            '着色に強く自然な仕上がり',
            '矯正なしで欠け・すき間・変色・軽度の不揃いを修正',
            'ご希望の笑顔に合わせて完全カスタマイズ可能',
          ] },
        ],
        facts: {
          duration: '1～2時間',
          anesthesia: '局所麻酔',
          stay: [
            { day: 'ホワイトニング', label: '1日目——当日施術・当日帰国' },
            { day: 'ベニア', label: '1日目 型取り・2～3日目 装着・4日目 帰国' },
          ],
          price: '33,800円より',
          priceNote: 'ホワイトニング 33,800円・ラミネート（1本あたり）113,000円',
        } },
      { slug: 'dental-implants', name: 'インプラント', summary: '失った歯を自然な見た目と快適な噛み心地で補います。', heroImg: 'assets/dental-implants-illustration.jpg', heroFit: 'contain',
        about: [
          'インプラントは、歯根から失われた歯を補う治療法です。チタン（またはジルコニア）製の土台を顎の骨に埋め込み、人工歯根として機能させた上で、その上にクラウン（被せ物）を取り付けて元の歯の見た目を再現します。ブリッジや入れ歯とは異なり、周囲の歯に負担をかけず独立して自立するのが特徴です。',
        ],
        aboutSections: [
          { heading: 'インプラントとは', paras: [
            'インプラントは、根元から失った歯を補う治療です。チタン（またはジルコニア）製の土台を顎の骨に外科的に埋め込み、人工の歯根として機能させ、その上にクラウンを取り付けて見える部分の歯を再現します。',
            'ブリッジや入れ歯とは異なり、インプラントは周囲の歯に負担をかけず独立して自立するのが特徴です。',
          ] },
        ],
        techHeading: '施術について',
        techniques: [
          { title: 'ステップごとの施術内容', blocks: [
            { type: 'olist', items: [
              { text: 'カウンセリングと精密診断——歯科医師がX線や3D CTスキャンを用いて顎の骨の密度、歯茎の健康状態、口腔全体を確認し、インプラントの治療計画を立てて適応かどうかを判断します。' },
              { text: '骨移植（必要な場合）——インプラントを支えるための十分な骨がない場合（歯を失ってから時間が経っているケースなど）、あらかじめ骨移植を行い、数ヶ月の治癒期間を経てからインプラントを埋め込みます。' },
              { text: 'インプラント埋入手術——局所麻酔（必要に応じて静脈内鎮静法など）を行います', sub: [
                { text: '歯茎を少し切開し、顎の骨を露出させます' },
                { text: '精密に穴を開け、チタン製のインプラントを骨に埋め込みます' },
                { text: 'インプラントの周囲や上の歯茎を縫合します' },
              ] },
              { text: '治癒・骨結合期間——2〜6ヶ月かけて顎の骨とインプラントが結合し、強固な土台が形成される最も重要な段階です', sub: [
                { text: '期間中は仮歯やヒーリングキャップを装着して過ごします' },
              ] },
              { text: 'アバットメントの装着——骨との結合が確認された後、被せ物を支えるための連結パーツ（アバットメント）を取り付けます。' },
              { text: 'クラウン（被せ物）の装着——周囲の天然歯に合わせた形・色の被せ物を作るため、歯型採取やデジタルスキャンを行います', sub: [
                { text: '作製したクラウンをアバットメントに固定して治療が完了します' },
              ] },
            ] },
          ] },
          { title: '施術後の経過', blocks: [
            { type: 'ulist', items: [
              { text: '最初の数日：手術部位に軽い腫れや痛み、内出血が出ることがありますが、処方された鎮痛剤で和らげることができます' },
              { text: '1～2週間：縫合した傷口が塞がり、初期の違和感や不快感が落ち着いてきます' },
              { text: '2～6ヶ月：インプラントと骨の結合（骨結合）が着実に進む大切な期間です。見た目の変化はありませんが、長期的な安定性を確保するために欠かせないプロセスです' },
              { text: '最終クラウン（被せ物）の装着：レントゲン検査で骨との強固な結合が確認でき次第、人工の歯を装着して治療が完了します' },
            ] },
          ] },
          { title: '一般的な治療スケジュール', blocks: [
            { type: 'ulist', items: [
              { text: '単一インプラント：埋入から最終クラウンまでの全過程は、通常3～6ヶ月ほどかかります' },
              { text: '複数インプラント・総インプラント：計画がより複雑になるため、歯の本数や骨の状態によりさらに時間がかかる場合があります' },
              { text: '即時荷重インプラント（適応がある場合）：当日に仮クラウンを装着できる場合もありますが、最終クラウンは完全な治癒を待ってから装着します' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: '', items: [
            '自分の歯のような見た目と機能：現在利用可能な治療法の中で、最も自然な見た目と噛み心地を再現します',
            '周囲の歯に負担をかけない：ブリッジとは異なり、隣接する健康な歯を削ったり傷つけたりしません',
            '顎の骨を保護：天然の歯根と同じように骨に刺激を与え、歯を失ったことによる骨の吸収を防ぎます',
            '優れた耐久性：適切なケアを行うことで20年以上、場合によっては一生涯使い続けることができます',
            'しっかり固定：取り外し式の入れ歯と違い、会話や食事の際にずれたり動いたりしません',
            '噛む力を回復：天然歯とほとんど変わらない力で、ストレスなくお食事が楽しめます',
          ] },
        ],
        facts: {
          duration: '1～2時間',
          anesthesia: '局所麻酔',
          stay: [
            { day: '1～2日目', label: '歯型採取とデザイン' },
            { day: '3～4日目', label: '補綴物の製作' },
            { day: '5日目', label: '補綴物の最終確認と帰国' },
            { day: '+1カ月', label: '治療完了のための再渡航' },
          ],
          price: '113,000～282,000円',
          priceNote: 'インプラント（1本あたり）',
        } },
      { slug: 'orthodontics', name: '矯正歯科', summary: 'ワイヤー矯正やマウスピース型矯正で、歯並びと噛み合わせを整えます。', heroImg: 'assets/orthodontics-illustration.jpg',
        about: [
          '矯正治療は、持続的に適切な力を加えることで歯を少しずつ正しい位置へと動かし、噛み合わせの機能と美しい歯並びの両方を改善する治療です。主な治療法には、従来のワイヤー矯正とマウスピース矯正の2種類があります。',
        ],
        techHeading: '主な種類とステップごとの流れ',
        techniques: [
          { title: 'ワイヤー矯正（表側・裏側）', blocks: [
            { type: 'subhead', text: '主な種類' },
            { type: 'ulist', items: [
              { text: 'メタル装置（メタルブラケット）：ステンレス製の装置を歯の表面に装着し、ワイヤーを通して歯を動かします。' },
              { text: 'セラミック装置（審美ブラケット）：歯の色になじむ透明・白色の装置を使用するため、目立ちにくいのが特徴です。' },
              { text: '裏側矯正（舌側矯正・リンガル）：歯の裏側に装置を取り付けるため、周囲から装置がほとんど見えません。' },
            ] },
            { type: 'subhead', text: '施術の流れ' },
            { type: 'olist', items: [
              { text: 'カウンセリング・精密検査：レントゲンや3Dデジタルスキャンで噛み合わせを評価します。' },
              { text: '治療計画の決定：矯正歯科医が歯の動かし方と治療期間の目安を立案します。' },
              { text: 'ブラケット装着：専用接着剤で歯の表面に装置を接着し、ライトで硬化させます。' },
              { text: 'ワイヤー装着：ブラケットにワイヤーを通し、ゴムやクリップで固定します。' },
              { text: '定期調整（4〜6週ごと）：ワイヤーの締め直しや交換を行い、歯を動かし続けます。' },
              { text: '装置除去・保定（リテーナー）：装置を外し、後戻りを防ぐ保定装置（リテーナー）へ移行します。' },
            ] },
          ] },
          { title: 'マウスピース矯正（インビザラインなど）', blocks: [
            { type: 'para', text: '一人ひとりの歯並びに合わせて作られた透明で取り外し可能なマウスピースを装着し、歯を段階的に動かしていきます。治療の進み具合に合わせて、1〜2週間ごとに新しいマウスピースへ交換しながら治療を進めます。' },
            { type: 'subhead', text: '施術の流れ' },
            { type: 'olist', items: [
              { text: '精密検査（3Dデジタルスキャン）——（3Dデジタルスキャン）3D光学スキャナーを用いて口の中を撮影し、歯並びや噛み合わせの精密なデータを採取します。' },
              { text: '治療計画のシミュレーション——画面上で歯が動くプロセスを3Dシミュレーションし、治療完了時の歯並びの仕上がりを確認します。' },
              { text: 'マウスピースの製作——決定した治療計画に基づき、患者様一人ひとりに合わせたオーダーメイドのマウスピースを製作します。' },
              { text: 'マウスピースの装着——1日20〜22時間以上装着し、食事と歯磨きの時間以外は終日装着して過ごします。' },
              { text: 'ステップに合わせて交換——歯の動き具合に合わせて、1〜2週間ごとに次の段階のマウスピースへご自身で交換していきます。' },
              { text: '定期チェック（経過観察）——ワイヤー矯正に比べて通院頻度は少ないですが、定期的にご来院いただき、歯の動きや進捗を確認します。' },
              { text: '保定期間（リテーナー装着）——理想の歯並びに整ったら治療完了です。後戻りを防ぎ、きれいな状態を維持するためにリテーナー（保定装置）を装着します。' },
            ] },
          ] },
          { title: '治療中の経過', blocks: [
            { type: 'ulist', items: [
              { text: '調整・交換直後：装着後の数日間は、矯正力による軽い痛みや圧迫感が生じる場合があります。' },
              { text: '日常の感覚：日々の歯の移動はとてもゆるやかなため、違和感なく過ごせます。' },
              { text: '全体期間：通常12〜24ヶ月程度（歯並びの複雑さによって変動します）。' },
              { text: '治療後：後戻りを防ぐため、リテーナー（保定装置）の装着が必要です。' },
            ] },
          ] },
        ],
        benefitGroups: [
          { items: [
            '審美性の向上：整ったきれいな歯並びで、笑顔に自信が生まれます。',
            '噛み合わせ改善：しっかり噛めるようになり、顎への負担を減らします。',
            'お口を清潔に維持：歯磨きやフロスがしやすくなり、虫歯・歯周病を防ぎます。',
            'トラブル予防：歯の不均一な摩耗や顎の痛みなどの将来的なリスクを抑えます。',
            '発音の改善：歯並びによる滑舌の悪さが解消されることがあります。',
            '豊富な選択肢：目立たない装置や取り外し式など、好みに合わせて選べます。',
          ] },
        ],
        facts: {
          duration: '1～2時間',
          anesthesia: '不要',
          stay: [
            { day: '初回', label: 'カウンセリング、3Dスキャン、装置装着（3～5日）' },
            { day: '経過観察', label: '2～3カ月ごとの調整' },
            { day: '最終', label: '除去とリテーナー装着' },
          ],
          stayNote: '治療期間全体と最終除去のタイミングは症例の複雑さにより異なります。',
          price: '451,000円より',
        } },
      { slug: 'restorative-dentistry', name: '修復歯科', summary: 'クラウン・ブリッジ・詰物（レジン）などで、傷んだ歯を修復・保護します。', heroImg: 'assets/restorative-dentistry-illustration.jpg',
        about: [
          '虫歯や欠損などで傷んだ歯を修復・補填し、噛み合わせの機能や美しさを取り戻す治療です。クラウン（かぶせ物）・ブリッジ・入れ歯などを中心に、必要に応じてインプラントと組み合わせた総合的な治療を行います。',
        ],
        techHeading: '一般的な種類とステップごとの流れ',
        techniques: [
          { title: '1. クラウン（かぶせ物）', blocks: [
            { type: 'para', text: '傷んだ歯全体を覆う被せ物で、歯の機能（強度）と審美性（見た目）を整え、本来の形を取り戻す治療法です。' },
            { type: 'subhead', text: '施術の流れ' },
            { type: 'olist', items: [
              { text: '診察・検査：レントゲンで歯の状態を確認し、適応かを診断します。' },
              { text: '歯の形成：被せ物を被せるために歯を削り、必要に応じて土台を補強します。' },
              { text: '型取り・スキャン：オーダーメイド作製のため、歯型採取または3Dスキャンを行います。' },
              { text: '仮歯の装着：本番の被せ物が完成するまで仮歯で保護します。' },
              { text: '最終装着：噛み合わせやフィット感を確認し固定します。' },
            ] },
          ] },
          { title: '2. ブリッジ', blocks: [
            { type: 'para', text: '欠損部位の両隣にある天然歯（またはインプラント）を支えとし、人工歯を固定して欠損部分を補う固定式の治療法（補綴）です。1本〜複数本の失った歯に対応できます。' },
            { type: 'subhead', text: '施術の流れ' },
            { type: 'olist', items: [
              { text: '診察・検査：欠損部と土台となる両隣の歯の状態を確認します。' },
              { text: '支台歯の形成：ブリッジを固定するため、両隣の歯を削って土台を整えます。' },
              { text: '型取り・スキャン：一体型のオーダーメイドブリッジ作製のため、歯型を採取します。' },
              { text: '仮ブリッジ装着：本番の装置が完成するまで仮のブリッジで保護します。' },
              { text: '最終装着：噛み合わせやフィット感を調整し固定します。' },
            ] },
          ] },
          { title: '3. 入れ歯', blocks: [
            { type: 'para', text: '複数または全ての歯を失った際に行う、ご自身で取り外しができる治療法です。' },
            { type: 'ulist', items: [
              { text: '部分入れ歯：残っている天然歯に装置を固定し、一部の欠損を補います。' },
              { text: '総入れ歯：すべての歯を失った場合に、口全体の歯並びと噛み合わせを補います。' },
            ] },
            { type: 'subhead', text: '施術の流れ' },
            { type: 'olist', items: [
              { text: '精密検査・型取り：歯茎や残存歯の状態を確認し、精密な歯型を採取します。' },
              { text: '噛み合わせ確認：上下の顎の噛み合わせの位置と高さを記録します。' },
              { text: '仮合わせ：試作の入れ歯で見た目やフィット感、噛み合わせを確認します。' },
              { text: '微調整：歯の色や形、付け心地をご要望に合わせて調整します。' },
              { text: '完成・お渡し：完成品を装着し、取り外しやお手入れの方法をご説明します。' },
              { text: '経過調整：歯茎に馴染むよう、数週間かけて細かなフィット調整を行います。' },
            ] },
          ] },
          { title: '施術後の経過', blocks: [
            { type: 'ulist', items: [
              { text: 'クラウン・ブリッジ：形成後数日は軽い知覚過敏が生じる場合がありますが、本装着後は天然歯同様に機能します。' },
              { text: '入れ歯：食事や発音に慣れるまで数日〜数週間かかり、一時的な痛みが出る場合もあります。フィット感を整えるため定期的な調整通院が必要です。' },
            ] },
            { type: 'subhead', text: '一般的な治療スケジュール' },
            { type: 'ulist', items: [
              { text: 'クラウン：通常2回の通院（1〜2週間間隔）／院内システムによっては即日完了' },
              { text: 'ブリッジ：通常2回の通院（数週間）' },
              { text: '入れ歯：精密検査〜最終装着まで数週間〜数ヶ月' },
            ] },
          ] },
        ],
        benefitGroups: [
          { title: 'クラウン', items: [
            '機能回復：傷んだ歯の強度を高め、噛む機能をしっかり取り戻します。',
            '歯の保護：根管治療後の歯などを覆い、さらなる破損や割れを防ぎます。',
            '自然な見た目：周囲の歯に合わせた色合いで、違和感のない審美性を実現します。',
            '高い耐久性：適切なケアを行うことで10〜15年以上長持ちします。',
          ] },
          { title: 'ブリッジ', items: [
            '手術不要：インプラントのような外科手術を行わずに欠損部位を補えます。',
            '機能回復：しっかりと噛めるようになり、噛み合わせのバランスを整えます。',
            '歯移動の防止：空いたスペースに周囲の歯が動いたり傾いたりするのを防ぎます。',
            '美しさの維持：自然な輪郭・口元の構造と噛み合わせを保ちます。',
          ] },
          { title: '入れ歯', items: [
            '機能回復：噛む力や明瞭な発音を取り戻します。',
            '口元の美しさを補正：頬や唇の落ち込みを防ぎ、自然な顔立ちを維持します。',
            '手頃な費用：インプラントを複数本入れる場合に比べて費用を抑えられます。',
            'お手入れが簡単：取り外しができるため、日々の清掃やメンテナンスが容易です。',
            '自然な仕上がり：色・形・フィット感をご希望に合わせて調整できます。',
          ] },
          { title: '全体的なメリット', items: [
            '機能回復：咀嚼機能や発音をスムーズにし、日常の快適さを取り戻します。',
            'トラブル予防：歯の移動や骨吸収、噛み合わせ悪化などの二次トラブルを防ぎます。',
            '自信の向上：美しい歯並びと笑顔で、自信のある口元を実現します。',
            '豊富な選択肢：ご予算・お悩み・欠損状態に合わせた最適な治療を選択可能です。',
          ] },
        ],
        facts: {
          duration: '1回のセッションあたり1～2時間',
          anesthesia: '局所麻酔',
          stay: [
            { day: '1～2日目', label: 'カウンセリング、検査、歯の下準備（歯型・スキャン）' },
            { day: '3～5日目', label: '技工所での補綴物製作' },
            { day: '6～7日目', label: '装着、調整、最終確認' },
          ],
          stayNote: '複雑な症例の場合、より長い滞在やフォローアップ受診が必要になることがあります。',
          price: '45,200円より',
          priceNote: 'クラウン・ブリッジ 1本あたり45,200円～857・入れ歯 90,200円～1,786',
        } },
    ],
  },
  {
    slug: 'health-checkup',
    name: '健康診断',
    shot: 'Health check-up photo',
    desc: '安心をお届けする総合検査パッケージ。',
    heroImg: 'assets/health-checkup-photo.png',
    heroAspect: '2912 / 1440',
    more: 'パッケージを見る',
    tags: ['総合検査', '画像検査', '検査'],
    introBlocks: [
      { heading: '健康診断とは？', text: '健康診断とは、いわば「身体の定期点検」です。体調を崩してから病院にかかるのではなく、あらかじめ検査を受けることで、早期発見・早期治療につながる病気のサインを予防的に見つけ出すことができます。' },
      { heading: '主な検査内容', items: [
        '血液検査・尿検査：血糖値・コレステロール・肝機能・腎機能などを数値で確認します。',
        '画像検査：X線、超音波、CT等で胸部や腹部などの体内器官を撮影します。',
        '心機能検査：心電図などで心臓の基本的な動きやリズムを確認します。',
        '胃・大腸検査（選択）：内視鏡（カメラ）で胃や大腸の内部を直接確認します。',
        '医師カウンセリング：検査結果に基づき、医師が総合診断と詳細なアドバイスを行います。',
      ] },
    ],
    procedures: [
      { slug: 'comprehensive-screening', name: '総合健康診断パッケージ', summary: '各種画像診断から精密検査、医師によるカウンセリングまで一通り含まれた、体全体を詳しくチェックできる全身検診パッケージです。', heroImg: 'assets/comprehensive-screening-illustration.jpg',
        about: [
          '総合健康診断（人間ドック）とは、体全体の健康状態を総合的に評価し、病気の初期サインや将来的なリスク要因を特定するための健診プログラムです。自覚症状が現れる前の段階で病気を早期発見・予防するのに役立ちます。',
        ],
        techHeading: '一般的に含まれる内容',
        techniques: [
          { title: '1. 基本測定（身体測定）', blocks: [
            { type: 'ulist', items: [
              { text: '身長／体重／BMI／血圧／体組成分析' },
            ] },
          ] },
          { title: '2. 血液検査', blocks: [
            { type: 'ulist', items: [
              { text: '末梢血一般検査（CBC／全血球計算）' },
              { text: '血糖・糖尿病検査（空腹時血糖、HbA1c）' },
              { text: '脂質検査（コレステロール、中性脂肪）' },
              { text: '肝機能検査' },
              { text: '腎機能検査' },
              { text: '甲状腺機能検査' },
              { text: '腫瘍マーカー' },
              { text: 'ビタミン・ミネラル検査（ビタミンD、鉄分など）' },
            ] },
          ] },
          { title: '3. 尿・便検査', blocks: [
            { type: 'ulist', items: [
              { text: '尿検査：腎機能・感染症・糖尿病などの指標を測定' },
              { text: '便検査（便潜血）：大腸がんリスクのスクリーニング検査' },
            ] },
          ] },
          { title: '4. 画像検査', blocks: [
            { type: 'ulist', items: [
              { text: '胸部X線：肺疾患や心肥大の有無を確認' },
              { text: '腹部超音波（エコー）：肝臓・胆嚢・腎臓・膵臓・脾臓の精密観察' },
              { text: 'CT検査：肺がん検診用の低線量CT、または高精度な全身CT' },
              { text: 'マンモグラフィ（女性）：乳がんリスクのスクリーニング検査' },
              { text: '骨密度検査：骨粗しょう症リスクの評価' },
            ] },
          ] },
          { title: '5. 心機能検査', blocks: [
            { type: 'ulist', items: [
              { text: '心電図（ECG）：不整脈や心臓のリズム異常を確認' },
              { text: '心エコー（超音波検査）：心臓の構造・弁の動き・ポンプ機能を詳細に観察' },
              { text: '運動負荷試験：運動負荷時における心臓の働きをチェック' },
            ] },
          ] },
          { title: '6. 内視鏡検査', blocks: [
            { type: 'ulist', items: [
              { text: '胃カメラ（上部消化管内視鏡）：食道・胃・十二指腸' },
              { text: '大腸カメラ（下部消化管内視鏡）：大腸・直腸（がん・ポリープの早期発見）' },
            ] },
          ] },
          { title: '7. 性別特有のがん検診', blocks: [
            { type: 'ulist', items: [
              { text: '子宮頸がん・HPV検査（女性）' },
              { text: '前立腺がん・PSA検査（男性）' },
            ] },
          ] },
          { title: '8. 専門医カウンセリング', blocks: [
            { type: 'ulist', items: [
              { text: '結果説明：担当医がすべての検査結果を総合的に確認・説明' },
              { text: '個別提案：生活習慣の改善アドバイス、追加検査のご案内、専門医への紹介' },
            ] },
          ] },
          { title: '所要時間の目安', blocks: [
            { type: 'ulist', items: [
              { text: 'ベーシックプラン：半日（約1〜3時間）' },
              { text: '総合・プレミアムプラン：日帰り（終日）〜宿泊を伴うコース' },
              { text: '結果説明：当日一部ご案内／詳細な結果は1〜2週間後' },
            ] },
          ] },
          { blocks: [
            { type: 'para', text: '※本ページに掲載されている情報は一般的な概要であり、医師による診断や医学的アドバイスに代わるものではありません。具体的な症状や治療方針については、必ず担当医にご相談ください。' },
          ] },
        ],
        benefitGroups: [
          { items: [
            '早期発見：症状が出る前にがんや生活習慣病を早期発見・早期治療',
            '全身の把握：1回の受診で全身の健康状態を包括的にチェック',
            'リスク評価：検査結果や家族歴に基づき、将来のリスクを特定',
            '時間の節約：複数の検査やカウンセリングを1回の来院で集約',
            '安心感の確保：お身体の状態を正しく把握し、将来への不安を解消',
            '生活改善の指標：客観的なデータに基づき、最適な予防・運動方針を決定',
            '経年変化の追跡：年ごとのデータを比較し、体調の変化を迅速に把握',
            'プランの最適化：懸念事項（心臓・がん等）に応じた自由なカスタマイズ',
          ] },
        ],
        facts: {
          duration: '半日：3～4時間・終日：6～8時間',
          anesthesia: '不要',
          stay: [
            { day: '合計', label: '1～2日を推奨' },
            { day: '1日目', label: '健康診断' },
            { day: '2日目', label: '結果確認と医師カウンセリング' },
          ],
          stayNote: '一部の高度な検査結果は、帰国後にメールで送付される場合があります。',
          price: '56,400円より',
          priceNote: 'ベーシック 56,400円～571・プレミアム／VIP 135,000円～1,786',
        } },
    ],
  },
];

export function getCategory(slug: string): Category | null {
  return SURGERY_CATEGORIES.find((c) => c.slug === slug) || null;
}

// Returns { procedure, category } for a procedure slug, or null.
export function getProcedure(slug: string): { procedure: Procedure; category: Category } | null {
  for (const category of SURGERY_CATEGORIES) {
    const procedure = category.procedures.find((p) => p.slug === slug);
    if (procedure) return { procedure, category };
  }
  return null;
}
