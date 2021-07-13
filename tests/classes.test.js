const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Team = require("../lib/Team");


describe("Team class", () => {
    describe("Initialization", () => {
      
      it("should return an object containing a 'name' property", () => {
        const obj = new Team();
        expect("name" in obj).toEqual(true);
      });
  
      it("should return an object containing a 'teamMembers' property", () => {
        const obj = new Team();
        expect("teamMembers" in obj).toEqual(true);
      });
  
      it("should default 'teamMembers' to an empty array", () => {
        const obj = new Team();
        expect(obj.teamMembers.length).toEqual(0);
      });
  
    })
  })

  describe("Employee class", () => {
    describe("Initialization", () => {
      
      it("should return an object containing a 'name' property", () => {
        const obj = new Employee();
        expect("name" in obj).toEqual(true);
      });
  
      it("should return an object containing a 'id' property", () => {
        const obj = new Employee();
        expect("id" in obj).toEqual(true);
      });
      it("should return an object containing a 'email' property", () => {
        const obj = new Employee();
        expect("email" in obj).toEqual(true);
      });
      it("should return an object containing a 'role' property", () => {
        const obj = new Employee();
        expect("role" in obj).toEqual(true);
      });
  
    })
  })

  describe("Manager class", () => {
    describe("Initialization", () => {
      
      it("should return an object containing a 'officeNumber' property", () => {
        const obj = new Manager();
        expect("officeNumber" in obj).toEqual(true);
      });
      it("should return an object containing a 'role' property which should equal manager", () => {
        const obj = new Manager();
        expect( obj.role).toEqual("manager");
      });
  
    })
  })

  describe("Engineer class", () => {
    describe("Initialization", () => {
      
      it("should return an object containing a 'github' property", () => {
        const obj = new Engineer();
        expect("github" in obj).toEqual(true);
      });
      it("should return an object containing a 'role' property which should equal manager", () => {
        const obj = new Engineer();
        expect(obj.role).toEqual("engineer");
      });
  
    })
  })
  describe("Intern class", () => {
    describe("Initialization", () => {
      
      it("should return an object containing a 'school' property", () => {
        const obj = new Intern();
        expect("school" in obj).toEqual(true);
      });
      it("should return an object containing a 'role' property which should equal manager", () => {
        const obj = new Intern();
        expect(obj.role).toEqual("intern");
      });
  
    })
  })
