# TTV-ClipShoutOut
TTV Browser Source to display Clips from Streamers who get Shout Outs.
This requires a Twitch Dev Account and an Application setup to get an ApplicationId and It's Secert to do Application oAuth.
Once you set that up replace the values in the appropriate location in the code.
Currently it will launch on a !so and !bl command from Broadcaster and mods. Feel free to modify as your channel requires.
Video explaining how to setup the source is here https://www.youtube.com/watch?v=sKsI6kenlRw

Everyone who viewed the current YT Code this is the new Code with new videos coming.

Alpha code:
1. Seperating files for OBS/StreamLabs OBS from StreamElements, to allow for OBS to use a general Configfile and code update easier
2. ShoutOutReleaseOBS has some new features allowing us to Shoutout everyone in Chat based some lurking/chatting as well as the ability to 
to do the Shoutout back into Chat for you removing the need for a Bot Account like Streamlabs/NightBot etc to do it for you if you wish.
3. ShoutoutrepeatRelease is for BRB/Hype.
4. SoundForUsersOBS.htm will play a sound for specific users when lurking or speaking for the first time in Chat, as well as greet them if an oAuth Key is supplied
