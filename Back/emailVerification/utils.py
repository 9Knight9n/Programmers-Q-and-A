#from django.core.mail import EmailMessage
from django.core.mail import send_mail, EmailMessage
from django.template.loader import render_to_string
from django.conf import settings


class Util:
    @staticmethod
    def sendEmail(data):
        #plaintext = get_template('room.txt')
        context = {"new" : "hello world"}
        msg_html = render_to_string("chat/room.html", context)
        msg = EmailMessage(subject=data["email_subject"], body=msg_html, to=[data["to_email"]])
        msg.content_subtype = "html"  # Main content is now text/html
        return msg.send()