---
title: "Boomerang"
date: "2016-04-29"
draft: false
path: "/blog/boomerang/"
---
# boomerang

[Boomerang](https://github.com/agilentia/teamreporter) is an application that helps you to get status updates from your team in an easy and automated way.

Simply define your team:

1. Members
* _stakeholders_ - receivers of daily summary
* _contributors_ - users who will answer questions

2. Questions
3. Send times of both surveys and summaries.

Move your distributed team status updates _online_ and improve your **communication**.

# Installation

```bash
$ git clone git@github.com:agilentia/teamreporter.git
$ cd teamreporter
$ mkvirtualenv -p python3 boomerang
$ pip install -r requirements.txt
$ bower install #(depends on your system, but this requires node.js and npm)
$ python manage.py migrate
$ python manage.py loaddata teamreporter/fixtures/roles.json #seeds roles
$ heroku local web
$ Go to http://localhost:5000
```


