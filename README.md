# Portfolio Website by Mohit (Created with Angular)
My Portfolio - https://mohitbhole.com/

This is a customizable template to make a (most SDE) portfolio for yourself! No major programming experience or Angular/JS Knowledge Required.
Hosting this portfolio is COMPLETELY FREE, and you can also buy a domain of your name to display your website. Look into this at - 

https://dev.to/happyharis/firebase-hosting-with-namecheap-domains-30gk
#### Don't be intimidated by all the code. Just follow the instructions exactly and you'll have your website in no time!

## Installation

1. Clone this repository or Download and extract the zipped repo.
2. Run 'npm install' in the terminal at the directory of the download.
3. The project is ready to be run or customized.
4. Try my (default) portfolio out by simply running 'ng serve --open' in the terminal.

## Usage
This portfolio relies on the "src/assets/" folders to make all the customizations (that I allow so that it can be modded).

###### /src/assets/images - This folder contains your profile pictures and icon. Put the files here accordingly, preferably in the formats - .ico for Icon and .png for Profile Pictures. For any of these files, you can choose to rename them or not, you will have the option to put the new filenames in the options later.

###### /src/assets/requiredassets - Leave this folder alone.

###### /src/assets/skilllogos - This folder should contain a series of .png images of your technical (or not) skills. You can look at mine for reference. These will be displayed on the webpage directly without any customization. Make sure the filenames are in the format - 1.png,2.png,3.png...

###### /src/assets/projects - This is where all your photos and videos for your academic (or not) projects go.

###### /src/assets/userprofile.json - This holds the main configuration and all of your profile data. To start customizing it as your own, open this json file in Notepad++/Notepad/VSCode/Preferred Editor and make edit it accordingly. Every single line has significance, so look through the whole thing. Use my values as reference.

