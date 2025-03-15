const { GetPKGInfo } = require("../dist/helpers/pkg");
const pkg = require('../package.json');

test('pkg info is equal to package.json', () => {
    GetPKGInfo()
    .then(info => expect(info).toEqual(pkg))
    .catch(err => console.error("package.json equality check error: ", err));
})