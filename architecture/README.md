# Dhanaadhya Architecture Diagrams

This folder contains comprehensive GraphViz visualizations of the dhanaadhya platform architecture.

## 📊 Diagrams Included

### 1. **system_flow.dot** - System Flow & Module Architecture
Shows how all components connect:
- User journey from landing → registration → simulation → graduation
- Core modules (Dashboard, Focus Guide, Tax Engine, etc.)
- Decision loops and feedback
- Engagement drivers

**View it online**: [Graph Online](http://www.gravizo.com/) or `dot -Tpng system_flow.dot -o system_flow.png`

---

### 2. **data_flow.dot** - Data Processing Pipeline
Illustrates how data flows through the system:
- Input sources (user data, real data, simulation data, historical benchmarks)
- Processing engines (Transaction processor, Tax calculator, Forecast engine, etc.)
- Storage layer (Business state DB, User progress DB)
- Output dashboards and reports
- Feedback loops for personalization

**Use case**: Understand what data gets processed where

---

### 3. **feature_gaps.dot** - Feature Gaps & Coverage
Visual breakdown of what's missing:
- ✓ Core features (85% complete)
- ✗ UX/Onboarding (10% complete)
- ⚠️ Content Strategy (20% complete)
- ✗ Business Model (15% complete)
- ⚠️ Community (20% complete)
- ✗ Legal/Privacy (5% complete)
- ⚠️ Analytics (10% complete)

Color coding indicates priority and completion status

---

### 4. **user_journey.dot** - Complete User Journey
Step-by-step path through the platform:
- **Stage 1**: Awareness (demo → interest)
- **Stage 2**: Onboarding (5-min tutorial)
- **Stage 3**: Simulation (4 phases over 365 days)
- **Stage 4**: Graduation (completion, badges, certificate)
- **Stage 5**: Post-graduation (real-world application, explore new business, premium)

Also shows dropout paths and recovery mechanisms

---

### 5. **tech_architecture.dot** - Technical Stack Architecture
Complete technology infrastructure:
- **Frontend**: Web (React/Vue), Mobile (React Native), PWA
- **Backend**: Microservices (Simulation, Tax, Forecast, User, Notification)
- **Data**: PostgreSQL, Redis cache, S3 storage
- **External APIs**: Gov data, market data, analytics, email, push notifications
- **Infrastructure**: Docker, Kubernetes, CDN, monitoring
- **Regional config**: State data, local markets, localization

---

### 6. **gap_dependencies.dot** - Gap Priority Matrix & Dependencies
Shows which gaps to fix first and in what order:
- **Priority 1** (Red): Critical blockers (Onboarding, Failure recovery, Real-world bridge, Support)
- **Priority 2** (Orange): Must-have for beta (Content, Premium tiers, B2B, Analytics)
- **Priority 3** (Yellow): Should-have for scale (Personalization, Regional, Replayability, Community)
- **Priority 4** (Blue): Nice-to-have (Privacy, Localization, Mental health)

Shows dependency arrows indicating which items must be done first

---

### 7. **business_model.dot** - Business Model & Financial Projections
Revenue, costs, and growth targets:
- **Revenue streams**: Free tier (5% conversion), Premium (₹99/month), Enterprise (₹5K+/month)
- **Customer segments**: Newbies (60%), Students (20%), NGOs (15%), Govt (5%)
- **Acquisition channels**: Organic, Social media, Partnerships, Paid ads
- **Cost structure**: Infrastructure, Content, APIs, Team
- **Unit economics**: CAC ₹500, LTV ₹18K, LTV/CAC 36x (excellent)
- **Projections**: Break-even Year 3, ₹30L profit by Year 4

---

## 🔧 How to Use These Diagrams

### Option 1: View Online (Recommended)
Use any online GraphViz viewer:
- http://www.gravizo.com/ (drag & drop .dot file)
- https://dreampuf.github.io/GraphvizOnline/ (paste content)

### Option 2: Generate PNG/SVG Locally
```bash
# Install graphviz first
brew install graphviz          # macOS
apt-get install graphviz       # Ubuntu
choco install graphviz         # Windows

# Generate PNG
dot -Tpng system_flow.dot -o system_flow.png

# Generate SVG (better for presentations)
dot -Tsvg system_flow.dot -o system_flow.svg

# View all at once
dot -Tpng feature_gaps.dot -o feature_gaps.png
dot -Tpng user_journey.dot -o user_journey.png
dot -Tpng tech_architecture.dot -o tech_architecture.png
dot -Tpng gap_dependencies.dot -o gap_dependencies.png
dot -Tpng business_model.dot -o business_model.png
```

### Option 3: Edit & Customize
Open any .dot file in a text editor and modify:
- Colors: `fillcolor=lightblue`
- Shapes: `shape=ellipse`, `shape=box`, `shape=cylinder`
- Labels: `label="Text here"`
- Styles: `style="rounded,filled"`

---

## 📋 Quick Reference

| Diagram | Best For | Audience |
|---------|----------|----------|
| system_flow | Understanding component interactions | Engineers, Product |
| data_flow | Data pipeline & processing | Data engineers, Backend |
| feature_gaps | Roadmap & priorities | Product, Leadership |
| user_journey | Onboarding & engagement | Product, UX/Design |
| tech_architecture | Infrastructure & deployment | Devops, CTO |
| gap_dependencies | Sprint planning & sequencing | Project Manager |
| business_model | Monetization & growth | Leadership, Investors |

---

## 📈 Usage Scenarios

**Scenario 1: Investor Pitch**
- Show: business_model.dot + user_journey.dot
- Highlight: LTV/CAC ratio, market size, growth targets

**Scenario 2: Engineering Kickoff**
- Show: tech_architecture.dot + data_flow.dot
- Highlight: Microservices, data pipeline, scale requirements

**Scenario 3: Product Roadmap**
- Show: feature_gaps.dot + gap_dependencies.dot
- Highlight: Priority 1 items, dependencies, risks

**Scenario 4: User Experience Design**
- Show: user_journey.dot + system_flow.dot
- Highlight: Touch points, engagement loops, dropout prevention

**Scenario 5: Documentation for New Team Members**
- Show: All diagrams in order
- Explain: Architecture → Data flow → User experience → Business model

---

## 🎨 Color Key

- 🟢 **Green** = Complete, ready, healthy
- 🔵 **Blue** = Technical, infrastructure
- 🟡 **Yellow** = In progress, needs work
- 🟠 **Orange** = Important, should-have
- 🔴 **Red** = Critical, must-have, blocker
- 💛 **Gold** = Revenue, financial

---

## 📝 Notes

- Diagrams are version-controlled alongside README.md
- Update diagrams when architecture changes
- Use consistent naming and color coding across diagrams
- Redraw quarterly or when major pivots happen

---

## 🚀 Next Steps

1. Generate PNG/SVG versions for presentations
2. Create presentation deck using these diagrams
3. Share with stakeholders for feedback
4. Use feature_gaps.dot to prioritize development sprints
5. Update business_model.dot with actual metrics as you grow

