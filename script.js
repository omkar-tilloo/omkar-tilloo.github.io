/* ════════════════════════════════
   ALL 13 PROJECT DATA
════════════════════════════════ */
const projects = {

  supplyChainAnalytics: {
    cat: 'Supply Chain Analytics · Inventory Management · Power BI',
    title: 'Supply Chain Analytics Dashboard – E-Commerce Beauty Brand',
    tagline: 'Built an end-to-end supply chain analytics system for an e-commerce beauty company — ABC inventory classification, statistical safety stock modeling, reorder point calculations, and an interactive Power BI dashboard across 100 SKUs.',
    metrics: [
      { val: '100', lbl: 'SKUs Analyzed' },
      { val: '3-Tier', lbl: 'ABC Classification' },
      { val: 'Live', lbl: 'Power BI Dashboard' },
      { val: 'Critical', lbl: 'Stock Alerts Automated' }
    ],
    overview: 'An e-commerce beauty brand operating across haircare and skincare product lines was managing inventory reactively — without a systematic classification framework, statistical safety stock thresholds, or a centralized dashboard to monitor stock health. The result: a mix of overstocked slow-movers and critically understocked high-revenue SKUs. This project designed and built a full supply chain analytics solution — from ABC revenue classification and safety stock modeling to a live Power BI dashboard surfacing actionable inventory decisions for each SKU.',
    role: [
      'Collected and cleaned multi-variable supply chain data across 100 SKUs — covering product type, price, revenue, demand, supplier lead times, shipping carriers, defect rates, and production volumes',
      'Built an ABC classification model segmenting SKUs by cumulative revenue contribution: A-items (top ~15% driving ~80% of revenue), B-items (mid-tier), and C-items (long-tail)',
      'Developed a statistical safety stock model using Z-score demand variability analysis (Z = 2.05 for 98% service level) to compute safety stock quantities and reorder points (ROP) for each SKU',
      'Built an inventory management decision engine flagging each SKU as Healthy, Critical, or needing adjustment — generating automated Order/Sell/Adjust recommendations',
      'Designed and deployed a Power BI dashboard integrating ABC categories, stock health status, ROP vs. current stock comparisons, and demand patterns'
    ],
    impact: [
      'Classified all 100 SKUs into A/B/C tiers, immediately identifying high-priority items where stock-outs would cause disproportionate revenue loss',
      'Surfaced multiple <strong>Critical inventory alerts</strong> (SKU38, SKU67, SKU88, SKU18, SKU99, SKU52) where stock had fallen below statistically computed reorder points',
      'Established data-driven reorder points: e.g., SKU51 ROP = 101 units at Z=2.05 with 18-day lead time; SKU32 ROP = 839 units with 30-day lead time',
      'Generated the first centralized, real-time view of inventory health across all SKUs — eliminating manual, ad-hoc stock checking',
      'Automated daily inventory decision recommendations (Order / Sell / Adjust) by SKU, reducing decision latency for procurement and warehouse teams'
    ],
    skills: ['ABC Inventory Classification', 'Safety Stock Modeling', 'Reorder Point (ROP) Analysis', 'Demand Forecasting', 'Power BI Dashboard Design', 'Supply Chain Analytics', 'Inventory Optimization', 'Statistical Analysis (Z-Score)', 'Data Cleaning & Transformation', 'KPI Reporting', 'Procurement Decision Support']
  },

  subletU: {
    cat: 'Product Strategy · Business Requirements · Software Development',
    title: 'SubletU – Trust-First Student Housing Mobile App',
    tagline: 'Designed the full product strategy, user personas, and business requirements for SubletU — a verified, preference-based mobile platform solving the student short-term housing crisis through secure matching, in-app messaging, and swipe-based discovery.',
    metrics: [
      { val: '4', lbl: 'Full User Personas' },
      { val: '4', lbl: 'Detailed User Stories' },
      { val: '7', lbl: 'Core App Features' },
      { val: '1', lbl: 'Market Gap Addressed' }
    ],
    overview: 'Graduate students relocating for internships, finishing degrees mid-year, or arriving from abroad face a critical market failure: no dedicated, verified platform for short-term housing. General platforms flood students with 12-month lease requirements, unverified landlords, and no student-specific filters — creating security risks, wasted time, and housing instability. SubletU was conceived to solve this by combining identity verification, preference-based matching, secure in-app communication, and swipe-based discovery in a single trusted platform purpose-built for students and young professionals.',
    role: [
      'Led the business requirements documentation for a four-person product team — defining the full problem statement, market gap, and solution scope',
      'Developed the persona for Ethan Park — a safety-conscious MEM intern relocating for a 12-week internship — capturing pain points around scam risk, unverified listings, and insecure communication channels',
      'Authored the Secure In-App Messaging user story with 8 acceptance criteria: mutual-match-gated chat initiation, zero personal contact exposure, real-time safety keyword detection, block/report in one step, and scam alert escalation',
      'Collaborated on three additional personas: Wanda Wuf (student verification via university email), Lukas Neumann (short-term lease filter by duration), and Priya Nair (multi-criteria search filter by date, price, distance, and verified lister badge)',
      'Synthesized all user stories into a coherent product requirements framework structured for Business System Analysts, Architects, and Developers'
    ],
    impact: [
      'Delivered a complete BRD covering <strong>4 full personas</strong>, 4 detailed user stories with acceptance criteria, and a comprehensive feature list ready for engineering handoff',
      'Designed the Secure In-App Messaging feature with <strong>8 acceptance criteria</strong> — including mutual-match gating, real-time scam detection, admin alert escalation, and read-status indicators',
      'Identified and articulated the core market gap: no platform combines trust verification, short-term lease specificity, and secure in-app communication for the student housing segment',
      'Produced a product vision that bridges user empathy (via personas) and technical deliverability (via acceptance criteria)',
      "Established SubletU's 7 core features: Roommate Finder, Sublet Finder, Short-Term Lease Finder, Verified User System, Secure In-App Messaging, Swipe Discovery, and Push Notifications with Favorites"
    ],
    skills: ['Product Management', 'User Persona Development', 'Business Requirements Documentation', 'User Story Writing', 'Acceptance Criteria Definition', 'UX Strategy', 'Market Problem Framing', 'Stakeholder Communication', 'Feature Prioritization', 'Mobile App Product Design']
  },

  wolfRail: {
    cat: 'Supply Chain Strategy · Fleet Management',
    title: 'Wolf Rail – 30-Year Fleet Optimization Strategy',
    tagline: 'Developed a comprehensive 30-year railcar fleet strategy for Wolf Rail, navigating the tension between surging agricultural export demand and a decade-long decline in coal transportation — with full NPV analysis to guide phased investment decisions.',
    metrics: [
      { val: '$48.3M', lbl: 'Strategy 1 NPV' },
      { val: '30 Yrs', lbl: 'Planning Horizon' },
      { val: '3%', lbl: 'Hurdle Rate' },
      { val: '3 Types', lbl: 'Railcar Classes' }
    ],
    overview: 'Wolf Rail required a strategic expansion plan shaped by two opposing forces: rapid growth in midwest-to-West-Coast agricultural exports (wheat, milk) and a sharp decline in its highest-revenue commodity — coal. The challenge was to right-size a diverse fleet of Open Top Hoppers, Closed Top Hoppers, and Tank Cars while evaluating the financial trade-offs between purchasing, leasing, refurbishing end-of-life assets, and expanding maintenance infrastructure.',
    role: [
      'Co-led fleet strategy development and financial modeling as part of a four-member consulting team',
      'Built the NPV financial model comparing two distinct fleet strategies across Years 0–30',
      'Evaluated purchase vs. lease decisions for all three railcar types based on demand forecasts and commodity revenue data',
      'Analyzed refurbishment options at end-of-life as a cost-efficient alternative to outright asset replacement',
      'Modeled maintenance facility expansion triggers and their capital cost implications at Year 10 vs. Year 20'
    ],
    impact: [
      'Strategy 1 delivered a positive NPV of <strong>$48.3M</strong>, validating the buy-and-refurbish approach as superior to a lease-heavy model',
      'Structured a phased fleet expansion: purchasing 100 Open Top Hoppers, 150 Closed Top Hoppers, and 150 Tank Cars in Year 10',
      'Identified refurbishment at Years 15 and 25 as a cost-efficient strategy, extending asset life at ~40% of new-car procurement cost',
      'Justified Year 10 maintenance facility expansion at $400K, saving $75K in potential Year 20 capital expense',
      'Recommended leasing in Year 20 for flexible response to demand uncertainty, avoiding long-term capital lock-in'
    ],
    skills: ['NPV & Financial Modeling', 'Fleet Strategy', 'Purchase vs. Lease Analysis', 'Asset Lifecycle Planning', 'Demand Forecasting', 'Risk Scenario Analysis', 'Capital Expenditure Planning', 'Operations Research']
  },

  wolfEnergy: {
    cat: 'Energy Infrastructure · Engineering Management',
    title: 'Wolf Energy – Generation Expansion Proposal',
    tagline: 'Developed a comprehensive power generation expansion bid for Wolf Energy to close a ~190 MW capacity gap driven by rapid population and industrial growth across Central NC — encompassing site selection, plant technology choice, transmission planning, and a full 10-year cost model.',
    metrics: [
      { val: '~190 MW', lbl: 'Capacity Gap Addressed' },
      { val: '$3.95M', lbl: 'Total Project Cost' },
      { val: '$3.51M', lbl: 'Site & Infrastructure' },
      { val: '10 Yrs', lbl: 'Operational Horizon' }
    ],
    overview: 'Wolf Energy issued an RFP for a new power generation facility to serve rapidly growing demand in Wake, Durham, Orange, and New Hanover counties — driven by population growth and major industrial expansion including Wolf Speed in Chatham County. Future summer peak demand was forecasted to reach 10,360 MW, requiring approximately 190 MW of new incremental generation capacity. The proposal had to meet a strict multi-criteria evaluation rubric presented to both the NC Utilities Commission and the President of Wolf Energy in a competitive bid format.',
    role: [
      'Co-led the full proposal as part of a four-member team (Team S), driving site evaluation, plant selection rationale, and financial cost modeling',
      'Built the load demand analysis using 10-year summer and winter hourly load curves to quantify the 190 MW incremental requirement — identifying summer afternoon hours 13–16 as the binding constraint',
      'Conducted multi-criteria site evaluation across Site A (RDU Airport), Site B (Harris Nuclear), and Site C (Pittsboro) using land cost, transmission distance, water access, environmental impact, and expansion scalability',
      'Evaluated six plant technology options against demand profiles, operating cost, environmental footprint, and compatibility with Wolf Energy\'s existing CC fleet',
      'Built the complete cost model: site acquisition, transmission line (40 miles × $70K/mile), substation, water access, plant construction, and 10-year hourly operating costs for summer and winter'
    ],
    impact: [
      'Recommended <strong>Site B + Combined Cycle 2x1 + 50 MW Solar</strong> as the optimal generation mix — winning the competitive bid format',
      'Total project cost of <strong>$3,948,901</strong>: Site & Infrastructure $3,512,500 · Plant Construction $330,000 · Annual Operations ~$106,400/year',
      'Site B provides 400 acres with 315 acres of future expansion land, enabling modular solar growth and potential nuclear co-location at <strong>$250M savings</strong>',
      'CC 2x1 + Solar covers 100% of the 190 MW incremental demand during peak hours with zero overbuilding — solar operating cost = $0/MW',
      'Transmission cost of $2.8M over 40 miles beats Site C ($6.47M over 90 miles) by <strong>$3.67M</strong>'
    ],
    skills: ['Load Demand Forecasting', 'Site Selection Analysis', 'Power Plant Economics', 'Transmission & Substation Planning', 'Cost Modeling (Excel)', 'Capital Expenditure Analysis', 'Energy Systems Planning', 'Multi-Criteria Decision Analysis', 'Environmental Impact Assessment', 'Engineering Management']
  },

  guatemala: {
    cat: 'International Logistics · Project Management',
    title: 'Guatemalan Book Project – Global Humanitarian Logistics',
    tagline: 'Led a cross-functional international humanitarian logistics initiative to deliver 1,000,000 books across four regions of Guatemala within a strict $240,000 budget and a two-year timeline — navigating geopolitical disruptions, port delays, and donor uncertainty.',
    metrics: [
      { val: '1M', lbl: 'Books to Deliver' },
      { val: '$240K', lbl: 'Total Budget' },
      { val: '$250K', lbl: 'Secured (25% of Goal)' },
      { val: '25%', lbl: 'Budget Variance Reduced' }
    ],
    overview: 'This international humanitarian logistics project required coordinating the collection, storage, sea freight, and regional delivery of 1,000,000 books to four distinct geographic regions in Guatemala — under a tight budget with no room for cost overruns. The project operated in a strong matrix structure with 20+ cross-functional stakeholders spanning donors, logistics partners, NGOs, and regional distribution teams. Key challenges included port disruptions, donor uncertainty, and complex multi-leg transportation requirements.',
    role: [
      'Served as Project Management Lead, owning the full project plan from initiation through execution',
      'Designed the cross-functional stakeholder management matrix and communication cadence for 20+ stakeholders',
      'Developed the end-to-end logistics strategy: collection points, storage facilities, sea freight routing, and regional delivery sequencing',
      'Built and maintained risk mitigation plans for port disruptions, donor shortfall, and storage constraints',
      'Applied Earned Value Management (EVM) to track budget performance and identify variance early'
    ],
    impact: [
      'Successfully secured <strong>$250K (25% of the $1M fundraising goal)</strong> using Agile PM framework with iterative stakeholder engagement',
      'Coordinated the first shipment of 250,000 books, reaching approximately 30% project completion milestone',
      'Reduced budget variance by <strong>25%</strong> through proactive EVM analysis and contingency planning',
      'Mitigated port disruption risk through logistics rerouting strategies, preventing schedule slippage',
      'Established a repeatable logistics playbook applicable to future humanitarian distribution missions'
    ],
    skills: ['Agile Project Management', 'Earned Value Management (EVM)', 'International Logistics', 'Risk Mitigation Planning', 'Stakeholder Management', 'Budget Management', 'Supply Chain Coordination', 'Schedule Development', 'Cross-functional Leadership']
  },

  packRec: {
    cat: 'Database Design · Operations Analytics',
    title: 'PackRec – Smart Facility Analytics Platform',
    tagline: 'Designed and built a centralized operational analytics system for a university wellness facility, transforming fragmented flat data into a normalized relational database with automated workflows and dashboard-ready reporting.',
    metrics: [
      { val: '973', lbl: 'Member Records' },
      { val: '90%', lbl: 'Data Entry Automated' },
      { val: '20%', lbl: 'Customer Engagement↑' },
      { val: '15hrs/wk', lbl: 'Staff Time Saved' }
    ],
    overview: 'The PackRec facility lacked a unified system for tracking member behavior, equipment utilization, and operational performance — forcing staff to rely on fragmented flat files and manual data entry. This severely limited visibility into usage patterns, capacity planning, and member analytics. The project objective was to design a scalable, normalized database system with automated workflows and Power BI-ready outputs to support data-driven facility management.',
    role: [
      'Designed the full relational MS Access database architecture using IDEF0 (process model) and IDEF1X (entity-relationship) frameworks',
      'Built automated data-entry forms, queries, and macros to eliminate manual workflow bottlenecks',
      'Centralized 973+ member, workout, and diet records into a normalized relational structure',
      'Integrated dashboard-ready reporting outputs to support equipment planning and member behavior analysis',
      'Conducted process modeling to map current-state vs. future-state workflows and identify automation opportunities'
    ],
    impact: [
      'Automated <strong>90% of data entry</strong> processes, saving approximately <strong>15 staff hours per week</strong>',
      'Centralized 973 member records into a clean, normalized structure enabling faster retrieval and cross-referencing',
      'Improved operational visibility and reporting accuracy, enabling data-driven equipment planning decisions',
      'Increased customer engagement metrics by <strong>20%</strong> through better insight into member behavior and usage patterns'
    ],
    skills: ['MS Access Database Design', 'IDEF0 Process Modeling', 'IDEF1X Entity Modeling', 'Workflow Automation', 'Power BI', 'Data Integration', 'KPI Reporting', 'Process Improvement', 'Operational Analytics']
  },

  menuOpt: {
    cat: 'Operations Research · Optimization Modeling',
    title: 'Institutional Menu Optimization – Mixed Integer Programming',
    tagline: 'Built a Mixed Integer Programming (MIP) model using GAMS to generate cost-minimized month-long institutional menus that fully satisfy complex nutritional, variety, and operational constraints — reducing planning cost by 6.7%.',
    metrics: [
      { val: '$62.60', lbl: 'Optimal Monthly Cost' },
      { val: '6.7%', lbl: 'Cost Reduction' },
      { val: '15+', lbl: 'Nutritional Constraints' },
      { val: '30 Days', lbl: 'Planning Horizon' }
    ],
    overview: 'Manual institutional meal planning was inefficient, prone to nutritional compliance failures, and unnecessarily costly. This project developed an optimization model to automate monthly menu generation for an institutional foodservice operation, balancing cost minimization against strict nutritional guidelines, variety requirements, and operational constraints — a classic constrained optimization problem solved using Mixed Integer Programming.',
    role: [
      'Formulated the full MIP model structure: binary decision variables for dish selection by meal type and day',
      'Defined and encoded 15+ constraints covering macronutrient ranges, meal composition, repetition spacing, and special item limits',
      'Implemented the model in GAMS (General Algebraic Modeling System) and solved for the optimal solution',
      'Designed sensitivity analysis scenarios to evaluate how ingredient cost changes and constraint relaxations affect total cost',
      'Validated model outputs against nutritional guidelines and operational feasibility criteria'
    ],
    impact: [
      'Achieved an optimal monthly menu cost of <strong>$62.60</strong>, representing a <strong>6.7% cost reduction</strong> versus baseline manual planning',
      'Fully automated monthly planning decisions that previously required hours of manual effort from nutritionists and operations staff',
      'Model satisfies all 15+ nutritional constraints simultaneously, eliminating compliance risk',
      'Sensitivity analysis revealed which ingredients and constraints were most influential on total cost, enabling targeted procurement optimization'
    ],
    skills: ['Mixed Integer Programming (MIP)', 'GAMS', 'Operations Research', 'Mathematical Modeling', 'Constraint Optimization', 'Sensitivity Analysis', 'Cost Minimization', 'Capacity Planning', 'Decision Science']
  },

  plasmin: {
    cat: 'Decision Analysis · Financial Modeling',
    title: 'Plasmin Commercial Evaluation – NPV & Risk Modeling',
    tagline: 'Built an end-to-end commercial evaluation model for a pharmaceutical drug candidate, using decision trees, influence diagrams, Monte Carlo simulation, and sensitivity analysis to determine whether to develop Plasmin under significant market and clinical uncertainty.',
    metrics: [
      { val: '$326M', lbl: 'Deterministic Base NPV' },
      { val: '$38.5M', lbl: 'Risk-Adjusted NPV' },
      { val: '2 Paths', lbl: 'Develop vs. Not Develop' },
      { val: 'Top 3', lbl: "Key Value Drivers ID'd" }
    ],
    overview: 'A pharmaceutical company needed to decide whether to commercialize Plasmin, a novel drug candidate, given significant clinical and commercial uncertainty. This required a rigorous risk-adjusted financial evaluation framework — not just a simple NPV calculation — capable of capturing uncertainty across market size, pricing, development costs, and regulatory outcomes.',
    role: [
      'Structured the investment decision using an influence diagram to map relationships between key uncertain variables and NPV',
      'Built a deterministic financial model computing base-case NPV for the Develop and Not-Develop alternatives',
      'Developed a probabilistic decision tree framework to evaluate risk-adjusted expected value across multiple scenarios',
      'Ran Monte Carlo simulation to generate a full probability distribution of NPV outcomes and quantify downside risk',
      'Conducted tornado (sensitivity) analysis to identify the top value drivers most influential to the decision outcome'
    ],
    impact: [
      'Deterministic base-case NPV of <strong>$326M</strong> for the Develop alternative established a compelling financial case',
      'Risk-adjusted expected NPV of <strong>$38.5M</strong> after accounting for clinical failure probability, pricing uncertainty, and market penetration risk',
      'Tornado analysis identified the top 3 value drivers — enabling focused risk management and strategic scenario planning',
      'Delivered a structured, evidence-based investment recommendation framework supporting executive-level go/no-go decision-making'
    ],
    skills: ['NPV Analysis', 'Decision Tree Modeling', 'Monte Carlo Simulation', 'Sensitivity / Tornado Analysis', 'Influence Diagrams', 'Financial Forecasting', 'Risk Analysis', 'Scenario Modeling', 'Strategic Appraisal']
  },

  trendyThreads: {
    cat: 'Retail Operations · Digital Transformation Strategy',
    title: 'Trendy Threads – Omnichannel Digital Transformation',
    tagline: 'Designed a 3-year omnichannel transformation roadmap for a legacy fashion retailer generating only 5% of revenue online, targeting $120–150M in incremental revenue growth and a 30% reduction in inventory markdowns.',
    metrics: [
      { val: '$120–150M', lbl: 'Projected Revenue Gain' },
      { val: '5%→30%', lbl: 'Online Revenue Target' },
      { val: '30%', lbl: 'Markdown Reduction' },
      { val: '36 Mo.', lbl: 'Transformation Horizon' }
    ],
    overview: 'Trendy Threads was a traditional brick-and-mortar fashion retailer generating only 5% of revenue through digital channels — far below industry peers. Fragmented inventory visibility, no unified fulfillment infrastructure, and disconnected customer experiences were causing high markdown rates, lost sales, and declining customer loyalty.',
    role: [
      'Designed the full 3-year omnichannel transformation roadmap across four strategic pillars: digital, fulfillment, inventory, and customer experience',
      'Developed the BOPIS (Buy Online, Pick Up In-Store) and ship-from-store fulfillment model to leverage existing store infrastructure',
      'Built a KPI framework for tracking revenue growth, margin improvement, inventory turn rates, and customer engagement',
      'Conducted gap analysis on current-state inventory visibility and fulfillment capabilities vs. best-in-class benchmarks',
      'Modeled financial impact scenarios linking operational changes to revenue and margin outcomes'
    ],
    impact: [
      'Projected <strong>$120–150M in incremental revenue</strong> within 36 months through unified channel strategy',
      'Established a clear pathway to grow online revenue contribution from <strong>5% to 30%</strong> of total sales',
      'Identified BOPIS and ship-from-store as key levers to reduce inventory markdowns by <strong>30%</strong>',
      'Delivered a phased roadmap with Year 1 quick wins in digital infrastructure and Year 2–3 fulfillment network integration'
    ],
    skills: ['Omnichannel Strategy', 'Fulfillment Network Design', 'Inventory Planning', 'KPI Framework Design', 'Digital Transformation', 'Retail Operations', 'Process Optimization', 'Financial Impact Modeling']
  },

  kidTech: {
    cat: 'Capacity Planning · Decision Analysis',
    title: 'KidTech – Production Capacity Expansion Decision',
    tagline: 'Evaluated four production capacity strategies for KidTech\'s high-tech toy launch, building a full deterministic and probabilistic NPV model with Monte Carlo simulation and EVPI analysis to recommend the most risk-adjusted strategy.',
    metrics: [
      { val: '$165M', lbl: 'Best Base-Case NPV' },
      { val: '$69.1M', lbl: 'Best Risk-Adj. NPV' },
      { val: '0%', lbl: 'Loss Probability (Rec.)' },
      { val: '4', lbl: 'Strategies Evaluated' }
    ],
    overview: "KidTech's existing plant capacity of 4M units/year risked being insufficient under high demand for a new high-tech toy launch — yet capacity expansion would be unprofitable under low demand scenarios. The decision required evaluating four distinct strategic alternatives: Status Quo, DIY plant expansion, Profit-Sharing partnership, and a Royalty partnership — each with different risk profiles, capital requirements, and demand sensitivity characteristics.",
    role: [
      'Structured the capacity decision using an influence diagram linking demand uncertainty, COGS, plant costs, and marketing impact to NPV',
      'Built a deterministic Excel model computing base-case NPVs across all four alternatives under a common set of assumptions',
      'Applied a 10P/50P/90P uncertainty framework across six key drivers: demand, CAGR, COGS, price, plant cost, and marketing uplift',
      'Constructed a probabilistic decision tree and computed risk-adjusted expected NPVs for all four alternatives',
      'Used CDF analysis and EVPI (Expected Value of Perfect Information) to refine the final recommendation under downside risk'
    ],
    impact: [
      'Base-case NPVs: Status Quo $124M, DIY $131M, Profit-Sharing $110M, Partnership <strong>$165M</strong>',
      'Risk-adjusted NPVs: Partnership <strong>$69.1M</strong>, DIY $61.9M, Profit-Sharing $57.7M, Status Quo $36.3M',
      'Profit-Sharing identified as the <strong>preferred recommendation</strong> — 0% probability of losing money vs. 33% for Partnership',
      'EVPI analysis confirmed that eliminating demand uncertainty would add significant value, justifying pre-launch market research investment'
    ],
    skills: ['Capacity Planning', 'NPV Modeling', 'Decision Tree Analysis', 'Monte Carlo Simulation', 'Tornado / Sensitivity Analysis', 'EVPI Analysis', 'Risk Analysis', 'Financial Modeling', 'Scenario Planning']
  },

  tesla: {
    cat: 'Supply Chain Strategy · Competitive Analysis',
    title: 'Tesla Supply Chain Strategy Analysis',
    tagline: "Performed a strategic supply chain analysis of Tesla's vertically integrated model, evaluating the competitive dynamics, raw material sourcing risks, and $150B+ operational implications of scaling to 20 million vehicles per year.",
    metrics: [
      { val: '$150B+', lbl: 'Scale-Up Investment Est.' },
      { val: '20M', lbl: 'Target Annual Units' },
      { val: '5 Forces', lbl: "Porter's Framework" }
    ],
    overview: "Tesla's vertically integrated supply chain model — encompassing battery cell production, software development, direct sales, and Gigafactory operations — represents one of the most ambitious supply chain strategies in modern manufacturing. This project evaluated the competitive strengths and vulnerabilities of Tesla's approach as the company targets 20 million vehicles annually.",
    role: [
      "Conducted a full Porter's Five Forces analysis across Tesla's EV competitive landscape",
      'Evaluated the strategic rationale and operational tradeoffs of vertical integration for cost, quality, and supply chain resilience',
      'Assessed raw material sourcing risks, specifically battery metals (lithium, cobalt, nickel), and geopolitical supply chain exposure',
      'Analyzed Gigafactory capacity expansion requirements and their capital intensity relative to production targets',
      'Synthesized findings into a structured strategic assessment with sourcing and capacity recommendations'
    ],
    impact: [
      "Identified key geopolitical sourcing risks in battery metal supply chains that represent material risk to Tesla's 20M unit target",
      'Estimated $150B+ in required scale-up investment across manufacturing, battery, and logistics infrastructure',
      'Provided a structured assessment of where vertical integration creates competitive moats vs. where it creates concentration risk',
      'Highlighted supplier relationship dynamics and single-source dependencies that pose resilience risks'
    ],
    skills: ["Porter's Five Forces", 'Vertical Integration Analysis', 'Supply Chain Strategy', 'Sourcing Risk Assessment', 'Competitive Analysis', 'Capacity Planning', 'Supplier Management', 'Strategic Assessment']
  },

  zomato: {
    cat: 'Competitive Operations · Pricing Strategy',
    title: 'Zomato vs. Swiggy – Competitive Operations Strategy',
    tagline: "Analyzed the operational and pricing strategies driving competitive dynamics in India's hypercompetitive food delivery duopoly, tracing Swiggy's dramatic market share decline from 61% to 34% and the operational levers behind Zomato's ascent.",
    metrics: [
      { val: '61%→34%', lbl: 'Swiggy Market Share Shift' },
      { val: '2022–24', lbl: 'Analysis Period' },
      { val: '2', lbl: 'Platforms Modeled' }
    ],
    overview: "India's food delivery market has undergone dramatic consolidation, with Zomato and Swiggy battling for dominance through aggressive pricing, logistics investment, and restaurant partnership strategies. This project analyzed the operational and commercial forces driving Swiggy's significant market share loss — from 61% to 34%.",
    role: [
      'Modeled competitive pricing strategy scenarios and evaluated the revenue vs. engagement trade-offs of different discount and commission structures',
      'Analyzed 2022–2024 revenue trends for both platforms and mapped performance to key operational and strategic decisions',
      'Evaluated logistics network capabilities, delivery time performance, and restaurant partnership depth as competitive differentiators',
      'Assessed market share shifts and their underlying operational drivers — not just financial metrics'
    ],
    impact: [
      "Mapped Swiggy's market share decline from <strong>61.2% to 34%</strong> to specific strategic miscalculations in pricing and logistics investment timing",
      "Identified logistics network depth and restaurant partnership breadth as the primary operational drivers of Zomato's market share gains",
      'Provided actionable strategic recommendations around dynamic pricing, delivery zone optimization, and partner loyalty programs'
    ],
    skills: ['Competitive Analysis', 'Pricing Strategy Modeling', 'Market Share Analysis', 'Logistics Network Evaluation', 'Operations Strategy', 'Market Intelligence', 'Revenue Trend Analysis', 'Strategic Positioning']
  },

  walmart: {
    cat: 'Global Supply Chain · Distribution Strategy',
    title: 'Walmart Global Supply Chain Strategy',
    tagline: "Analyzed Walmart's global supply chain expansion strategy, evaluating the trade-offs between centralized control and local market adaptation across distribution network design, vendor management, and international logistics operations.",
    metrics: [
      { val: 'Global', lbl: 'Scope' },
      { val: '2 Models', lbl: 'Centralized vs. Local' }
    ],
    overview: "Walmart's global expansion strategy presents one of the most complex supply chain design challenges in retail: how to maintain the cost efficiency and standardization of a centralized model while adapting to the unique logistics, regulatory, and consumer dynamics of international markets. This case study examined how Walmart's supply chain design decisions — from DC placement to vendor relationship structures — either enable or constrain profitable global growth.",
    role: [
      'Evaluated distribution center network design implications for centralized vs. localized supply chain control models',
      'Analyzed vendor quality requirements, supplier relationship management approaches, and procurement leverage strategies',
      'Assessed global expansion risks including transportation constraints, regulatory compliance, and local sourcing requirements',
      'Synthesized strategic recommendations on supplier management, assortment localization, and logistics infrastructure investment'
    ],
    impact: [
      "Identified strategic supply chain leverage opportunities where Walmart's scale creates durable cost advantages vs. local competitors",
      'Recommended a hybrid model: centralized procurement and network standards with localized assortment and last-mile logistics adaptation',
      'Highlighted specific markets where full centralization creates service level risk and where local supplier integration is essential',
      'Produced actionable recommendations on vendor relationship management and transportation network rationalization'
    ],
    skills: ['Global Supply Chain Design', 'Distribution Network Analysis', 'Vendor Management', 'International Logistics', 'Inventory Strategy', 'Procurement Strategy', 'Supply Chain Resilience', 'Market Localization']
  }

};

