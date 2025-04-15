---
title: Auto Merge Duplicate Accounts 
sidebar_position: 9
---

Duplicate donor records occur when the same individual or organization appears more than once in a charity’s CRM system, often with slightly different information. Hence, with multiple people managing the donor information in the system, these duplicate records can lead to poor donor experience (donors may receive duplicate emails or incorrect acknowledgments) and inefficiency.

## How Engage Tackles the Duplicate Accounts Problem?

Engage solves the issue of duplicate records by intelligently merging matching donor profiles in the background. It keeps your database clean and current without requiring manual effort. With customizable rules to determine what counts as a duplicate, this tool simplifies your data maintenance, so you can concentrate more on donor engagement.

Hence, some major features that Engage provides are:

**1.** **Scanning** and **identifying** the database for duplicate records based on different criteria such as matching **names**, **addresses**, **email addresses** or **phone numbers**; every **30 days**.

**2.** Then **automatically** merging these duplicate records without interrupting your existing workflow.

**3.** Updated **list** that includes all identified duplicates and refreshes every few hours to give information for accounts that are being merged.

### Create a List to View Duplicates

According to point number 3, you can create your own list to identify the possible duplicates in Engage.

:::tip
To view detailed information on lists, visit our <K2Link route="docs/engage/data/lists/" text="Lists Documentation" isInternal/> in the Engage section.
:::

**1.** Navigate to **Lists** under **Data** in the main menu. Create an **accounts** type list and name it.

**2.** Under **Fields** section, click **Add Field** to add multiple different fields to the list. In this case, following fields are important to view the possible duplicate records. You can choose to add filters to the list fields if you prefer.

- **Reference:** Unique reference of the account.
- **Status:** Status of the account as active or closed.
- **Has Suspected Duplicates:** Indicates if the account has suspected duplicates or not.
- **Is Suspected Duplicate:** Indicates if the account itself is a suspected duplicate of another account or not.
- **Suspected Duplicates:** A list of suspected duplicates and the manner in which they matched.

**3.** Remember to set the list the list to **auto-refresh** to make sure duplicate accounts emerge every few hours, if any. Click the **three dots (...)** and select **Enable Auto Refresh**.

![list to show updated accounts](./list-to-show-updated-accounts.png)



