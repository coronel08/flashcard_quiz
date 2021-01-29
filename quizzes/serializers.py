from django.db.models import fields
from rest_framework import serializers
from . import models


class QuizSerializer(serializers.ModelSerializer):
    def get_fullname(self, obj):
        return obj.author.first_name + ' ' + obj.author.last_name

    def get_question_count(self, obj):
        return obj.question_count  # we defined this method in models.py


    questions = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='apiv2:question-detail'
    )
    author_fullname = serializers.SerializerMethodField("get_fullname")
    question_count = serializers.SerializerMethodField("get_question_count")

    class Meta:
        fields = [
            'id',
            'title',
            'author',
            'author_fullname',
            'question_count',
            'created_at',
            'questions'
        ]
        model = models.Quiz


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        fields = [
            'id',
            'text',
            'correct',
        ]
        model = models.Answer


class QuestionSerializer(serializers.ModelSerializer):
    quiz_title = serializers.CharField(source='quiz.title', read_only=True)
    answers = AnswerSerializer(
        read_only=True,
        many=True
    )

    class Meta:
        fields = [
            'id',
            'quiz_title',
            'prompt',
            'answers'
        ]
        model = models.Question