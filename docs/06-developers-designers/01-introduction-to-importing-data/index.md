---
title: Introduction to Importing Data 
sidebar_position: 1
---

Importing data from different sources is a vital function for any charity CRM. In particular for an organizations fundraising, the ability to import donations and associated information from various sources requires an intelligent import function and allows to efficiently manage donor relationships, track contributions, and optimize fundraising efforts.  

Engage has been designed to ingest arbitrary data through various mediums i.e. *JSON webhooks* and *data files*, to map these arbitrarily to columns. 

## Webhooks

Webhooks are essentially automated messages which allow you to send real-time data from one application to another whenever a given event occurs. For example, a website is collecting donations and pushing information to an organizations CRM.

### Use Case

Let's look at an example of a *webhook use case* and how it would work in Engage. 

A webhook URL is provided by the receiving application (Engage), and acts as a *'phone number'* that the other application (the website) can call when an event happens. Then, data about the event (e.g. a new donation, orphan sponsorship, etc.) is sent to the webhook URL in either *JSON or XML format*. This is then collected by Engage; validated, and imported into the system in a structured format to be used by the organization for reporting, income reconciliation, and other functions.
