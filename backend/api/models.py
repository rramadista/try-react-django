from django.db import models


class Office(models.Model):
    office_name = models.CharField("Office Name", max_length=100)
    start_date = models.DateField("Start Date")
    is_active = models.BooleanField("Flag Active", default=True)
    branch_id = models.IntegerField("Branch ID")

    def __str__(self):
        return self.office_name
