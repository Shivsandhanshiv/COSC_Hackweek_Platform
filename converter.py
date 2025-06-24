import sys
import re
import argparse

def convert_headers(markdown):
    for i in range(6, 0, -1):
        markdown = re.sub(r'^#{' + str(i) + r'}\s*(.*?)\s*$', r'<h' + str(i) + r'>\1</h' + str(i) + r'>', markdown, flags=re.MULTILINE)
    return markdown

def convert_bold_italic(markdown):
    markdown = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', markdown)
    markdown = re.sub(r'\*(.*?)\*', r'<em>\1</em>', markdown)
    return markdown

def convert_lists(markdown):
    lines = markdown.split('\n')
    in_list = False
    for i, line in enumerate(lines):
        if re.match(r'^[\*\+\-]\s+', line):
            if not in_list:
                lines[i] = '<ul>\n<li>' + line[2:].strip() + '</li>'
                in_list = True
            else:
                lines[i] = '<li>' + line[2:].strip() + '</li>'
        elif in_list and line.strip() == '':
            lines[i-1] += '\n</ul>'
            in_list = False
    if in_list:
        lines[-1] += '\n</ul>'
    return '\n'.join(lines)

def convert_links(markdown):
    return re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<a href="\2">\1</a>', markdown)

def convert_code(markdown):
    markdown = re.sub(r'```(\w*)\n([\s\S]*?)\n```', 
                    lambda m: f'<pre><code class="{m.group(1)}">\n{m.group(2)}\n</code></pre>', 
                    markdown)
    return re.sub(r'`([^`]+)`', r'<code>\1</code>', markdown)

def markdown_to_html(markdown):
    processing_order = [
        convert_headers,
        convert_code,
        convert_lists,
        convert_links,
        convert_bold_italic
    ]
    for func in processing_order:
        markdown = func(markdown)
    return f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Converted Markdown</title>
    <style>
        pre {{ background: #f4f4f4; padding: 10px; }}
        code {{ font-family: monospace; }}
    </style>
</head>
<body>
{markdown}
</body>
</html>"""

def main():
    parser = argparse.ArgumentParser(description='Convert Markdown to HTML')
    parser.add_argument('input_file', help='Input Markdown file (.md)')
    parser.add_argument('output_file', help='Output HTML file (.html)')
    args = parser.parse_args()
    
    try:
        with open(args.input_file, 'r', encoding='utf-8') as f:
            markdown = f.read()
        with open(args.output_file, 'w', encoding='utf-8') as f:
            f.write(markdown_to_html(markdown))
        print(f'Successfully converted {args.input_file} to {args.output_file}')
    except Exception as e:
        print(f"Error: {str(e)}")
        sys.exit(1)

if __name__ == '__main__':
    main()
