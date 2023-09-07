---
title: Interactions
sidebar_position: 5
---

Interactions or touchpoints refer to the various points of contact and engagement between a customer and an organization throughout the customer's journey. These interactions can occur through multiple marketing channels, such as digital ads (Google/Facebook), email, phone calls, social media, website visits, in-person meetings, posts (letters/flyers) etc.

## Why are Interactions Considered Important?

Interactions provide:

- **Holistic view of the customer journey:** Capturing and consolidating data from various touchpoints, allows businesses to develop a comprehensive view of each customer's interactions and engagements over time.

- **Improved customer service:** Tracking interactions ensures that customer inquiries, issues, and complaints are handled efficiently and promptly.

- **Targeted marketing and sales efforts:** Understanding the touchpoints that have the most impact on a customer allows businesses to target marketing and sales efforts more effectively.

## Understanding Interactions in Engage

To have a deep insight into of how interactions are tracked in Engage, let's cover a small story. 

In a CRM system, like Engage, various marketing tools are used to capture a potential customer's (donor) attention that can be *Google Analytics (Google Ads, Organic Search), newsletters, emails or phone*. This customer may come into contact with your system and make conversions for example donate, create a sponsorship or a pledge etc. 

Let's say, a donor donates a sum of money on a charity organization's website page. This means that they made a conversion of a certain sum of donation. But, here a question arises; where did this conversion come from? Which marketing channel contributed to this conversion? 

In Engage, this conversion is stored in the account as interactions or touchpoints. Each interaction has:

1. **Name:** The name of the interaction that occurred.
2. **Lifetime:** The time duration of the interaction in which it stays active.
3. **Timestamp:** The time and date at which the interaction took place.
4. **Status:** The current condition of the interaction i.e. *Active* or *Inactive*. 

For example, the donor donated *50 pounds* at *11.02 on 5/7/23*. If we look through Google Analytics then some interactions might be:

1. At: [ **11:00 05/07/23** ], touchpoint: [ **name: Google Ad Click, lifetime: 3 days** ], expires at: **11:00 8/7/23**.
2. At: [ **11:01 05/07/23** ], touchpoint: [ **name: Organic search Click, lifetime: 5 days** ], expires at: **11:01 10/7/23**.
3. At: [ **11:10 05/07/23** ], touchpoint: [ **name: Newsletter Sign Up, lifetime: 1 days** ], expires at: **11:10 6/7/23**.

Therefore, the system looks through all the interactions that, occurred at "11.02", are still "active" and did not expire, and returns one or more of them. This eventually allows the organization to track which marketing channel contributed to the sales effort for a balanced marketing strategy. 

### Adding an Interaction

:::note
Touchpoints in Engage are added and managed by the system administrator.
:::

To add an interaction in Engage, follow 'step number 8' in the Create an Account Documentation or go to the accounts profile page and add an interaction in the Quick Insights section via **+ Add Interaction**. 

## Attribution Models

Attribution models in marketing refer to the methods used to allocate credit to various marketing touchpoints or channels for driving conversions or sales. This helps marketers understand the impact and effectiveness of each marketing touchpoint in the customer journey. There are several types of attribution models like **Last-Click Attribution, First-Click Attribution** etc. 

Engage follows the **Linear Attribution Model** that assigns equal credit to each marketing touchpoint throughout the customer journey. It assumes that all touchpoints are equally important in contributing to the conversion.

For the above example, the attributions dedicated to a certain touchpoint could be:

- **Department** 
    - Technology: 50 pounds

- **Online Channels** 
    - Paid Ads: 25 pounds 
    - Google Search: 25 pounds

- **Platform**
    - Google Ads: 50 pounds