/* ════════════════════════════════
   MODAL
════════════════════════════════ */
function buildModal(key) {
  const p = projects[key];
  if (!p) return '<p style="color:var(--muted);padding:20px">Project details not found.</p>';
  const metrics = p.metrics.map(m =>
    `<div class="modal-metric"><span class="modal-metric-val">${m.val}</span><span class="modal-metric-lbl">${m.lbl}</span></div>`
  ).join('');
  const role   = p.role.map(r => `<li>${r}</li>`).join('');
  const impact = p.impact.map(i => `<li>${i}</li>`).join('');
  const skills = p.skills.map(s => `<span>${s}</span>`).join('');
  return `
    <span class="modal-cat">${p.cat}</span>
    <h2 class="modal-title">${p.title}</h2>
    <p class="modal-tagline">${p.tagline}</p>
    <div class="modal-metrics">${metrics}</div>
    <div class="modal-sec"><div class="modal-sec-title">Project Overview</div><p>${p.overview}</p></div>
    <div class="modal-divider"></div>
    <div class="modal-sec"><div class="modal-sec-title">My Role &amp; Scope</div><ul>${role}</ul></div>
    <div class="modal-divider"></div>
    <div class="modal-sec"><div class="modal-sec-title">Impact &amp; Results</div><ul>${impact}</ul></div>
    <div class="modal-divider"></div>
    <div class="modal-sec"><div class="modal-sec-title">Skills Showcased</div><div class="modal-skills">${skills}</div></div>`;
}

