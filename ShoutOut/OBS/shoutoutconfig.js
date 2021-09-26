// JavaScript source code
// Global Config for channel setup

var globalConfig = {
    clientid: '<clientID>',
    clientSec: '<clientSec>',
    channelName: '<Channel Name>',
    //oAuth Requires these scopes: channel:read:redemptions user:read:email chat:edit chat:read and if you want Clips clips:edit
    //Generate oAuth from twitchtokengenerator.com
    oAuth: '<oAuth>', //required only if you want to chat back, otherwise DO NOT TOUCH    
    channelClientID: '<client oAuth ID>' //This is clip client id
}

//ShoutoutRepeat
var AlwaysRepeat = 'brb';
var AlwaysRepeat2 = 'beback';
var AlwaysRepeatText = "Be Right Back";
var NoRepeat = 'hype';
var NoRepeat2 = 'hypes'
var NoRepeatText = 'HYPE';
var stop = 'off' //Stop BRB/Hyper.
var Repeat = 2; //Set to 0 if you want this to autostart without a command.

//Shoutout Cmds
var cmd1 = 'shoutout';
var cmd2 = 'so';
var cmd3 = 'SuperEvilMonkey420'
var cmd4 = 'SEM420'
var resetso = 'resetso'
var onRaid = 'RaidOn' //Auto Shoutout on Raids On!
var minRaid = 'RaidMin' //Change the Min to AutoShout On Raids live
var minCheer = 'CheerMin' //Change the Min to Auto shoutout on Cheer Live
var onCheer = 'CheerOn' //Auto Shoutout on Cheer
var ShoutOutDelayBits = 8000; //Shoutout Delay for Auto Cheer, in ms
var offRaid = 'RaidOff' //Turn AutoShout On Raid Off
var offCheer = 'CheerOff' //Turn Auto Shout On on Cheer Off
var onClip = 'ClipOn' //Turn on Clips
var offClip = 'ClipOff' //Turn Shoutout Clips off
var allOff = 'AllOff' //Turn off Everything
var allOn = 'AllOn' //Turn on Everything

var Everyone = 'oldman'; //Shouts out everyone with a Speak of 1 and drops into Chat a ShoutOut
var VipsOnly = 'agent47';//Shouts out VIP's (Array you listed at 2) and a Speak of 1
var SilentEVERYONE = 'leon';//Shouts out everyone with a Speak of 1, no Chat Spam
var SilentVips = 'saso';//Shouts out VIP's (Array you listed at 2) and a Speak of 1, no Chat Spam
//Shout User for String is @{user}
//Last Game They played is @{lastGame}
var ShoutOut =  'Go get to know @@{user} who was last seen playing @{lastGame}. You can give them a follow at https://twitch.tv/@{user}';
var RaidMsg = "You Deadset Legend! Thank you @{user} for the RAID!!! Everyone check out our Bark Lord Certified Friend @ https://www.twitch.tv/@{user} who was playing @{lastGame}";

//shoutVars
var RaidOn = true //Default to Raid Shout outs on!
var RaidMin = 1 //Min Viewers to Trigger
var CheerOn = true //Default to Cheer Shouts Outs on!
var CheerMin = 1 //Min Cheer to Trigger
var ClipOn = true //Allow Clip Shoutouts
var allowClip = true //Allow Clips
var recentClips = true //Do we go for recent clips or all.
var dateRange  = 30 //How many days back to look for clips
var dateRaidRange = 15 //How Many Days back to look for clips for Raids
var minClips = 5 //How Many Clips for recent do we need to pull to continue.


//Clip & Discord Vars
var clipcmd  = 'clip' //Make a Clip
var clipcmd2 = 'snap' //Alternate Make a Clip Command
var allowClip = true //Allow Clips
var ClipAllow = 'ChatClip' //Turns Chat clipping on and off
var ClipInterval = 5000; //How Long between creating clips, in ms
var ClipDelay = 5000; //How Many Seconds to wait before looking for the clip in ms (need to be at least 3000 ms)
var discordWebhook = '<Enter WebHook>'; //Webhook to Discord Channel to Post
var discordBot = 'Shamis Clip Bot' //Change this to match your discord if you want
var avatar_url = '<Enter Avatar URL Img>' //This is a public Internet facing Picture file for the Discord Avatar. Optional
var contentStr = '<Enter String>' //This is anything you want to put in front of the Message for your Clip.

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
    ,{ name: 'fossabot', gen:4, speak: 2}
];

//cheer Bits To Limit Auto shoutout
var cmdBits = [
    { name: '<channel Name>', bitties: 0}
  ]