from tinyfish import TinyFish
API = "sk-tinyfish-t17EgbGQr3rcjrQOZMBxfamYPYWaBjNO"

client = TinyFish()

response = client.search.query(
    "latest FIFA World Cup news today",
    location="US",
    language="en",
)

for result in response.results:
    print(result.title, result.url)