# SEO elements: How to Measure Window Well Covers

## 1. SEO title
How to Measure Window Well Covers for a Snug, Safe Fit (54 characters)

## 2. Meta description
Learn how to measure window well covers: width, projection, overhang, odd shapes and egress rules. Grab a tape measure and get it right the first time. (151 characters)

## 3. URL slug
`how-to-measure-window-well-covers`

## 4. FAQ schema suggestions
These questions are not answered in a dedicated section of the body. Answers use only information already in the article.

1. **Do I need to measure every window well, or can I measure one and order the same size for all?**
   Measure every well. Wells that look the same are often a little different in size, and older metal wells can be warped, so each one needs its own labeled set of numbers.
2. **Can I measure for a window well cover by myself?**
   Yes, but a helper makes it easier. One person holds the tape against the house while the other reads the far end, and a rigid metal tape stays straight across the open well.
3. **Should I give the seller my well size or the cover size?**
   Ask the seller first. Some want the raw well measurements and add the overhang themselves, so giving them a size that already includes overhang can make the cover too big.
4. **How much does a window well cover cost?**
   HomeAdvisor puts lightweight plastic covers at about $70 to $200 and metal covers at about $300 to $700, with labor around $40 to $100 per cover.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need to measure every window well, or can I measure one and order the same size for all?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Measure every well. Wells that look the same are often a little different in size, and older metal wells can be warped, so each one needs its own labeled set of numbers."
      }
    },
    {
      "@type": "Question",
      "name": "Can I measure for a window well cover by myself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but a helper makes it easier. One person holds the tape against the house while the other reads the far end, and a rigid metal tape stays straight across the open well."
      }
    },
    {
      "@type": "Question",
      "name": "Should I give the seller my well size or the cover size?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ask the seller first. Some want the raw well measurements and add the overhang themselves, so giving them a size that already includes overhang can make the cover too big."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a window well cover cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HomeAdvisor puts lightweight plastic covers at about $70 to $200 and metal covers at about $300 to $700, with labor around $40 to $100 per cover."
      }
    }
  ]
}
```

## 5. Article schema
- headline: How to Measure Window Well Covers for a Snug, Safe Fit
- author / publisher: our editorial team (Organization)
- articleSection: Doors and Windows

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Measure Window Well Covers for a Snug, Safe Fit",
  "author": {
    "@type": "Organization",
    "name": "Our Editorial Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Our Editorial Team"
  },
  "articleSection": "Doors and Windows",
  "keywords": "how to measure window well covers, window well cover size, window well projection, egress window well cover"
}
```

## 6. HowTo schema
The brief's intent is "informational," but the body is a measuring procedure, so HowTo markup is offered as optional. totalTime and estimatedCost are omitted: no time estimate was sourced, and measuring itself has no cost (the HomeAdvisor figures in the article are for buying and installing a cover).

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Measure Window Well Covers",
  "tool": [
    { "@type": "HowToTool", "name": "Rigid metal tape measure" },
    { "@type": "HowToTool", "name": "Pencil" },
    { "@type": "HowToTool", "name": "Marker" },
    { "@type": "HowToTool", "name": "Phone camera" },
    { "@type": "HowToTool", "name": "Gloves" }
  ],
  "supply": [
    { "@type": "HowToSupply", "name": "Notepad or measuring worksheet" },
    { "@type": "HowToSupply", "name": "Large cardboard sheets (for odd-shaped wells)" },
    { "@type": "HowToSupply", "name": "Tape" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Clean off the rim and find the outer edge",
      "text": "Pull back mulch, rock, or soil to expose the whole top edge of the well, then decide where the outer edge or flange is and use that point for every measurement."
    },
    {
      "@type": "HowToStep",
      "name": "Measure the width",
      "text": "Measure straight across, level, along the house from where one side of the well meets the house to where the other side does, outside edge to outside edge, to the nearest 1/8 inch, then follow the seller's rounding rule."
    },
    {
      "@type": "HowToStep",
      "name": "Measure the projection",
      "text": "From the center of the width, measure straight out at a right angle to the house to the farthest point of the well's rim. On rounded wells, measure to the peak of the curve."
    },
    {
      "@type": "HowToStep",
      "name": "Check for a warped or out-of-square well",
      "text": "Measure the projection on the left and right sides. On rectangular wells, take three widths and both diagonals. Use the larger numbers and tell the seller if the well is out of square."
    },
    {
      "@type": "HowToStep",
      "name": "Measure the height if the window sits above the well",
      "text": "Measure from the top of the well to the top of the window frame on both sides, and note the window type for a sloped cover."
    },
    {
      "@type": "HowToStep",
      "name": "Plan the overhang",
      "text": "Add about 1 inch of overhang past the outer rim, and confirm with the seller whether to give raw well size or finished cover size."
    }
  ]
}
```

## 7. BreadcrumbList schema
Home > Doors and Windows > How to Measure Window Well Covers. No domain was provided, so `item` URLs use the `{{SITE_URL}}` placeholder.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "{{SITE_URL}}"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Doors and Windows",
      "item": "{{SITE_URL}}/doors-and-windows/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "How to Measure Window Well Covers",
      "item": "{{SITE_URL}}/how-to-measure-window-well-covers/"
    }
  ]
}
```

## 8. Image placement suggestions
1. **After "Which measurements does a window well cover need?"**: a simple top-down diagram of a U-shaped well against a house wall, with arrows labeled "Width" (along the house) and "Projection" (from the center out to the peak of the curve).
   Alt text: "Diagram showing how to measure window well covers: width along the house and projection to the farthest point"
2. **In Step 3 (projection)**: a photo of a tape measure held at a right angle to the foundation and extending to the outer rim of a corrugated metal well.
   Alt text: "Tape measure held square to the foundation to measure a window well's projection"
3. **In the cardboard template section**: cardboard laid over a stone window well with a marker line traced along the rim.
   Alt text: "Cardboard template traced over an irregular stone window well"
4. **In the egress section**: a hinged egress window well cover propped open over a well with a ladder, showing swing clearance.
   Alt text: "Hinged egress window well cover open above a basement window well with a ladder"

## 9. Internal link suggestions
- [Ideas for window well covers](/ideas-for-window-well-covers/) (sibling article; link from the intro or the overhang section, where readers move from sizing to choosing a style)
- How to install window well covers (fastening, clips, drilling)
- Egress window requirements for basement bedrooms
- How to install or replace a window well
- How to keep a window well from flooding or filling with water (window well drains)
- How to clean and maintain window wells
- Basement waterproofing basics
