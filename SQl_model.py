from django.db import models

class rooms(models.Model):
    room_id = models.CharField(max_length=30)
    maximum_room_occupancy = models.IntegerField()
    guest_email = models.CharField(max_length=30)
    room_status = models.CharField(max_length=30)

    class Meta:
        db_table = "rooms_table"
    
