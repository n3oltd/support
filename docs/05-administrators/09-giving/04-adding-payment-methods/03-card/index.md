---
title: Card
sidebar_position: 3
---

Card payments are cashless payment methods that allow payments with debit or credit cards online. To add card as a payment method, click **Add payment method** and select **Card**. Choose the **country**, that is set to *United Kingdom* as default, the **payment provider** from the dropdown e.g. Bambora, Opayo, Stripe, etc., and click **OK**. 

![Card Payment method gif](./card.gif)

:::info
Each payment provider has a different set of parameters to be added.
:::

## Bambora

If you select Bambora, then add information for the following fields.

| Field | Description |
| ----- | ----------- |
| **Merchant ID** | ID number of the account that has been authorized for payments. |
| **Payments Passcode** | Password for the payment gateway access. |
| **Profiles Passcode** | Payment payers profile password. |
| **Reports Passcode** | Password for the merchants report. |
| **Receipt book number** | Book number as *hidden*, *optional* or *required*. |
| **Received by** | Name of receiver as *hidden*, *optional* or *required*. |
| **Minimum amount** | Minimum amount to be paid via the payment gateway i.e. *pound 1*. |
| **Monthly collection restriction** | Depending on your provider, you may configure which days of the month regular payments can be taken. |
| **Weekly collection restriction** | Depending on your provider, you may configure which days of the week regular payments can be taken. |
| **Accessible to/restrict roles** | Users that can access the payment gateway i.e. *Admin* or *Finance manager*. |
| **Allowed currencies** | The currency used in the payment gateway e.g. *GBP* or *USD*. If the client is using any other currency other default, then onboarding consultant must speak to the developers to make sure the relevant currency is considered.  |
| **Custom Fields** | Any additional field for the payment provider as *hidden*, *optional* or *required*.  |

## Card Terminal

If you select Card Terminal, then add information for the following fields.

| Field | Description |
| ----- | ----------- |
| **Name** | Name of the payment gateway i.e. *Card Terminal*. |
| **Card Brand** | Brand of the card as *hidden*, *optional* or *required*. |
| **Last 4 digits** | Last 4 digits as *hidden*, *optional* or *required*. |
| **Card Expiry** | Card expiry as *hidden*, *optional* or *required*. |
| **Authorisation Code** | Authorization code as *hidden*, *optional* or *required*. | 
| **Receipt book number** | Book number as *hidden*, *optional* or *required*. |
| **Received by** | Name of receiver as *hidden*, *optional* or *required*. |
| **Minimum amount** | Minimum amount to be paid via the payment gateway i.e. *pound 1*. |
| **Accessible to/restrict roles** | Users that can access the payment gateway i.e. *Admin* or *Finance manager*. |
| **Allowed currencies** | The currency used in the payment gateway e.g. *GBP* or *USD*. If the client is using any other currency other default, then onboarding consultant must speak to the developers to make sure the relevant currency is considered.  |
| **Custom Fields** | Any additional field for the payment provider as *hidden*, *optional* or *required*.  |

## Opayo

If you select Opayo, then add information for the following fields.

| Field | Description |
| ----- | ----------- |
| **Name** | Name of the payment gateway i.e. *Opayo*. | 
| **Environment** | Type of environment used. | 
| **Integration key** | Relevant integration key of the payment provider developer section. |
| **Integration password** | Relevant integration password of the payment provider developer section. |
| **Receipt book number** | Book number as *hidden*, *optional* or *required*. |
| **Received by** | Name of receiver as *hidden*, *optional* or *required*. |
| **Minimum amount** | Minimum amount to be paid via the payment provider i.e. *pound 1*. |
| **Monthly Collections Restriction** | Any dedicated payment days to receive the payment monthly or not. |
| **Weekly Collections Restriction** | Any dedicated payment days to receive the payment weekly or not. |
| **Accessible to/restrict roles** | Users that can access the payment provider i.e. *Admin* or *Finance manager*. |
| **Allowed currencies** | The currency used in the payment provider e.g. *GBP* or *USD*.  |
| **Custom Fields** | Any additional field for the payment provider as *hidden*, *optional* or *required*.  |

