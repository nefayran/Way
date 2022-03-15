import VuexRepositoryBase from "../VuexRepositoryBase";

import {
  testEntitiesStore,
  testEntitiesStoreWithoutAction,
  testEntitiesStoreWithoutGetters,
  TestEntity,
} from "../mock/VuexStores";
import Guid from "../../../domain/GUID/Guid";

const vuexRepository: VuexRepositoryBase<TestEntity> = new VuexRepositoryBase(
  testEntitiesStore
);
const testEntity = new TestEntity();
testEntity.name = "test";

describe("VuexRepositoryBase", () => {
  test("add", async () => {
    const expected = await vuexRepository.Add(testEntity);
    expect(expected.id.isEqual(testEntity.id)).toBeTruthy();
  });
  test("Initialization repository error. Action with name Add not found", async () => {
    try {
      const vuexRepositoryWithActionErrors = new VuexRepositoryBase(
        testEntitiesStoreWithoutAction
      );
    } catch (e: any) {
      expect(e.message).toBe(
        "Initialization repository error. Action with name Add not found.\n"
      );
    }
  });
  test("Initialization repository error. Getter with name Get not found", async () => {
    try {
      const vuexRepositoryWithGetterErrors = new VuexRepositoryBase(
        testEntitiesStoreWithoutGetters
      );
    } catch (e: any) {
      expect(e.message).toBe(
        "Initialization repository error. Getter with name GetById not found.\n"
      );
    }
  });
  test("add entity = null throw error", async () => {
    try {
      const newGuid = new Guid();
      const testNullEntity: TestEntity = vuexRepository.GetById(newGuid);
      await vuexRepository.Add(testNullEntity);
    } catch (e: any) {
      expect(e.message).toBe("Element is null or undefined!");
    }
  });
  test("delete id = null throw error", async () => {
    try {
      const newGuid = new Guid();
      const testNullEntity: TestEntity = vuexRepository.GetById(newGuid);
      await vuexRepository.DeleteById(testNullEntity.id);
    } catch (e: any) {
      expect(e.message).toBe("Cannot read properties of null (reading 'id')");
    }
  });
  test("delete element with id not exist throw error", async () => {
    const newGuid = new Guid();
    try {
      await vuexRepository.DeleteById(newGuid);
    } catch (e: any) {
      expect(e.message).toBe(`Element with id: ${newGuid} is not exists!`);
    }
  });
  test("add exist throw error", async () => {
    try {
      await vuexRepository.Add(testEntity, { force: false });
      await vuexRepository.Add(testEntity, { force: false });
    } catch (e: any) {
      expect(e.message).toBe("Element with this id already exists!");
    }
  });
  test("get by id", async () => {
    const expected = vuexRepository.GetById(testEntity.id);
    expect(expected.id.isEqual(testEntity.id)).toBeTruthy();
  });
  test("get id = undefined throw error", async () => {
    try {
      const newGuid = new Guid();
      const testNullEntity: TestEntity = vuexRepository.GetById(newGuid);
      await vuexRepository.GetById(testNullEntity.id);
    } catch (e: any) {
      expect(e.message).toBe("Cannot read properties of null (reading 'id')");
    }
  });
  test("delete by id", async () => {
    await vuexRepository.DeleteById(testEntity.id);
    const received = vuexRepository.GetById(testEntity.id);
    const expected = null;
    expect(received).toBe(expected);
  });
  test("get all", async () => {
    await vuexRepository.Add(testEntity, { force: true });
    await vuexRepository.Add(testEntity, { force: true });
    await vuexRepository.Add(testEntity, { force: true });
    const expected = vuexRepository.GetAll();
    expect(expected.length).toBe(3);
  });
});