/**
 * HYDRATEST Skin Combinations
 * Source: HYDRATEST_Combinations.xlsx
 *
 * Key format: "{hydrationKey}_{oilBars}"
 *
 * Hydration keys:
 *   dehydrated  →  < 31%
 *   dry         →  32–36%
 *   normal      →  37–41%
 *   high        →  > 41%
 *
 * Oil bars: 1 (Low) → 5 (High)
 */

export const SKIN_DATA = {

  /* ── DEHYDRATED (<31%) ─────────────────────── */

  dehydrated_1: {
    condition:      "Severely Dehydrated",
    shortCondition: "Severely Dehydrated",
    hydrationLevel: "Dehydrated",
    oilLevelText:   "Low",
    story: "Your skin is severely lacking water and producing very little oil — a combination that often feels tight, rough, and paper-thin. The skin barrier is likely compromised, which means moisture escapes quickly and irritants get in easily. This can occur from over-cleansing, harsh weather, or a weakened skin barrier.",
    aim:   "The priority is rebuilding moisture from the inside out and sealing it in. Focus on layering hydrating products under an occlusive or richer moisturiser to lock everything in. Avoid harsh cleansers, foaming formulas, or anything that strips the skin further. Introduce barrier-repairing ingredients gently.",
    note:  "Avoid retinol until hydration improves — it can increase sensitivity on already-depleted skin. Bakuchiol is a gentler alternative that supports renewal without further barrier disruption.",
    ingredients:     ["Hyaluronic Acid","Squalane","Cica","Ceramides","Glycerin","Shea Butter","Bakuchiol"],
    ingredientRoles: ["Deep Hydration","Lipid Barrier","Barrier Repair","Skin Barrier","Humectant","Nourishment","Gentle Renewal"],
    hydrationBar: 10, oilBar: 10,
    routine: [
      { step:"Cleanse", name:"Gentle Barrier Cleanser",         desc:"Low-foam, pH-balanced with ceramides or squalane. Avoid foaming or sulphate-heavy formulas." },
      { step:"Treat",   name:"Multi-Layer Hydrating Serum",     desc:"Hyaluronic acid serum with multiple molecular weights. Layer while skin is slightly damp." },
      { step:"Mask",    name:"Intensive Moisture Mask",         desc:"Rich cream or sleeping mask 2–3× per week with ceramide, glycerin, and shea butter." },
      { step:"Target",  name:"Barrier Repair Concentrate",      desc:"Cica or Bakuchiol as a barrier-repair treatment. Soothes and supports recovery without sensitising." },
      { step:"Protect", name:"Rich Occlusive Moisturiser + SPF",desc:"Seal with a richer moisturiser. Always finish with SPF in the morning to prevent further moisture loss." },
    ],
  },

  dehydrated_2: {
    condition:      "Dehydrated — Low Oil",
    shortCondition: "Dehydrated",
    hydrationLevel: "Dehydrated",
    oilLevelText:   "Medium",
    story: "Your skin has low water content and moderate-low oil production, leaving it feeling dry, tight, and potentially flaky. The barrier isn't functioning optimally, causing transepidermal water loss. You may notice dullness and fine lines feeling more prominent.",
    aim:   "Replenish moisture at every layer and support the skin barrier to keep hydration locked in. Look for products that combine humectants with emollients and occlusives. A richer night cream and a protective SPF during the day will make a noticeable difference.",
    note:  "Niacinamide helps strengthen the skin barrier and reduce water loss. Introduce it at a low concentration (2–5%) and build up gradually.",
    ingredients:     ["Hyaluronic Acid","Squalane","Niacinamide","Cica","Ceramides","Glycerin","Bakuchiol"],
    ingredientRoles: ["Deep Hydration","Lipid Barrier","Barrier Strengthening","Barrier Repair","Skin Barrier","Humectant","Gentle Renewal"],
    hydrationBar: 15, oilBar: 25,
    routine: [
      { step:"Cleanse", name:"Cream or Balm Cleanser",          desc:"Removes impurities without stripping. Look for glycerin or squalane in the formula." },
      { step:"Treat",   name:"HA + Niacinamide Serum",          desc:"Layer HA serum first, followed by niacinamide to strengthen the barrier and reduce water loss." },
      { step:"Mask",    name:"Hydrating Sheet or Cream Mask",   desc:"2–3× weekly with ceramides, hyaluronic acid, and cica for barrier restoration." },
      { step:"Target",  name:"Bakuchiol Night Treatment",       desc:"Gentle skin renewal and barrier repair in the evening without sensitising a compromised barrier." },
      { step:"Protect", name:"Emollient Moisturiser + SPF",     desc:"Morning: SPF-rich moisturiser. Evening: richer, occlusive cream to seal in hydration while you sleep." },
    ],
  },

  dehydrated_3: {
    condition:      "Oily-Dehydrated",
    shortCondition: "Oily-Dehydrated",
    hydrationLevel: "Dehydrated",
    oilLevelText:   "Normal",
    story: "You have dehydrated skin despite normal oil production — a very common combination often mistaken for simply 'oily' skin. Your sebaceous glands are working normally, but your skin still lacks water, causing it to feel dry and look dull underneath the surface. Dehydration and dryness are different: dehydration is a lack of water, not oil.",
    aim:   "Focus on adding water-based hydration without increasing oiliness. Lightweight, water-rich products such as hydrating serums and gel moisturisers work best. Consistent use of a hydrating serum morning and evening will deliver the biggest improvement.",
    note:  "Vitamin C is excellent here — it brightens the dullness that dehydration causes while also supporting collagen production. Opt for a stable L-ascorbic acid formula at 10–15%.",
    ingredients:     ["Hyaluronic Acid","Niacinamide","Vitamin C","Glycerin","Aloe Vera","Centella Asiatica"],
    ingredientRoles: ["Deep Hydration","Barrier Strengthening","Brightening","Humectant","Soothing","Barrier Repair"],
    hydrationBar: 20, oilBar: 50,
    routine: [
      { step:"Cleanse", name:"Lightweight Gel Cleanser",        desc:"Gentle, non-stripping gel that removes oil without over-drying." },
      { step:"Treat",   name:"Hydrating Serum + Vitamin C",     desc:"Morning: Vitamin C for brightness and collagen support. Evening: Hyaluronic acid and niacinamide." },
      { step:"Mask",    name:"Water-Gel Hydrating Mask",        desc:"2× weekly. Cooling gel mask rich in aloe and hyaluronic acid without feeling heavy." },
      { step:"Target",  name:"Niacinamide Concentrate",         desc:"Twice daily to regulate oil, strengthen the barrier, and visibly improve texture." },
      { step:"Protect", name:"Water-Gel Moisturiser + SPF",     desc:"Lightweight, non-comedogenic moisturiser. SPF daily to prevent further moisture loss." },
    ],
  },

  dehydrated_4: {
    condition:      "Dehydrated Combination",
    shortCondition: "Dehydrated Combination",
    hydrationLevel: "Dehydrated",
    oilLevelText:   "Normal/High",
    story: "Your skin is dehydrated but producing above-normal levels of oil — a shiny, congested surface with a simultaneously tight feeling underneath. This paradox is common in oily-dehydrated skin types — excess sebum can signal the skin overcompensating for lack of water.",
    aim:   "Rehydrate with lightweight, non-comedogenic products that won't add to congestion. Gel or water-gel moisturisers are ideal. Reducing oil production often happens naturally as hydration is restored. Avoid skipping moisturiser — this can worsen oil overproduction.",
    note:  "Niacinamide is particularly effective here — it regulates sebum production and improves hydration simultaneously. Use it twice daily at 5–10%.",
    ingredients:     ["Hyaluronic Acid","Niacinamide","Zinc","Salicylic Acid","Glycerin","Centella Asiatica"],
    ingredientRoles: ["Deep Hydration","Sebum Regulation","Oil Control","Gentle Exfoliation","Humectant","Barrier Repair"],
    hydrationBar: 20, oilBar: 75,
    routine: [
      { step:"Cleanse", name:"Balancing Gel Cleanser",          desc:"Addresses both dryness and congestion — avoid both overly-rich and stripping formulas." },
      { step:"Treat",   name:"HA + Niacinamide Serum",          desc:"Rehydrate while simultaneously regulating sebum production." },
      { step:"Mask",    name:"Clay-Gel Hybrid Mask",            desc:"Balancing mask that draws out impurities without stripping moisture. 1–2× weekly on oily zones." },
      { step:"Target",  name:"Zinc + Salicylic BHA Treatment",  desc:"Low-dose BHA (0.5–1%) 2× per week to gently clear congestion without over-stripping." },
      { step:"Protect", name:"Oil-Free Water-Gel + SPF",        desc:"Lightweight, oil-free moisturiser is essential. Hydration reduces overproduction of oil." },
    ],
  },

  dehydrated_5: {
    condition:      "Dehydrated Oily",
    shortCondition: "Dehydrated Oily",
    hydrationLevel: "Dehydrated",
    oilLevelText:   "High",
    story: "Your skin is significantly dehydrated while producing high levels of oil — one of the more complex profiles. The barrier is likely impaired, leading to water loss even as oil sits on the surface. You may experience shininess, breakouts, and tightness or flakiness simultaneously. The excess oil is often a stress response from the skin trying to protect itself.",
    aim:   "The main goal is to hydrate the skin enough that oil production naturally regulates. Use oil-free, hydrating products. Incorporate gentle exfoliation to prevent congestion but avoid over-stripping. A consistent routine is key.",
    note:  "Avoid heavy occlusive products which can worsen breakouts. Focus on hydration-first rather than oil-control products — the oil often reduces naturally as the skin rebalances.",
    ingredients:     ["Hyaluronic Acid","Niacinamide","Salicylic Acid","Zinc","Centella Asiatica","Glycerin"],
    ingredientRoles: ["Deep Hydration","Sebum Regulation","Congestion Control","Oil Balancing","Barrier Repair","Humectant"],
    hydrationBar: 15, oilBar: 95,
    routine: [
      { step:"Cleanse", name:"Gentle Purifying Gel Cleanser",   desc:"Cleanse twice daily. Avoid anything with SLS or alcohol that will strip the barrier." },
      { step:"Treat",   name:"Hydrating + Balancing Serum",     desc:"Layer HA serum first, followed by niacinamide to address both water-loss and oil overproduction." },
      { step:"Mask",    name:"Purifying Clay Mask",             desc:"Gentle clay mask 1–2× weekly on oily zones. Choose formulas with niacinamide or cica." },
      { step:"Target",  name:"BHA Salicylic Toner",             desc:"Low-dose salicylic acid toner (0.5–1%) keeps pores clear without triggering more oil production." },
      { step:"Protect", name:"Lightweight Oil-Free SPF",        desc:"Never skip moisturiser. A lightweight SPF gel maintains hydration without adding to congestion." },
    ],
  },

  /* ── DRY (32–36%) ──────────────────────────── */

  dry_1: {
    condition:      "Dry & Oil-Depleted",
    shortCondition: "Dry & Depleted",
    hydrationLevel: "Dry",
    oilLevelText:   "Low",
    story: "Your skin is dry and producing minimal oil, making it prone to flakiness, rough texture, tightness, and sensitivity. The skin barrier is compromised, with both low water and low lipid content. This skin type can feel uncomfortable, especially in cold or low-humidity environments, and may be prone to redness and irritation.",
    aim:   "Intensively nourish and repair the skin barrier with both water and oil-based ingredients. Richer, creamier formulations work well — consider a multi-step routine that layers hydrating serums under deeply moisturising creams.",
    note:  "Squalane is ideal for this profile — it closely mimics the skin's natural sebum and absorbs easily without a heavy feel. Pair with a ceramide-rich moisturiser for best results.",
    ingredients:     ["Squalane","Hyaluronic Acid","Cica","Ceramides","Shea Butter","Bakuchiol","Rosehip Oil"],
    ingredientRoles: ["Lipid Barrier","Deep Hydration","Barrier Repair","Skin Barrier","Nourishment","Gentle Renewal","Restoration"],
    hydrationBar: 30, oilBar: 10,
    routine: [
      { step:"Cleanse", name:"Balm or Oil Cleanser",            desc:"Cleanses thoroughly while adding lipids back to depleted skin." },
      { step:"Treat",   name:"Layered Hydration Serum",         desc:"Apply HA serum on damp skin, then follow with squalane or rosehip oil for lipid replenishment." },
      { step:"Mask",    name:"Rich Cream Mask",                 desc:"Deeply nourishing sleeping mask 3–4× per week to intensively restore moisture." },
      { step:"Target",  name:"Ceramide Barrier Serum",          desc:"Concentrated ceramide serum to repair and reinforce the lipid barrier." },
      { step:"Protect", name:"Rich Moisturiser + Mineral SPF",  desc:"Thick, nourishing moisturiser morning and evening. Mineral SPF to minimise irritation risk." },
    ],
  },

  dry_2: {
    condition:      "Dry — Low Oil",
    shortCondition: "Dry — Low Oil",
    hydrationLevel: "Dry",
    oilLevelText:   "Medium",
    story: "Your skin sits in the dry-to-normal moisture range with moderate-low oil production. Not severely deprived but benefits from consistent nourishment. You may notice tightness after cleansing, occasional flaking, and a tendency for fine lines to look more visible.",
    aim:   "Build a consistent routine centred on hydration and gentle barrier support. A good cleanser that doesn't strip, a hydrating serum, and a moisturiser with emollient and occlusive properties will address this profile well.",
    note:  "This is a well-suited skin type for introducing Bakuchiol or a low-dose retinol for anti-ageing benefits, as hydration levels are sufficient to tolerate actives when introduced gradually.",
    ingredients:     ["Hyaluronic Acid","Squalane","Niacinamide","Ceramides","Bakuchiol","Vitamin C"],
    ingredientRoles: ["Deep Hydration","Lipid Barrier","Barrier Strengthening","Skin Barrier","Gentle Renewal","Brightening"],
    hydrationBar: 35, oilBar: 25,
    routine: [
      { step:"Cleanse", name:"Cream or Gel-Cream Cleanser",     desc:"Nourishing cleanser that leaves skin comfortable — squalane, glycerin, or ceramide enriched." },
      { step:"Treat",   name:"HA + Squalane Serum",             desc:"Layer a hydrating serum under a squalane oil for combined humectant and emollient benefits." },
      { step:"Mask",    name:"Hydrating Cream Mask",            desc:"2× weekly with ceramides and hyaluronic acid for barrier-supporting hydration." },
      { step:"Target",  name:"Bakuchiol Evening Treatment",     desc:"Gentle anti-ageing renewal and barrier repair in the evening." },
      { step:"Protect", name:"Medium-Weight Moisturiser + SPF", desc:"Well-formulated daily SPF moisturiser prevents UV-induced moisture loss." },
    ],
  },

  dry_3: {
    condition:      "Dry — Normal Oil",
    shortCondition: "Dry-Dehydrated",
    hydrationLevel: "Dry",
    oilLevelText:   "Normal",
    story: "Your skin has dry hydration levels but normal oil production — meaning your sebaceous glands are functioning well, but your skin still lacks sufficient water. You may find your skin looks dull, feels slightly tight, and shows fine lines more readily, even though it doesn't feel oily or congested.",
    aim:   "Focus on water-based hydration and barrier support without overloading with oils. Humectant-rich serums layered under a medium-weight moisturiser work well. This skin type responds very well to consistent use of hydrating actives and antioxidants.",
    note:  "This is a great profile for Vitamin C — your skin can tolerate it well and it will visibly improve radiance and support collagen. Pair with Hyaluronic Acid for a brightening, plumping effect.",
    ingredients:     ["Hyaluronic Acid","Niacinamide","Vitamin C","Glycerin","Cica","Squalane"],
    ingredientRoles: ["Deep Hydration","Barrier Strengthening","Brightening","Humectant","Barrier Repair","Lipid Balance"],
    hydrationBar: 35, oilBar: 50,
    routine: [
      { step:"Cleanse", name:"Gentle Hydrating Cleanser",       desc:"Maintains moisture while effectively removing impurities and SPF." },
      { step:"Treat",   name:"Vitamin C Morning / HA Evening",  desc:"Morning: Vitamin C for radiance. Evening: Hyaluronic acid and niacinamide for overnight hydration." },
      { step:"Mask",    name:"Brightening Hydration Mask",      desc:"Vitamin C or niacinamide with hyaluronic acid for dual brightening and plumping." },
      { step:"Target",  name:"Cica Barrier Serum",              desc:"Centella asiatica soothes, repairs, and strengthens the barrier as an evening treatment." },
      { step:"Protect", name:"Medium Moisturiser + SPF",        desc:"Essential SPF to protect against UV-induced collagen damage and moisture loss." },
    ],
  },

  dry_4: {
    condition:      "Dry Combination",
    shortCondition: "Dry Combination",
    hydrationLevel: "Dry",
    oilLevelText:   "Normal/High",
    story: "Your hydration is in the dry range while oil production is normal-to-high. Your skin may have a mixed feel — some areas tight or flaky, others shinier. This combination sometimes occurs in those who use drying products to manage oil, which strips water without reducing sebum.",
    aim:   "Balance is key. Use lightweight, hydrating products that won't add to sebum while still replenishing water. Avoid stripping cleansers and alcohol-based toners. Focus on gentle hydration morning and night.",
    note:  "Niacinamide is especially useful here — it simultaneously reduces oil, strengthens the barrier, and supports hydration. A 5–10% formula used twice daily will make a significant difference over 4–6 weeks.",
    ingredients:     ["Hyaluronic Acid","Niacinamide","Glycerin","Centella Asiatica","Zinc","Vitamin C"],
    ingredientRoles: ["Deep Hydration","Sebum + Barrier","Humectant","Barrier Repair","Oil Control","Brightening"],
    hydrationBar: 35, oilBar: 75,
    routine: [
      { step:"Cleanse", name:"Balancing Gel-Cream Cleanser",    desc:"Removes oil in T-zone without stripping dry areas. Avoid alcohol-based formulas." },
      { step:"Treat",   name:"Niacinamide + HA Serum",          desc:"Regulates oil and strengthens barrier while restoring water content." },
      { step:"Mask",    name:"Zone-Targeted Masking",           desc:"Clay mask on oily areas, cream or gel mask on drier zones simultaneously." },
      { step:"Target",  name:"Vitamin C + Zinc Serum",          desc:"Brightening serum with zinc for light sebum regulation, used in the morning." },
      { step:"Protect", name:"Lightweight Moisturiser + SPF",   desc:"Applied uniformly. SPF protects against UV damage which can worsen barrier disruption." },
    ],
  },

  dry_5: {
    condition:      "Dry Oily — Imbalanced",
    shortCondition: "Dry Oily",
    hydrationLevel: "Dry",
    oilLevelText:   "High",
    story: "Your skin is dry in water content but producing high levels of oil — noticeably imbalanced, perhaps with congestion or breakouts in some areas and dryness and irritation in others. Often a sign of a disrupted skin barrier that is overproducing oil in response to dehydration or over-cleansing.",
    aim:   "Restore the skin barrier with gentle, non-comedogenic hydrators while managing oil. Avoid drying acne products which will worsen the dry-skin component. A gentle, consistent approach will naturally regulate oil production over time.",
    note:  "Avoid retinol until hydration normalises. Cica (Centella asiatica) is excellent here — it calms inflammation, repairs the barrier, and soothes the irritation that accompanies this skin type.",
    ingredients:     ["Niacinamide","Hyaluronic Acid","Salicylic Acid","Cica","Zinc"],
    ingredientRoles: ["Sebum Regulation","Deep Hydration","Gentle Exfoliation","Barrier Repair","Oil Control"],
    hydrationBar: 30, oilBar: 90,
    routine: [
      { step:"Cleanse", name:"Gentle Purifying Cleanser",       desc:"Nothing too stripping. Cleanse twice daily but never over-cleanse." },
      { step:"Treat",   name:"Niacinamide + Cica Barrier Serum",desc:"Niacinamide regulates oil, cica calms and repairs the damaged barrier." },
      { step:"Mask",    name:"Soothing + Purifying Mask",       desc:"Alternate between gentle clay mask and cica/centella mask." },
      { step:"Target",  name:"Low-Dose BHA (0.5%) Toner",       desc:"Very gentle salicylic acid toner 2× per week to clear congestion." },
      { step:"Protect", name:"Oil-Free Barrier Moisturiser + SPF",desc:"Non-comedogenic, barrier-focused moisturiser. Daily SPF is non-negotiable." },
    ],
  },

  /* ── NORMAL (37–41%) ───────────────────────── */

  normal_1: {
    condition:      "Balanced — Low Oil",
    shortCondition: "Balanced Low-Oil",
    hydrationLevel: "Normal",
    oilLevelText:   "Low",
    story: "You have good water content in your skin but very low oil production, meaning the skin may feel comfortable in terms of hydration but lack the lipid layer needed to seal it in and protect the barrier. Over time, this can lead to moisture loss, sensitivity, and tightness.",
    aim:   "Maintain hydration levels while adding lipid-based support to prevent water loss. Focus on nourishing the skin with oils and emollients — your water levels are good, so the priority is sealing them in and supporting the barrier.",
    note:  "Squalane is ideal — it replaces the oil your skin isn't producing naturally without clogging pores. Pair with a ceramide moisturiser to support the lipid barrier.",
    ingredients:     ["Squalane","Rosehip Oil","Ceramides","Cica","Shea Butter","Bakuchiol","Prickly Pear"],
    ingredientRoles: ["Lipid Barrier","Nourishment","Skin Barrier","Barrier Repair","Rich Emollient","Gentle Renewal","Antioxidant"],
    hydrationBar: 55, oilBar: 10,
    routine: [
      { step:"Cleanse", name:"Oil or Balm Cleanser",            desc:"Replenishes lipids your skin isn't producing naturally while cleansing effectively." },
      { step:"Treat",   name:"Squalane Serum or Facial Oil",    desc:"Apply squalane after cleansing to replenish lipids and lock in your good hydration." },
      { step:"Mask",    name:"Nourishing Oil-Cream Mask",       desc:"Rich mask with rosehip oil, ceramides, and shea butter for lipid replenishment 2× per week." },
      { step:"Target",  name:"Bakuchiol Evening Treatment",     desc:"Gentle skin renewal, ideal for lipid-deficient skin types." },
      { step:"Protect", name:"Ceramide Moisturiser + SPF",      desc:"Ceramide-rich moisturiser seals the lipid barrier. Morning SPF protects against UV-induced barrier damage." },
    ],
  },

  normal_2: {
    condition:      "Near-Balanced",
    shortCondition: "Near-Balanced",
    hydrationLevel: "Normal",
    oilLevelText:   "Medium",
    story: "Your skin has healthy hydration and moderate-low oil production, placing you close to balanced but slightly lacking in lipid content. Your skin likely feels comfortable most of the time but may feel a little tight after cleansing or in dry environments.",
    aim:   "Maintain what's working well and supplement the lipid layer with gentle, nourishing ingredients. You're well-positioned to introduce or maintain actives like Vitamin C and retinol/bakuchiol without significant risk of irritation.",
    note:  "With well-balanced hydration, this profile can use a broader range of actives. Consider alternating Vitamin C (morning) with Bakuchiol or retinol (evening) for a well-rounded anti-ageing and brightening routine.",
    ingredients:     ["Hyaluronic Acid","Squalane","Niacinamide","Vitamin C","Bakuchiol","Ceramides"],
    ingredientRoles: ["Deep Hydration","Lipid Balance","Barrier Strengthening","Brightening","Gentle Renewal","Skin Barrier"],
    hydrationBar: 60, oilBar: 25,
    routine: [
      { step:"Cleanse", name:"Gentle Daily Cleanser",           desc:"Low-foam, gentle cleanser. Your skin needs maintenance, not correction." },
      { step:"Treat",   name:"Vitamin C AM / Bakuchiol PM",     desc:"Morning: Vitamin C for antioxidant protection. Evening: Bakuchiol for renewal and lipid support." },
      { step:"Mask",    name:"Hydrating Glow Mask",             desc:"Brightening mask with Vitamin C and hyaluronic acid for a weekly glow boost." },
      { step:"Target",  name:"Squalane Face Oil",               desc:"A few drops of squalane under moisturiser to supplement your lipid layer." },
      { step:"Protect", name:"Light Moisturiser + SPF 30+",     desc:"Daily SPF is the single best anti-ageing investment for skin at this balance." },
    ],
  },

  normal_3: {
    condition:      "Perfectly Balanced",
    shortCondition: "Balanced",
    hydrationLevel: "Normal",
    oilLevelText:   "Normal",
    story: "Your skin is well-balanced — both hydration and oil production are in the normal range. This is the optimal skin profile, where the barrier functions well, moisture is retained effectively, and the skin appears healthy and comfortable. The goal is to maintain this balance and protect against ageing and environmental damage.",
    aim:   "Focus on maintenance and prevention. Keep your routine consistent and introduce antioxidants and actives to address ageing, pigmentation, or texture concerns. Protect your skin from UV damage and environmental stressors to preserve this balance long-term.",
    note:  "With balanced skin, you can explore a wider range of actives. Retinol or Bakuchiol in the evening and Vitamin C in the morning is a well-regarded routine for anti-ageing and radiance maintenance.",
    ingredients:     ["Vitamin C","Retinol","Niacinamide","Hyaluronic Acid","Squalane","Bakuchiol","SPF"],
    ingredientRoles: ["Brightening","Anti-Ageing","Barrier Strengthening","Deep Hydration","Lipid Balance","Gentle Renewal","UV Protection"],
    hydrationBar: 70, oilBar: 50,
    routine: [
      { step:"Cleanse", name:"Balancing Cleanser",              desc:"Well-formulated daily cleanser. Your skin doesn't need correction — just consistent care." },
      { step:"Treat",   name:"Vitamin C AM / Retinol PM",       desc:"Gold-standard routine. Morning: Vitamin C for protection. Evening: Retinol for renewal." },
      { step:"Mask",    name:"Brightening or Anti-Ageing Mask", desc:"Targeted mask 1–2× per week for texture, tone, or ageing concerns." },
      { step:"Target",  name:"Niacinamide Maintenance Serum",   desc:"Maintains the barrier, subtly refines pores, and adds radiance. Ideal for balanced skin." },
      { step:"Protect", name:"SPF 50 — Daily Non-Negotiable",   desc:"The most important step for balanced skin. Protecting your baseline prevents corrective care later." },
    ],
  },

  normal_4: {
    condition:      "Normal — Oily Tendency",
    shortCondition: "Normal Oily Tendency",
    hydrationLevel: "Normal",
    oilLevelText:   "Normal/High",
    story: "Your skin is well hydrated but producing slightly above-normal levels of oil, meaning the skin surface may feel a little shiny or congested in certain areas. The good news is your hydration level is strong — the priority is simply keeping oil under control without disrupting moisture balance.",
    aim:   "Regulate oil production gently without drying the skin. Lightweight moisturisers and balancing actives are your best tools. Avoid heavy creams or oils that could increase congestion. This skin type tends to respond well to a streamlined routine.",
    note:  "Niacinamide at 5–10% used consistently will visibly reduce shininess and pore appearance over time. Pair with a gentle BHA exfoliant 2–3× per week if blackheads or congestion are a concern.",
    ingredients:     ["Niacinamide","Salicylic Acid","Hyaluronic Acid","Vitamin C","Zinc","Centella Asiatica"],
    ingredientRoles: ["Sebum Regulation","Congestion Control","Deep Hydration","Brightening","Oil Control","Barrier Support"],
    hydrationBar: 70, oilBar: 75,
    routine: [
      { step:"Cleanse", name:"Gentle Balancing Cleanser",       desc:"Thoroughly removes excess oil without stripping the good hydration you already have." },
      { step:"Treat",   name:"Niacinamide + Vitamin C Serum",   desc:"Niacinamide AM/PM for oil regulation, Vitamin C in the morning for brightening." },
      { step:"Mask",    name:"Gentle Clay + Niacinamide Mask",  desc:"Weekly clay mask to absorb excess oil, minimise pores, and maintain brightness." },
      { step:"Target",  name:"BHA Exfoliant 2–3× Weekly",       desc:"Gentle salicylic acid toner used 2–3 evenings per week to keep pores clear." },
      { step:"Protect", name:"Oil-Free Moisturiser + SPF 30+",  desc:"Weightless, non-comedogenic moisturiser. SPF 30+ daily." },
    ],
  },

  normal_5: {
    condition:      "Normal — Oily",
    shortCondition: "Normal Oily",
    hydrationLevel: "Normal",
    oilLevelText:   "High",
    story: "Your skin is well hydrated but producing high levels of oil, giving a noticeably shiny appearance and a tendency toward congestion, enlarged pores, and potential breakouts. Because hydration is healthy, the focus shifts almost entirely to managing excess sebum and keeping pores clear.",
    aim:   "Control oil production with targeted ingredients and a lightweight, non-comedogenic routine. Avoid skipping moisturiser — your skin's hydration needs to be maintained even as you target oil. Introduce exfoliating and sebum-regulating actives progressively.",
    note:  "Retinol is particularly effective for oily skin — it regulates sebum production and refines pore texture over time. Start at a low concentration (0.025–0.1%) and increase gradually.",
    ingredients:     ["Niacinamide","Salicylic Acid","Retinol","Zinc","Vitamin C","Hyaluronic Acid"],
    ingredientRoles: ["Sebum Regulation","Congestion Control","Anti-Ageing + Oil","Oil Balancing","Brightening","Hydration Maintenance"],
    hydrationBar: 70, oilBar: 90,
    routine: [
      { step:"Cleanse", name:"Purifying Foam Cleanser",         desc:"Gentle foaming cleanser with salicylic acid to remove excess oil and prevent congestion." },
      { step:"Treat",   name:"Niacinamide AM + Retinol PM",     desc:"Morning: Niacinamide for oil regulation. Evening: Low-dose retinol to regulate sebum and improve texture." },
      { step:"Mask",    name:"Charcoal or Clay Purifying Mask", desc:"Weekly deep-cleansing mask to draw out excess oil and clear congested pores." },
      { step:"Target",  name:"BHA Salicylic Exfoliant 3× Weekly",desc:"Consistent BHA exfoliation keeps pores clear and prevents new congestion forming." },
      { step:"Protect", name:"Oil-Control SPF Moisturiser",     desc:"Very lightweight SPF moisturiser or standalone SPF gel. Protection without heavy hydration." },
    ],
  },

  /* ── HIGH (>41%) ───────────────────────────── */

  high_1: {
    condition:      "Well-Hydrated, Low Oil",
    shortCondition: "Well-Hydrated",
    hydrationLevel: "High",
    oilLevelText:   "Low",
    story: "Your skin has excellent water content but very low oil production, which means it may feel plump and comfortable in some conditions but can still experience barrier vulnerability due to a lack of protective lipids. Very low oil production can make skin fragile, sensitive to temperature changes, and prone to redness.",
    aim:   "Maintain your impressive hydration levels and focus on adding lipid-based protection to seal moisture in and protect the barrier. You don't need heavy water-based products — instead, focus on quality oils and barrier creams.",
    note:  "This profile doesn't require hydrating serums — your hydration is excellent. Instead, layer a nourishing facial oil or squalane on top of your moisturiser to create a protective lipid barrier.",
    ingredients:     ["Squalane","Ceramides","Cica","Rosehip Oil","Bakuchiol","Shea Butter","Prickly Pear"],
    ingredientRoles: ["Lipid Barrier","Skin Barrier","Barrier Repair","Nourishment","Gentle Renewal","Rich Emollient","Antioxidant"],
    hydrationBar: 85, oilBar: 10,
    routine: [
      { step:"Cleanse", name:"Oil or Balm Cleanser",            desc:"Replenishes lipids while cleansing. Avoid anything that strips your well-maintained hydration." },
      { step:"Treat",   name:"Squalane or Rosehip Facial Oil",  desc:"A few drops to seal in hydration and replace missing lipids." },
      { step:"Mask",    name:"Rich Lipid-Replenishing Mask",    desc:"Ceramide and shea butter mask 2× per week to support the lipid layer." },
      { step:"Target",  name:"Cica Barrier Balm",               desc:"Targeted Cica balm for any areas of redness or sensitivity." },
      { step:"Protect", name:"Ceramide Moisturiser + Mineral SPF",desc:"Seals everything in. Mineral SPF is the gentlest choice for potentially sensitive skin." },
    ],
  },

  high_2: {
    condition:      "Healthy — Near Balanced",
    shortCondition: "Healthy Skin",
    hydrationLevel: "High",
    oilLevelText:   "Medium",
    story: "Your skin is very well hydrated with moderate-low oil — a great position to be in. Your barrier functions well overall, and you have a comfortable skin experience. The skin may need slight lipid support but is generally healthy and resilient.",
    aim:   "Maintain hydration and support the oil layer lightly. This is an ideal profile for focusing on skin quality goals such as radiance, anti-ageing, or evenness, rather than corrective concerns.",
    note:  "With excellent hydration and a fairly balanced oil level, this is one of the best profiles for introducing or maintaining a Vitamin C + Bakuchiol/retinol routine for long-term skin quality.",
    ingredients:     ["Vitamin C","Niacinamide","Squalane","Bakuchiol","Ceramides","Hyaluronic Acid"],
    ingredientRoles: ["Brightening","Barrier Strengthening","Lipid Balance","Gentle Renewal","Skin Barrier","Hydration Maintenance"],
    hydrationBar: 88, oilBar: 25,
    routine: [
      { step:"Cleanse", name:"Light Daily Cleanser",            desc:"Minimal, gentle cleanser. Your skin is in great shape — focus on maintaining it." },
      { step:"Treat",   name:"Vitamin C AM / Bakuchiol PM",     desc:"Morning: Vitamin C for antioxidant protection. Evening: Bakuchiol for gentle renewal." },
      { step:"Mask",    name:"Radiance or Glow Mask",           desc:"Vitamin C or niacinamide mask 1–2× per week for brightness and evenness." },
      { step:"Target",  name:"Squalane Sealing Oil",            desc:"A few drops of squalane before SPF to lightly supplement your lipid layer." },
      { step:"Protect", name:"Light Moisturiser + SPF 50",      desc:"Lightweight daily moisturiser with high SPF. Protection is the most impactful step at this level." },
    ],
  },

  high_3: {
    condition:      "Excellent Skin Profile",
    shortCondition: "Excellent Profile",
    hydrationLevel: "High",
    oilLevelText:   "Normal",
    story: "Your skin has high hydration and normal oil production — an excellent profile suggesting a healthy, well-functioning barrier. Your skin likely looks dewy, feels comfortable, and shows good resilience. The main focus is maintaining this and protecting against UV damage and oxidative stress.",
    aim:   "Maintain and protect. Invest in antioxidants, SPF, and gentle actives to preserve this healthy baseline. Avoid overdoing your routine — less is more when skin is in good shape.",
    note:  "Your skin can tolerate a full active routine. Vitamin C in the morning for protection and radiance, retinol or bakuchiol in the evening for anti-ageing, and a consistent SPF will keep your skin in excellent condition.",
    ingredients:     ["Vitamin C","Retinol","Niacinamide","SPF","Squalane","Bakuchiol","Prickly Pear"],
    ingredientRoles: ["Brightening","Anti-Ageing","Barrier Strengthening","UV Protection","Lipid Balance","Gentle Renewal","Antioxidant"],
    hydrationBar: 88, oilBar: 50,
    routine: [
      { step:"Cleanse", name:"Simple Gentle Cleanser",          desc:"Keep it simple. A gentle, effective cleanser that doesn't strip is all excellent skin needs." },
      { step:"Treat",   name:"Vitamin C AM / Retinol PM",       desc:"Gold-standard active pairing. Consistent use prevents future concerns more than it corrects existing ones." },
      { step:"Mask",    name:"Brightening or Targeted Mask",    desc:"Choose masks based on your specific goals — brightening, firming, or texture refinement weekly." },
      { step:"Target",  name:"Niacinamide Maintenance",         desc:"Low-risk, high-reward addition that supports every aspect of skin health." },
      { step:"Protect", name:"SPF 50 — Daily Priority",         desc:"The single most important step. At this level of skin health, prevention is everything." },
    ],
  },

  high_4: {
    condition:      "Hydrated Combination",
    shortCondition: "Hydrated Combination",
    hydrationLevel: "High",
    oilLevelText:   "Normal/High",
    story: "You have high hydration and above-normal oil production, meaning your skin is plump and well-moisturised but may experience excess shine, enlarged pores, and congestion. This combination is common in naturally oily skin types that also have excellent barrier function.",
    aim:   "Manage oil and congestion without disrupting your excellent hydration balance. Use lightweight products and focus on balancing sebum. Avoid heavy moisturisers and occlusive ingredients that could worsen congestion.",
    note:  "Retinol and Niacinamide work well together here — Niacinamide reduces oil and pore appearance, while retinol regulates cell turnover and sebum production. Use Niacinamide morning and night, retinol evenings only.",
    ingredients:     ["Niacinamide","Salicylic Acid","Vitamin C","Hyaluronic Acid","Zinc","Retinol"],
    ingredientRoles: ["Sebum Regulation","Congestion Control","Brightening","Light Hydration","Oil Balancing","Anti-Ageing + Oil"],
    hydrationBar: 85, oilBar: 75,
    routine: [
      { step:"Cleanse", name:"Balancing Foam or Gel Cleanser",  desc:"Cleanse thoroughly but don't over-cleanse — your excellent hydration is worth protecting." },
      { step:"Treat",   name:"Niacinamide + Vit C AM / Retinol PM",desc:"Niacinamide for oil management all day, Vitamin C for morning protection, retinol for evening renewal." },
      { step:"Mask",    name:"Purifying Clay Mask",             desc:"Clay mask 1–2× per week to manage oil and minimise pores." },
      { step:"Target",  name:"BHA Salicylic Exfoliant 2× Weekly",desc:"Consistent BHA use keeps pores clear and prevents congestion that oily-hydrated skin is prone to." },
      { step:"Protect", name:"Lightweight Non-Comedogenic SPF", desc:"Featherweight SPF gel or fluid. Hydration is not your concern — just protection and oil management." },
    ],
  },

  high_5: {
    condition:      "Very Oily — Well Hydrated",
    shortCondition: "Very Oily",
    hydrationLevel: "High",
    oilLevelText:   "High",
    story: "Your skin has very high hydration and very high oil production — well-plumped but significantly oily, often leading to a very shiny complexion, congested pores, breakouts, and a heavier skin texture. The good news is your barrier is strong and your hydration needs are fully met.",
    aim:   "The focus is entirely on oil regulation. You can skip most hydrating products and concentrate on regulating sebum, clearing congestion, and refining pores. Your routine can be simpler — cleanse, treat, and protect.",
    note:  "This is the ideal profile for retinol and salicylic acid use. Consider a BHA exfoliant 3–4× per week and a retinol serum in the evenings. Niacinamide is your all-day companion for sebum regulation.",
    ingredients:     ["Salicylic Acid","Retinol","Niacinamide","Zinc","Vitamin C","AHA/Glycolic"],
    ingredientRoles: ["Congestion Control","Anti-Ageing + Oil","Sebum Regulation","Oil Balancing","Brightening","Texture Refinement"],
    hydrationBar: 90, oilBar: 95,
    routine: [
      { step:"Cleanse", name:"Salicylic Acid Cleanser",         desc:"BHA-containing cleanser morning and evening. Daily use keeps pores continuously clear." },
      { step:"Treat",   name:"Niacinamide AM / Retinol PM",     desc:"Niacinamide all day for oil regulation; retinol at night for sebum control and texture refinement." },
      { step:"Mask",    name:"Deep-Cleansing Clay or Charcoal Mask",desc:"Charcoal or kaolin clay mask 2× per week for intensive oil extraction." },
      { step:"Target",  name:"BHA Exfoliant 3–4× Weekly",       desc:"Salicylic acid at 1–2% is your most impactful oil management tool." },
      { step:"Protect", name:"Mattifying SPF Fluid",            desc:"Mattifying, oil-free SPF fluid. Skip the moisturiser on most days — your oil provides barrier protection." },
    ],
  },

};

/**
 * Returns the hydration category key from a percentage value.
 * @param {number} pct
 * @returns {'dehydrated'|'dry'|'normal'|'high'}
 */
export function getHydrationKey(pct) {
  if (pct < 31)  return 'dehydrated';
  if (pct <= 36) return 'dry';
  if (pct <= 41) return 'normal';
  return 'high';
}

/**
 * Returns the full skin data object for a given combination, or null.
 * @param {number} hydrationPct
 * @param {number} oilBars  1–5
 * @returns {object|null}
 */
export function getSkinProfile(hydrationPct, oilBars) {
  const key = `${getHydrationKey(hydrationPct)}_${oilBars}`;
  return SKIN_DATA[key] ?? null;
}

export const OIL_LABELS = {
  1: 'Low',
  2: 'Medium',
  3: 'Normal',
  4: 'Normal / High',
  5: 'High',
};
