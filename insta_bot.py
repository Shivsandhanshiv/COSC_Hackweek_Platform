from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import time

# Configure Chrome options
options = Options()
options.add_argument("--start-maximized")

# Update path to your chromedriver.exe
service = Service(executable_path="C:/Users/Shivani Sandhanshiv/OneDrive/Desktop/webtask/chromedriver.exe")
driver = webdriver.Chrome(service=service, options=options)

try:
    # 1. Open Instagram login page
    driver.get("https://www.instagram.com/accounts/login/")
    time.sleep(5)

    # 2. Enter login credentials
    username = driver.find_element(By.NAME, "username")
    password = driver.find_element(By.NAME, "password")

    # Replace these with your dummy credentials
    username.send_keys("your_dummy_username")     # 👈 Update here
    password.send_keys("your_dummy_password")     # 👈 Update here
    password.send_keys(Keys.ENTER)
    time.sleep(7)

    # 3. Search for 'cbitosc'
    try:
        search_input = driver.find_element(By.XPATH, '//input[@placeholder="Search"]')
        search_input.send_keys("cbitosc")
        time.sleep(3)
        search_input.send_keys(Keys.ENTER)
        time.sleep(2)
        search_input.send_keys(Keys.ENTER)
        time.sleep(5)
    except Exception as e:
        print("🔍 Search failed:", e)

    # 4. Follow the account (if not already followed)
    try:
        follow_btn = driver.find_element(By.XPATH, '//button[text()="Follow"]')
        follow_btn.click()
        time.sleep(2)
    except:
        print("✅ Already followed or follow button not found.")

    # 5. Extract profile data
    try:
        bio = driver.find_element(By.XPATH, '//div[@class="_aa_c"]/div/span').text
    except:
        bio = "Bio not found"

    try:
        stats = driver.find_elements(By.XPATH, '//ul/li')
        posts = stats[0].text
        followers = stats[1].text
        following = stats[2].text
    except:
        posts = followers = following = "Not found"

    # 6. Save data to text file
    with open("cbitosc_data.txt", "w", encoding="utf-8") as f:
        f.write(f"Bio: {bio}\n")
        f.write(f"Posts: {posts}\n")
        f.write(f"Followers: {followers}\n")
        f.write(f"Following: {following}\n")

    print("✅ Data extraction completed. Output saved to 'cbitosc_data.txt'.")

except Exception as err:
    print("❌ An error occurred:", err)

finally:
    driver.quit()
