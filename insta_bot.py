from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import time

options = Options()
options.add_argument("--start-maximized")

service = Service(executable_path="C:/Users/Shivani Sandhanshiv/OneDrive/Desktop/webtask/chromedriver.exe")
driver = webdriver.Chrome(service=service, options=options)

try:
    driver.get("https://www.instagram.com/accounts/login/")
    time.sleep(5)

    username = driver.find_element(By.NAME, "username")
    password = driver.find_element(By.NAME, "password")

    username.send_keys("your_dummy_username")    
    password.send_keys("your_dummy_password")     
    password.send_keys(Keys.ENTER)
    time.sleep(7)

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

    try:
        follow_btn = driver.find_element(By.XPATH, '//button[text()="Follow"]')
        follow_btn.click()
        time.sleep(2)
    except:
        print("✅ Already followed or follow button not found.")

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
