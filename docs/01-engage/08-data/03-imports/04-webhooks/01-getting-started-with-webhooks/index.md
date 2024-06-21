---
title: Getting Started with Webhooks
sidebar_position: 1
---

A webhook's function is to notify anytime a donation is made, so the CRM can run any process configured once such an event is triggered. The data is then sent over the web from the website where the event originally occurred, to the receiving application (CRM) that handles the data. This exchange of data happens over the web through a “webhook URL” that is provided by the receiving application, and acts as a *phone number* that the other application can call whenever an event happens.

## Why use Webhooks?

Webhooks offer many benefits including:

- **Real-Time Updates:** Enables real-time communication between systems. When an event occurs in the source system (e.g. CRM), the webhook immediately triggers actions in the destination system, ensuring that information is up-to-date.

- **Automation:** Facilitates the automation of processes by triggering predefined actions based on specific events. This reduces manual intervention and streamlines workflows.

- **Seamless Integrations:** Easy to integrate different systems and applications. They provide a standardized way for systems to communicate and share data, fostering interoperability. 

- **Flexibility:** Provides flexibility in terms of data format and payload. They can deliver data in various formats (e.g. JSON, XML or CSV) and allow customization based on the specific needs of the receiving system.

## How to Set up and Test Webhooks in Engage

Engage provides webhooks in order to send data from one application to another. Webhooks generally have a three-step process:

1. Get the webhook URL from the application you want to send data to.
2. Use that URL in the webhook section of the application you want to receive data from.
3. Choose the type of events you want the application to notify you about.

Engage also follows the same general webhook process. To try out a webhook yourself, you must first create a webhook and then test the data coming from the sending application within Engage. To read more on the webhook process, go to the <K2Link route="docs/category/developers--designers" text="Developers and Designers documentation" isInternal/>.