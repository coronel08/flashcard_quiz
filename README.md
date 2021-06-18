# Flashcard_quiz
A flashcard quiz application that used DJango for the backend and API. Also will need a Database. Will use React frontend.


## Table of Contents
* [Notes](#notes)
* [Resources](#resources)
* [Todo](#todo)


---
## Notes
Used Cors-headers in django to allow react on localhost:3000 to pull api. Also made sure to add pagination in Rest Framework to fix questions api. Can fix later as well as Allowed Hosts in settings.py. Can also change to Postgres database with docker-compose but shouldn't make much of a diff.


**API Endpoints**
* Quizzes Overview 
    * quiz-list
        * http://localhost:8000/api/v2/quizzes/
    * quiz-detail
        * http://localhost:8000/api/v2/quizzes/1/
    * quiz-all-questions
        * http://localhost:8000/api/v2/quizzes/1/all_questions
    * quiz-questions
        * http://localhost:8000/api/v2/quizzes/1/questions
* Question Overviews
    * question-list
        * http://localhost:8000/api/v2/questions/
    * question-detail
        * http://localhost:8000/api/v2/questions/1/answers/
* Answers 
    * answer-list
        * http://localhost:8000/api/v2/answers/



---
## Resources
**Used this for frontend and api [Web Dev Simplified YT](https://www.youtube.com/watch?v=hEtZ040fsD8&t=2098s)**


**Used this tutorial for Backend**
Used this to setup Django Quiz [medium](https://medium.com/swlh/overview-building-a-full-stack-quiz-app-with-django-and-react-57fd07449e2f) and [github source](https://github.com/izennn/udemy-quiz-izen)


**Best Tutorial**
[Django rest framework blog](https://wsvincent.com/django-rest-framework-react-tutorial/) 


Django polls api tutorial quick[Learn Django blog](https://learndjango.com/tutorials/django-polls-tutorial-api) also [landing page](https://learndjango.com/tutorials/) for django tutorials


**Deployment**
[Full stack testdriven](https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/#postgres) Docker, Postgres, Gunicorn, Nginx, Static Files


[Django polls documentation](https://docs.djangoproject.com/en/3.1/intro/tutorial01/#the-development-server) and also [Docker-compose django documentation](https://docs.docker.com/compose/django/) with a postgresql database


**Not Complete ends before React**
Django [quizbiz](https://github.com/jayndu/QuizzBizz) library Medium tutorial [here](https://medium.com/codetensor/create-a-quiz-application-with-django-rest-framework-react-redux-part-one-f0fcae5103fd)


**Tried this one but gave up on it, didnt use for this project**
Gave up on this one but the backend is very detailed [Medium Django and React](https://medium.com/swlh/how-to-deploy-django-rest-framework-and-react-redux-application-with-docker-fa902a611abf)


---
## Todo
* [x] Python setup
    * [x] Install django
        * Django-admin startproject {{project-name}} .
        * [x] python manage.py createsuperuser
        * [x] python manage.py makemigrations
        * [x] python manage.py migrate
        * [x] Setup cors(cross origin resource sharing) middleware. <b>Would'nt link to front end without this</b>
    * [x] Setup Quiz Logic 
        * [x] Setup models / logic for questions
        * [x] admin.py setup admin logic for models
        * [x] Serialize data
        * [x] setup views using rest-framework library
        * [ ] Move to Postgres database 
    * [x] Test rest api
* [ ] React setup
    * [x] npx create react-app frontend
    * [x] Read API
    * [ ] Setup React frontend
    * [ ] Setup flashcards 
    * [ ] Convert from class to functions. 
* [x] Double check API and figure out how to get prompts/questions. Serializers.py had a typo in questions. 
* [x] Fix api, not showing question/prompt
* [ ] Add tokens and authorization and other things to api.
    * [ ] sessions and user score tracking 
* [ ] Dockerize database and django


---
* [ ] Add to react notes
    * [ ] Using useEffect hook instead of componentDidMount [Stack Overflow](https://stackoverflow.com/questions/53945763/componentdidmount-equivalent-on-a-react-function-hooks-component) useEffect with async() [WebDev blog](https://thewebdev.info/2020/05/05/react-hooks-equivalent-of-componentdidmount/)
* [ ] Can try deploying into [learn Django deployment options](https://learndjango.com/tutorials/django-hosting-deployment-options) 
    * Heroku
    * PythonAnywhere
    * Digital Ocean VPS
    * Linode 
    * Cloud but probably not (lightsail vs Elastic Beanstalk)
