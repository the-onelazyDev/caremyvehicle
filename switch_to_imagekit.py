import os

for path in [r"d:\caremyvehicle\js\carData.js", r"d:\caremyvehicle\web\js\carData.js"]:
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    new_content = content.replace("assets/cars/", "https://ik.imagekit.io/2908vvlod/cars/")
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(new_content)
    
    print(f"Updated {path} to use ImageKit CDN!")

print("All carData.js references switched to ImageKit CDN!")
