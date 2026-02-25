/* ════════════════════════════════
   PROJECT DATA
════════════════════════════════ */
const projects = {
  wolfRail: {
    cat: 'Supply Chain Strategy · Fleet Management',
    title: 'Wolf Rail – 30-Year Fleet Optimization Strategy',
    tagline: 'Developed a comprehensive 30-year railcar fleet strategy for Wolf Rail, navigating the tension between surging agricultural export demand and a decade-long decline in coal transportation — building a financial model with full NPV analysis to guide phased investment decisions.',
    metrics: [
      { val: '$48.3M', label: 'Strategy 1 NPV' },
      { val: '30 Yrs', label: 'Planning Horizon' },
      { val: '3%', label: 'Hurdle Rate' },
      { val: '3 Types', label: 'Railcar Classes' },
    ],
    overview: `Wolf Rail required a strategic expansion plan to address a 30-year horizon shaped by two opposing forces: rapid growth in midwest-to-West-Coast agricultural exports (wheat, milk) and a sharp decline in its highest-revenue commodity — coal. The challenge was to right-size a diverse fleet of Open Top Hoppers, Closed Top Hoppers, and Tank Cars while evaluating the financial trade-offs between purchasing, leasing, refurbishing end-of-life assets, and expanding maintenance infrastructure.`,
    role: [
      'Co-led fleet strategy development and financial modeling as part of a four-member consulting team',
      'Built the NPV financial model comparing two distinct fleet strategies across Years 0–30',
      'Evaluated purchase vs. lease decisions for all three railcar types based on demand forecasts and commodity revenue data',
      'Analyzed refurbishment options at end-of-life as an alternative to outright asset replacement',
      'Modeled maintenance facility expansion triggers and their capital cost implications',
    ],
    impact: [
      'Strategy 1 delivered a positive NPV of <strong>$48.3M</strong>, validating the buy-and-refurbish approach as superior to a lease-heavy model',
      'Structured a phased fleet expansion: purchasing 100 Open Top Hoppers, 150 Closed Top Hoppers, and 150 Tank Cars in Year 10 to meet forecast demand',
      'Identified refurbishment at Years 15 and 25 as a cost-efficient strategy, extending asset life at <strong>~40% of new-car procurement cost</strong>',
      'Justified Year 10 maintenance facility expansion at $400K, saving $75K in potential Year 20 capital expense',
      'Recommended leasing in Year 20 for flexible response to demand uncertainty, avoiding long-term capital lock-in',
    ],
    skills: ['NPV & Financial Modeling', 'Fleet Strategy', 'Purchase vs. Lease Analysis', 'Asset Lifecycle Planning', 'Demand Forecasting', 'Risk Scenario Analysis', 'Capital Expenditure Planning', 'Operations Research'],
  },

  packRec: {
    cat: 'Database Design · Operations Analytics',
    title: 'PackRec – Smart Facility Analytics Platform',
    tagline: 'Designed and built a centralized operational analytics system for a university wellness facility, transforming fragmented flat data into a normalized relational database with automated workflows and dashboard-ready reporting.',
    metrics: [
      { val: '973', label: 'Member Records Centralized' },
      { val: '90%', label: 'Data Entry Automated' },
      { val: '20%', label: 'Customer Engagement↑' },
      { val: '15hrs/wk', label: 'Staff Time Saved' },
    ],
    overview: `The PackRec facility lacked a unified system for tracking member behavior, equipment utilization, and operational performance — forcing staff to rely on fragmented flat files and manual data entry. This severely limited visibility into usage patterns, capacity planning, and member analytics. The project objective was to design a scalable, normalized database system with automated workflows and Power BI-ready outputs to support data-driven facility management.`,
    role: [
      'Designed the full relational MS Access database architecture using IDEF0 (process model) and IDEF1X (entity-relationship) frameworks',
      'Built automated data-entry forms, queries, and macros to eliminate manual workflow bottlenecks',
      'Centralized 973+ member, workout, and diet records into a normalized relational structure',
      'Integrated dashboard-ready reporting outputs to support equipment planning and member behavior analysis',
      'Conducted process modeling to map current-state vs. future-state workflows and identify automation opportunities',
    ],
    impact: [
      'Automated <strong>90% of data entry</strong> processes, saving approximately <strong>15 staff hours per week</strong>',
      'Centralized 973 member records into a clean, normalized structure enabling faster retrieval and cross-referencing',
      'Improved operational visibility and reporting accuracy, enabling data-driven equipment planning decisions',
      'Increased customer engagement metrics by <strong>20%</strong> through better insight into member behavior and usage patterns',
    ],
    skills: ['MS Access Database Design', 'IDEF0 Process Modeling', 'IDEF1X Entity Modeling', 'Workflow Automation', 'Power BI', 'Data Integration', 'KPI Reporting', 'Process Improvement', 'Operational Analytics'],
  },

  guatemala: {
    cat: 'International Logistics · Project Management',
    title: 'Guatemalan Book Project – Global Humanitarian Logistics',
    tagline: 'Led a cross-functional international humanitarian logistics initiative to deliver 1,000,000 books across four regions of Guatemala within a strict $240,000 budget and a two-year timeline — navigating geopolitical disruptions, port delays, and donor uncertainty.',
    metrics: [
      { val: '1M', label: 'Books to Deliver' },
      { val: '$240K', label: 'Total Budget' },
      { val: '30%', label: 'Project Milestone Hit' },
      { val: '25%', label: 'Budget Variance Reduced' },
    ],
    overview: `This international humanitarian logistics project required coordinating the collection, storage, sea freight, and regional delivery of 1,000,000 books to four distinct geographic regions in Guatemala — under a tight budget with no room for cost overruns. The project operated in a strong matrix structure with 20+ cross-functional stakeholders spanning donors, logistics partners, NGOs, and regional distribution teams. Key challenges included port disruptions, donor uncertainty, and complex multi-leg transportation requirements.`,
    role: [
      'Served as Project Management Lead, owning the full project plan from initiation through execution',
      'Designed the cross-functional stakeholder management matrix and communication cadence for 20+ stakeholders',
      'Developed the end-to-end logistics strategy: collection points, storage facilities, sea freight routing, and regional delivery sequencing',
      'Built and maintained risk mitigation plans for port disruptions (alternate routing), donor shortfall (revised phasing), and storage constraints',
      'Applied Earned Value Management (EVM) to track budget performance and identify variance early',
    ],
    impact: [
      'Successfully secured <strong>$250K (25% of the $1M fundraising goal)</strong> using Agile PM framework with iterative stakeholder engagement',
      'Coordinated the first shipment of <strong>250,000 books</strong>, reaching approximately 30% project completion milestone',
      'Reduced budget variance by <strong>25%</strong> through proactive EVM analysis and contingency planning',
      'Mitigated port disruption risk through logistics rerouting strategies, preventing schedule slippage',
      'Established a repeatable logistics playbook applicable to future humanitarian distribution missions',
    ],
    skills: ['Agile Project Management', 'Earned Value Management (EVM)', 'International Logistics', 'Risk Mitigation Planning', 'Stakeholder Management', 'Budget Management', 'Supply Chain Coordination', 'Schedule Development', 'Cross-functional Leadership'],
  },

  menuOpt: {
    cat: 'Operations Research · Optimization Modeling',
    title: 'Institutional Menu Optimization – Mixed Integer Programming',
    tagline: 'Built a Mixed Integer Programming (MIP) model using GAMS to generate cost-minimized month-long institutional menus that fully satisfy complex nutritional, variety, and operational constraints — reducing planning cost by 6.7%.',
    metrics: [
      { val: '$62.60', label: 'Optimal Monthly Cost' },
      { val: '6.7%', label: 'Cost Reduction Achieved' },
      { val: '15+', label: 'Nutritional Constraints' },
      { val: '30 Days', label: 'Planning Horizon' },
    ],
    overview: `Manual institutional meal planning was inefficient, prone to nutritional compliance failures, and unnecessarily costly. This project developed an optimization model to automate monthly menu generation for an institutional foodservice operation, balancing cost minimization against strict nutritional guidelines, variety requirements, and operational constraints — a classic constrained optimization problem solved using Mixed Integer Programming.`,
    role: [
      'Formulated the full MIP model structure: binary decision variables for dish selection by meal type and day',
      'Defined and encoded 15+ constraints covering macronutrient ranges, meal composition, repetition spacing, and special item limits',
      'Implemented the model in GAMS (General Algebraic Modeling System) and solved for the optimal solution',
      'Designed sensitivity analysis scenarios to evaluate how ingredient cost changes and constraint relaxations affect total cost',
      'Validated model outputs against nutritional guidelines and operational feasibility criteria',
    ],
    impact: [
      'Achieved an optimal monthly menu cost of <strong>$62.60</strong>, representing a <strong>6.7% cost reduction</strong> versus baseline manual planning',
      'Fully automated monthly planning decisions that previously required hours of manual effort from nutritionists and operations staff',
      'Model satisfies all 15+ nutritional constraints simultaneously, eliminating compliance risk',
      'Sensitivity analysis revealed which ingredients and constraints were most influential on total cost, enabling targeted procurement optimization',
    ],
    skills: ['Mixed Integer Programming (MIP)', 'GAMS', 'Operations Research', 'Mathematical Modeling', 'Constraint Optimization', 'Sensitivity Analysis', 'Cost Minimization', 'Capacity Planning', 'Decision Science'],
  },

  plasmin: {
    cat: 'Decision Analysis · Financial Modeling',
    title: 'Plasmin Commercial Evaluation – NPV & Risk Modeling',
    tagline: 'Built an end-to-end commercial evaluation model for a pharmaceutical drug candidate, using decision trees, influence diagrams, Monte Carlo simulation, and sensitivity analysis to determine whether to develop Plasmin under significant market and clinical uncertainty.',
    metrics: [
      { val: '$326M', label: 'Deterministic Base NPV' },
      { val: '$38.5M', label: 'Risk-Adjusted NPV' },
      { val: '2 Paths', label: 'Develop vs. Not Develop' },
      { val: 'Top 3', label: 'Key Value Drivers ID\'d' },
    ],
    overview: `A pharmaceutical company needed to decide whether to commercialize Plasmin, a novel drug candidate, given significant clinical and commercial uncertainty. This required a rigorous risk-adjusted financial evaluation framework — not just a simple NPV calculation — capable of capturing uncertainty across market size, pricing, development costs, and regulatory outcomes. The decision carried hundreds of millions of dollars in strategic implications.`,
    role: [
      'Structured the investment decision using an influence diagram to map relationships between key uncertain variables and NPV',
      'Built a deterministic financial model computing base-case NPV for the Develop and Not-Develop alternatives',
      'Developed a probabilistic decision tree framework to evaluate risk-adjusted expected value across multiple scenarios',
      'Ran Monte Carlo simulation to generate a full probability distribution of NPV outcomes and quantify downside risk',
      'Conducted tornado (sensitivity) analysis to identify the top value drivers most influential to the decision outcome',
    ],
    impact: [
      'Deterministic base-case NPV of <strong>$326M</strong> for the Develop alternative established a compelling financial case',
      'Risk-adjusted expected NPV of <strong>$38.5M</strong> after accounting for clinical failure probability, pricing uncertainty, and market penetration risk',
      'Tornado analysis identified the top 3 value drivers — enabling focused risk management and strategic scenario planning',
      'Delivered a structured, evidence-based investment recommendation framework used to support executive-level go/no-go decision-making',
    ],
    skills: ['NPV Analysis', 'Decision Tree Modeling', 'Monte Carlo Simulation', 'Sensitivity / Tornado Analysis', 'Influence Diagrams', 'Financial Forecasting', 'Risk Analysis', 'Scenario Modeling', 'Strategic Appraisal'],
  },

  trendyThreads: {
    cat: 'Retail Operations · Digital Transformation Strategy',
    title: 'Trendy Threads – Omnichannel Digital Transformation',
    tagline: 'Designed a 3-year omnichannel transformation roadmap for a legacy fashion retailer generating only 5% of revenue online, targeting $120–150M in incremental revenue growth and a 30% reduction in inventory markdowns.',
    metrics: [
      { val: '$120–150M', label: 'Projected Incremental Revenue' },
      { val: '5%→30%', label: 'Online Revenue Target' },
      { val: '30%', label: 'Markdown Reduction' },
      { val: '36 Mo.', label: 'Transformation Horizon' },
    ],
    overview: `Trendy Threads was a traditional brick-and-mortar fashion retailer generating only 5% of revenue through digital channels — far below industry peers. Fragmented inventory visibility, no unified fulfillment infrastructure, and disconnected customer experiences were causing high markdown rates, lost sales, and declining customer loyalty. The project required designing an integrated transformation strategy spanning e-commerce, fulfillment operations, inventory management, and customer engagement.`,
    role: [
      'Designed the full 3-year omnichannel transformation roadmap across four strategic pillars: digital, fulfillment, inventory, and customer experience',
      'Developed the BOPIS (Buy Online, Pick Up In-Store) and ship-from-store fulfillment model to leverage existing store infrastructure',
      'Built a KPI framework for tracking revenue growth, margin improvement, inventory turn rates, and customer engagement',
      'Conducted gap analysis on current-state inventory visibility and fulfillment capabilities vs. best-in-class benchmarks',
      'Modeled financial impact scenarios linking operational changes to revenue and margin outcomes',
    ],
    impact: [
      'Projected <strong>$120–150M in incremental revenue</strong> within 36 months through unified channel strategy',
      'Established a clear pathway to grow online revenue contribution from <strong>5% to 30%</strong> of total sales',
      'Identified BOPIS and ship-from-store as key levers to reduce inventory markdowns by <strong>30%</strong> through better stock positioning',
      'Delivered a phased roadmap with Year 1 quick wins in digital infrastructure and Year 2–3 fulfillment network integration',
    ],
    skills: ['Omnichannel Strategy', 'Fulfillment Network Design', 'Inventory Planning', 'KPI Framework Design', 'Digital Transformation', 'Retail Operations', 'Process Optimization', 'Financial Impact Modeling', 'Customer Experience Strategy'],
  },

  tesla: {
    cat: 'Supply Chain Strategy · Competitive Analysis',
    title: 'Tesla Supply Chain Strategy Analysis',
    tagline: 'Performed a strategic supply chain analysis of Tesla\'s vertically integrated model, evaluating the competitive dynamics, raw material sourcing risks, and $150B+ operational implications of scaling to 20 million vehicles per year.',
    metrics: [
      { val: '$150B+', label: 'Scale-Up Investment Est.' },
      { val: '20M', label: 'Target Annual Units' },
      { val: '5 Forces', label: 'Porter\'s Framework' },
    ],
    overview: `Tesla's vertically integrated supply chain model — encompassing battery cell production, software development, direct sales, and Gigafactory operations — represents one of the most ambitious supply chain strategies in modern manufacturing. This project evaluated the competitive strengths and vulnerabilities of Tesla's approach as the company targets 20 million vehicles annually, examining how its supply chain design supports or constrains that ambition.`,
    role: [
      'Conducted a full Porter\'s Five Forces analysis across Tesla\'s EV competitive landscape',
      'Evaluated the strategic rationale and operational tradeoffs of vertical integration for cost, quality, and supply chain resilience',
      'Assessed raw material sourcing risks, specifically battery metals (lithium, cobalt, nickel), and geopolitical supply chain exposure',
      'Analyzed Gigafactory capacity expansion requirements and their capital intensity relative to production targets',
      'Synthesized findings into a structured strategic assessment with sourcing and capacity recommendations',
    ],
    impact: [
      'Identified key geopolitical sourcing risks in battery metal supply chains that represent material risk to Tesla\'s 20M unit target',
      'Estimated $150B+ in required scale-up investment across manufacturing, battery, and logistics infrastructure',
      'Provided a structured assessment of where vertical integration creates competitive moats vs. where it creates concentration risk',
      'Highlighted supplier relationship dynamics and the leverage Tesla holds — and where single-source dependencies pose resilience risks',
    ],
    skills: ['Porter\'s Five Forces', 'Vertical Integration Analysis', 'Supply Chain Strategy', 'Sourcing Risk Assessment', 'Competitive Analysis', 'Capacity Planning', 'Supplier Management', 'Strategic Assessment'],
  },

  zomato: {
    cat: 'Competitive Operations · Pricing Strategy',
    title: 'Zomato vs. Swiggy – Competitive Operations Strategy',
    tagline: 'Analyzed the operational and pricing strategies driving competitive dynamics in India\'s hypercompetitive food delivery duopoly, tracing Swiggy\'s dramatic market share decline from 61% to 34% and the operational levers behind Zomato\'s ascent.',
    metrics: [
      { val: '61%→34%', label: 'Swiggy Market Share Shift' },
      { val: '2022–24', label: 'Analysis Period' },
      { val: '2', label: 'Competing Platforms Modeled' },
    ],
    overview: `India's food delivery market has undergone dramatic consolidation, with Zomato and Swiggy battling for dominance through aggressive pricing, logistics investment, and restaurant partnership strategies. This project analyzed the operational and commercial forces driving Swiggy's significant market share loss — from 61% to 34% — and evaluated the strategic levers available to both platforms for sustaining competitive advantage in a market where unit economics remain razor-thin.`,
    role: [
      'Modeled competitive pricing strategy scenarios and evaluated the revenue vs. engagement trade-offs of different discount and commission structures',
      'Analyzed 2022–2024 revenue trends for both platforms and mapped performance to key operational and strategic decisions',
      'Evaluated logistics network capabilities, delivery time performance, and restaurant partnership depth as competitive differentiators',
      'Assessed market share shifts and their underlying operational drivers — not just financial metrics',
    ],
    impact: [
      'Mapped Swiggy\'s market share decline from <strong>61.2% to 34%</strong> to specific strategic miscalculations in pricing and logistics investment timing',
      'Identified logistics network depth and restaurant partnership breadth as the primary operational drivers of Zomato\'s market share gains',
      'Provided actionable strategic recommendations around dynamic pricing, delivery zone optimization, and partner loyalty programs',
    ],
    skills: ['Competitive Analysis', 'Pricing Strategy Modeling', 'Market Share Analysis', 'Logistics Network Evaluation', 'Operations Strategy', 'Market Intelligence', 'Revenue Trend Analysis', 'Strategic Positioning'],
  },

  kidTech: {
    cat: 'Capacity Planning · Decision Analysis',
    title: 'KidTech – Production Capacity Expansion Decision',
    tagline: 'Served as a decision consultant evaluating four production capacity strategies for KidTech\'s high-tech toy launch, building a full deterministic and probabilistic NPV model with Monte Carlo simulation and EVPI analysis to recommend the most risk-adjusted strategy.',
    metrics: [
      { val: '$165M', label: 'Best Base-Case NPV (Partnership)' },
      { val: '$69.1M', label: 'Best Risk-Adj. NPV' },
      { val: '0%', label: 'Profit-Share Loss Probability' },
      { val: '4', label: 'Strategies Evaluated' },
    ],
    overview: `KidTech's existing plant capacity of 4M units/year risked being insufficient under high demand for a new high-tech toy launch — yet capacity expansion would be unprofitable under low demand scenarios. The decision required evaluating four distinct strategic alternatives: Status Quo, DIY plant expansion, Profit-Sharing partnership, and a Royalty partnership — each with different risk profiles, capital requirements, and demand sensitivity characteristics.`,
    role: [
      'Structured the capacity decision using an influence diagram linking demand uncertainty, COGS, plant costs, and marketing impact to NPV',
      'Built a deterministic Excel model computing base-case NPVs across all four alternatives under a common set of assumptions',
      'Applied a 10P/50P/90P uncertainty framework across six key drivers: demand, CAGR, COGS, price, plant cost, and marketing uplift',
      'Constructed a probabilistic decision tree and computed risk-adjusted expected NPVs for all four alternatives',
      'Used CDF analysis and EVPI (Expected Value of Perfect Information) to refine the final recommendation under downside risk',
    ],
    impact: [
      'Base-case NPVs: Status Quo $124M, DIY $131M, Profit-Sharing $110M, Partnership <strong>$165M</strong>',
      'Risk-adjusted NPVs after decision tree analysis: Partnership <strong>$69.1M</strong>, DIY $61.9M, Profit-Sharing $57.7M, Status Quo $36.3M',
      'Profit-Sharing identified as the <strong>preferred recommendation</strong> after downside risk analysis — 0% probability of losing money vs. 33% for Partnership',
      'EVPI analysis confirmed that eliminating demand uncertainty would add significant value, justifying pre-launch market research investment',
    ],
    skills: ['Capacity Planning', 'NPV Modeling', 'Decision Tree Analysis', 'Monte Carlo Simulation', 'Tornado / Sensitivity Analysis', 'EVPI Analysis', 'Risk Analysis', 'Financial Modeling', 'Make-vs-Partner Decision', 'Scenario Planning'],
  },

  walmart: {
    cat: 'Global Supply Chain · Distribution Strategy',
    title: 'Walmart Global Supply Chain Strategy',
    tagline: 'Analyzed Walmart\'s global supply chain expansion strategy, evaluating the trade-offs between centralized control and local market adaptation across distribution network design, vendor management, and international logistics operations.',
    metrics: [
      { val: 'Global', label: 'Scope' },
      { val: '2 Models', label: 'Centralized vs. Local' },
    ],
    overview: `Walmart's global expansion strategy presents one of the most complex supply chain design challenges in retail: how to maintain the cost efficiency and standardization of a centralized model while adapting to the unique logistics, regulatory, and consumer dynamics of international markets. This case study examined how Walmart's supply chain design decisions — from DC placement to vendor relationship structures — either enable or constrain profitable global growth.`,
    role: [
      'Evaluated distribution center network design implications for centralized vs. localized supply chain control models',
      'Analyzed vendor quality requirements, supplier relationship management approaches, and procurement leverage strategies',
      'Assessed global expansion risks including transportation constraints, regulatory compliance, and local sourcing requirements',
      'Synthesized strategic recommendations on supplier management, assortment localization, and logistics infrastructure investment',
    ],
    impact: [
      'Identified strategic supply chain leverage opportunities where Walmart\'s scale creates durable cost advantages vs. local competitors',
      'Recommended a hybrid model: centralized procurement and network standards with localized assortment and last-mile logistics adaptation',
      'Highlighted specific markets where full centralization creates service level risk and where local supplier integration is essential',
      'Produced actionable recommendations on vendor relationship management and transportation network rationalization',
    ],
    skills: ['Global Supply Chain Design', 'Distribution Network Analysis', 'Vendor Management', 'International Logistics', 'Inventory Strategy', 'Procurement Strategy', 'Supply Chain Resilience', 'Market Localization'],
  },
};

