<a name="beginning"></a>

# Website about Kumis - [kumis.top](https://kumis.top)

### Hi, I'm Denis, and I developed my own website about kumiss. Kumis (the national drink of Kazakhstan), also known as horse milk, is a local meme among my friends. Therefore, I decided to make a small website that will tell other Internet users about this drink.

### During development I used vue and node.js

### You can watch [short video review](https://youtu.be/KMbhWf6lDHY), or you can read this post

![screen](https://github.com/DenisGradov/Kumis/git-imgs/allSite.png?raw=true)

### Chapters

- [To the beginning](#beginning)
- [Header](#Header)
- [About kumiss](#About_kumys)
- [About us](#About_us)
- [Features](#Features)
- [Site launch](#launch)
- [ToDo list](#there_list)
- [Version log](#log)

<a name="Header"></a>

## Header ([to the beginning](#beginning))

### In the site header you can see the site logo itself (by the way, the logo and other photos of the site were generated using CHATGPT), navigation buttons (I decided not to use a router, because the site is quite simple) and buttons for changing the language and color Topics. The last two elements deserve special attention. The site supports 6 languages ​​(Ukrainian, Russian, Kazakh, English, Dutch and German), the site also supports light and dark themes. When you first launch the site on a device, the site installs the language and theme that the site visitor has on the device. Later, the user can change these parameters himself in the site header. All text messages, all meta tags (for example, with keywords and site descriptions), site name - are displayed in the selected language


![screen](https://github.com/DenisGradov/Kumis/git-imgs/header1.png?raw=true)
![screen](https://github.com/DenisGradov/Kumis/git-imgs/header2.png?raw=true)

<a name="About_kumys"></a>

## About kumiss ([to the beginning](#beginning))

### This section of the site is the only section about kumys, but it is divided into 6 sub-sections. You can use the navigation to open different articles: About koumiss in general, the history of koumiss, koumiss products, health benefits, recipes based on koumiss, as well as how to milk a horse. Each section will have a small text, as well as a picture.

![screen](https://github.com/DenisGradov/Kumis/git-imgs/aboutKumis.png?raw=true)

<a name="About_us"></a>

## About us ([to the beginning](#beginning))

### This displays the number of unique visitors to the site per day, month, all the time. The function of the counter is performed by the backend, which stores the users’ IPs (the site does not save any data other than the IP. This same IP is needed only to identify the user, so that it would be impossible to “artificially” break the counter). There are also links to the author’s telegram and github.

![screen](https://github.com/DenisGradov/Kumis/git-imgs/aboutUs.png?raw=true)

<a name="Features"></a>

## Features ([to the beginning](#beginning))

### In this part I will talk about various nuances and features associated with this site:
* During development, special attention was paid to SEO optimization. As I wrote earlier, meta tags for SEO have been added here, which are also adapted for several popular languages
* It took more than 8 hours of pure coding to develop the site (screenshot attached below). Data is current for version v1.0.2
* The site design ([layout](https://www.figma.com/design/MjiRUgvpn9xfWQzulohnVn/Untitled?node-id=16-50&t=ZQrErRU0Y8qslwbE-1)) was developed by me, so the site is not very beautiful. But if you look at what I did before, the progress is noticeable
* This is my first project in which I took a responsible approach to Git version control. The versions themselves have their own numbers. Commits are signed informatively

![screen](https://github.com/DenisGradov/Kumis/git-imgs/time-for-project.png?raw=true)

<a name="launch"></a>

## Launching the site ([to the beginning](#beginning))

#### Frontend

`npm run serve` - run the front (from ./frontend)

#### Backend

`npm run dev` - run the backend (from ./backend)

<a name="there_list"></a>

## ToDo list ([to the beginning](#beginning))
* ~~Create the site database~~
* ~~Add dark theme support~~
* ~~Add localization to multiple languages~~
* ~~Implement logging of the number of unique site users~~
* ~~Conduct SEO optimization of the entire site~~
* ~~Add a title + favicon for the site~~
* ~~Improve the site interface~~


<a name="log"></a>

## Version log ([to the beginning](#beginning))

## new - v1.1.0: Cosmetic changes to the site. Final readme.md:
Removed unnecessary garbage from the code. Updated readme.md

### v1.0.2: Minor improvements to adaptability:

Changed the indent sizes and font sizes. Slightly changed the adaptability of the section on kumiss

### v1.0.1: Minor improvements for deployment:

Fix a couple of files for deployment

### v1.0.0: Changing theme works. Logging of unique users. SEO:

Now changing the theme really works. When the site is launched for the first time, the theme is installed as in the user’s OS. Added logging
unique users (+ displaying the number of these users in the About us section). Conducted SEO optimization (added a title to the site,
added meta tags (with localization support)). Added site favicon

### v0.4.0: Finished basic layout. Added localization. Fixes:

Created the About Us component. Added localization to the entire site (+ added German language). Moved the languages ​​to a new file
constants, and also created a new file with utilities. Fixed the level of the language drop-down list layer

### v0.3.0: Component About kumiss:

I created a component About kumys, in which I added navigation through mini-articles. By clicking on the navigation button, the user displays
picture + text. At the moment, instead of text, there is a short key in English (for example, instead of About kumiss - here
aboutKumisTitle. This was done in order to add localization for other languages ​​in the next versions)

### v0.2.0: Hat + primer for basic things:

I added nulling styles, connected tailwind to the project, created a header with tab switching (the ground for this has been laid),
language selection (auto-pull-up
language at the first launch of the browser + the user can change it himself), the ground has been laid for changing the theme

### v0.1.0:

Basic front and back files. A layout has been made;
