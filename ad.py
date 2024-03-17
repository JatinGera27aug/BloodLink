import requests
from bs4 import BeautifulSoup

# Send a GET request to the URL
url = "https://eraktkosh.in/BLDAHIMS/bloodbank/stockAvailability.cnt"
response = requests.get(url)

# Parse the HTML content using Beautiful Soup
soup = BeautifulSoup(response.text,'html.parser')

# Find the table element with id "example-table"
table = soup.find('table', {'class': 'dataTable'})

if table:
    # Extract text from table cells
    rows = table.find_all('tr')
    for row in rows:
        cells = row.find_all('td')
        row_text = [cell.get_text(strip=True) for cell in cells]
        print(row_text)
else:
    print("table not found")
