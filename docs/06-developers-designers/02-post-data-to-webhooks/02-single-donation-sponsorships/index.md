---
title: Single Donations - Sponsorships
sidebar_position: 2
---

For single donations entered via the website, you need to post data to **Engage webhook endpoint**. Below information shows how the data is expected for 'sponsorships'.

:::note
Engage webhook endpoint will be setup and communicated to you by the system administrator. 
:::

A sponsorship beneficary type is known as a scheme for e.g. orphans, widows, families etc. Each of these are considered separate schemes. In most cases, organisations may operate only one scheme e.g. orphan sponsorships, however, others will have multiple schemes and hence the webhook below needs to provide separate data for each scheme type.  

Sponsorship information can be viewed across the allocations and sponsorships. Therefore, the role of the allocation array, is to create a link between the donation and sponsorships. The sponsorship per scheme array contains additional information including the following which is required to create the sponsorship in Engage. 

1. Duration
2. Begin on date
3. Beneficiary reference 

## Webhook Format Example

The *json* webhook example explained in this section shows a table explaining all webhook data parameters defined below and two types of sponsorship schemes in one webhook:

1. Orphan Sponsorships
2. Family sponsorships

:::note
You need to review the notes and webhook data below before attempting to send over test webhooks.
:::

```json
{
  "id": "2509",

  "timestamp": "2011-10-05T14:48:00.000Z",

  "ip": "82.29.232.77",

  "reference": "2509",

  "currency": "GBP",

  "amount": "25",

  "isOrganization": false,

  "individual": {

        "title": "Mr",

        "first": "Jessie",

        "last": "Iqbal"

  },

  "organization": {

        "name": "N3O Ltd",

        "type": "Business",

        "contact": {

            "title": "Mr",

            "first": "Jessie",

            "last": "Iqbal",
        }
  },

    "address": {

        "line1": "101 Alexandra Road South, Whalley Range",

        "line2": "Whalley Range",

        "line3": "Optional",

        "line4": "Optional",

        "townCity": "Manchester",

        "countyState": "Greater Manchester",

        "postcode": "M16 8ST",

        "countryCode": "GB"
  },

  "email": "donor@gmail.com",

  "phone": "+447714243567",

  "giftAid": true,

  "contactPreferences": {

        "email": {

            "administration": true,

            "fundraising": false
        },

        "sms": {

            "administration": false,

            "fundraising": false
        },

        "telephone": {

            "administration": true,

            "fundraising": false
        },

        "post": {

            "administration": true,

            "fundraising": false
        }
    },

    "allocation": [
    {
        "amount": "240",

        "currency": "GBP",

        "type": "sponsorship",

        "fundDimensions":  {

            "location": "Where needed",
            "theme": "Child welfare",
            "stipulation": "Sadaqah"     

        },
        "fund": {

            "donationitem": "",

            "summary": ""  
        },

        "sponsorship": {

            "reference": "2509-1",

            "scheme": "Orphan"

        }
    },

    {

        "amount": "360",    

        "type": "sponsorship",

        "currency": "GBP",

        "fundDimensions":  {

            "location": "Pakistan",
            "theme": "Child welfare",
            "stipulation": "Zakah"     
        },
        "fund": {

            "donationitem": "",

            "summary": ""  
        },

        "sponsorship": {

            "reference": "2509-2",

            "scheme": "Family"
        }
    }, 

    {
        "currency": "GBP",
        
        "amount": "270.0",
        
        "notes": "",
        
        "type": "Feedback",
        
        "feedback": {
            
            "reference": "2509-3",
            
            "scheme": "Tube Well",
            
            "funddimensions": {
            
                "location": "Where Most Needed",
                "theme": "WASH",
                "stipulation": "Sadaqah"
            },
            
            "currency": "GBP",
            
            "price": "270.0",
            
            "customfields":{ 
                "plaque": "Ahmad Ali " 
            }
        },
        
        "funddimensions": {
            
            "location": "Where Most Needed",
            "theme": "WASH",
            "stipulation": "Sadaqah"
        }
    }
    ],

    "OrphanSponsorships": [
    {
        "reference": "2509-1",

        "beganOn": "27/07/2023",

        "beneficiaryReference": "f0rtnt7nbhr",

        "scheme": "Orphan", [or whatever their scheme is called in Engage],
            
        "monthlyAmount": "20", [monthly value], [can be omitted and set as default on form if fixed price]

        "currency": "GBP", 

        "fundDimensions": {

            "location": "Where needed",
            "theme": "Child Welfare",
            "stipulation": "Sadaqah"   
        },
            
        "duration": "_12" [can be omitted and set as default on form is website only offers 12 months option]
    }
    ],

    "FamilySponsorships": [ 
    {
        "reference": "2509-2",

        "beganOn": "27/07/2023",

        "beneficiaryReference": "f0rtnt7nbhr",

        "scheme": "Family", [the name of scheme in Engage), 

        "currency": "GBP", 

        "fundDimensions": {

            "location": "Pakistan",
            "theme": "Education",
            "stipulation": "Sadaqah"   
        },

        "monthlyAmount": "30", [monthly value and can be omitted or set as default on form if it is a fixed price]

        "duration": "_12" [can be omitted and set as default on form if website only offers 12 months option]
    }
    ],

    "Sponsorships" : [
    {
        "reference": "2509-1",

        "beganOn": "27/07/2023",

        "beneficiaryReference": "f0rtnt7nbhr",

        "duration": "12",

        "currency": "GBP",

        "monthlyAmount": "70",

        "fundDimensions": {

                "location": "Where needed",
                "theme": "Child Welfare",
                "stipulation": "Sadaqah" 
            },
        "scheme" : "Orphan"
    },

    {
        "reference": "2509-2",

        "beganOn": "27/07/2023",

        "beneficiaryReference": "f0rtnt7nbhr",

        "duration": "12",

        "currency": "GBP",

        "monthlyAmount": "10",

        "fundDimensions": {

            "location": "Pakistan",
            "theme": "Education",
            "stipulation": "Sadaqah"   

        },

        "scheme" : "Family"
    }
    ],

    "tubewellFeedbacks" : [
        {
            "reference": "2509-3",
            
            "scheme": "Tube Well",
            
            "funddimensions": {
                "location": "Where Most Needed",
                "theme": "WASH",
                "stipulation": "Sadaqah"
               },
            
            "currency": "USD",
            
            "price": "270.0",
            
            "customfields":
                { 
                    "plaque": "Ahmad Ali " 
                }
        }
    ],

    "feedbacks": [
        {
            "reference": "2509-3",
            
            "scheme": "Tube Well",
            
            "funddimensions": {
            
                "location": "Where Most Needed",
                "theme": "WASH",
                "stipulation": "Sadaqah"
            },
        
            "currency": "USD",
            
            "price": "270.0",
            
            "customfields":
            { 
                "plaque": "Ahmad Ali"
            }
        }
    ],

    "payment": {

        "paymentMethodName": "Stripe", [This value should be a string that matches the name of the payment method in your engage system, e.g. “Stripe” or “PayPal”]

        "amount": "600",

        "stripe": {
            
            "stripeChargeId" : "ch_343454565676879"
        } 
        
        [ Depending on the payment method in use, this will be a property with payments specific fields e.g:
            "stripe": {
                "paymentIntentId": "pi_3JZ0mQHnrctdHvuq1Kz5sPOo"
            }
        ]
    },

    "interactions": [
        {
            "touchpoint": "donated-website",         
            "timestamp": "2023-08-18T03:43:34.36Z"
        }
    ]
}
```

