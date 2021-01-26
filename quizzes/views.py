from django.shortcuts import render, get_object_or_404
from rest_framework import generics, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from . import models, serializers
# Create your views here.

class QuizViewSet(viewsets.ModelViewSet):
    queryset = models.Quiz.objects.all()
    serializer_class = serializers.QuizSerializer

    @property
    def paginator(self):
        self._paginator = super(QuizViewSet, self).paginator
        if self.action != 'questions':
            self._paginator = None
        return self._paginator

    @action(detail=True, methods=['get'])
    def questions(self, request, pk=None):
        ''' An ad-hoc action with @action decorator to return a list of questions'''
        questions = models.Question.objects.filter(quiz_id=pk)

        self.pagination_class.page_size=1
        page = self.paginate_queryset(questions)
        if page is not None:
            serializer = serializers.QuestionSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = serializers.QuestionSerializer(
            questions,
            many=True
        )
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def all_questions(self, request, pk=None):
        ''' an ad-hoc action with action decorator that returns all questions'''
        questions = models.Question.objects.filter(quiz_id=pk)
        serializer = serializers.QuestionSerializer(
            questions,
            many=True
        )
        return Response(serializer.data)

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = models.Question.objects.all()
    serializer_class = serializers.QuestionSerializer

    @action(detail=True,methods=['get'])
    def answers(self, request, pk=None):
        answers = models.Answer.objects.filter(question_id=pk)
        serializer = serializers.AnswerSerializer(
            answers,
            many=True,
        )
        return Response(serializer.data)

class AnswerViewSet(viewsets.ModelViewSet):
    queryset = models.Answer.objects.all()
    serializer_class = serializers.AnswerSerializer

    @property
    def paginator(self):
        self._paginator = None