### Use this as reference when you customize your - userprofile.json. I am adding comments and text to explain the properties. I strongly discourage using this text as your userprofile.json due to this.
```
{
   These are quite straightforward - 

  "name": "your name here",

  "maintitle": "your professional title",

  "homehellointro": "greet your viewers here",

  "homeprofilepiclink": "name of the profile picture image you put in src/images/ ex: profile_home.png",

  "homeintro": "small intro paragraph",

  "homeexperienceintro": "ex: Here's my skills and experiences. Check them out!",

  "identifiers": [
    {
      "title": "ex: A Software Developer_"
    },
    {
      "title": "ex: A Problem-Solver_"
    },
    {
      "title": "ex: A Critical Thinker_"
    },
    {
      "title": "ex: An Innovator_"
    }
  ],

  "numskilllogos": 14,
   This is the number of skill logos you put. no quotation marks should be added here.

  "experience": [

    {
      "positiontitle": "position-title1",
      "company": "company1",
      "timeperiod": "timeperiod1",
      "bullet1": "• this is what I did in my job.",
      "bullet2": ""
    },

    {
      "positiontitle": "position-title2",
      "company": "company2",
      "timeperiod": "timeperiod21",
      "bullet1": "• this is what i did at this job.",
      "bullet2": ""
    },

    You can add as many experiences or projects as you want. Just copy the part starting from '{' and ending at '},'

  ],
  "projectsheadline": "My Projects",

  "projectsintro": "Here are some of my solo and team programming projects",

  "projects": [

    {
      "title": "project1",
      "medialink": "Sensory Devices.mp4",
      OPTIONAL name of the project video you put in src/projects/

      "mediaorientation": "portrait"
      OPTIONAL, REQUIRED IF there is a medialink or an imglink. valid values: landscape / portrait,

      "description": "A mobile application built to control a remotely inflatable pressure cuff I made with Arduino to calm autistic students experiencing a sensory overload. The prototype is being tested, and teams are still working to build this. Updates here - https://sites.utdallas.edu/epics-autism-center/updates/"
     A Description for your project
    },

    {
      "title": "My ReactJS Portfolio",
      "imglink": "React-Portfolio.png"
      OPTIONAL name of the project image you put in src/projects/

      "mediaorientation": "landscape"
      OPTIONAL, REQUIRED IF there is a medialink or an imglink. valid values: landscape / portrait,

      "description": "A little more quirky than this one, my React portfolio is hosted - <a href=\"https://mohitbhole.com/alt-portfolio\">here</a> ."
      A Description for your project
    },

    You can add as many experiences or projects as you want. Just copy the part starting from '{' and ending at '},'
  ],

  "resumeiframesrc": "ex: https://onedrive.live.com/embed?cid=38128077D4A08E1D&resid=38128077D4A08E1D%211072&authkey=ACCnR7RrisBRyoQ&em=2",
   I Used Onedrive for embedding the pdf file. Click on 'Embed' in Onedrive and copy the url link seen inside the 'src=' tag. Put it here.

  "resumeiframeresourceurl": "width=\"476\" height=\"288\" frameborder=\"0\" scrolling=\"no\"",
   Leave this as is for most cases. If sizing is wrong, you can mess around with this and see if anything changes. If not, you will have to dig in the code.

  "photosinstagram": "moiiiiit",
   This is your instagram link. You can leave this blank.

  "photosvsco": "moiiiiit",
   This is your vsco link. You can leave this blank.

  "aboutnormal": "I am a Master's student studying Computer Science at the University of Texas at Dallas actively seeking full time jobs starting August 2022. I am an international student. My primary interests in the field of Computer Science are Machine Learning and Software Development. My passion for this has been very much aroused by hackathons and project experiences throughout college . I know JavaScript, Java, and Python and have a functional understanding of C#, HTML, Bash and GoLang. My technical and conceptual interests lie in web-development, app-development, and machine learning applications in everyday life.",
   Introduction Paragraph

  "aboutlight": "My college GPA is 3.8/4.0 and my undergraduate GPA was 3.8/4.0 at the same university.",
   More Introduction

  "aboutprofilepicdesc": "This is me in my graudation robe!",
   Description for the second profile pic (located in the About tag)

  "aboutcasualnormal": "In my free time, I enjoy Rock Climbing, playing Valorant, Volunteering with campus organizations, Hiking and Travelling. Feel free to connect with me and send a message. I'll be very happy to talk!",
   More Introduction, a little more casual this time, maybe.

  "contactlinkedinlink": "https://www.linkedin.com/in/mohitbhole/",
   Your LinkedIn url. You can leave this blank.

  "contactemaillink": "mailto:mohitbhole@outlook.com",
   Your Email url. You can leave this blank.

  "contactgithublink": "https://www.github.com/moiiiiit",
   Your Github url. You can leave this blank.

  "altportfoliolink": "https://mohitbholeportfolio.web.app/",
   Leave as is (to support and credit me) or add a link to your alternate portfolio. Accessible at - website/alt-portfolio.

  "contactemail": "mohitbhole@outlook.com"
   Your Email. You can leave this blank.
}

```

Once This is done, make sure you have your website as you'd like. This can be done as previously stated: open terminal and navigate to the folder - angular-portfolio. Then run the command 'ng serve --open'. This should run the website in your browser, and if it doesn't, go to http://localhost:4200/ 

To Deploy - 

1. You can use this tutorial - https://www.positronx.io/deploy-angular-8-app-to-firebase/
2. Create a firebase account on https://firebase.google.com/
3. Run the command - firebase login . Login with Google as instructed. If there are errors, run - npm install -g firebase-tools and try again.
4. Run the command - firebase init .
5. Select y to continue, select Create a New Project, then once prompted to select CLI features, press spacebar on 'Hosting: Configure and Deploy...', and click Enter.
6. When it asks for public directory, enter - dist/angular-portfolio
7. Run the command - ng build --aot
8. Run the command - firebase deploy
9. You'll be returned with the Hosting URL. Open this link to access your portfolio. You're done, congratulations.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

Please don't copy this portfolio and claim it as your own code/creation. 

## Send this to your friends and family if you know anyone could benefit from this!
