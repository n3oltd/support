---
title: Scheduled Giving (Basic) 
sidebar_position: 6
--- 

Scheduled Giving is a donation method where a donor sets up automatic, recurring contributions to a charity or fundraising campaign on a fixed schedule, such as weekly, monthly, or annually.

For any scheduled giving donations entered via the website, you will need to post data to the **Engage webhook endpoint**. This webhook is a standard one without any additional information including sponsorships and feedbacks and can be used for performing a basic donations integration.

## Webhook Format Example

The *json webhook* example explained below shows how the data is expected along with a table explaining all webhook data parameters.

```json
{
    "id":"172765557689",

    "type":"Scheduled",   [Type of donation]
    
    "timestamp":"2025-05-09T10:00:00.587Z",
    
    "ip":"82.29.232.77",
    
    "reference":"",
    
    "currency":"GBP",
    
    "amount":"100.00",  [Amount donated]
    
    "isorganization":false,
    
    "accounttype":"Individual",
    
    "individual": {
        "title":"",
        "first":"Arona",
        "last":"Danielton"
        },
    
    "organization": {   [Leave organization empty if the account type is individual]
        "name":"",
        "type":"",
        "contact":{
            "title":"",
            "first":"",
            "last":""
        }
    },
    
    "address": {
        "line1":"18 Overton Circle",
        "line2":"",
        "line3":"",
        "line4":"",
        "towncity":"Cambridge ",
        "countystate":"Cambridgeshire",
        "postcode":"CB6 4BT",
        "countrycode":"GB"
    },
    
    "email":"AronaDanielton@armyspy.com",
    
    "phone":"07986421477",
    
    "giftaid":true,
    
    "contactpreferences": {
        "email": {
            "administration":false,
            "fundraising":true
        },
        "sms": {
            "administration":false,
            "fundraising":false
        },
        "telephone": {
            "administration":false,
            "fundraising":true
        },
        "post": {
            "administration":false,
            "fundraising":false
        }
    },
    
    "scheduledgiving": {
 
        "amount":"100.00",  [Total donated amount] 
        
        "currency":"GBP", [Currency in which the amount is donated]
        
        "schedule":"10 Days of Dhul-Hijjah", [Name of the scheduled giving "campaign"]
        
        "presetname":"Equal", ["Split" process in which the donations would be collected (can be even, odd, or custom splits)]
        
        "startdate":"Lunar", [Start date on which the donations would start according to selected calendar]
        
        "timezone":"Europe/London" [Selected timezone for donations]
    },

    "customsplits": [{ [This custom split will be defined with "zero amount" if a "presetname" is already "sent" in the webhook]
                       [If any day is missed during the scheduled giving, then the amount should be sent as "zero"]
            "amount":0,
            "daynumber":1
        },
        {
            "amount":0,
            "daynumber":2
        },
        {
            "amount":0,
            "daynumber":3
        },
        {
            "amount":0,
            "daynumber":4
        },
        {
            "amount":0,
            "daynumber":5
        }
    ],  
    
    "customSplits": [{ [This custom split will be defined with your allocated amount and day number if "presetname" 
                        is sent as "empty string" in the webhook and "total custom split amount" should be equal 
                        to "total scheduled giving amount"]
            "amount": 8,
            "dayNumber": 1
        },
        {
            "amount": 10,
            "dayNumber": 2
        },
        {
            "amount": 15,
            "dayNumber": 3
        },
        {
            "amount": 5,
            "dayNumber": 4
        },
        {
            "amount": 5,
            "dayNumber": 5
        },
        {
            "amount": 8,
            "dayNumber": 6
        },
        {
            "amount": 10,
            "dayNumber": 7
        },
        {
            "amount": 15,
            "dayNumber": 8
        },
        {
            "amount": 2,
            "dayNumber": 9
        },
        {
            "amount": 2,
            "dayNumber": 10
        }
    ],
    
    "credential": {
        
        "paymentmethodname":"stripe",
        
        "stripe": {
            "setupintentid":"seti_1QSqEGGXSjuJfoEnWWClNNCX"
        }
    },
    
    "allocation": [
        {
            "type":"fund",
            
            "currency":"GBP",
            
            "amount":"100.00",
            
            "linkedtopledge":true,
            
            "funddimensions": {
                "theme":"Emergency",
                "location":"Where Most Needed",
                "stipulation":"Sadaqah"
            },
            
            "fund": 
            {
                "item":"Emergency Fund"
            }
        }
    ]
}
```