## Square Terminal

If you select Square Terminal, then add information for the following fields.

| Field | Description |
| ----- | ----------- |
| **Name** | Name of the payment gateway i.e. *Square Terminal*. |
| **Card Brand** | Brand of the card as *hidden*, *optional* or *required*. |
| **Last Digits** | Last 4 digits as *hidden*, *optional* or *required*. |
| **Invoice Number** | Invoice number as *hidden*, *optional* or *required*. |
| **Transaction ID** | Transaction ID as *hidden*, *optional* or *required*. |
| **Payment ID** | Payment ID as *hidden*, *optional* or *required*. |
| **Details URL** | Details URL as *hidden*, *optional* or *required*. |
| **Deposit ID** | Deposit ID as *hidden*, *optional* or *required*. |
| **Receipt book number** | Book number as *hidden*, *optional* or *required*. |
| **Received by** | Name of receiver as *hidden*, *optional* or *required*. |
| **Minimum amount** | Minimum amount to be paid via the payment gateway i.e. *pound 1*. |
| **Accessible to/restrict roles** | Users that can access the payment gateway i.e. *Admin* or *Finance manager*. |
| **Allowed currencies** | The currency used in the payment gateway e.g. *GBP* or *USD*. If the client is using any other currency other default, then onboarding consultant must speak to the developers to make sure the relevant currency is considered.  |
| **Custom Fields** | Any additional field for the payment provider as *hidden*, *optional* or *required*.  |

## Stripe

If you select Stripe, then add information for the following fields.

| Field | Description |
| ----- | ----------- |
| **Name** | Name of the payment provider i.e. *Stripe*. | 
| **Environment** | Type of environment used. | 
| **Client key** | Relevant client key of the payment provider developer section. |
| **Secret key** | Relevant secret key (password) of the payment provider developer section. |
| **Receipt book number** | Book number as *hidden*, *optional* or *required*. |
| **Received by** | Name of receiver as *hidden*, *optional* or *required*. |
| **Minimum amount** | Minimum amount to be paid via the payment provider i.e. *pound 1*. |
| **Monthly Collections Restriction** | Any dedicated payment days to receive the payment monthly or not. |
| **Weekly Collections Restriction** | Any dedicated payment days to receive the payment weekly or not. |
| **Accessible to/restrict roles** | Users that can access the payment provider i.e. *Admin* or *Finance manager*. |
| **Allowed currencies** | The currency used in the payment provider e.g. *GBP* or *USD*.  |
| **Custom Fields** | Any additional field for the payment provider as *hidden*, *optional* or *required*.  |

## Worldline

If you select Worldline, then add information for the following fields.

| Field | Description |
| ----- | ----------- |
| **Name** | Name of the payment provider i.e. *Worldline*. | 
| **Environment** | Type of environment used. | 
| **Platform** | Type of platform to be used. |
| **Merchant ID** | ID number of the account that has been authorized for payments. |
| **API Key** | Relevant API key to request payments from the system to the platform. |
| **API Secret Key** | Relevant API secret key (password) to request payments from the system to the platform. |
| **Webhook Secret** |  |
| **Receipt book number** | Book number as *hidden*, *optional* or *required*. |
| **Received by** | Name of receiver as *hidden*, *optional* or *required*. |
| **Minimum amount** | Minimum amount to be paid via the payment provider i.e. *pound 1*. |
| **Monthly Collections Restriction** | Any dedicated payment days to receive the payment monthly or not. |
| **Weekly Collections Restriction** | Any dedicated payment days to receive the payment weekly or not. |
| **Accessible to/restrict roles** | Users that can access the payment provider i.e. *Admin* or *Finance manager*. |
| **Allowed currencies** | The currency used in the payment provider e.g. *GBP* or *USD*.  |
| **Custom Fields** | Any additional field for the payment provider as *hidden*, *optional* or *required*.  |