
import { Offer, Testimonial, AddOn } from './types';

export const OFFERS: Offer[] = [
  {
    id: 'concept',
    title: 'Concept Preview',
    price: '€99',
    subtitle: 'One clear design idea. Zero hesitation.',
    description: 'Perfect if you want a fast, professional visualization of your space before buying furniture or committing to a style.',
    includes: [
      '1 camera angle',
      'Before photo',
      'Empty patio view',
      'Fully furnished design render',
      'Furniture shopping list',
      '1 cinematic before → after transformation video'
    ],
    bestFor: 'validating one idea quickly and avoiding the wrong first purchase.',
    gradient: 'from-[#ffaa00] via-[#ff6b6b] to-[#f06292]'
  },
  {
    id: 'style',
    title: 'Style Comparison',
    price: '€229',
    subtitle: 'See two styles. Choose the right one.',
    isPopular: true,
    description: 'Hesitating between modern or cozy? Minimal or lounge? Compare two complete ambiances — visually, side by side — before spending thousands.',
    includes: [
      '2 distinct design styles',
      'Per style: before + empty + furnished visuals',
      '2 curated furniture lists',
      '2 cinematic transformation videos',
      'Side-by-side comparison'
    ],
    bestFor: 'confident decisions and zero buyer’s remorse.',
    gradient: 'from-[#4facfe] via-[#00f2fe] to-[#48c6ef]'
  },
  {
    id: 'complete',
    title: 'Complete Garden Plan',
    price: '€399',
    subtitle: 'From vision to execution — no guesswork.',
    description: 'More than visuals: a ready-to-build plan you can hand directly to a contractor or use to order furniture with confidence.',
    includes: [
      'Everything in Style Comparison',
      'Measured layout plan',
      'Exact furniture positioning',
      'Dimensions & spacing',
      'SketchUp plan for execution or purchasing'
    ],
    bestFor: 'clarity, structure, and a garden you can actually build — fast.',
    gradient: 'from-[#fa709a] via-[#fee140] to-[#ff9a9e]'
  }
];

export const ADD_ONS: AddOn[] = [
  { name: 'Extra style', price: '€79' },
  { name: '24h rush delivery', price: '€49' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    tag: 'Practical / Money Saver',
    quote: '“Glad we checked this before ordering furniture.”',
    content: 'We had already filled a cart with around €2,500 of outdoor furniture. After seeing the render, we realized the layout would’ve felt cramped. We changed a few pieces and the space flows much better now. Definitely worth it for the peace of mind.',
    author: 'Claire & Julien, London'
  },
  {
    id: 2,
    tag: 'Speed / Convenience',
    quote: '“Super simple process, got everything in two days.”',
    content: 'I just sent a couple photos and measurements and they came back with two complete options and a shopping list. It honestly saved me hours of research. Way easier than trying to figure it out myself.',
    author: 'Sophie M., Mauritius'
  },
  {
    id: 3,
    tag: 'Clarity / Decision Help',
    quote: '“Seeing it on my actual patio made the decision easy.”',
    content: 'I’m terrible at visualizing spaces. The before/after video helped a lot because I could finally picture how it would look in real life. We followed the layout almost exactly and it worked great.',
    author: 'Marc D., Utah'
  }
];
