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
  let addSpy, result;
  beforeEach(() => {
    addSpy = spyOn(window, "add").and.callThrough();
    result = addSpy(1, 2, 3);
  });
  it("is can have frequency tested", () => {
    expect(addSpy.calls.any()).toBe(true);
    expect(addSpy.calls.count()).toBe(1);
  });
  it("is can have params tested", () => {
    expect(addSpy).toHaveBeenCalled();
    expect(addSpy).toHaveBeenCalledWith(1, 2, 3);
  });
  it("can have a return value tested", () => {
    expect(result).toEqual(6);
  });
});

describe("a simple setTimeout", () => {
  let sample;
  beforeEach(() => {
    sample = jasmine.createSpy("sampleFunction");
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it("is only invoked after 1000 milliseconds", () => {
    setTimeout(() => {
      sample();
    }, 1000);
    jasmine.clock().tick(999);
    expect(sample).not.toHaveBeenCalled();
    jasmine.clock().tick(1);
    expect(sample).toHaveBeenCalled();
  });
});

describe("a simple setInterval", () => {
  let dummy;
  beforeEach(() => {
    dummy = jasmine.createSpy("dummyFunction");
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it("checks to see the number of times the function is invoked", () => {
    setInterval(() => {
      dummy();
    }, 1000);
    jasmine.clock().tick(999);
    expect(dummy.calls.count()).toBe(0);
    jasmine.clock().tick(1000);
    expect(dummy.calls.count()).toBe(1);
    jasmine.clock().tick(1);
    expect(dummy.calls.count()).toBe(2);
  });
});

getUserInfo = username => {
  return $.getJSON(`https://api.github.com/users/${username}`);
};

describe("#getUserInfo", () => {
  it("returns the correct name for the user", done => {
    getUserInfo("FSDonnelly").then(data => {
      expect(data.name).toBe("Frank Donnelly");
      done();
    });
  });
});
