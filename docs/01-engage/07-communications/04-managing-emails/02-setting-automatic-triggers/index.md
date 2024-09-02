---
title: Setting Automated Triggers to Dispatch Documents (Emails, PDF, SMS)
sidebar_position: 2
--- 

Automated triggers refer to predefined actions that automatically initiate specific communication responses or workflows. These triggers prompt the communication system to send out pre-programmed emails, notifications, or posts without requiring manual intervention. 

In Engage, any type of **email**, **post/PDF** or **SMS** correspondence with the donors can be done in two different ways:

1. Action and Trigger Mechanism
2. <K2Link route="docs/engage/communications/outboxes/" text="Outboxes" isInternal/>

In this article, let us have a look at the action and trigger mechanism in detail.

## Engage's Action and Trigger Mechanism

Engage follows the automated rule which says, **"when x happens, send email or document y to the account"** and is divided into 3 parts.

1. **Trigger:** A specific event which occurs for example an account is updated, or a donation is processed etc.

2. **Action:** An action that is done in relation to donors, sponsorships, donations, payments, or any other kind of data that Engage collects, e.g. a donation receipt is produced and dispatched, a contact preference email is dispatched, or a new account creation notification.

3. **Template:** A blueprint or draft for the PDF documents or emails which have been set up in the system.

When combining the above definitions, we can say that whenever an event **"trigger"** occurs, the system generates a **"response action"** and that response is communicated via a particular document **"template"**. For example, when a donation is processed, Engage collects donation related data and a donation receipt is sent to the donor via an email correspondence.

Therefore, in accordance to the example:

- **Trigger** is donation processed
- **Action** is a donation receipt generated
- **Template** is the email design

:::tip
For setting up triggers and their actions, ask your system administrator to do that for you. If you want to read about the process, visit the <K2Link route="docs/administrators/communication/actions/" text="Actions Administration documentation" isInternal/>.
:::

In Engage, multiple documents including emails, PDF, receipts can be auto-generated via the action and trigger mechanism. A specific action can be created for a certain trigger and these documents can then be sent in bulk via <K2Link route="docs/engage/communications/printing/" text="printing batches" isInternal/> or individually via <K2Link route="docs/engage/communications/outboxes/" text="outboxes" isInternal/> for timely and proactive communication.


