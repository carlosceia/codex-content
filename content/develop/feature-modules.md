---
title: Feature modules
description: Complete features that can be added to an application.
slug: feature-modules
icon: done
pageOrder: 90
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Feature modules are building blocks that provide specific functionalities within the Cumulocity platform. Each module encapsulates a set of features related to a particular area of concern, such as device management, data visualization, or user administration. This document provides an overview of various feature modules which are available, along with brief descriptions of their functionalities.

### How to configure a module in a custom application

By importing modules into your application and utilizing their configurations, you can change their behavior to suit the specific requirements of your application.

In the example below, we have imported the `AssetsNavigatorModule` into the `AppModule` and utilized its `config()` method to provide custom configuration options:

<codex-tutorial-example [open]="true"
[sources]="['./packages/tutorial/src/asset-navigator/asset-navigator-example.module.ts',
'./packages/ngx-components/assets-navigator/asset-node-config.model.ts'
]"></codex-tutorial-example>

### List of feature modules

| Title                   | Module                   | Configurable | Description                                                                       |
|-------------------------|--------------------------|--------------|-----------------------------------------------------------------------------------|
| Actility Device Registration | `ActilityModule`    | No           | Provides the mechanism for registering devices through Actility and showing the forms initialized with it.|
| Api                     | `ApiService`             | No           | Provides features that help with HTTP communication like intercepting HTTP requests, notifying about requests and their statuses. See also [Api service](#/develop/services/ApiService).|
| Assets navigator        | `AssetsNavigatorModule`  | Yes, [Asset navigator](#/develop/feature-modules/asset-navigator) | The Asset Navigator component displays assets (devices and groups) in a tree-based structure, allowing efficient management and interaction.|
| Auth Configuration      | `AuthConfigurationModule`| No           | Allows to configure the login options, including the login method, token lifespan, two-factor authentication, and single sign-on (SSO) login.|
| Binary file download    | `BinaryFileDownloadModule`| No          | Allows the download of binaries respecting all security options provided by the platform.|
| Bookmarks               | `BookmarksModule`        | No           | Provides the bookmarking functionality for the right drawer, allowing users to organize and access frequently visited application locations.|
| Child devices           | `ChildDevicesModule`     | No           | Lists the child devices associated with a particular parent device.|
| Cockpit config          | `CockpitConfigModule`    | No           | Contains the Cockpit setup and Cockpit configuration view.|
| Connectivity            | `ConnectivityModule`     | No           | Manages credentials for different providers (such as Actility LoRa, Sigfox, SIM).|
| Context dashboard       | `ContextDashboardModule` | [Yes](#/develop/feature-modules/context-dashboard)| Provides a customizable dashboard displaying relevant information about specific entities or situations.|
| Data broker             | `DataBrokerModule`       | No           | Manages the configuration of data proxy from one tenant to another.|
| Datapoint library       | `DatapointLibraryModule` | [Yes](#/develop/feature-modules/datapoint-library)|  provides a collection of data points with default values for data point properties.|
| Datapoint selector      | `DatapointSelectorModule`| No           | Provides an easy way of selecting data points with additional features such as editing data points and providing parent asset context.|
| Default subscriptions   | `DefaultSubscriptionsModule`| No        | Allows configuring subscriptions of applications and microservices enabled by default on the creation of new tenants or system upgrades.|
| Device grid             | `DeviceGridModule`       | No           | Provides a reusable component to display a set of device properties in tabular data in a responsive manner.|
| Device list             | `DeviceListModule`       | No           | Displays all devices connected to your account and facilitates Smart group creation.|
| Device profile          | `DeviceProfileModule`    | No           | Represents a combination of firmware, software packages, and configuration files that can be deployed on a device.|
| Device shell            | `DeviceShellModule`      | No           | Enables interactive work with remote devices.|
| Diagnostics             | `DiagnosticsModule`      | No           | Provides a device tab for handling diagnostics operations.|
| Ecosystem               | `EcosystemModule`        | No           | Advanced feature for managing applications, features, extensions, and microservices.|
| File preview            | `FilePreviewModule`      | No           | Provides a component for loading and displaying binaries of supported formats.|
| Files repository        | `FilesRepositoryModule`  | No           | Filterable and sortable list of manageable files available on the platform as binary artifacts.|
| Icon selector           | `IconSelectorModule`     | No           | Provides an easy way to view, search, filter, and copy icons from a built-in set.|
| Loriot device registration | `LoriotDeviceRegistrationModule`| No | Provides the mechanism for registering devices through Loriot LNS Connection and showing the forms initialized with it.|
| Map                     | `MapModule`              | No           | Offers a comprehensive map view with various functionalities.|
| Operations              | `OperationsModule`       | No           | Used for controlling devices remotely, implementing features to create and monitor operations and bulk operations.|
| Protocol LPWAN          | `ProtocolLPWANModule`   | No           | Actility and Sigfox connectors in the Administration application and LPWAN configuration page in device details tab.|
| Protocol LWM2M          | `ProtocolLWM2MModule`   | No           | Bootstrap parameters updated and post-registration actions performed commonly to all devices.|
| Protocol OPC UA         | `ProtocolOPCUAModule`   | No           | All OPC UA-related functionalities like gateway configuration and device registrations are part of this module.|
| Register device         | `RegisterDeviceModule`  | No           | Single and bulk registration of devices used to manually connect one or several devices or register larger amounts of devices in one step.|
| Repository              | `RepositoryModule`      | No           | Collects references for device-specific properties like software, firmware, and configuration.|
| Search                  | `SearchModule`          | [Yes](#/develop/feature-modules/search)| Offers comprehensive search functionality within the platform.|
| Sensor phone            | `SensorPhoneModule`     | No           | Provides the functionality of registering a smartphone through a wizard using a QR code.|
| Services                | `ServicesModule`        | No           | The Services tab on the device details view provides features to monitor the data that devices send about the services they are running.|
| Sigfox device registration| `SigfoxDeviceRegistrationModule` | No | Provides the mechanism for registering devices through Sigfox and showing the forms initialized with it.|
| SMS gateway             | `SMSGatewayModule`      | No           | SMS provider credentials enable platform features that utilize SMS services.|
| Sub assets              | `SubAssetsModule`       | [Yes](#/develop/feature-modules/sub-assets)| Presents and manages sub-assets.|
| Tenants                 | `TenantsModule`         | [Yes](#/develop/feature-modules/tenants)| Filterable and sortable list of subtenants of the current tenant.|
| Trusted certificates    | `TrustedCertificatesModule`| No        | Allows for managing X.509 certificates used for authentication purposes. Must be trusted by Cumulocity for device connections via MQTT.|
| Upgrade                 | `UpgradeModule`         | No           | Provides the possibility to run a hybrid application, allowing the use of AngularJS plugins in an Angular context.|
| User roles              | `UserRolesModule`       | No           | Provides components that allow selecting user inventory role for a specific asset and displaying these assets as a tree.|
| Widgets                 | `WidgetsModule`         | [Yes](#/develop/feature-modules/widgets)| Offers various pre-built widgets for visualizing and interacting with data within the platform.|
