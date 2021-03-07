__NUXT_JSONP__("/blog/Blockchains - How and Why", (function(a,b,c,d,e,f,g,h){return {data:[{blog:{name:f,titleImage:"221120\u002Ftitle",briefdesc:g,postDate:"November 22, 2020",toc:[],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"\n  Blockchains are incredibly popular nowadays. But what is a blockchain? How do\n  they work, what problems do they solve and how can they be used?\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Like the name indicates, a blockchain is a chain of blocks that contains\n  information. This technique was originally described in 1991 by a group of\n  researchers and was originally intended to timestamp digital documents so that\n  it’s not possible to backdate them or to tamper with them. Almost like a\n  notary. However, it went by mostly unused until it was adapted by Satoshi\n  Nakamoto in 2009 to create the digital cryptocurrency Bitcoin.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  A blockchain is a distributed ledger that is completely open to anyone. They\n  have an interesting property: once some data has been recorded inside a\n  blockchain, it becomes very difficult to change it.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"So how does that work?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Well, let’s take a closer look at a block. Each block contains some data, the\n  hash of the block and the hash of the previous block. The data that is stored\n  inside a block depends on the type of blockchain.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  The Bitcoin blockchain for example stores the details about a transaction,\n  such as the sender, receiver and amount of coins.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  A block also has a hash. You can compare a hash to a fingerprint. It\n  identifies a block and all of its contents and it's always unique, just as a\n  fingerprint.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Once a block is created, its hash is being calculated. Changing something\n  inside the block will cause the hash to change. So, in other words: hashes are\n  very useful when you want to detect changes to blocks. If the fingerprint of a\n  block changes, it no longer is the same block.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  The third element inside each block is the hash of the previous block. This\n  effectively creates a chain of blocks and it’s this technique that makes a\n  blockchain so secure.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Let's take an example. Let’s assume, we have a chain of 3 blocks. Each block\n  has a hash and the hash of the previous block. So, block number 3 points to\n  block number 2 and number 2 points to number 1. Now the first block is a bit\n  special, it cannot point to previous blocks because it's the first one. We\n  call this the genesis block. Now let's say that you tamper with the second\n  block. This causes the hash of the block to change as well. In turn that will\n  make block 3 and all following blocks invalid because they no longer store a\n  valid hash of the previous block. So, changing a single block will make all\n  following blocks invalid.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  But using hashes is not enough to prevent tampering. Computers these days are\n  very fast and can calculate hundreds of thousands of hashes per second. You\n  could effectively tamper with a block and recalculate all the hashes of other\n  blocks to make your blockchain valid again. So, to mitigate this, blockchains\n  have something called proof-of-work. It's a mechanism that slows down the\n  creation of new blocks. In Bitcoins case: it takes about 10 minutes to\n  calculate the required proof-of-work and add a new block to the chain. This\n  mechanism makes it very hard to tamper with the blocks, because if you tamper\n  with 1 block, you'll need to recalculate the proof-of-work for all the\n  following blocks.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  So, the security of a blockchain comes from its creative use of hashing and\n  the proof-of-work mechanism. But there is one more way that blockchains secure\n  themselves and that's by being distributed.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Instead of using a central entity to manage the chain, blockchains use a\n  peer-to-peer network and anyone is allowed to join. When someone joins this\n  network, he gets the full copy of the blockchain. The node can use this to\n  verify that everything is still in order. Now let's see what happens when\n  someone creates a new block. That new block is send to everyone on the\n  network. Each node then verifies the block to make sure that it hasn't been\n  tampered with. If everything checks out, each node adds this block to their\n  own blockchain. All the nodes in this network create consensus. They agree\n  about what blocks are valid and which aren't. Blocks that are tampered with\n  will be rejected by other nodes in the network. So, to successfully tamper\n  with a blockchain you'll need to tamper with all blocks on the chain, redo the\n  proof-of-work for each block and take control of more than 50% of the\n  peer-to-peer network. Only then will your tampered block become accepted by\n  everyone else. This is almost impossible to do!\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Blockchains are also constantly evolving. One of the more recent developments\n  is the creation of smart contracts. These contracts are simple programs that\n  are stored on the blockchain and can be used to automatically exchange coins\n  based on certain conditions.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  The creation of blockchain technology peaked a lot of people’s interest. Soon,\n  others realized that the technology could be used for other things like\n  storing medical records, creating a digital notary or even collecting taxes.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Disclaimer : The views and opinions expressed in the article belong solely to\n  the author, and not necessarily to the author's employer, organisation,\n  committee or other group or individual.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:b,tag:d,props:{},children:[]},{type:b,tag:d,props:{},children:[]}]},dir:"\u002Fblogs",path:"\u002Fblogs\u002FBlockchains - How and Why",extension:".md",slug:h,createdAt:"2020-11-21T12:27:55.654Z",updatedAt:"2020-11-21T12:34:03.309Z"},title:f,description:g,ogImage:"\u002Fimg\u002Fblog\u002F221120\u002Ftitle.jpg",params:{slug:h}}],fetch:[],mutations:[["pageTitle\u002Fset","BLOG"]]}}("text","element","\n","br","p","Blockchains - How and Why?","The basic structure and functioning of the blockchains.","Blockchains - How and Why")));