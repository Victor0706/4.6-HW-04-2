from django.urls import path
from .views import CategoryListView, RecipesOfCategoryView, RecipeDetailView


urlpatterns = [
    path('api/categories/', CategoryListView.as_view(), name='category-list'),
    path('api/categories/<int:category_id>/recipes/', RecipesOfCategoryView.as_view(), name='recipes-by-category'),
    path('api/recipes/<int:recipe_id>/', RecipeDetailView.as_view(), name='recipe-detail'),
]
