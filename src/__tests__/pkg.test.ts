import path from 'path';
import { GetPKGInfo } from '../helpers/pkg';
import { readJson } from 'fs-extra';

describe("GetPKGInfo", () => {
    it("should return the package.json content", async () => {
        // Act
        const pkg = await GetPKGInfo();
        const result = await readJson(path.join(__dirname, "..", "..", "package.json"));
        
        expect(pkg).toEqual(result);
    });
});