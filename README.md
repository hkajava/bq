# BerryQuiz

This is a simple quiz application to investigate the potential of
Meteor/React web application technology and learn to recognize
Finnish wild berries. The images have been taken from <a target="_blank" rel="noopener noreferrer" href="http://www.wikipedia.com">
 Wikipedia</a>.

## Getting Started

Do git clone on the project
>git clone git@github.com:hkajava/bq.git


### Prerequisites

This test application was created on Ubuntu 16.04. It has not been tested on any other system.
Install node and npm (if they are not already installed in your system):
>curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
>sudo apt-get install -y nodejs

Check that installation was successful:
```
>node --version
v6.11.3
```

Npm should have been installed with node:
```
>npm --version
3.10.10
```


### Installing

git clone
run
```
>meteor run
```
That should run npm installer and populate node_modules.

## Running the tests

Run mocha tests:
```
>./node_modules/mocha/bin/mocha --compilers js:babel-core/register
```

Run meteor tests:
```
>meteor test --driver-package practicalmeteor:mocha
```


### And coding style tests

Coding style was enforced with Eslint using Airbnb configuration as instructed
in Meteor documentation (https://guide.meteor.com/code-style.html)

Eslint plugin was used in Atom to continually check for linting errors.
A further improvement could be to enforce no lint errors using a git hook.

Used Eslint configuration:
```
meteor npm install --save-dev babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-meteor eslint-plugin-react eslint-plugin-jsx-a11y eslint-import-resolver-meteor eslint @meteorjs/eslint-config-meteor

```

## Deployment

Deployment was tested with Meteor Galaxy cloud and using mLab sandbox for mongo.

## Built With

* [Meteor] (https://www.meteor.com/) - The web framework used
* [React] (https://reactjs.org/) - The frontend library

* [Mocha] (https://mochajs.org/) - The testing framework for unit tests

* [Atom] (https://atom.io/) - Editor with great plugins
* Eslint (https://eslint.org/) - Great tool for static code checking

* [Ubuntu 16.04] (https://www.ubuntu.com/) - Used OS in virtual machine dev env
* [Oracle Virtual Box] (https://www.virtualbox.org/) - Used for creating and
running development virtual machine.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Henri Kajava** - *Initial work* - (https://github.com/hkajava)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

*