| Parameters (Fields) | Description |
| ------------------- | ----------- |
| **id** | A unique string which identifies the transaction on the website. |
| **type** | Depends on the donation, in this case, **scheduled giving**. |
| **reference** | Any reference the donor was given in an email receipt from the website. |
| **isOrganization** | *True* or *false* depending on whether you allow donations from organizations. If omitted, will be assumed false. |
| **individual/organization** | Complete either one of these sections, **not both**, depending on whether the donor is an individual or an organization. Usually this will be individual. |
| **organization.type** | Should be one of the organization types you recognise in Engage. |
| **phone** | Include the country code at the beginning. This should be calculated based on the address if it is not required by the donor to enter their country code. |
| **giftAid** | Can be *true* or *false* if the donor explicitly states their gift aid status. Should be *null* if the information is not collected or provided. |
| **contactPreferences** | The categories *other* and *fundraising* are specific to each charity. In general, charities will have a category which covers *marketing* (in this case fundraising) and *administration*. You have to ensure that exact categories are agreed with the charity and added here. Also, ensure that explicit consent is being captured on the website before setting any category that covers marketing activity to *true*. |
| **allocation** | <ul><li> Allocations is a concept in Engage which represents the area where donation money is allocated to be spent and is a combination of *donation item* plus *fund dimensions*. Usually, the title of the web page or the item selected by the donor on the website will determine what is entered for an allocation. </li><li> 2. You can just send the *Item property*, and Engage uses *Transform* to transform the item sent here into the correct donation item and fund dimensions. </li><li> **Note:** This is an array, and it can contain multiple allocations, but generally there will only be one allocation here. </li></ul> |
| **allocation[*].type** | Can be fund or sponsorship, but in this case, **fund**. |
| **$.allocation[*].fundDimensions** | Only necessary if your website allows the donor to select or assign different locations or stipulations (e.g. zakah/sadaqah) in addition to the normal donation item. Your system administrator can confirm if this is necessary. |
| **credential.paymentmethodName** | Should be the name of one of the payment methods the charity has set up in Engage which is configured for scheduled donations. For example, in this case, **Stripe** is the payment method and its relevant section should be completed accordingly. |
| **scheduledGiving** | Specific for scheduled giving and consists of many elements to fill in. |
| **scheduledGiving.schedule** | Name of the campaign selected for scheduled giving. |
| **scheduledGiving.presetName** | "Split" process in which the donations would be collected (can be even, odd, or custom splits). |
| **scheduledGiving.startDate** | Start date of the donations according to the selected calendar. |
| **customSplits** | Custom splits are added only when **presetName** is sent as an **empty** string in the webhook or if the charity wants to split the scheduled giving amount according to their preference. It includes two main elements: *"amount"* and *"day number"*. |
| **customSplits.amount** | Amount that will be divided. If the **presetName** has been sent, then it will be **zero**. *If any day is missed during a scheduled giving, then that day's amount should be sent as zero and the total scheduled giving amount must be divided among the rest of the days.* |
| **customSplits.dayNumber** | Day number and is divided according to the campaigns selected days. |

## Supported Payment Method

Below is the supported payment method and its corresponding webhook structure.

### Stripe

For Stripe payment method, look at the example below of what should be sent in the webhook under *credentials*.

:::note 
- Wherever possible, use the *SetupIntentId* that provides extra security and the donor will have a better experience as they would receive limited communications. 
- If *SubscriptionID* is supplied, it will be cancelled and converted to a payment method where Engage takes monthly payments. 
:::

```json
"Stripe": {

        "SetupIntentId": "si_3JZ0mQHnrctdHvuq1Kz5sPOo", 
                        
                        OR

        "SubscriptionID": "sub_1JXlDi2eZvKYlo2CI9M6sFCx"
}
```