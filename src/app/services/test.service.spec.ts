import { TestService } from "./test.service"

describe("TheTestService", () => {
  let testService : TestService;

  beforeEach(() => {
    testService = new TestService();
  })

  it("Get User from function", () => {
    let {email, age} = testService.getUser();
    expect(email).toEqual("test@test.com");
    expect(age).toEqual(32);
  })

  it("Should return Apple", () => {
    const obs$ = testService.getFruits();
    obs$.subscribe(data => {
      expect(data).toEqual("Apple");
    })
  })

  it("Should return 'You can win'", () => {
    testService.getBooks().then(response => {
      expect(response).toEqual("You can win");
    })
  })
})
