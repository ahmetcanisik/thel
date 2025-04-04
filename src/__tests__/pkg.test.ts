import { GetPKGInfo } from '../helpers/pkg';

describe("GetPKGInfo", () => {
    it("should return the package.json content", async () => {
        // Act
        const result = await GetPKGInfo();
        
        // Assert
        expect(result).toBeDefined();
        expect(result.name).toBe("thel");
        expect(result.version).toBe("0.4.0");
        expect(result.description).toBe("The terminal helper");
        expect(result.main).toBe("./dist/index.js");
        expect(result.license).toBe("MIT");
        
        // Check that it has the expected structure
        expect(result.scripts).toBeDefined();
        expect(result.dependencies).toBeDefined();
        expect(result.devDependencies).toBeDefined();
    });
});