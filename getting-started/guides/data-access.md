---
title: "Data access"
slug: data-access
icon: done
order: 20
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The @c8y/client is an isomorphic (node and browser) Javascript client library for the Cumulocity
platform API.

It can be used completely standalone but also is well integrated into Angular when using the
`@c8y/ngx-components`.

## Using the client in Angular

You can use the client in Angular by using dependency injection. Simply import one of the
auto-generated services:

```ts
constructor(private inventory: InventoryService) {
}

async ngOnInit() {
  await this.getData();
}

async getData() {
  const { data } = await this.inventory.list();
  console.log(data); // the first 10 managed objects of the inventory.
  return data;
}
```

You usually do not have to worry about authentication, as normally `ngOnInit` is only called when the
component is rendered, which is after the login. It could happen (for example, if you call the
service inside a constructor) that you have to wait for authentication. This can be easily done by
using the [AppStateService](#/develop/services/AppStateService/overview) and waiting for the
`currentUser` observable to get set.

## Get detail and list data with promises (pull)

Nearly all APIs in Cumulocity have a `*Service` representation in the client and all of them support
the `detail` and `list` method by default. However there are additional methods for some of them
that are described in detail in the corresponding `d.ts` file which your IDE has to be able to read.

| Method | Description | Parameters | Return |
| --- | --- | --- | --- |
| `detail(entityOrId)` | Request detail data of a specific entity. |  `entityOrId: string \| number \| IIdentified`: An object which contains an ID or an ID as a number or string. | `Promise<IResult<TData>>`: The list as `Promise` wrapped in an `IResult`. `IResultList` contains data and response. |
| `list(filter)` | Request a list of data with an optional filter. | `filter:object`: (optional) A filter for paging or filtering of the list. | `Promise<IResultList<TData>>`: The list as Promise wrapped in an `IResultList`. `IResultList contains data, response and paging. |

Example for receiving details of one managed object of the inventory via `detail`:

```js
const managedObjId: number = 1;

const {data, res} = await this.inventory.detail(managedObjId);
```

The following is an example for receiving a list of one managed object of the inventory via `list`:

```js
const filter: object = {
  pageSize: 100,
  withTotalPages: true
};

const {data, res, paging} = await this.inventory.list(filter);
```

## Using the client in node.js or browser (standalone)

If the @c8y/client is used without @c8y/ngx-components you must install it via npm:

```bash
npm install @c8y/client
```

Use `client.<endpoint>.list()` to request listed data from the Cumulocity REST API and
`client.<endpoint>.detail(<id>)` to request detail information. These methods always return a
promise.

### Authentication strategy

In the Cumulocity platform we currently allow two ways to authenticate:

* Basic Auth: The authentication header is injected into each request.
* OAI: The client doesn't know about the authentication header. The header is set in a cookie.

If used as a standalone, you must pass the authentication. To quickly get you started, the @c8y/client
provides a shorthand static function which always uses Basic Auth and verifies the login directly:

```js
await Client.authenticate({ tenant, user, password }, url);
```

It internally creates a client instance and tries to contact the API to verify if the given
credentials are correct. In some cases you have to use a more fine-grained authentication, for example, when
you don't know which authentication strategy the user is going to use. In this case you need to
construct an own instance of the client and pass the authentication strategy to it:

```js
 const baseUrl = 'https://acme.cumulocity.com';
 const client = new Client(new CookieAuth(), baseUrl); // use here `new BasicAuth()` to switch to Basic Auth
 try {
  const { data, paging, res } = await client.user.currentUser();
  console.log('Login with cookie successful');
 } catch(ex) {
  console.log('Login failed: ', ex)
 }
```

> ### Note
>
> As the default login mode for UI is OAI, you usually don't have to authenticate via Basic Auth.

## Examples

Below some examples are provided which may help you to get started. They are marked as standalone or
angular usage:

### 1. Requesting list data from the inventory (standalone)

```js
import { Client } from '@c8y/client';

const baseUrl = 'https://demos.cumulocity.com/';
const tenant = 'demos';
const user = 'user';
const password = 'pw';

(async () => {
  const client = await Client.authenticate({
    tenant,
    user,
    password
  }, baseUrl);
  const { data, paging } = await client.inventory.list();
  // data = first page of inventory
  const nextPage = await paging.next();
  // nextPage.data = second page of inventory
})();
```

### 2. Using realtime (standalone)

```js
// realtime event
const subscription = client.realtime.subscribe('/alarms/*', (data) => {
  console.log(data); // logs all alarm CRUD changes
});
client.realtime.unsubscribe(subscription);
```

### 3. Authenticate in node.js (standalone)

The constructor `new Client([...])` initializes a new Client which allows to request data from the
API. Differently to `Client.authenticate([...])` it needs a tenant given and does not verify if the
login is correct. This is useful if you are developing a node.js microservice.

```js
const auth = new BasicAuth({
   user: 'youruser',
   password: 'yourpassword',
   tenant: 'acme'
 });

 const baseUrl = 'https://acme.cumulocity.com';
 const client = new Client(auth, baseUrl);
 (async () => {
   const { data, paging, res } =  await client.inventory.list({ pageSize: 100 });
 })();
```

### 4. Accessing a microservice with the Fetch API (standalone/angular)

The client internally uses the Fetch API. By accessing this core function, you can do any
authenticated request to any resource. Standalone you can use `core.client.fetch(url, options)` and
in `@c8y/ngx-components/data` for Angular you just have to inject the `FetchClient`:

```js
// angular dependency injection
constructor(private fetchClient: FetchClient) {}

async getData() {
  const options: IFetchOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
  const response = await this.fetchClient.fetch('/service/my-service', options); // Fetch API Response
}
```

All fetch responses with `application/json` content type can be parsed to JSON objects. Find more
information on handling fetch responses in the
[MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
