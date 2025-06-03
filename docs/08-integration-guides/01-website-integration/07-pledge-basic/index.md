---
title: Pledges (Basic)
sidebar_position: 7
---

A pledge is a formal promise or commitment made by an individual or organization to contribute a specified amount of money in support of a cause or charity. For pledges processed via websites, you need to post data to the **Engage Webhook endpoint**. This webhook is a standard one without any additional information like sponsorships and feedbacks and can be used for performing a basic pledge integration.

## Webhook Format Example

The *json* webhook example explained below shows how the data is expected along with a table explaining all webhook data parameters.

```json
{
    "id": "2510",

    "timestamp": "2011-10-05T14:48:00.000Z",
    
    "ip": "82.29.232.77",
    
    "reference": "2510",
    
    "currency": "GBP",
    
    "amount": 500, [This is the total pledge amount]
    
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
            
            "amount": "500",
            
            "fund": {
                
                "item": "Wash fund"
            },
            
            "fundDimensions": {
                
                "location": "Where needed",
                "theme": "WASH",
                "stipulation": "Sadaqah"
            }
        }
    ],
	
    "Pledge": {
		
        "Url": "https://www.n3o.cloud/campaign/123/page",
		
        "Title": "Free Palestine",

        "source": "Website Fundraising Page", [name of any source the charity defines] 
		
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
| **isOrganization** | *True* or *false* depending on whether you allow pledge donations from organisations. If omitted, will be assumed false. |
| **individual/organization** | Complete either one of these sections, **not both**, depending on whether the donor is an individual or an organisation. Usually this will be individual. |
| **organization.type** | Should be one of the organisation types you recognise in Engage. |
| **phone** | Include the country code at the beginning. This should be calculated based on the address if it is not required by the donor to enter their country code. |
| **giftAid** | Can be *true* or *false* if the donor explicitly states their gift aid status. Should be *null* if the information is not collected or provided. |
| **contactPreferences** | The categories *other* and *fundraising* are specific to each charity. In general, charities will have a category which covers *marketing* (in this case fundraising) and *administration*. You have to ensure that exact categories are agreed with the charity and added here. Also, ensure that explicit consent is being captured on the website before setting any category that covers marketing activity to *true*. |
| **allocation** | <ul><li>Allocations is a concept in Engage that represents the area where donation money is allocated to be spent and is a combination of *donation item* plus *fund dimensions*. Usually, the title of the web page or the item selected by the donor on the website will determine what is entered for an allocation. </li><li> You can just send the *Item property*, and Engage uses *Transform* to transform the item sent here into the correct donation item and fund dimensions. </li><li>**Note:** This is an array, and it can contain multiple allocations, but generally there will only be 1 allocation here. </li></ul> |
| **allocation[*].type** | This can be fund or sponsorship or feedbacks. But, in this case, it is **fund**.  |
| **$.allocation[*].fundDimensions** | This is only necessary if your website allows the donor to select or assign different locations or stipulations (e.g. zakah/sadaqah) in addition to the normal donation item. Your system administrator can confirm if this is necessary. In case of sponsorships, add the sponsorship in *Allocation object* as **allocation[*].type: "Sponsorship"**. |
| **pledge** | Includes all the pledge information including a **parent** and its **sub-pledges**. <ul><li> A single pledge contains a **URL** and **title** and can be a part of a hierarchy of pledges. </li><li> Under a hierarchy of pledges, the parent pledge is named as **Team** and includes **name** and a **URL**. </li><li> Currently, Engage only stores a pledges information and doesnot cascade the amount, but in the future, if any amount added is as donation to a sub-pledge, it will be reflected in the parent pledge as well. </li></ul> |  