| Parameters (Fields) | Description |
| ------------------- | ----------- |
| **id** | A unique string which identifies the transaction on the website. |
| **type** | Either *single* or *regular* depending on whether the donation is recurring or one-off, in this case, single. |
| **reference** | Any reference the donor was given in an email receipt from the website. |
| **isOrganization** | *True* or *false* depending on whether you allow donations from organisations. If omitted, will be assumed false. |
| **individual/organization** | Complete either one of these sections, **not both**, depending on whether the donor is an individual or an organisation. Usually this will be individual. |
| **organization.type** | Should be one of the organisation types you recognise in Engage. |
| **phone** | Include the country code at the beginning. This should be calculated based on the address if it is not required by the donor to enter their country code. |
| **giftAid** | Can be true or false if the donor explicitly states their Gift Aid status. Should be null if the information is not collected or provided. |
| **contactPreferences** | The categories *other* and *fundraising* are specific to each charity. In general, charities will have a category which covers *marketing* (in this case fundraising) and *administration*. You have to ensure that exact categories are agreed with the charity and added here. Also, ensure that explicit consent is being captured on the website before setting any category that covers marketing activity to *true*. |
| **allocation** | <ul><li>Allocations is a concept in Engage that represents the area where donation money is allocated to be spent and is a combination of *donation item* plus *fund dimensions*. Usually, the title of the web page or the item selected by the donor on the website will determine what is entered for an allocation. </li><li> You can just send the *Item property*, and Engage uses *Transform* to transform the item sent here into the correct donation item and fund dimensions. </li><li>**Note:** This is an array, and it can contain multiple allocations, but generally there will only be 1 allocation here. </li></ul>  |
| **allocation[*].type** | This can be fund or sponsorship. |
| **$.allocation[*].fundDimensions** | This is only necessary if your website allows the donor to select or assign different locations or stipulations (e.g. zakah/sadaqah) in addition to the normal donation item. Your system administrator can confirm if this is necessary. |
| **payment** | Populated only on single donations. |
| **payment.paymentMethodName** | This field should be the name of one of the payment methods the charity has set up in Engage which is configured for single donations. For example, if the charity has 2 payment methods called *Card Payments* and *PayPal Payments* then the value should be the name of the payment method. Depending on the payment method selected, you should complete the relevant section depending on whether the payment type is *Stripe, Opayo, Cash, Cheque, SmartDebit, PayPal or LaunchGood*. |

## Supported Payment Methods

Below is a list of supported payment methods and their corresponding webhook structure.

### Stripe

For a Stripe payment method you can use either **PaymentIntentId** or **ChargeId**, but you must supply one of these in the webhook. *CustomerID* is not required, but you can send it if you have it.

```json
"Stripe": {

    "CustomerId": "cs_1JXlDi2eZvKYlo2CI9M6sFCx",

    "ChargeId": "ch_3MbsKOIhCuwGfAB01hwiYwYZ",

    "PaymentIntentId": "pi_3JZ0mQHnrctdHvuq1Kz5sPOo"
}
```

### PayPal

For a PayPal payment method, Engage requires the **Transaction reference** only. 

```json
"PayPal": {

    "TransactionReference:": "abc123"
}
```