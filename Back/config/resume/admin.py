from .models import Person, Education, ProjectOrJob, ProfessionalSkills, Academics, AreaOfInterest
from django.contrib import admin

admin.site.register(Person)
admin.site.register(Education)
admin.site.register(ProjectOrJob)
admin.site.register(ProfessionalSkills)
admin.site.register(Academics)
admin.site.register(AreaOfInterest)
