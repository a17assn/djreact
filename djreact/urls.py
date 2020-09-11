# from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path("rest-auth/", include("rest_auth.urls")),
    # path("rest-auth/registration/", include("rest_auth.registration.urls")),
    # path("api-auth/", include("rest_framework.urls")),

    # path("api/", include("articles.api.urls")),
    
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
    path('auth/', include('djoser.urls.authtoken')),

    path('', include('articles.urls')),

]

# urlpatterns += [re_path(r"^.*", TemplateView.as_view(template_name="index.html"))]
