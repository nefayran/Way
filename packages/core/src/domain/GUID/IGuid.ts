export default interface IGuid {
  readonly str: string;
  toString(): string;
  generate(): void;
  isEqual(guid: IGuid): boolean;
}
