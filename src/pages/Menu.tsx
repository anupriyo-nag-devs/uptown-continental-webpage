import { useState } from 'react';
import { TabbedWindow } from '../components/TabbedWindow';
import { motion, AnimatePresence } from 'framer-motion';

// Custom high-fidelity image wrapper with a built-in premium shimmer skeleton
const SafeImage = ({ src, alt }: { src: string; alt: string }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fallback styling using an elegant dark-glass monogram block if an asset ever completely fails
  if (error) {
    return (
      <div className="w-full h-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-[#7ca982] font-serif text-xl font-bold">
        {alt.charAt(0)}
      </div>
    );
  }

  return (
    <div className="w-full h-full relative bg-black/40">
      {loading && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-[shimmer_1.5s_infinite] bg-[length:200%_100%]"
          style={{
            animation: 'shimmer 2s infinite linear',
            backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0) 100%)',
            backgroundSize: '200% 100%'
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${loading ? 'opacity-0 scale-105' : 'opacity-75 group-hover:opacity-100 group-hover:scale-105'
          }`}
        onLoad={() => setLoading(false)}
        onError={() => setError(true)}
      />
    </div>
  );
};

const categories = [
  { id: 'signature', label: 'Signature Curations' },
  { id: 'mains', label: 'Continental Mains' },
  { id: 'cellar', label: 'The Reserve Cellar' },
];

const items = [
  // ── Signature Curations ──
  {
    id: '1',
    title: 'Sous-Vide Wagyu Beef Wellington',
    desc: 'Prime center-cut Wagyu encased in wild mushroom duxelles, artisanal prosciutto, and crisp golden puff pastry. Served with a black truffle bordelaise reduction.',
    price: '$85',
    cat: 'signature',
    tags: ['Chef Signature', 'Aged Beef'],
    img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '2',
    title: 'Pan-Seared Hokkaido Scallops',
    desc: 'U-10 diver scallops meticulously seared, resting on a velvet cauliflower mousseline, drizzled with chive oil and crispy pancetta shards.',
    price: '$42',
    cat: 'signature',
    tags: ['Sustainably Sourced', 'Gluten-Free'],
    img: 'https://images.unsplash.com/photo-1587041069967-46182efac1f9?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '3',
    title: 'Oscietra Caviar Service',
    desc: 'Prestige Siberian Oscietra caviar served on crushed ice with warm artisanal blinis, whipped crème fraîche, and finely minced organic chives.',
    price: '$180',
    cat: 'signature',
    tags: ['Grand Caviar', 'Sommelier Select'],
    img: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '4',
    title: 'Foie Gras Torchon',
    desc: 'House-cured Hudson Valley foie gras served with Sauternes gelée, toasted pain d\'épices, and caramelized sweet mission figs.',
    price: '$48',
    cat: 'signature',
    tags: ['Cured', 'Delicacy'],
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '5',
    title: 'Line-Caught Wild Turbot',
    desc: 'Steamed fillet of wild Basque turbot with sea vegetables, toasted hazelnut butter, and a delicate Champagne velouté.',
    price: '$72',
    cat: 'signature',
    tags: ['Line-Caught', 'Sea Fare'],
    img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '6',
    title: 'Dry-Aged Duck Breast',
    desc: '14-day dry-aged Challans duck breast, spiced lavender honey glaze, baby turnips, and a reduction of tart cherries.',
    price: '$58',
    cat: 'signature',
    tags: ['House-Aged', 'Free-Range'],
    img: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '7',
    title: 'Brittany Blue Lobster',
    desc: 'Poached in seaweed butter, served with sweet corn purée, chanterelles, and a light coral bisque emulsion.',
    price: '$95',
    cat: 'signature',
    tags: ['Brittany Blue', 'Exquisite'],
    img: 'https://images.unsplash.com/photo-1590759668628-05b0fc34bb70?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '8',
    title: 'A5 Miyazaki Wagyu Strip',
    desc: '4oz of legendary A5 Japanese Wagyu grilled over binchotan charcoal, accompanied by fresh wasabi root and smoked sea salt.',
    price: '$145',
    cat: 'signature',
    tags: ['A5 Wagyu', 'Imported'],
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600'
  },

  // ── Continental Mains ──
  {
    id: '9',
    title: 'Truffle & Forest Mushroom Risotto',
    desc: 'Acquerello aged carnaroli rice simmered with creamed porcini, finished with 24-month parmigiano-reggiano and freshly shaved Umbrian summer truffles.',
    price: '$38',
    cat: 'mains',
    tags: ['Organic', 'Vegetarian'],
    img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '10',
    title: 'Braised Short Rib en Croûte',
    desc: '72-hour braised prime short rib in a flaky pastry shell, with celery root purée and aged cognac reduction.',
    price: '$62',
    cat: 'mains',
    tags: ['Slow-Braised', 'Sommelier Pairing'],
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '11',
    title: 'Roasted Rack of Colorado Lamb',
    desc: 'Herb-crusted domestic lamb rack served with glazed baby carrots, rosemary fondant potatoes, and a rich lamb jus.',
    price: '$56',
    cat: 'mains',
    tags: ['Grass-Fed', 'Classic'],
    img: 'https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '12',
    title: 'Wild Dover Sole Meunière',
    desc: 'Pan-roasted Dover sole, filleted tableside. Finished with brown butter, fresh lemon fillets, and crispy caper berries.',
    price: '$68',
    cat: 'mains',
    tags: ['Tableside Service', 'Fresh Catch'],
    img: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '13',
    title: 'Iberico Pork Pluma',
    desc: 'Acorn-fed Spanish Iberico pork grilled medium-rare, parsnip velvet, charred spring onions, and PX sherry reduction.',
    price: '$52',
    cat: 'mains',
    tags: ['Iberico De Bellota', 'Pork'],
    img: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '14',
    title: 'Scottish Salmon Label Rouge',
    desc: 'Slow-cooked organic salmon, braised baby gem lettuce, English peas, and a refined lemon-herb butter broth.',
    price: '$46',
    cat: 'mains',
    tags: ['Label Rouge', 'Organic'],
    img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '15',
    title: 'Milk-Fed Veal Chop',
    desc: '14oz double-cut Dutch veal chop grilled over oak, served with truffle butter, roasted wild mushrooms, and watercress.',
    price: '$64',
    cat: 'mains',
    tags: ['Oak-Grilled', 'Double-Cut'],
    img: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '16',
    title: 'Artichoke & Saffron Tortelloni',
    desc: 'Handmade pasta filled with Roman artichokes and ricotta, tossed in an aromatic saffron butter sauce with toasted pine nuts.',
    price: '$34',
    cat: 'mains',
    tags: ['Handmade', 'Vegetarian'],
    img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600'
  },

  // ── The Reserve Cellar ──
  {
    id: '17',
    title: 'Château Margaux Grand Cru 2015',
    desc: 'An exquisite vintage with an elegant bouquet of black currants, violets, and sweet spices. Silky tannins with a profound, lingering finish.',
    price: '$120 / glass',
    cat: 'cellar',
    tags: ['Rare Vintage', 'Sommelier Selection'],
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '18',
    title: 'Opus One Overture Reserve',
    desc: 'The younger sibling of Opus One — a Napa Valley Bordeaux blend of cabernet sauvignon and merlot. Velvet-smooth with dark cherry and tobacco notes.',
    price: '$85 / glass',
    cat: 'cellar',
    tags: ['Napa Valley', 'Limited Allocation'],
    img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '19',
    title: 'Dom Pérignon Plénitude 2 2004',
    desc: 'An exceptional vintage champagne with toasted almonds, candied citrus, and a remarkable, vibrant minerality.',
    price: '$95 / glass',
    cat: 'cellar',
    tags: ['Vintage Champagne', 'Prestigious'],
    img: 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '20',
    title: 'Romanée-Conti Grand Cru 2018',
    desc: 'A legendary Pinot Noir of unmatched elegance. Ripe red berries, forest floor, and silky, infinitely layered tannins.',
    price: '$450 / glass',
    cat: 'cellar',
    tags: ['Ultra Rare', 'Burgundy Grand Cru'],
    img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '21',
    title: 'Penfolds Grange Bin 95 2016',
    desc: 'Australia\'s premier Shiraz. Powerful dark fruits, black olives, dark chocolate, structured with integrated French oak.',
    price: '$140 / glass',
    cat: 'cellar',
    tags: ['Collectors Item', 'Australian Icon'],
    img: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '22',
    title: 'Gaja Barbaresco DOCG 2019',
    desc: 'Elegantly structured Nebbiolo. Ripe wild berries, tobacco, licorice, and fine-grained, firm tannins with complex finish.',
    price: '$65 / glass',
    cat: 'cellar',
    tags: ['Piedmontese Classic', 'Nebbiolo'],
    img: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '23',
    title: 'Krug Grande Cuvée Édition',
    desc: 'A blend of over 120 wines from 10 different years. Notes of toasted hazelnut, nougat, barley sugar, and citrus fruits.',
    price: '$75 / glass',
    cat: 'cellar',
    tags: ['Grande Cuvée', 'Champagne Icon'],
    img: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '24',
    title: 'Screaming Eagle Cab Sauv 2019',
    desc: 'California\'s cult Cabernet. Ripe cassis, floral notes, sweet spice, and a velvety texture of legendary purity and length.',
    price: '$480 / glass',
    cat: 'cellar',
    tags: ['Napa Valley Cult', 'Limited Allocation'],
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600'
  }
];

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45 } },
  exit: { opacity: 0, transition: { duration: 0.25 } }
};

export const Menu = () => {
  const [activeTab, setActiveTab] = useState('signature');
  const filtered = items.filter(i => i.cat === activeTab);

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-28 pb-28 px-4 md:px-8 min-h-screen bg-[#050505] relative overflow-hidden"
    >
      {/* Dynamic Background Radial Highlights */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-900/[0.07] rounded-full blur-[180px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#7ca982]/[0.04] rounded-full blur-[160px] pointer-events-none -z-0" />

      <div className="relative z-10">
        <TabbedWindow
          title="Culinary Menu"
          subtitle="Explore our carefully curated seasonal offerings designed to honour provenance, elevate craft, and deliver an unparalleled dining encounter."
        >
          {/* Sage Custom Navigation Bar */}
          <div className="flex flex-wrap gap-1.5 mb-12 p-1.5 rounded-2xl w-fit border border-white/[0.06]"
            style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(20px)' }}
          >
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-7 py-2.5 rounded-xl text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-300 ${activeTab === cat.id ? 'text-[#050505]' : 'text-gray-400 hover:text-white'
                  }`}
              >
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="menuActiveTab"
                    className="absolute inset-0 rounded-xl -z-10"
                    style={{
                      background: '#7ca982',
                      boxShadow: '0 0 18px rgba(124,169,130,0.5)',
                    }}
                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Menu Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.02 }}
                  className="group flex gap-5 p-5 rounded-[1.5rem] cursor-pointer transition-all duration-400 border border-white/[0.04] hover:border-[#7ca982]/25"
                  style={{
                    background: 'rgba(255,255,255,0.015)',
                    backdropFilter: 'blur(16px)',
                  }}
                  whileHover={{
                    backgroundColor: 'rgba(255,255,255,0.035)',
                    boxShadow: '0 0 40px rgba(124,169,130,0.03)',
                  }}
                >
                  {/* High-Res Image Container with Safety Wrapper */}
                  <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 relative bg-black/20 shadow-inner">
                    <SafeImage src={item.img} alt={item.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Culinary Information Content */}
                  <div className="flex flex-col justify-between flex-grow py-0.5">
                    <div>
                      <div className="flex justify-between items-start gap-3 mb-1.5">
                        <h3 className="text-base font-bold font-serif text-white group-hover:text-[#7ca982] transition-colors duration-300 leading-snug">
                          {item.title}
                        </h3>
                        <span className="text-[#7ca982] font-bold text-sm whitespace-nowrap flex-shrink-0 mt-0.5 font-sans">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed font-light mb-3">{item.desc}</p>
                    </div>

                    {/* Sage Micro-Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold tracking-[0.14em] uppercase px-2.5 py-1 rounded-lg border border-[#7ca982]/15 text-[#7ca982]/90"
                          style={{ background: 'rgba(124,169,130,0.05)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </TabbedWindow>
      </div>
    </motion.div>
  );
};