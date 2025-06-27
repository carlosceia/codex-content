---
title: Overview
slug: overview
icon: wrench
pageOrder: 90
---
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Gainsight PX is a complete Product Experience Platform that enables product teams to:

- Make Data-Driven Product Decisions: Leverage rich product analytics and relevant user feedback to
  understand what product features your users value most and which areas of the product are ripe for
  enhancements—all without coding.
- Accelerate Onboarding and Adoption: Create memorable product experiences that efficiently scale
  onboarding and drive feature adoption through in-application guides, dialogues, and email. Deliver
  real-time engagements personalized based on user behaviors and segments.
- Demonstrate the Business Impact of Product Investments: Prove the value of your efforts by
  demonstrating to your executive team the return on your product investments based on revenue,
  retention, customer lifetime value, and other key performance indicators.

## How to activate Gainsight in the local development environment?

### Running Gainsight in a fresh environment

Add **Gainsight API key** to the system options of the **management** tenant:

```json
PUT {{url}}/tenant/options/configuration/system.gainsight.api.key
{
   "category": "configuration",
   "value": "<API key>",
   "key": "system.gainsight.api.key"
}
```

Then, on your tenant after making a following request:

```json
GET {{url}}/tenant/system/options/gainsight/api.key
```

Response body must be:

```json
{
  "category": "gainsight",
  "value": "<API key>",
  "key": "api.key"
}
```

Next configure the cookie banner for all tenants on the instance.

The cookie banner configuration is done using the same mechanism as application branding. Upload
the <a
href="https://sagportal.sharepoint.com/sites/IoTAnalyticsRnDOps/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FIoTAnalyticsRnDOps%2FShared%20Documents%2FWS%20%2D%20UI%2FGainsight%2FGainsight%20public%2Doptions%2Ezip&parent=%2Fsites%2FIoTAnalyticsRnDOps%2FShared%20Documents%2FWS%20%2D%20UI%2FGainsight"
target="_blank" rel="noopener noreferrer">public-options.zip</a> with a cookie banner
configuration to the management tenant by going to <a
href="https://cumulocity.com/guides/users-guide/administration/#applications" target="_blank"
rel="noopener noreferrer">All applications</a> and clicking the **Add application** button.

The zip archive contains a `*.json` file defining the cookie banner title, text, link to the privacy
policy page and the cookie description. After installation, check that the Public-options
application is present in the list of applications.

> ### Note
>
>The download link may only work for Cumulocity employees.

You then see the cookie banner before you login to your tenant. By accepting it,
Gainsight works now on your tenant. If the cookie banner is not visible:

1. Open your tenant login page in incognito mode.
2. Clear the cookies for your tenant page.
3. If this does not produce the desired result, reinstall the public-options application. Ensure the
   `*.json` file inside the zip contains a configuration.

### How to check if Gainsight is working correctly?

Firstly check that if you have the `Product experience` section in your <a
href="https://cumulocity.com/guides/users-guide/getting-started/#to-change-user-settings"
target="_blank" rel="noopener noreferrer">Edit user</a> dialog box.

> ### Note
>
> The name and number of toggles have changed since 10.16, but the section name has remained the
> same.

If the section is not displayed, check your tenant's <a
href="https://cumulocity.com/guides/users-guide/enterprise-tenant/#custom-properties"
target="_blank" rel="noopener noreferrer">Custom properties</a> and look for <a
href="https://cumulocity.com/guides/users-guide/enterprise-tenant/#product-experience-tracking"
target="_blank" rel="noopener noreferrer">Enable Gainsight product experience tracking</a> checkbox.
If checkbox is not there, then re-check all steps from a previous section.

If you have already added any event to track, trigger it, and check it in the user's <a
href="https://support.gainsight.com/PX/Analytics/Tracking/Accounts_and_Audience_Explorer#Activities"
target="_blank" rel="noopener noreferrer">activities</a> section of the Gainsight website. You can
search for your profile by email address using <a
href="https://support.gainsight.com/PX/Analytics/Tracking/Accounts_and_Audience_Explorer#Navigate_to_Audience_Explorer"
target="_blank" rel="noopener noreferrer">Audience Explorer</a>. When you find your profile, click
the **Full Profile** button.

## How to track user interactions?

In short, a Gainsight rule is a set of instructions on how and when to track user interactions with
a website. There are two ways to set up how these interactions are tracked:

1. Using only the <a
   href="https://support.gainsight.com/PX/Product_Mapper/Instrument_Your_Product/Instrument_Your_Product_using_In-App_Mapper"
   target="_blank" rel="noopener noreferrer">Product Mapper</a>, where you can add events using CSS
   selector, match element text or even just match a URL. Additionally you can create your own <a
   href="https://support.gainsight.com/PX/Analytics/Tracking/Custom_Events_and_Super_Properties#Custom_Events"
   target="_blank" rel="noopener noreferrer">Custom Events</a>. </br>This solution is simpler,
   tracking is available from the outset, but it's better suited to a static website.
2. Add custom events to source code by
   [Product Experience directive](#/develop/product-experience/product-experience-directive/overview)
   or [Gainsight service](#/develop/product-experience/gainsight-service/overview), both uses <a
   href="https://support.gainsight.com/PX/API_for_Developers/02Usage_of_Different_APIs/Use_Custom_Event_API"
   target="_blank" rel="noopener noreferrer">Custom Events API</a>. In this case, the created events
   are still mapped in the <a
   href="https://support.gainsight.com/SFDC_Edition/View_More_Categories/Enablement_Engine/Knowledge_Center_and_Product_Mapper/Product_Mapper_Overview"
   target="_blank" rel="noopener noreferrer">Product Feature Tree</a> by using a <a
   href="https://support.gainsight.com/PX/Product_Mapper/Instrument_Your_Product/Instrument_Your_Product_Manually_using_Product_Mapper#Custom_Rule"
   target="_blank" rel="noopener noreferrer">Custom Rule</a>. </br>This solution is more flexible,
   but depends on the software release cycle. However, it's the one we currently recommend.
