// JavaScript source code
// Global Config for channel setup
var globalConfig = {    
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
//Do we use a Generic Sound
var GenSndOn = false;
var MaxMe = 5;
var Silence = 0;
var cmdMe = "me"
var silent = 'silence'
var quiet = 'quiet'
var wakeup = 'wakeup'
var CoolDown = 15000 //ms
var CoolUserDown = 15000 //ms
var CoolModDown = 500 //ms
var CoolVIPDown = 5000 //ms
var CoolSubDown = 7500 //ms

//Welcome User for String is @{user}
//Thank you DeviantDreamers for a wonderful way to great someone via Timezone. Love it!
var Welcome =  "Welcome in my good friend @{user}, it is wonderful that you stopped in. Hope your having an Awesome Timezone @{user}";


//User Sound List 
var clipsArray = [
    { name: '<username>', file: '<SoundFileForUser>', run: 0, pic: 0 }
    ,{ name: '<username2>', file: '<SoundFileForUser>', run: 0, pic: 0 }
    //Format to add more
    //,{ name: 'twitchname', file: 'soundfile', run: 0, pic: 0 }
    //Pic 1 will display channel Pic on Join.
];

var cmdArray = [
    { command: '<enter cmdname>', file: '<SoundFileName>', flag: '<Enter Users Flags>', say: '<Thing to Say Here>'},
   , { command: '<enter cmdname>', file: '<SoundFileName>', flag: '<Enter Users Flags>', say: '<Thing to Say Here>'},
   //Flags:
   // broadcaster, mod, vip, sub, all or Twitch User
   // broadcaster: broadcaster, mod: mod, vip: vip, sub : sub user:twitchName, all : all
   //Can combine broadcastermodvipsuball or anywhich way.
];  

var cmdUserArray = [
    { command: '<enter cmdname>', file: '<SoundFileName>', tuser: '<twitch user>', say: '<Thing to Say Here>' }
   ,{ command: '<enter cmdname>', file: '<SoundFileName>', tuser: '<twitch user>', say: '<Thing to Say Here>' }
   //Twitch User can be user name oelshamikingkira66 but if no user is required leave '<twitch user>'
];  

var cmdRewardArray = [
    { command: '<enter command>', file: '<SoundFileName>',  reward: '<enter reward name>', say: "<Thing to Say Here>", cmdsay: "<Thing to Say Here>"}
   ,{ command: '<enter command>', file: '<SoundFileName>',  reward: '<enter reward name>', say: "<Thing to Say Here>", cmdsay: "<Thing to Say Here>"}
];