---
title: Regular Giving - Standard
sidebar_position: 3
---

Regular giving donations, also known as recurring donations or monthly giving, are a type of charitable contribution in which a donor commits to giving a fixed amount of money to an organization on a regular and ongoing basis. 

:::note
Engage webhook endpoint will be setup and communicated to you by the system administrator. 
:::

For any regular giving donations entered via the website, you will need to post data to **Engage webhook endpoint**. Following is a *json* webhook example along with a table containing defined parameters.   

## Webhook Format Example

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

            "last": "Iqbal"
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
        "type": "fund",

        "currency": "GBP",
    
        "amount": "5",
            
        "fund": {

            "item": "Wash fund"
        },      
        "fundDimensions": {

            "location": "Where needed",
            "theme": "WASH",
            "stipulation": "Sadaqah" 
        }
    },

    {

        "type": "fund",

        "amount": "20",   

        "currency": "GBP",
            
        "fund": {

            "item": "Food Parcel"
        },      

        "fundDimensions": {

            "location": "Where needed",
            "theme": "WASH",
            "stipulation": "Sadaqah" 
        }
    },
    {

        "type": "Sponsorship",

        "amount": "70",

        "currency": "GBP",

        "fundDimensions": {

            "location": "Yemen",
            "theme": "health",
            "stipulation": "sadaqah"
        },
        "sponsorship": {

            "reference": "2509-1",
            "scheme": "Orphan"
        }
    },
    {

        "type": "Sponsorship",           

        "amount": "10",

        "currency": "GBP",

        "fundDimensions": {

            "location": "Bangladesh",
            "theme": "health",
            "stipulation": "sadaqah"
        },
        "sponsorship": {

            "reference": "2509-2",
            "scheme": "Hifz"
        }
    },
    {
    
        "type": "Feedback",           
        
        "currency": "GBP",
                
        "amount": "270.0",
                    
        "notes": "",
                
        "feedback": 
        {
            "reference": "2509-3",
                    
            "scheme": "Tube Well",
                    
            "funddimensions": {

                "location": "Where Most Needed",
                "theme": "WASH",
                "stipulation": "Sadaqah"
            },
            "currency": "GBP",
                    
            "price": "270.0",
                    
            "customfields":
            { 
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
            
        "currency": "GBP",

        "monthlyAmount": "70",

        "fundDimensions": {

                "location": "Yemen",
                "theme": "health",
                "stipulation": "sadaqah"
        },

        "scheme" : "Orphan"
    }
    ],

    "HifzSponsorships": [
    {
        "reference": "2509-2",

        "beganOn": "27/07/2023",

        "beneficiaryReference": "f0rtnt7nbhr",

        "currency": "GBP",

        "monthlyAmount": "10",

        "fundDimensions": {

            "location": "Bangladesh",
            "theme": "health",
            "stipulation": "sadaqah"
        },

        "scheme" : "Hifz"
    }
    ],
    "sponsorships": [
    {
        "reference": "2509-1",

        "beganOn": "27/07/2023",

        "beneficiaryReference": "f0rtnt7nbhr",

        "currency": "GBP",

        "monthlyAmount": "70",

        "fundDimensions": {

            "location": "Yemen",
            "theme": "health",
            "stipulation": "sadaqah"
        },

        "scheme" : "Orphan"
    },
    {
        "reference": "2509-2",

        "beganOn": "27/07/2023",

        "beneficiaryReference": "f0rtnt7nbhr",

        "currency": "GBP",

        "monthlyAmount": "10",

        "fundDimensions": {

            "location": "Bangladesh",
            "theme": "health",
            "stipulation": "sadaqah"
        },

        "scheme" : "Hifz"
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
    "regularGiving": 
    {
        "frequency": "monthly",

        "collectionDay": 1
    },

    "credential": {

    "paymentMethodName": " ", [This value should be a string that matches the name of the payment method in your engage system, e.g. “Card” or “PayPal”. Depending on the payment method in use, this will be a property with payments specific fields, e.g:

        "stripe": {    
            "SetupIntentId": "si_3JZ0mQHnrctdHvuq1Kz5sPOo"
        }
    ]
    },
}

```

| Parameters (Fields) | Description |
| ------------------- | ----------- |
| **id** | A unique string which identifies the transaction on the website. |
| **type** | Either *single* or *regular* depending on whether the donation is recurring or one-off, in this case, regular. |
| **reference** | Any reference the donor was given in an email receipt from the website. |
| **isOrganization** | *True* or *false* depending on whether you allow donations from organizations. If omitted, will be assumed false. |
| **individual/organization** | Complete either one of these sections, **not both**, depending on whether the donor is an individual or an organization. Usually this will be individual. |
| **organization.type** | Should be one of the organization types you recognise in Engage. |
| **phone** | Include the country code at the beginning. This should be calculated based on the address if it is not required by the donor to enter their country code. |
| **giftAid** | Can be *true* or *false* if the donor explicitly states their gift aid status. Should be *null* if the information is not collected or provided. |
| **contactPreferences** | The categories *other* and *fundraising* are specific to each charity. In general, charities will have a category which covers *marketing* (in this case fundraising) and *administration*. You have to ensure that exact categories are agreed with the charity and added here. Also, ensure that explicit consent is being captured on the website before setting any category that covers marketing activity to *true*. |
| **allocation** | <ul><li> Allocations is a concept in Engage which represents the area where donation money is allocated to be spent and is a combination of *donation item* plus *fund dimensions*. Usually, the title of the web page or the item selected by the donor on the website will determine what is entered for an allocation. </li><li> 2. You can just send the *Item property*, and Engage uses *Transform* to transform the item sent here into the correct donation item and fund dimensions. </li><li> **Note:** This is an array, and it can contain multiple allocations, but generally there will only be one allocation here. </li></ul> |
| **allocation[*].type** | This can be fund or sponsorship. |
| **$.allocation[*].fundDimensions** | This is only necessary if your website allows the donor to select or assign different locations or stipulations (e.g. zakah/sadaqah) in addition to the normal donation item. Your system administrator can confirm if this is necessary. |
| **credential.paymentmethodName** | This should be the name of one of the payment methods the charity has set up in Engage which is configured for regular donations. For example, if the charity has 2 payment methods called *Card Payments* and *PayPal Payments* then the value should be the name of the payment method. Depending on the payment method selected, complete the relevant section depending on whether the payment method is Stripe, Opayo, Cash, Cheque, SmartDebit, PayPal, or LaunchGood. |
| **regularGiving** | This is specific for regular giving plans and consists of two main elements. |
| **regularGiving.Frequency** | This is either monthly, annually or quarterly with default as *monthly*. |
| **regularGiving.Collection day** | The day of the month of instruction e.g. 1, 9, 15 which should be one of the available collection dates which were configured in the payment method in Engage. |


## Supported Payment Methods

Below is a list of supported payment methods and their corresponding webhook structure.

### Stripe

For Stripe payment method, look at the example below of what should be sent in the webhook under *credentials*.

```json
"Stripe": {

        "SetupIntentId": "si_3JZ0mQHnrctdHvuq1Kz5sPOo", 
                        
                        OR

        "SubscriptionID": "sub_1JXlDi2eZvKYlo2CI9M6sFCx"
}
```

:::note 
- Wherever possible, use the *SetupIntentId* that provides extra security and the donor will have a better experience as they would receive limited communications. 
- If *SubscriptionID* is supplied, it will be cancelled and converted to a payment method where Engage takes monthly payments. 
:::

### GoCardless

For GoCardless, provide the *MandateId* and *CustomerId*. 

```json
"GoCardless": {

    "MandateId": "N3O Ltd",

    "CustomerId": "214214"
}
```

### SmartDebit

:::note
You will need to create a *BACS reference number* to be passed via the webhook. 
:::

```json
"SmartDebit": {

    "AccountName": "N3O Ltd",

    "SortCode": "111111",

    "AccountNumber": "00000007",

    "MandateReference": "BACS21791686441" [Unique within service user number]
}
```

SmartDebit guidance is specific for collecting donor information (e.g. account name, sort code) via your website and submitting the data to Engage via the webhook. Engage will then set up direct debit instructions directly with SmartDebit through their API.
