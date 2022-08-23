const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');
const app = require('../../src/app');
const cacao = require('../../src/files/cacaoTrybeFile.json');

chai.use(chaiHttp);

const { expect } = chai;

const mockFile = JSON.stringify(cacao);

beforeEach(() => {
  sinon.stub(fs.promises, 'readFile').resolves(mockFile);
});

afterEach(() => {
  sinon.restore();
});

describe('GET requisition on /chocolates endpoint', function () {
  it('should return complete list of chocolates', async function () {
    const output = [
      { id: 1, name: 'Mint Intense', brandId: 1 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];

    const response = await chai
      .request(app)
      .get('/chocolates');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolates).to.deep.equal(output);
  });
});

describe('GET requisition on /chocolates/:id to fetch ID 4', function () {
  it('Should return the chocolate Mounds', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/4');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolate).to.deep.equal([
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      }]);
  });
});

describe('GET requisition on /chocolates/brand/:brandId to fetch brandId 1', function () {
  it('should return chocolates from brands Lindt & Sprungli', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/brand/1');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolates).to.deep.equal([
      {
        id: 1,
        name: 'Mint Intense',
        brandId: 1,
      },
      {
        id: 2,
        name: 'White Coconut',
        brandId: 1,
      },
    ]);
  });
});