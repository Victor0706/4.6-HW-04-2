from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer


class CategoryListView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

class RecipesOfCategoryView(APIView):
    def get(self, request, category_id):
        recipes = Recipe.objects.filter(category_id=category_id)
        serializer = RecipeSerializer(recipes, many=True)
        return Response(serializer.data)

class RecipeDetailView(APIView):
    def get(self, request, recipe_id):
        recipe = Recipe.objects.get(id=recipe_id)
        serializer = RecipeSerializer(recipe)
        return Response(serializer.data)