const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('TreeNode.prototype.states', function() {
    let tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            data: [{
                text: 'A',
                id: 1
            }]
        });
    });

    it('exists', function() {
        expect(tree.node(1).states).to.be.a('function');
    });

    it('returns an array of states', function() {
        const states = tree.node(1).states(['selected', 'collapsed']);
        expect(states).to.have.length(2);
        expect(states[0]).to.be.false;
        expect(states[1]).to.be.true;
    });

    it('sets multiple states to a new value', function() {
        tree.node(1).states(['selected', 'collapsed'], false);
        const states = tree.node(1).states(['selected', 'collapsed']);

        expect(states).to.have.length(2);
        expect(states[0]).to.be.false;
        expect(states[1]).to.be.false;
    });
});
