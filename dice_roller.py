import random
import time
import sys

def rolling_animation():
    animation = "|/-\\"
    for i in range(10):  # loop for short animation
        sys.stdout.write(f"\rRolling the dice... {animation[i % len(animation)]}")
        sys.stdout.flush()
        time.sleep(0.1)
    print("\rRolling the dice... 🎲")

def roll_dice():
    input("Press Enter to roll the dice...")
    rolling_animation()
    time.sleep(0.5)
    result = random.randint(1, 6)
    print(f"\n🎉 You rolled a {result}!\n")

if __name__ == "__main__":
    roll_dice()
