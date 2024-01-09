---
title: Introduction to Website Data 
sidebar_position: 1
---

Importing data from different sources is a vital function for any charity CRM. In particular, for an organization's fundraising, the ability to import donations and associated information from various sources requires an intelligent import function and allows one to efficiently manage donor relationships, track contributions, and optimize fundraising efforts.  

Engage has been designed to ingest arbitrary data through various mediums i.e. *JSON webhooks* and *data files*, to map these arbitrarily to columns. 

## Webhooks in Engage

Webhooks are essentially automated messages which allow you to send real-time data from one application to another whenever a given event occurs. For example, a website is collecting donations and pushing information to an organizations CRM.

### Use Case

Let's look at an example of a *webhook use case* and how it would work in Engage. 

A *webhook URL* is provided by the receiving application (Engage), and acts as a *'phone number'* that the other application (the website) can call when an event happens. Then, data about the event (e.g. a new donation, orphan sponsorship, etc.) is sent to the webhook URL in either *JSON or XML format*. This is then collected by Engage; validated, and imported into the system in a structured format to be used by the organization for reporting, income reconciliation, and other functions.

### Webhook Data Integration

:::note
Engage webhook endpoint will be setup and communicated to you by `N3O's system administrator`. 
:::

For any single or regular donations processed via a website, you will need to post data to the **Engage webhook endpoint**. During the webhook's data integration, there are two main types of information required; **mandatory** and **non-mandatory**. 

Mandatory information includes most of what is already present in the webhook like:

- Account name, address details
- Organization details
- Contact preferences
- Funds, donation items, etc.

Non-mandatory information includes mostly about:

- **Sponsorships:** Sponsoring of individual beneficiaries by a donor.
- **Feedbacks:** Special projects that require feedback being given to the donor after its completion.      

This information is part of the webhook's additional functionality and is dependant upon the functionality used by the organization. If your organization is using this information as part of the Engage CRM, then you will need to provide it in the webhook data. For e.g. if you're adding sponsorships in the *allocation* part of the webhook, then add its *duration*, *begin on date*, *scheme name* etc.

:::tip
If you need more assistance on understanding the webhook additional functionality or how to integrate them, contact us at `N3O`.
:::   

### Webhook Format

The *json webhook formats* given for single and regular donations in the next sextions show how the data is expected to be sent in the webhook.

**If you are using sponsorships as an additional functionality, then:**

The webhook format examples explained for single and regular donations, show different types of sponsorship schemes including:

1. Orphan sponsorships
2. Hifz sponsorships
3. Family sponsorships

Some organizations may operate with only one scheme, however, others might have multiple schemes, hence the webhook's being sent need to provide separate data for each scheme type.

**If you are using feedbacks as an additional functionality, then:**

The webhook format examples explained for single and regular donations, show different types of feedback schemes e.g. *water wells* and *build a classroom*. This is refered to as the *scheme name* in the webhook data. These schemes must be setup in the Engage CRM prior to sending from the website. **Please speak to N3O to clarify which feedback schemes are eligible and non-eligible**.

:::tip
You need to review the notes and webhook data for every donation processed before attempting to send over test webhooks.
:::