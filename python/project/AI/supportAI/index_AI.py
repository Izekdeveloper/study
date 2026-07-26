import pyttsx3
import speech_recognition
from datetime import date,datetime

robot_mouth = pyttsx3.init()
robot_ear = speech_recognition.Recognizer()
today = date.today()
d2 = today.strftime("%B %d, %Y")
i = 0
while True:
    # nghe 
    with speech_recognition.Microphone() as mic:
        print("ROBOT:robot dang nghe")
        audio = robot_ear.listen(mic)

    print("ROBOT:...")
    try:
        you = robot_ear.recognize_google(audio)
    except:
        you = " "

    print("YOU:",you)

    # hieu
    if you == "":
        robot_brain = "I cant hear you,try again"
    elif "your name" in you:
        robot_brain = "my name is shopcamap"
    elif "hello" in you:
        robot_brain = "hello thong"
    elif "today" in you:
        robot_brain = d2
    elif "time" in you:
        now = datetime.now()
        robot_brain = now.strftime("%I:%M %p")
    elif "handsome" in you:
        robot_brain = "thong is the most handsome man"
    elif "bye" in you:
        robot_brain = "bye bye"
        print("ROBOT:",robot_brain)
        robot_mouth.say(robot_brain)
        robot_mouth.runAndWait()
        break
    elif "country" in you:
        robot_brain = "your country is VietNam"
    else:
        robot_brain = "what the fuck are you talking about"
    # noi
    # For Mac, If you face error related to "pyobjc" when running the `init()` method :
    # Install 9.0.1 version of pyobjc : "pip install pyobjc>=9.0.1"
    print("ROBOT:",robot_brain)
    robot_mouth.say(robot_brain)
    robot_mouth.runAndWait()