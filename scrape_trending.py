import requests
from bs4 import BeautifulSoup
import csv

url = "https://github.com/trending"

response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

repo_list = soup.find_all('h2', class_='h3 lh-condensed')[:5]

data = []
for repo in repo_list:
    anchor = repo.find('a')
    repo_name = anchor.text.strip().replace('\n', '').replace(' ', '')
    repo_link = "https://github.com" + anchor['href']
    data.append([repo_name, repo_link])

with open('trending_repos.csv', mode='w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    writer.writerow(["Repository Name", "Link"])
    writer.writerows(data)

print("Top 5 trending repositories saved to trending_repos.csv")
