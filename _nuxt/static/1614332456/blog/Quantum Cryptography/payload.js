__NUXT_JSONP__("/blog/Quantum Cryptography", (function(a,b,c,d,e,f,g,h,i){return {data:[{blog:{name:f,titleImage:"010321\u002Ftitle",briefdesc:h,postDate:"February 26, 2021",toc:[{depth:2,text:i}],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"\n  Quantum cryptography, also called quantum encryption, applies principles of\n  quantum mechanics to encrypt messages in a way that it is never read by anyone\n  outside of the intended recipient. It takes advantage of quantum’s multiple\n  states, coupled with its \"no change theory\", which means it cannot be\n  unknowingly interrupted.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Performing these tasks requires a quantum computer, which have the immense\n  computing power to encrypt and decrypt data. A quantum computer could quickly\n  crack current public-key cryptography.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:b,tag:g,props:{},children:[{type:a,value:"Why is quantum cryptography important?"}]},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Companies and governments around the world are in a quantum arms race, the\n  race to build the first usable quantum computer. The technology promises to\n  make some kinds of computing problems much easier to solve than with today’s\n  classical computers.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  One of those problems is breaking certain types of encryption, particularly\n  the methods used in today’s Public Key Infrastructure (PKI), which underlies\n  practically all of today’s online communications. Instead of solving one\n  problem at a time, with quantum computing we can solve thousands of problems\n  at the same processing speed, with the same processing power. Things that\n  would take hundreds of days today could take just hours on a quantum computer.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  The commercial quantum computers available today are still far from being able\n  to do that. The theories have advanced farther than the hardware. However, we\n  shouldn’t wait for the hardware to motivate the switch to post-quantum\n  cryptography.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:b,tag:g,props:{},children:[{type:a,value:"How to defend against quantum cryptography?"}]},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Longer keys are the first line of defence against quantum encryption and\n  pretty much everybody is on board with that. Longer keys make encryption\n  slower and more costly and the key length will have to increase substantially\n  to stay ahead of quantum computers.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Another option is to use symmetric encryption for the messages themselves,\n  then use asymmetric encryption just for the keys. This is the idea behind the\n  Transport Layer Security (TLS) online standard.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Many researchers are also looking at ways to create new kinds of encryption\n  algorithms that would still allow public and private keys but be proof against\n  quantum computers. For example, it’s easy to multiply two prime numbers\n  together but very difficult to break a large number back up into its prime\n  factors. Quantum computers can do it and there are already known quantum\n  techniques that could solve the factoring problem and many similar approaches.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  However, there’s no known quantum method to crack lattice-based encryption,\n  which uses cryptographic algorithms built around lattices. Lattice\n  cryptography is the one that looks to be the favourite at the moment, simply\n  because it’s the most practical to implement.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  The best solution could be a combination of post-quantum algorithms like\n  lattice-based encryption for the initial communication to securely exchange\n  keys, then using symmetric encryption for the main messages.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Can we really rely on lattice-based encryption or similar algorithms to be\n  safe? You can’t guarantee that your post-quantum algorithm will be secure\n  against a future quantum computer that uses some unknown quantum algorithm.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:b,tag:g,props:{},children:[{type:a,value:"Quantum key distribution is unhackable, in theory!"}]},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  This is where the laws of quantum physics can come to the rescue. Quantum key\n  distribution (QKD) is a method of sending encryption keys using some very\n  peculiar behaviours of subatomic particles that is, in theory at least,\n  completely unhackable. The land-based version of QKD is a system where photons\n  are sent one at a time through a fibreoptic line. If anyone is eavesdropping,\n  then, according to the principles of quantum physics, the polarization of the\n  photons is affected, and the recipient can tell that the message isn’t secure.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  However, the technology is extremely slow and requires expensive equipment to\n  send and receive the individual photons. A customer would need to buy a\n  transmitter and a receiver - both very costly as of now. It’s not too terribly\n  different from other high-speed fibre optics communication equipment and the\n  price will come down over time as more companies provide the hardware.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  The big breakthrough last year was that QKD systems no longer require special\n  pipes. Now it looks like they’ll be able to use existing fibre networks, so\n  they don’t have to lay new fibre.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Then there’s the satellite-based approach. This one uses the principle of\n  entanglement, which Einstein called “spooky action at a distance” and refused\n  to believe was real. Turns out, it is real and there is a quantum\n  communication satellite up and working for a couple of years now.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Entanglement isn’t about instantaneous communications that break the speed of\n  light speed limit. The way that it works is that two particles become\n  entangled so that they have the same state and then one of these particles is\n  sent to someone else. When the recipient looks at the particle, it’s\n  guaranteed to be the same state as its twin.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  If one of those particles changes, it doesn’t mean that the other particle\n  instantly changes to match - it’s not a communication system. Plus, the state\n  of the two entangled particles, while identical, is also random. So, you can’t\n  send a message, but you can send an encryption key, because what you really\n  want in a key is a sequence of random digits.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Now that the sender and the receiver both have the same random key, they can\n  then use it to send messages using symmetric encryption over traditional\n  channels. To receive the signals, companies would need to put something that\n  looks like a telescope on their rooftops and then install some processing\n  equipment.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Neither ground-based nor satellite-based quantum key distribution is practical\n  for general use since both require very specialised and expensive equipment.\n  It could, however, be useful for securing the most critical and sensitive\n  communications.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:b,tag:g,props:{},children:[{type:a,value:"The limits of quantum key distribution"}]},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  If the integrity of the keys can be perfectly guaranteed by QKD, does that\n  mean that unhackable communications are within our reach?\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Most hackers, when they break into things, they hardly go head-on. They go\n  around the side, and that's where you'll find problems with these\n  implementations. Today’s attackers, while they could, in theory, listen in to\n  traffic over fibreoptic lines, typically don’t do that.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  There are far easier ways to read the messages, such as getting to the\n  messages before they are encrypted or after they are decrypted or using\n  man-in-the-middle attacks.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Additionally, QKD requires the use of relays. Unless the sender and the\n  recipient build a pipe that goes directly between their two offices, and the\n  distance is short enough that the messages don’t degrade — about 60 miles or\n  less with current technology — there will be plenty of opportunities for\n  hackers. QKD networks will need repeaters when messages travel long distances.\n  Those repeaters are going to become weak points and someone could hack in and\n  get the key.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Also, QKD networks will need to be able to route messages, and that means\n  routers and hubs, each of which is also a potential point of vulnerability.\n  Physicists can say, this is absolutely secure, but there’s a danger in that,\n  in thinking that just because you’re using QKD that you’re secure. Sure, the\n  laws of physics apply, but there might be ways around them.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Besides the security problems, it’s not realistic to expect that every\n  internet user will have access to an QKD endpoint anywhere in the near future.\n  That means, except for the most sensitive, high-value communications, better\n  encryption algorithms are the way to go.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c}]},{type:b,tag:"h2",props:{},children:[{type:a,value:i}]},{type:a,value:c},{type:b,tag:e,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\n  Disclaimer : The views and opinions expressed in the article belong solely to\n  the author, and not necessarily to the author's employer, organisation,\n  committee or other group or individual.\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:b,tag:d,props:{},children:[]},{type:b,tag:d,props:{},children:[]}]},dir:"\u002Fblogs",path:"\u002Fblogs\u002FQuantum Cryptography",extension:".md",slug:f,createdAt:"2021-02-26T09:21:45.339Z",updatedAt:"2021-02-26T09:32:49.354Z"},title:f,description:h,ogImage:"\u002Fimg\u002Fblog\u002F010321\u002Ftitle.jpg",params:{slug:f}}],fetch:[],mutations:[["pageTitle\u002Fset","BLOG"]]}}("text","element","\n","br","p","Quantum Cryptography","b","The need for quantum cryptography at the impending dawn of quantum computing.","We are probably decades away from the point at which quantum computers can\n  be used to break today’s RSA encryption. There’s plenty of time to upgrade to\n  newer encryption algorithms.")));