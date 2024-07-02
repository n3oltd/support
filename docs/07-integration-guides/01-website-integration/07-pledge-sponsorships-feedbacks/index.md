---
title: Pledges (Sponsorships and Feedbacks)
sidebar_position: 7
---

For any pledge donation added via the website, you need to post data to the **Engage webhook endpoint**. This webhook is only used when your organization is using sponsorships and feedbacks as an additional functionality.

## Webhook Format Example

The *json* webhook example explained below shows a table explaining all webhook data parameters along with different types of sponsorship and feedback schemes including **Orphan** and **Hifz**.

```json
{
    "id": "2509",
    
    "timestamp": "2011-10-05T14:48:00.000Z",
    
    "ip": "82.29.232.77",
    
    "reference": "2509",
    
    "currency": "GBP",
    
    "amount": 715, [This is the total pledge amount]
    
    "isOrganization": false,
	
    "accountType" : "Individual",
    
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
            
            "amount": "300", [this amount should be the same as that used in the sponsorship area]
            
            "currency": "GBP",
            
            "fundDimensions": {
                
                "location": "Yemen",
                "theme": "health",
                "stipulation": "sadaqah"
            },
            
            "sponsorship": {
                
                "beganOn": "2011-10-05T14:48:00.000Z",
                
                "reference": "2509-1",
                
                "scheme": "Orphan", [name of the scheme in Engage]
                
                "beneficiaryReference": "OP23179300", [this is not required as default]
                
                "duration":  12,
                
                "currency": "GBP",
                
                "monthlyAmount": 25,
                
                "amount": 300.0,
            },
        }, 
		{
            "type": "Sponsorship",
            
            "amount": "120", [this amount should be the same as that used in the sponsorship area]
            
            "currency": "GBP",
            
            "fundDimensions": {
                
                "location": "Bangladesh",
                "theme": "health",
                "stipulation": "sadaqah"
            },
            "sponsorship": {
                
                "reference": "2509-2",
                
                "beganOn": "2011-10-05T14:48:00.000Z",
                
                "scheme": "Hifz", [name of the scheme in Engage]
            
                "beneficiaryReference": "HF23179310", [this is not required as default]
                
                "duration": 12,
                
                "currency": "GBP",
                
                "monthlyAmount": 10,
                
                "amount": 120.0,
            }
        },
	    {
            "type": "Feedback",
            
            "currency": "GBP",
            
            "amount": 270.0,
            
            "notes": "",
            
            "feedback": {
                
                "reference": "2509-3",
                
                "scheme": "Tube Well",
                
                "currency": "GBP",
                
                "price": 270.0,
                
                "customfields": {
                    
                    "plaque": "Ahmad Ali"
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
            
            "beganOn": "2011-10-05T14:48:00.000Z",
            
            "scheme": "Orphan", [name of the scheme in Engage]
            
            "beneficiaryReference": "OP23179300", [this is not required as default]
            
            "duration": 12,
            
            "currency": "GBP",
            
            "monthlyAmount": 25,
            
            "amount": 300.0,
            
            "fundDimensions": {
                
                "location": "Yemen",
                "theme": "health",
                "stipulation": "sadaqah"
            }
        },
    ],
                
    "HifzSponsorships": [
		{
            "reference": "2509-2",
            
            "beganOn": "2011-10-05T14:48:00.000Z",
            
            "scheme": "Hifz", [name of the scheme in Engage]
            
            "beneficiaryReference": "HF23179310", [this is not required as default]
            
            "duration": 12,
            
            "currency": "GBP",
            
            "monthlyAmount": 10, 
            
            "amount": 120.0,
            
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
            
            "beganOn": "2011-10-05T14:48:00.000Z",
            
            "scheme": "Orphan", [name of the scheme in Engage]
            
            "beneficiaryReference": "OP23179300", [this is not required as default]
            
            "duration":  12,
            
            "currency": "GBP",
            
            "monthlyAmount": 25,
            
            "amount": 300.0,
            
            "fundDimensions": {
                
                "location": "Yemen",
                "theme": "health",
                "stipulation": "sadaqah"
            }
        },
		{
            "reference": "2509-2",
            
            "beganOn": "2011-10-05T14:48:00.000Z",
            
            "scheme": "Hifz", [name of the scheme in Engage]
            
            "beneficiaryReference": "HF23179310", [this is not required as default]
            
            "duration": 12,
            
            "currency": "GBP",
            
            "monthlyAmount": 10,
            
            "amount": 120.0,
            
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
            
            "scheme": "Tube Well", [name of feedback scheme]
            
            "currency": "GBP",
            
            "price": 270.0,
            
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
            
            "scheme": "Tube Well", [name of feedback scheme]
            
            "funddimensions": {
                
                "location": "Where Most Needed",
                "theme": "WASH",
                "stipulation": "Sadaqah"
            },
            
            "currency": "GBP",
            
            "price": 270.0,
            
            "customfields": {
                
                "plaque": "Ahmad Ali"
            }
        }
    ],
    
    "Pledge": {
		
        "Url": "https://www.n3o.cloud/campaign/123/page",
		
        "Title": "Free Palestine",
		
        "Team": {
			"Name": "Walk for Palestine 2024",
			"Url": "https://www.n3o.cloud/campaign/7920/free-palestine"
		}
	},
}
```
| Parameters (Fields) | Description |
| ------------------- | ----------- |
| **id** | A unique string which identifies the transaction on the website. |
| **reference** | Any reference the donor was given in an email receipt from the website. |
| **isOrganization** | *True* or *false* depending on whether you allow donations from organisations. If omitted, will be assumed false. |
| **individual/organization** | Complete either one of these sections, **not both**, depending on whether the donor is an individual or an organisation. Usually this will be individual. |
| **organization.type** | Should be one of the organisation types you recognise in Engage. |
| **phone** | Include the country code at the beginning. This should be calculated based on the address if it is not required by the donor to enter their country code. |
| **giftAid** | Can be true or false if the donor explicitly states their Gift Aid status. Should be null if the information is not collected or provided. |
| **contactPreferences** | The categories *other* and *fundraising* are specific to each charity. In general, charities will have a category which covers *marketing* (in this case fundraising) and *administration*. You have to ensure that exact categories are agreed with the charity and added here. Also, ensure that explicit consent is being captured on the website before setting any category that covers marketing activity to *true*. |
| **allocation** | <ul><li>Allocations is a concept in Engage that represents the area where donation money is allocated to be spent and is a combination of *donation item* plus *fund dimensions*. Usually, the title of the web page or the item selected by the donor on the website will determine what is entered for an allocation. </li><li> You can just send the *Item property*, and Engage uses *Transform* to transform the item sent here into the correct donation item and fund dimensions. </li><li>**Note:** This is an array, and it can contain multiple allocations, but generally there will only be 1 allocation here. </li></ul>  |
| **allocation[*].type** | This can be fund or sponsorship. |
| **beneficiaryReference** | There is no need to add this reference explicitly but if the donor is sending this reference through the website then Engage will add it otherwise it will auto acquire within. |
| **$.allocation[*].fundDimensions** | This is only necessary if your website allows the donor to select or assign different locations or stipulations (e.g. zakah/sadaqah) in addition to the normal donation item. Your system administrator can confirm if this is necessary. |
| **Feedbacks** | This refers specifically to projects which require donor feedback. These are typically things like *water wells*, *build a classroom* etc. These 'schemes' must be setup in Engage prior to sending from the website. **Note:** Please speak to N3O to clarify what *feedback schemes* are eligible. Also, the `Type` must be `Feedbacks`. |
| **pledge** | Includes all the pledge information including a **parent** and its **sub-pledges**. <ul><li> A single pledge contains a **URL** and **title** and can be a part of a hierarchy of pledges. </li><li> Under a hierarchy of pledges, the parent pledge is named as **Team** and includes **name** and a **URL**. </li><li> Currently, Engage only stores a pledges information and doesnot cascade the amount, but in the future, if any amount added is as donation to a sub-pledge, it will be reflected in the parent pledge as well. </li></ul> |  