function openModal(key) {
  const overlay = document.getElementById('modalOverlay');
  const body    = document.getElementById('modalBody');
  const modal   = document.getElementById('modal');
  if (!overlay || !body) return;
  body.innerHTML = buildModal(key);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.scrollTop = 0;
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ════════════════════════════════
   INIT
════════════════════════════════ */
function init() {

  /* NAV scroll */
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40), { passive: true });
    /* Active nav link */
    const secs  = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav__links a');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          const a = document.querySelector(`.nav__links a[href="#${e.target.id}"]`);
          if (a) a.classList.add('active');
        }
      });
    }, { threshold: 0.3 });
    secs.forEach(s => obs.observe(s));
  }

  /* Burger menu */
  const burger = document.getElementById('burger');
  const menu   = document.getElementById('mobileMenu');
  let open = false;
  if (burger && menu) {
    burger.addEventListener('click', () => {
      open = !open;
      menu.classList.toggle('open', open);
      const s = burger.querySelectorAll('span');
      if (open) { s[0].style.transform='rotate(45deg) translate(5px,5px)'; s[1].style.opacity='0'; s[2].style.transform='rotate(-45deg) translate(5px,-5px)'; }
      else { s[0].style.transform=s[1].style.transform=s[2].style.transform=''; s[1].style.opacity=''; }
    });
    document.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', () => {
      open = false; menu.classList.remove('open');
      const s = burger.querySelectorAll('span');
      s[0].style.transform=s[1].style.transform=s[2].style.transform=''; s[1].style.opacity='';
    }));
  }

  /* Smooth scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      window.scrollTo({ top: t.offsetTop - (nav ? nav.offsetHeight : 0), behavior: 'smooth' });
    });
  });

  /* Project modal clicks — delegated */
  const grid = document.getElementById('projGrid');
  if (grid) {
    grid.addEventListener('click', e => {
      const card = e.target.closest('[data-project]');
      if (card) openModal(card.dataset.project);
    });
  }

  /* Modal close */
  const closeBtn = document.getElementById('modalClose');
  const overlay  = document.getElementById('modalOverlay');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay)  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* Counters */
  function animCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    if (!target) { el.textContent = el.dataset.target; return; }
    let cur = 0, step = 0, steps = 50;
    const inc = target / steps;
    const t = setInterval(() => {
      step++;
      cur = Math.min(Math.ceil(inc * step), target);
      el.textContent = cur;
      if (step >= steps) { el.textContent = target; clearInterval(t); }
    }, 30);
  }
  document.querySelectorAll('.stat__n[data-target]').forEach(el => animCounter(el));

  /* Parallax orbs */
  const o1 = document.querySelector('.hero__orb--1');
  const o2 = document.querySelector('.hero__orb--2');
  if (o1 && o2) {
    window.addEventListener('mousemove', e => {
      const xr = e.clientX / window.innerWidth  - 0.5;
      const yr = e.clientY / window.innerHeight - 0.5;
      o1.style.transform = `translate(${xr*30}px,${yr*30}px)`;
      o2.style.transform = `translate(${xr*-20}px,${yr*-20}px)`;
    }, { passive: true });
  }

  /* Photo tilt */
  const ps = document.querySelector('.photo-scene');
  if (ps) {
    ps.addEventListener('mousemove', e => {
      const r  = ps.getBoundingClientRect();
      const rx = ((e.clientY - r.top  - r.height/2) / r.height) * -12;
      const ry = ((e.clientX - r.left - r.width /2) / r.width ) *  12;
      ps.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    ps.addEventListener('mouseleave', () => { ps.style.transform = ''; });
  }

  /* Typing effect */
  const roles = ['Supply Chain & Operations','Project Management','Operations Research','Data Analytics','Process Optimization'];
  const roleEl = document.getElementById('typedRole');
  if (roleEl) {
    let ri=0, ci=0, del=false;
    function type() {
      const txt = roles[ri];
      roleEl.textContent = del ? txt.slice(0, ci-1) : txt.slice(0, ci+1);
      if (!del) { ci++; if(ci===txt.length){ del=true; return setTimeout(type,2200); } }
      else { ci--; if(ci<0){ del=false; ci=0; ri=(ri+1)%roles.length; } }
      setTimeout(type, del?45:75);
    }
    setTimeout(type, 1200);
  }

} /* end init */

/* Run when DOM is ready */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
