import * as Task from "./Task"

// @ponicode
describe("getId", () => {
    let inst: any

    beforeEach(() => {
        inst = new Task.Task("03ea49f8-1d96-4cd0-b279-0684e3eec3a9")
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.getId()
        }
    
        expect(callFunction).not.toThrow()
    })
})
