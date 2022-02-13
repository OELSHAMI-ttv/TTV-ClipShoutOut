var globalConfig = {
    channelName: '<Channel Name>',
    //oAuth Requires these scopes: channel:read:redemptions user:read:email chat:edit chat:read and if you want Clips clips:edit
    //Generate oAuth from twitchtokengenerator.com
    oAuth: '<oAuth>',  
    channelClientID: '<client oAuth ID>' //This is clip client id
}

//Welcome User for String is @{user}
//Thank you DeviantDreamers for a wonderful way to great someone via Timezone. Love it!
var Welcome =  [
 { welstr: "Welcome in my good friend @{user}, it is wonderful that you stopped in. Hope your having an Awesome Timezone @{user}", team: '<Team Name>'}
,{ welstr: "Welcome in my good friend @{user}, it is wonderful that you stopped in. Checkout this amazing member of the @{team} @ https://twitch.tv/@{user}", team: 'The Kitty Cast'}
,{ welstr: "Welcome in my good friend @{user}, it is wonderful that you stopped in. Checkout a great memember of the @{team} at https://twitch.tv/@{user}", team: 'The Grave Keepers'}
];

var teamTwitchArr = [
    { team: 'thegravekeepers'}
];

defaultShout = "Welcome in my good friend @{user}, it is wonderful that you stopped in. Checko them out at https://twitch.tv/@{user}"

var ShoutOutArray = [
     { name: '<user name>', team: '<team name>', speak: 0}     
    ,{ name: '<user name>', team: '<team name>', speak: 0}
    ,{ name: 'valgal248', team: 'The Kitty Cast', speak: 0}
]

//Configurations
onBot = 'TRUE'; //Used to turn Bot on and Off
onChat = 'TRUE';  //When Someone Chats for the first Time Shoutout if on Team
onLurk = 'FALSE'; //When Someone Joins IRC Chat Channel Shoutout if on Team
//Cmds
//General Commands
cmdReset = 'tbreset'; //Resets the  OBS Source. Will reload page. Shoutout's Will refire
cmdDisable = 'tboff'; //This will stop processing Shouts Outss
cmdEnable = 'tbon';  //This will start processing Shout Outs 
//Turn OnJoin Detection On/Off
cmdLurkOn = 'tblon';
cmdLurkOff = 'tbloff';
//Turn OnChat Detection On/Off
cmdChatOn = 'tbCon';
cmdChatOff = 'tbCOff';
//Shoutout Link to GitHub Where Code is Hosted/Credit Shami
cmdCredit = 'tbShami'
creditStr = 'If you would like the code to the Team ShoutOut Bot, check out @OELSHAMI Github page for the files that you can freely use, https://github.com/OELSHAMI-ttv/TTV-ClipShoutOut';