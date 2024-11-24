from django.db import models

# Create your models here.
class Book(models.Model):
    bookTitels=models.CharField(max_length=50)
    release_date=models.IntegerField()

    def __str__(self):
        return self.bookTitels