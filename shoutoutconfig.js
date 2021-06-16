// JavaScript source code
// Global Config for channel setup

var globalConfig = {
    clientid: '<clientID>',
    clientSec: '<clientSec>',
    channelName: '<Channel Name>',
    //oAuth Requires these scopes: channel:read:redemptions user:read:email chat:edit chat:read
    //Generate oAuth from twitchtokengenerator.com
    oAuth: '<oAuth>' //required only if you want to chat back, otherwise DO NOT TOUCH
}

//ShoutoutRepeat
var AlwaysRepeat = 'brb';
var AlwaysRepeat2 = 'beback';
var AlwaysRepeatText = "Be Right Back";
var NoRepeat = 'hype';
var NoRepeat2 = 'hypes'
var NoRepeatText = 'HYPE';
var Repeat = 2; //Set to 0 if you want this to autostart without a command.

//Shoutout
var cmd1 = 'shoutout';
var cmd2 = 'so';
var cmd3 = 'SuperEvilMonkey420'
var cmd4 = 'SEM420'

var Everyone = 'oldman'; //Shouts out everyone with a Speak of 1 and drops into Chat a ShoutOut
var VipsOnly = 'agent47';//Shouts out VIP's (Array you listed at 2) and a Speak of 1
var SilentEVERYONE = 'leon';//Shouts out everyone with a Speak of 1, no Chat Spam
var SilentVips = 'saso';//Shouts out VIP's (Array you listed at 2) and a Speak of 1, no Chat Spam
//Shout User for String is @{user}
//Last Game They played is @{lastGame}
var ShoutOut =  'Go get to know @@{user} who was last seen playing @{lastGame}. You can give them a follow at https://twitch.tv/@{user}';

//Shoutout Title above, if you don't want a title set showTitle: false
var shoutoutConfig = {
    showTitle: true,
    title: '<Shoutout Title Text>'
}

//Gen 4 streamer/bots
//Gen 2 VIP
//Speak 2 - DO NOT SHOUTOUT
//Speak 1 - Always Shoutout
//Speak 0 - Only Shoutout when chat/lurking on Channel

var clipsArray = [
    { name: '<channel name>', gen: 4, speak: 2  }
    //VIP's 
    //,{name: <channelName>. gen: 2, speak: 0 } 
    ,{ name: '<VIP>', gen: 2, speak: 0 }
    ,{ name: '<VIP2>', gen: 2, speak: 0 }
    //Regulars
    //,{name: <channelName>. gen: 1, speak: 0 } 
    ,{ name: '<regular>', gen: 1, speak: 0 }
    //Well known Bots
    ,{ name: 'streamelements', gen:4, speak: 2}
    ,{ name: 'streamlabs', gen:4, speak: 2}
    ,{ name: 'nightbot', gen:4, speak: 2}
    ,{ name: 'moobot', gen:4, speak: 2}
    ,{ name: 'wisebot', gen:4, speak: 2}
    ,{ name: 'rainmaker', gen:4, speak: 2}
    ,{ name: 'SoundAlerts', gen:4, speak: 2}
];