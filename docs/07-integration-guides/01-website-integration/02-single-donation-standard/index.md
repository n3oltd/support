---
title: Single Donations - Standard 
sidebar_position: 2
---

Single donations refer to one-time contributions made by any donor. Hence, for one-time donations processed via a website, you need to post data to the **Engage webhook endpoint**.   

## Webhook Format Example

The *json* webhook example explained below shows how the data is expected along with a table explaining all webhook data parameters.

```json
{
  "id": "2509",

  "type": "Single Donation",

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

      "amount": "840",

      "currency": "GBP",

      "fundDimensions": {

        "location": "Yemen",
        "theme": "health",
        "stipulation": "sadaqah"
      },

      "sponsorship": {
          
        "reference": "2509-1",

        "scheme": "Orphan"
      },
    },

    {

      "type": "Sponsorship",           

      "amount": "120",

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
          
          "customfields": { 

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

        "duration": "12",

        "currency": "GBP",

        "monthlyAmount": "70",

        "fundDimensions": {

            "location": "Yemen",
            "theme": "health",
            "stipulation": "sadaqah"
        },

        "scheme" : "Orphan"
    },
    ],

    "HifzSponsorships": [
    {
        "reference": "2509-2",

        "beganOn": "27/07/2023",

        "beneficiaryReference": "f0rtnt7nbhr",

        "duration": "12",

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

        "duration": "12",

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

        "duration": "12",
            
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
    "payment": {

    "paymentMethodName": [This value should be a string that matches the name of the payment method in your engage system, e.g. “Card” or “Paypal”],

    "amount": "5", [Depending on the payment method in use, this will be a property with payments specific fields, e.g:

                "stripe": {
                    "paymentIntentId": "pi_3JZ0mQHnrctdHvuq1Kz5sPOo",
                },
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
| **giftAid** | Can be *true* or *false* if the donor explicitly states their gift aid status. Should be *null* if the information is not collected or provided. |
| **contactPreferences** | The categories *other* and *fundraising* are specific to each charity. In general, charities will have a category which covers *marketing* (in this case fundraising) and *administration*. You have to ensure that exact categories are agreed with the charity and added here. Also, ensure that explicit consent is being captured on the website before setting any category that covers marketing activity to *true*. |
| **allocation** | <ul><li>Allocations is a concept in Engage that represents the area where donation money is allocated to be spent and is a combination of *donation item* plus *fund dimensions*. Usually, the title of the web page or the item selected by the donor on the website will determine what is entered for an allocation. </li><li> You can just send the *Item property*, and Engage uses *Transform* to transform the item sent here into the correct donation item and fund dimensions. </li><li>**Note:** This is an array, and it can contain multiple allocations, but generally there will only be 1 allocation here. </li></ul> |
| **allocation[*].type** | This can be fund or sponsorship. |
| **beneficiaryReference** | There is no need to add this reference explicitly but if the donor is sending this reference through the website then Engage will add it otherwise it will auto acquire within. |
| **$.allocation[*].fundDimensions** | This is only necessary if your website allows the donor to select or assign different locations or stipulations (e.g. zakah/sadaqah) in addition to the normal donation item. Your system administrator can confirm if this is necessary. In case of sponsorships, add the sponsorship in *Allocation object* as **allocation[*].type: "Sponsorship"**. |
| **Feedbacks** | This refers specifically to projects which require donor feedback. These are typically things like *water wells*, *build a classroom* etc. These 'schemes' must be setup in Engage prior to sending from the website. **Note:** Please speak to N3O to clarify what *feedback schemes* are eligible. Also, the `Type` must be `Feedbacks`. |
| **payment** | Populated only on Single Donations. |
| **payment.paymentMethodName** | This should be the name of one of the payment methods the charity has set up in Engage which is configured for single donations. For example, if the charity has 2 payment methods called *Card Payments* and *PayPal Payments* then the value should be the name of the payment method (i.e. *Card Payments* or *PayPal Payments*). Depending on the payment method selected, complete the relevant section depending on whether the payment method is *Stripe, Opayo, Cash, Cheque, SmartDebit, PayPal, LaunchGood* etc. |
| **Interactions** | This signals that the *touchpoint* and *attribution* of the donation is from the website. The default touchpoint for **all** webhook data should generally be `donated-website`. |

## Supported Payment Methods

Below is a list of supported payment methods and their corresponding webhook structure.

### Stripe

For a Stripe payment method you can use either **PaymentIntentId** or **ChargeId**, but you must supply one of these. *CustomerID* is not required, but you can send it if you have it.

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
