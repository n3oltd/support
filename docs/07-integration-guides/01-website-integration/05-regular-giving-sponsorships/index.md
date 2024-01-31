---
title: Regular Giving - Sponsorships
sidebar_position: 5
--- 

For regular giving donations entered via the website, you will need to post data to the **Engage webhook endpoint**. 

## Webhook Format Example

Given below is a *json* webhook format example along with a table containing the webhook's parameters. The webhook includes **sponsorship regular giving plan** with only the *allocation* part to be different.

```json
{
    "id": "2509",
    
    "type": "Regular Donation",
    
    "timestamp": "2023-08-13T17:49:03.4564576Z",
    
    "ip": "82.29.232.77",
    
    "reference": "2509",
    
    "currency": "GBP",
    
    "amount": 171,
    
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
            
            "amount": "1",
            
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
            
            "amount": 25, [this amount should be the same as that used in the sponsorship area]
            
            "currency": "GBP",
            
            "fundDimensions": {
                
                "location": "Yemen",
                "theme": "health",
                "stipulation": "sadaqah"
            },
            
            "sponsorship": {
                
                "reference": "2509-1",
                
                "scheme": "Orphan",
				
                "beganOn": "2023-08-13T17:49:03.4564576Z",
				
                "beneficiaryreference": "OP1040075",
				
                "currency": "GBP",
				
                "amount": 25,
				
                "monthlyamount": 25 
            }
        },
		{
            "type": "Sponsorship",
            
            "amount": 10, [this amount should be the same as that used in the sponsorship area]
            
            "currency": "GBP",
            
            "fundDimensions": {
                
                "location": "Bangladesh",
                "theme": "health",
                "stipulation": "sadaqah"
            },
            
            "sponsorship": {
                
                "reference": "2509-2",
                
                "scheme": "Hifz",
				
                "beganOn": "2023-08-13T17:49:03.4564576Z",
				
                "beneficiaryreference": "HF1040075",
				
                "currency": "GBP",
				
                "amount": 10,
				
                "monthlyamount": 10
            }
        }, 
		{
            "type": "Feedback",
            
            "currency": "GBP",
            
            "amount": 130,
            
            "notes": "",
            
            "feedback": {
                
                "reference": "2509-3",
                
                "scheme": "Tube Well",                
                
                "currency": "GBP",
                
                "price": 130.0,
                
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
            
            "beganOn": "2023-08-13T17:49:03.4564576Z",
			
            "scheme": "Orphan", [or whatever their scheme is called in Engage]
			
            "beneficiaryreference": "OP1040075",
            
            "currency": "GBP",
			
            "amount": 25, [monthly price]
            
            "monthlyAmount": 25,
            
            "fundDimensions": {
                
                "location": "Yemen",
                "theme": "health",
                "stipulation": "sadaqah"
            }            
        }
    ],

    "HifzSponsorships": [
	    {
            "reference": "2509-2",
            
            "beganOn": "2023-08-13T17:49:03.4564576Z",
			
            "scheme": "Hifz", [or whatever their scheme is called in Engage]
            
            "beneficiaryreference": "HF1040075",
            
            "currency": "GBP",
			
            "amount": 10, [monthly price]
            
            "monthlyAmount": 10,
            
            "fundDimensions": {
                
                "location": "Bangladesh",
                "theme": "health",
                "stipulation": "sadaqah"
            }           
        }
    ],
    
    "sponsorships": [
	    {
            "reference": "2509-1",
            
            "beganOn": "2023-08-13T17:49:03.4564576Z",
			
            "scheme": "Orphan",
			
            "beneficiaryreference": "OP1040075",
            
            "currency": "GBP",
			
            "amount": 25,
            
            "monthlyAmount": 25,
            
            "fundDimensions": {
                
                "location": "Yemen",
                "theme": "health",
                "stipulation": "sadaqah"
            }  
        },
		{
            "reference": "2509-2",
            
            "beganOn": "2023-08-13T17:49:03.4564576Z",
			
            "scheme": "Hifz",
            
            "beneficiaryreference": "HF1040075",
            
            "currency": "GBP",
			
            "amount": 10,
            
            "monthlyAmount": 10,
            
            "fundDimensions": {
                
                "location": "Bangladesh",
                "theme": "health",
                "stipulation": "sadaqah"
            }   
        }
    ],

    "tubewellFeedbacks": [
	    {
            "reference": "2509-3",
            
            "scheme": "Tube Well",            
            
            "currency": "GBP",
            
            "price": 130.0,
            
            "customfields": {
                "plaque": "Ahmad Ali "
            },
            
            "funddimensions": {
                
                "location": "Where Most Needed",
                "theme": "WASH",
                "stipulation": "Sadaqah"
            }           
        }
    ],
    
    "feedbacks": [
	    {
            "reference": "2509-3",
            
            "scheme": "Tube Well",            
            
            "currency": "GBP",
            
            "price": 130.0,
            
            "customfields": {
                "plaque": "Ahmad Ali "
            },
            
            "funddimensions": {
                
                "location": "Where Most Needed",
                "theme": "WASH",
                "stipulation": "Sadaqah"
            }  
        }
    ],
    
    "regularGiving": {
        
        "frequency": "monthly",
        
        "collectionDay": 1,
		
        "amount": 171		
    },

    "credential": {
        
        "paymentMethodName": " ", [This value should be a string that matches the name of the payment method in your engage system, e.g.“Card” or “PayPal”. Depending on the payment method in use, this will be a property with payments specific fields, e.g:

            "stripe": {
                "SetupIntentId": "si_3JZ0mQHnrctdHvuq1Kz5sPOo"
            }]
    }
}
```

