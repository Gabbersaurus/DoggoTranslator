# DoggoTranslate :dog:

> The English to Doggo translator

I made this a while ago for fun in Vue with ES6 JavaScript. If you don't know what this is all about you should read [this](http://knowyourmeme.com/memes/doggo) page.
The reason I didn't release it back then because it is still missing alot of translations and the code isn't that clean. If you have suggestions for translations, see the `How to contribute` section.

##Todo
* Improve the frontend code and make actual components like they are meant to be made.
* Add more translation possibilities and making the translating smarter.
* Create a different repo (and maybe an NPM package) for just the DoggoTranslator class because it is not dependant of the Vue frontend.

##How to contribute
If you want to add features, improve some code or add translations you are more than welcome to submit a Pull Request to this repo.
If you don't know what to do, follow [this](https://github.com/MarcDiethelm/contributing/blob/master/README.md) guide.

If you have suggestions for features or translations and don't know how to program or git, you can create an issue on this Github repository.

## How to install

First, you should install all the dependencies. Do this by running `npm install`.
When that has finished, you can start a local dev server by running `npm run dev`.

If you want to build this project for production, you should copy `meta.example.json` to `meta.json` and change the fields to your liking.
After that, you can run `npm run production`. This will create a version of this application that is suitable for the web and can be hosted any way you want.

##License
This application is released under the [MIT license](https://github.com/Gabbersaurus/DoggoTranslator/blob/master/LICENSE).