/* ════════════════════════════════
   MODAL LOGIC
════════════════════════════════ */
const overlay   = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const closeBtn  = document.getElementById('modalClose');

function buildModal(key) {
  const p = projects[key];
  if (!p) return;

  const metricsHTML = p.metrics.map(m => `
    <div class="modal-metric">
      <span class="modal-metric-val">${m.val}</span>
      <span class="modal-metric-label">${m.label}</span>
    </div>`).join('');

  const roleHTML = p.role.map(r => `<li>${r}</li>`).join('');
  const impactHTML = p.impact.map(i => `<li>${i}</li>`).join('');
  const skillsHTML = p.skills.map(s => `<span>${s}</span>`).join('');

  modalBody.innerHTML = `
    <div class="modal-header">
      <span class="modal-cat">${p.cat}</span>
      <h2 class="modal-title" id="modalTitle">${p.title}</h2>
      <p class="modal-tagline">${p.tagline}</p>
    </div>

    <div class="modal-metrics">${metricsHTML}</div>

    <div class="modal-section">
      <div class="modal-section-title">Project Overview</div>
      <p>${p.overview}</p>
    </div>

    <div class="modal-divider"></div>

    <div class="modal-section">
      <div class="modal-section-title">My Role &amp; Scope</div>
      <ul>${roleHTML}</ul>
    </div>

    <div class="modal-divider"></div>

    <div class="modal-section">
      <div class="modal-section-title">Impact &amp; Results</div>
      <ul>${impactHTML}</ul>
    </div>

    <div class="modal-divider"></div>

    <div class="modal-section">
      <div class="modal-section-title">Skills Showcased</div>
      <div class="modal-skills">${skillsHTML}</div>
    </div>
  `;
}

