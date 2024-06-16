from smtplib import SMTP
import os
from sys import argv


receiver_email = argv[1]
opt = f"http://localhost:8000/verify/{receiver_email}/{argv[2]}"

connection = SMTP(
    host="smtp.gmail.com",
    port=587
)
connection.starttls()

sender_email = os.environ.get('EMAIL')
password = os.environ.get('PASSWORD')

print(opt, receiver_email)

connection.login(user=sender_email, password=password)
connection.sendmail(
    from_addr=sender_email,
    to_addrs=receiver_email,
    msg=f"Subject:Datum API\n\nClick the link to verify : {opt}"
)
connection.close()
