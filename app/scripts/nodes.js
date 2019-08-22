'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    ETHO: "FUNC"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETHO, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.ETHO];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETHO, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'eth_mew': {
        'name': 'FUNCOIN',
        'blockExplorerTX': 'https://explorer.funcoin.io/#/tx/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.funcoin.io/addr/[[address]]',
        'type': nodes.nodeTypes.ETHO,
        'eip155': true,
        'chainId': 6832,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'node.funcoin.io',
        'lib': new nodes.customNode('https://node.funcoin.io', '')
    },
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
