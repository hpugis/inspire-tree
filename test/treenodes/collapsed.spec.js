const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('TreeNodes.prototype.collapsed', function() {
    let tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            data: [{
                text: 'A',
                id: 1,
                children: [{
                    text: 'AA'
                }]
            }, {
                text: 'B',
                children: [{
                    text: 'BB'
                }]
            }]
        });
    });

    it('exists', function() {
        expect(tree.nodes().collapsed).to.be.a('function');
        expect(tree.collapsed).to.be.a('function');
    });

    it('returns collapsed nodes', function() {
        tree.node(1).expand();

        expect(tree.collapsed()).to.have.length(3);
    });
});