| Parameters (Fields) | Description |
| ------------------- | ----------- |
| **id** | A unique string which identifies the transaction on the website. |
| **type** | Either *single* or *regular* depending on whether the donation is recurring or one-off, in this case, regular. |
| **reference** | Any reference the donor was given in an email receipt from the website. |
| **isOrganization** | *True* or *false* depending on whether you allow donations from organisations. If omitted, will be assumed false. |
| **individual/organization** | Complete either one of these sections, **not both**, depending on whether the donor is an individual or an organisation. Usually this will be individual. |
| **organization.type** | Should be one of the organisation types you recognise in Engage. |
| **phone** | Include the country code at the beginning. This should be calculated based on the address if it is not required by the donor to enter their country code. |
| **giftAid** | Can be *true* or *false* if the donor explicitly states their gift aid status. Should be *null* if the information is not collected or provided. |
| **contactPreferences** | The categories *other* and *fundraising* are specific to each charity. In general, charities will have a category which covers *marketing* (in this case fundraising) and *administration*. You have to ensure that exact categories are agreed with the charity and added here. Also, ensure that explicit consent is being captured on the website before setting any category that covers marketing activity to *true*. |
| **allocation** | <ul><li> Allocations is a concept in Engage which represents the area where donation money is allocated to be spent and is a combination of *donation item* plus *fund dimensions*. Usually, the title of the web page or the item selected by the donor on the website will determine what is entered for an allocation. </li><li> You can just send the *Item property*, and Engage uses *Transform* to transform the item sent here into the correct donation item and fund dimensions. </li><li> **Note:** This is an array, and it can contain multiple allocations, but generally there will only be one allocation here. </li></ul> |
| **beneficiaryReference** | There is no need to add this reference explicitly but if the donor is sending this reference through the website then Engage will add it otherwise it will auto acquire within. |
| **allocation[*].type** | This should be sponsorship and the order must match where the first sponsorship allocation is paired with the first sponsorship entry and so on. They must not be paired up by location or anything like that. |
| **allocation[*].scheme** | The scheme name of the sponsorship. This must match exactly with the name of the *Sponsorship Scheme* already set up in Engage *(when you have the code ready, get in touch with support@n3o.ltd to give you the exact scheme name)*. |
| **$.allocation[*].fundDimensions** |  The location and stipulation is necessary for fund dimensions but ask your system administrator for clarification, **$.ChildSponsorships => [SchemeName]Sponsorships**. |
| **Feedbacks** | This refers specifically to projects which require donor feedback. These are typically things like *water wells*, *build a classroom* etc. These 'schemes' must be setup in Engage prior to sending from the website. **Note:** Please speak to N3O to clarify what *feedback schemes* are eligible. Also, the `Type` must be `Feedbacks`. |
| **payment.methodName** | This should be the name of one of the payment methods the charity has set up in Engage which is configured for regular donations. For example, if the charity has 2 payment methods called *Card Payments* and *PayPal Payments* then the value should be the name of the payment method. Depending on the payment method selected, complete the relevant section depending on whether the payment method is *Stripe, Opayo, Cash, Cheque, SmartDebit, PayPal, or LaunchGood*. |
| **regularGiving** | This is specific for regular giving plans and consists of two main elements named *frequency* and *collection day*. |
| **regularGiving.Frequency** | This is either *monthly*, *annually* or *quarterly* with default as *monthly*. |
| **regularGiving.Collection day** | The day of the month of instruction e.g. 1, 9, 15 which should be one of the available collection dates which were configured in the payment method in Engage. |

## Supported Payment Methods

Below is a list of supported payment methods and their corresponding webhook structure.

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


### GoCardless

For GoCardless payment method, direct debit must be set up for regular or recurring payments. You must first create and fill up the *direct debit mandate* form online and then provide the *MandateId* that GoCardless gives you, via the webhook to Engage. As a result, Engage will create the regular giving and process the payments on selected days of a month according to the preference of the donor. These payments will take some time to process and get deducted from the donors account.

**This has two primary benefits instead of GoCardless setting up and managing the direct debit:**

**1. The charity can assign the donation item/project to the specific direct debit mandate. This is not possible if via GoCardless directly and requires additional manual work to reconcile.**

**2. The charity can track failed and missed payments from the CRM directly for follow-up.**

:::note 
- *Mandate* is basically the authorization to deduct payments from the donors account.
- The *selected days* can be any date of the month for example the *1st, 15th or 25th* of each month, depending on the donor.
- *SubscriptionID* and creating subscriptions is not needed for GoCardless while integrating with Engage, therefore if you do create a subscription, then GoCardless will take payments not Engage.
:::

```json
   "GoCardless": {

      "MandateId": "N3O Ltd",

      "CustomerId": "214214",
    }
```

### SmartDebit

SmartDebit guidance is specific for collecting donor information (e.g. account name, sort code) via your website and submitting the data to Engage via the webhook. Engage will then set up direct debit instructions directly with SmartDebit through their API.

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