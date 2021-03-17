import { GetEntityToken } from "./authentication.ts";
import { GetCatalogItems } from "./admin.ts";

const SecretKey = "MOT3ZTMHOBFDSR95SI6OCCE1MFMS5U4YFJWSSYYG5NKDPIOKWQ";

const result = await GetEntityToken(
  {},
  { titleId: "B63C7", security: { SecretKey } }
);

const result2 = await GetCatalogItems(
  {},
  { titleId: "B63C7", security: { SecretKey } }
);

console.log(result2);
