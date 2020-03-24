let earth = {
  isRound: true,
  numberFromSun: 3
};
describe("Earth", () => {
  it("is round", () => {
    expect(earth.isRound).toBe(true);
  });
  it("is the third planet from the sun", () => {
    expect(earth.numberFromSun).toBe(3);
  });
});

describe("Jasmine Matchers", () => {
  it("allows for === and deep equality", () => {
    expect(1 + 1).toBe(2);
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });
  it("allows for easy precision checking", () => {
    expect(3.1415).toBeCloseTo(3.14, 2);
  });
  it("allows for easy truthy / falsey checking", () => {
    expect(0).toBeFalsy();
    expect([]).toBeTruthy();
  });
  it("allows for easy type checking", () => {
    expect([]).toEqual(jasmine.any(Array));
    expect(() => {}).toEqual(jasmine.any(Function));
  });
  it("allows for checking contents of an object", () => {
    expect([1, 2, 3]).toContain(1);
    expect({ name: "Elie", job: "Instructor" }).toEqual(
      jasmine.objectContaining({ name: "Elie" })
    );
  });
});

describe("Pending specs", () => {
  xit("can start with an xit", () => {
    expect(true).toBe(true);
  });

  it("is a pending test if there is no callback function");

  it("is pending if the pending function is invoked inside the callback", () => {
    expect(2).toBe(2);
    pending();
  });
});

add = (a, b, c) => {
  return a + b + c;
};

describe("add", () => {
  let addSpy, resulty;
  beforeEach(() => {
    addSpy = spyOn(window, "add").and.callThrough();
    result = addSpy(1, 2, 3);
  });
  it("is can have params tested", () => {
    expect(addSpy).toHaveBeenCalled();
    expect(addSpy).toHaveBeenCalledWith(1, 2, 3);
  });
  it("can have a return value tested", () => {
    expect(result).toEqual(6);
  });
});
