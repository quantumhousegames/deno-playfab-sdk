# PlayFab SDK for Deno

A collection of API modules, written in TypeScipt, designed for use with [Deno](https://deno.land). All the modules at the root are auto generated and based on the [API Specs](https://github.com/PlayFab/API_Specs/tree/master/Swagger/PlayFab) Provided by PlayFab. Each module exposes its related models as TypeScript interfaces, and all API operations are exposed as functions which return promises.

## Example

Let's say we wanted to use the [Add News feature of Title-Wide Data Manangement](https://docs.microsoft.com/en-us/rest/api/playfab/admin/title-wide-data-management/addnews?view=playfab-rest). We'd write the following code:

```typescript
import { AddNews } from "deno.land/x/playfab-sdk@VERSION/admin.ts";

const request = {
  Title: "My news title",
  Body: "My news body",
};

const options = {
  titleId: "YOUR_TITLE_ID",
  security: { SecretKey: "YOUR_SECRET_KEY" }
}

const result = await AddNews(request, options);
```

Note that the security option accepts only one of `SecretKey`, `EntityToken`, or `SessionTicket` per request. Additionally, some APIs do not require any security.

TIP: Always use a pinned version to ensure APIs don't change unexpectedly on you.

## Documentation

Each module comes with extensive focused documentation:

* [Admin](https://doc.deno.land/https/deno.land/x/playfab-sdk/admin.ts)
* [Authentication](https://doc.deno.land/https/deno.land/x/playfab-sdk/authentication.ts)
* [Client](https://doc.deno.land/https/deno.land/x/playfab-sdk/client.ts)
* [CloudScript](https://doc.deno.land/https/deno.land/x/playfab-sdk/cloudscript.ts)
* [Data](https://doc.deno.land/https/deno.land/x/playfab-sdk/data.ts)
* [Economy](https://doc.deno.land/https/deno.land/x/playfab-sdk/economy.ts)
* [Events](https://doc.deno.land/https/deno.land/x/playfab-sdk/client.ts)
* [Experimentation](https://doc.deno.land/https/deno.land/x/playfab-sdk/experimentation.ts)
* [Groups](https://doc.deno.land/https/deno.land/x/playfab-sdk/groups.ts)
* [Insights](https://doc.deno.land/https/deno.land/x/playfab-sdk/insights.ts)
* [Leaderboards](https://doc.deno.land/https/deno.land/x/playfab-sdk/leaderboards.ts)
* [Localization](https://doc.deno.land/https/deno.land/x/playfab-sdk/localization.ts)
* [Matchmaker](https://doc.deno.land/https/deno.land/x/playfab-sdk/matchmaker.ts)
* [Multiplayer](https://doc.deno.land/https/deno.land/x/playfab-sdk/multiplayer.ts)
* [Profiles](https://doc.deno.land/https/deno.land/x/playfab-sdk/profiles.ts)
* [Server](https://doc.deno.land/https/deno.land/x/playfab-sdk/server.ts)

## Updating the Generated APIs

This repo vendors in the [API Specs](https://github.com/PlayFab/API_Specs/tree/master/Swagger/PlayFab) project as a git submodule, so ensure it is fully initialized before starting.

From the root of this project run the following command:

```sh
deno run --allow-read --allow-write ./scripts/generate_apis.ts
```

### Versioning

The versioning of this repo will track the release versioning of the PlayFab SDK found here:
https://docs.microsoft.com/en-us/gaming/playfab/release-notes/

In the event that we need to fix a bug we will do point releases after that, for example: `210315.1`.

## Copyright and Licensing Information:
Apache License -- Version 2.0, January 2004 http://www.apache.org/licenses/

Full details available within the LICENSE file.