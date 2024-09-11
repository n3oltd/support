---
title: Introduction to Webhooks
sidebar_position: 1
---

Webhooks are one of the few ways applications can communicate with one another. It allows sending real-time data from one application to another whenever a given event occurs. For example, a website is collecting donations and sending data to an organizations CRM.

Explaining all this in detail, a webhook's function is to notify anytime a donation is made, so the CRM can run any process configured once such an event is triggered. The data is then sent over the web from the website where the event originally occurred, to the receiving application (CRM) that handles the data. This exchange of data happens over the web through a **“webhook URL”** that is provided by the receiving application, and acts as a **phone number** that the other application can call whenever an event happens.

## Why Use Webhooks?

Webhooks offer many benefits including:

- **Real-Time Updates:** Enables real-time communication between systems. When an event occurs in the source system (e.g. CRM), the webhook immediately triggers actions in the destination system, ensuring that information is up-to-date.

- **Automation:** Facilitates the automation of processes by triggering predefined actions based on specific events. This reduces manual intervention and streamlines workflows.

- **Seamless Integrations:** Easy to integrate different systems and applications. They provide a standardized way for systems to communicate and share data, fostering interoperability. 

- **Flexibility:** Provides flexibility in terms of data format and payload. They can deliver data in various formats (e.g. JSON, XML or CSV) and allow customization based on the specific needs of the receiving system.