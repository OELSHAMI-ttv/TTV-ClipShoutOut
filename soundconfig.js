// JavaScript source code
// Global Config for channel setup
var globalConfig = {
    clientid: '<clientId>',
    clientSec: '<clientSec>',
    channelName: '<ChannelName>',
    //oAuth Requires these scopes: channel:read:redemptions user:read:email chat:edit chat:read
    //Generate oAuth from twitchtokengenerator.com
    oAuth: '<oAuth>' //required only if you want to chat back, otherwise DO NOT TOUCH
}

const boardCAST = globalConfig.channelName;
const GenericConst = 60;
var Generic = 0;
//Sound can be wav/mp3/ogg (as tested, more may be supported)
var GenSnd = '<GenericSoundGreeting.mp3>';
var MaxMe = 5;
var Silence = 0;

//Welcome User for String is @{user}

var Welcome =  "Welcome in my good friend @{user}, it is wonderful that you stopped in. Hope your having an Awesome Timezone @{user}";


//User Sound List 
var clipsArray = [
    { name: '<username>', file: '<SoundFileForUser>', run: 0 }
    ,{ name: '<username2>', file: '<SoundFileForUser>', run: 0 }
    //Format to add more
    //,{ name: 'twitchname', file: 'soundfile', run: 0 }
];