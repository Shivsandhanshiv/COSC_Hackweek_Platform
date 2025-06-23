import fitz  
import argparse
import re

KEY_SKILLS = ["python", "java", "sql", "machine learning", "data analysis", "tensorflow", "nlp", "aws", "excel"]

def extract_text(pdf_path):
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    return text.lower()

def analyze_resume(text):
    print("\n🔍 Skill Frequency Analysis:")
    found_skills = {}
    for skill in KEY_SKILLS:
        count = len(re.findall(r'\b' + re.escape(skill) + r'\b', text))
        found_skills[skill] = count
        print(f" - {skill.capitalize():20} : {count} times")

    print("\n📌 Suggested Improvements:")
    missing = [skill for skill, count in found_skills.items() if count == 0]
    if missing:
        print("Consider adding or emphasizing these skills if relevant:")
        for skill in missing:
            print(f"  • {skill.capitalize()}")
    else:
        print("All key skills are well represented! ✅")

def main():
    parser = argparse.ArgumentParser(description="Resume Analyzer CLI Tool")
    parser.add_argument('--file', required=True, help="Path to the resume PDF file")
    args = parser.parse_args()

    print("📄 Reading resume...")
    text = extract_text(args.file)
    analyze_resume(text)

if __name__ == "__main__":
    main()
