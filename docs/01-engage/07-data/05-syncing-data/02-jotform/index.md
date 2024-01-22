---
title: Sync Donor Data within Engage using Jotforms
sidebar_position: 6
---

JotForm is an online form builder and data collection tool that allows individuals and organizations to create, design, and publish a wide variety of online forms and surveys. It can also integrate with CRM systems, like Engage, to streamline the data management system.

## How can Jotforms Update Donor Data?

Online forms created with JotForm enable the collection of updated customer data and this data can be automatically synced. Any donor wanting to update their data via jotform can at the same time sync that information within Engage using <K2Link route="docs/category/developers--designers/" text="webhooks" isInternal/>.

1. User designs a form through jotform and send the link of that form to the donor for any donor data update. This data can be related to any information on the donor's profile like *current tax status* or *contact preference* etc. Let's use the *updating of current tax status* as an example.

2. Donor fills out the form with information including their related unique Engage ID, first name, last name, email address and updates their current tax status.

:::info
You can also input only the first, last name and email address without the ID.
:::

3. This updated donor information is sent to Engage in the form of a webhook. To create and set up a new feed (webhook) in Engage, click on *Data*, *Imports* and choose the **Tax Status Queue**. Click the **three dots(...)** on the top right-hand side and go to **Queue info and history**.

:::note
You can also ask your system administrator to set up feeds (webhooks) for you.
:::

![Choose tax status queue gif](./choose-tax-status-queue.gif)

4. Provide the URL of the created webhook by copying and pasting the unique last part of the URL consisting of numbers and letters under the webhook settings in Jotform.

5. As soon as the donor submits the form, Engage receives a webhook via the URL, finds the account by its Engage ID or other information provided and updates the current tax status.