function openModal(key) {
  buildModal(key);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  overlay.querySelector('.modal').scrollTop = 0;
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Card click
document.querySelectorAll('.proj__card[data-project]').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.project));
});

// Close button
closeBtn.addEventListener('click', closeModal);

// Click outside modal
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

// Escape key
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ════════════════════════════════
   CUSTOM CURSOR
════════════════════════════════ */
const cursor         = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let mx = -200, my = -200, fx = -200, fy = -200;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});
(function follow() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  cursorFollower.style.left = fx + 'px';
  cursorFollower.style.top  = fy + 'px';
  requestAnimationFrame(follow);
})();
document.querySelectorAll('a, button, .proj__card, .contact__card, .act__card, .skill-tags span, .proj__filter').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

/* ════════════════════════════════
   NAV
════════════════════════════════ */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');
const secObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.35, rootMargin: `-${nav.offsetHeight}px 0px -50% 0px` });
sections.forEach(s => secObs.observe(s));

/* ════════════════════════════════
   MOBILE MENU
════════════════════════════════ */
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

function toggleMenu(state) {
  menuOpen = state;
  mobileMenu.classList.toggle('open', menuOpen);
  const [s0, s1, s2] = burger.querySelectorAll('span');
  if (menuOpen) { s0.style.transform='rotate(45deg) translate(5px,5px)'; s1.style.opacity='0'; s2.style.transform='rotate(-45deg) translate(5px,-5px)'; }
  else { s0.style.transform=s1.style.transform=s2.style.transform=''; s1.style.opacity=''; }
}
burger.addEventListener('click', () => toggleMenu(!menuOpen));
document.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', () => toggleMenu(false)));

