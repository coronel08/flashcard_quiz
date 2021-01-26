# flashcard_quiz
A flashcard quiz application that used DJango for the backend and API. Also will need a Database. Will use React frontend.


## Table of Contents
* [Resources](#resources)
* [Todo](#todo)


### Resources
Used this to setup Django Quiz [medium](https://medium.com/swlh/overview-building-a-full-stack-quiz-app-with-django-and-react-57fd07449e2f) and [github source](https://github.com/izennn/udemy-quiz-izen)

[Django rest framework blog](https://wsvincent.com/django-rest-framework-react-tutorial/) 


[Full stack testdriven](https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/#postgres) Docker, Postgres, Gunicorn, Nginx, Static Files


[Django polls documentation](https://docs.djangoproject.com/en/3.1/intro/tutorial01/#the-development-server) and also [Docker-compose django documentation](https://docs.docker.com/compose/django/) with a postgresql database


Django [quizbiz](https://github.com/jayndu/QuizzBizz) library Medium tutorial [here](https://medium.com/codetensor/create-a-quiz-application-with-django-rest-framework-react-redux-part-one-f0fcae5103fd)

### Todo
* [x] Python setup
    * [x] Install django
        * Django-admin startproject {{project-name}} .
        * [x] python manage.py createsuperuser
        * [x] python manage.py makemigrations
        * [x] python manage.py migrate
        * [ ] Setup cors(cross origin resource sharing) middleware
    * [x] Setup Quiz Logic 
        * [x] Setup models / logic for questions
        * [x] admin.py setup admin logic for models
        * [x] Serialize data
        * [x] setup views using rest-framework library
        * [ ] Move to Postgres database 
    * [x] Test rest api
* [ ] React setup
    * [x] npx create react-app frontend
    * [ ] Read API
    * [ ] Setup React frontend
    * [ ] Setup flashcards 
* [ ] Dockerize database and django
* [ ] Add to react notes
 * [ ] Using useEffect hook instead of componentDidMount [Stack Overflow](https://stackoverflow.com/questions/53945763/componentdidmount-equivalent-on-a-react-function-hooks-component) useEffect with async() [WebDev blog](https://thewebdev.info/2020/05/05/react-hooks-equivalent-of-componentdidmount/)
