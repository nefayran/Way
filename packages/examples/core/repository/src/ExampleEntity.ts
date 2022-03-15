import { Guid, IEntity, IGuid } from "@waykit/core";

export class ExampleEntity implements IEntity {
  name: string;

  id: IGuid = new Guid();
}
