from django.db import models
from apps.location.models import Province, Regency


class Branch(models.Model):
    branch_id = models.CharField(max_length=3, primary_key=True)
    manager_pos_id = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return self.branch_id

    class Meta:
        verbose_name_plural = "Branches"


class Office(models.Model):
    office_name = models.CharField(max_length=100)
    start_date = models.DateField()
    street = models.CharField(max_length=100, null=True, blank=True)
    building = models.CharField(max_length=100, null=True, blank=True)
    postcode = models.CharField(max_length=5, null=True, blank=True)
    latitude = models.DecimalField(
        max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(
        max_digits=9, decimal_places=6, null=True, blank=True)
    city = models.ForeignKey(
        Regency, on_delete=models.SET_NULL, null=True, blank=True)
    province = models.ForeignKey(
        Province, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.office_name


class BranchOffice(models.Model):
    STATUS = (
        ('KC', 'Kantor Cabang'),
        ('KCP', 'Kantor Cabang Pembantu'),
        ('KK', 'Kantor Kas'),
        ('KF', 'Kantor Fungsional'),
        ('Kanwil', 'Kantor Wilayah'),
        ('KPNO', 'Kantor Pusat Non Operasional')
    )
    branch_id = models.ForeignKey(
        Branch, on_delete=models.CASCADE, blank=True, null=True)
    office = models.ForeignKey(
        Office, on_delete=models.CASCADE, blank=True, null=True)
    office_status = models.CharField(
        max_length=6, choices=STATUS, blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return '%s %s' % (self.office_status, self.office.office_name)

    class Meta:
        ordering = ('branch_id', )
        verbose_name_plural = "Branch Offices"
