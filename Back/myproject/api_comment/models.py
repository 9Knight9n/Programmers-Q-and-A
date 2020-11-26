from django.db import models


# Create your models here.
class Question(models.Model):
    header = models.CharField(max_length=300, null=False, verbose_name="عنوان")
    question = models.TextField(null=True, blank=False, verbose_name="سوال")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ')
    rank = models.IntegerField(default=0, verbose_name="رتبه")

    class Meta:
        verbose_name = 'سوال'
        verbose_name_plural = 'سوالات'

    def __str__(self):
        return self.header


class Answer(models.Model):
    answer = models.TextField(null=False, blank=False, verbose_name="جواب")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ')
    rank = models.IntegerField(default=0, verbose_name="رتبه")
    Question = models.ForeignKey('Question', on_delete=models.CASCADE, null=True, blank=True)

    class Meta:
        verbose_name = 'جواب'
        verbose_name_plural = 'جواب ها'

    def __str__(self):
        return self.answer


class Comment(models.Model):
    comment = models.TextField(null=False, blank=False, verbose_name="کامنت")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ')
    answer = models.ForeignKey('Answer', on_delete=models.CASCADE, null=True, blank=True)

    class Meta:
        verbose_name = 'کامنت'
        verbose_name_plural = 'کامنت ها'

    def __str__(self):
        return self.comment