/* ════════════════════════════════
   SMOOTH SCROLL
════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.offsetTop - nav.offsetHeight, behavior: 'smooth' });
  });
});

/* ════════════════════════════════
   SCROLL REVEAL
════════════════════════════════ */
const reveals = document.querySelectorAll('.scroll-reveal');
const revObs = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in-view'), i * 60);
      revObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => revObs.observe(el));

/* ════════════════════════════════
   COUNTERS
════════════════════════════════ */
document.querySelectorAll('.counter__num[data-target]').forEach(el => {
  const countObs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      const target = +el.dataset.target;
      let cur = 0;
      const step = target / (1800 / 16);
      const t = setInterval(() => {
        cur = Math.min(cur + step, target);
        el.textContent = Math.floor(cur);
        if (cur >= target) clearInterval(t);
      }, 16);
      countObs.unobserve(el);
    }
  }, { threshold: 0.5 });
  countObs.observe(el);
});

/* ════════════════════════════════
   PROJECT FILTERS
════════════════════════════════ */
document.querySelectorAll('.proj__filter').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    document.querySelectorAll('.proj__filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    let delay = 0;
    document.querySelectorAll('.proj__card').forEach(card => {
      const cats = card.dataset.category || '';
      const show = filter === 'all' || cats.split(' ').includes(filter);
      if (show) {
        card.classList.remove('hidden');
        card.style.transition = `opacity .4s ease ${delay}s, transform .4s ease ${delay}s, border-color .3s, box-shadow .3s`;
        card.classList.remove('in-view');
        setTimeout(() => card.classList.add('in-view'), 10);
        delay += 0.05;
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ════════════════════════════════
   PARALLAX ORBS
════════════════════════════════ */
const orb1 = document.querySelector('.hero__orb--1');
const orb2 = document.querySelector('.hero__orb--2');
if (orb1 && orb2) {
  window.addEventListener('mousemove', e => {
    const xr = (e.clientX / window.innerWidth - 0.5);
    const yr = (e.clientY / window.innerHeight - 0.5);
    orb1.style.transform = `translate(${xr * 30}px,${yr * 30}px)`;
    orb2.style.transform = `translate(${xr * -20}px,${yr * -20}px)`;
  }, { passive: true });
}

/* ════════════════════════════════
   PHOTO TILT
════════════════════════════════ */
const photoScene = document.querySelector('.photo-scene');
if (photoScene) {
  photoScene.addEventListener('mousemove', e => {
    const rect = photoScene.getBoundingClientRect();
    const rx = ((e.clientY - rect.top - rect.height/2) / rect.height) * -12;
    const ry = ((e.clientX - rect.left - rect.width/2) / rect.width) * 12;
    photoScene.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  photoScene.addEventListener('mouseleave', () => { photoScene.style.transform = ''; });
}

/* ════════════════════════════════
   TYPING EFFECT
════════════════════════════════ */
const roles = ['Supply Chain & Operations', 'Project Management', 'Operations Research', 'Data Analytics', 'Process Optimization'];
const subEl = document.querySelector('.hero__sub');
if (subEl) {
  let rIdx=0, cIdx=0, deleting=false;
  const style = document.createElement('style');
  style.textContent=`.type-cursor{color:var(--gold);animation:cb .7s step-end infinite}@keyframes cb{0%,100%{opacity:1}50%{opacity:0}}`;
  document.head.appendChild(style);
  function type() {
    const txt = roles[rIdx];
    const partial = txt.slice(0, cIdx + (deleting ? 0 : 1));
    subEl.innerHTML = `<span class="mono-tag">MEM @ NC State</span> ${partial}<span class="type-cursor">|</span>`;
    if (!deleting) { cIdx++; if(cIdx===txt.length){deleting=true; return setTimeout(type,2200);} }
    else { cIdx--; if(cIdx<0){deleting=false; cIdx=0; rIdx=(rIdx+1)%roles.length;} }
    setTimeout(type, deleting ? 45 : 75);
  }
  setTimeout(type, 1800);
}
