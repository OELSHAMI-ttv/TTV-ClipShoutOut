Basic setup for ShoutOut for OBS these are the basic Setup Directions:

    1. Download ShoutOutReleaseOBS.html/shoutoutconfig.js to your a Directory locally
    
    2. Create Your dev.twitch.tv Application and get the ClientID and Client Secret
    
    3. Open shoutoutconfig.js
    
    4. On Line 5 replace The <clientId> with your ClientID you generated above
    
    5. On Line 6 replace the <clientSec> with your Client Secret  you generated above
    
    6. On Line 7 replace the <channel Name> with your Twitch Channel Name.
    
    7. If You want to use a different Cmd the !so or !shoutout change Lines 23, 24 to match what you want on your channel.
    
    8. To change the ShoutOut Title go to Line 39 and Change the text to whatever you'd like to appear about the Shoutout before the Persons name. If you don't want a title, selt line 38 to false.
    
    9. Save the file and add ShoutOutOBS.html as a browser source to the OBS Scenes you want the ShoutOuts to Appear on.
    
    10. Test a ShoutOut by using your ShoutOut Command from Chat. You should see it appear shortly after sending the command.
    

Basic setup for ShoutOut Repeat for OBS:

    1. Download ShoutOutrepeatReleaseOBS.html/shoutoutconfig.js to your a Directory locally (if you already setup shoutoutconfig.js for ShoutOutReleaseOBS.html above, then skip downloading and steps 2 - 6)
    
    2. Create Your dev.twitch.tv Application and get the ClientID and Client Secret
    
    3. Open shoutoutconfig.js
    
    4. On Line 5 replace The <clientId> with your ClientID you generated above
    
    5. On Line 6 replace the <clientSec> with your Client Secret  you generated above
    
    6. On Line 7 replace the <channel Name> with your Twitch Channel Name.
    
    7. To Change the Be Right Back Text, goto line 16 and change the Be Right Back Text to anything you like.
    
    8. To Change the HYPE Text, goto Line 19 and chante HYPE Text to anything you like.
    
    9. To Start an never ending Loop of your clips the Broadcaster send !brb in your Chat
    
    10. To play through up to 100 clips and stop send !hype in chat.
    
