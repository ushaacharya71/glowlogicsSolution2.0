from django.db import models

class Certificate(models.Model):
    certificate_id = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=200)
    course = models.CharField(max_length=200)
    issue_date = models.DateField()

    def __str__(self):
        return f"{self.certificate_id} - {self.name}"
