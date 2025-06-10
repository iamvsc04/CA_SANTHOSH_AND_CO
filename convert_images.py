import os
from PIL import Image

def convert_images_to_webp(root_dir):
    """
    Converts all JPEG, JPG, and PNG images in the specified directory
    and its subdirectories to WebP format.
    The original images are deleted after successful conversion.
    """
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for filename in filenames:
            name, ext = os.path.splitext(filename)
            ext = ext.lower()

            if ext in ('.jpg', '.jpeg', '.png'):
                original_path = os.path.join(dirpath, filename)
                webp_path = os.path.join(dirpath, f"{name}.webp")

                try:
                    with Image.open(original_path) as img:
                        # Convert to RGB if it's a PNG with transparency (RGBA)
                        # WebP supports transparency, but some older tools might prefer RGB
                        if img.mode == 'RGBA':
                            img = img.convert('RGB')
                        img.save(webp_path, 'webp', quality=85) # Adjust quality as needed (0-100)
                    print(f"Converted: {original_path} -> {webp_path}")
                    os.remove(original_path) # Delete original after successful conversion
                    print(f"Deleted original: {original_path}")
                except Exception as e:
                    print(f"Error converting {original_path}: {e}")

if __name__ == "__main__":
    # Path to your services images directory
    services_images_dir = os.path.join(os.getcwd(), 'src', 'assets')
    print(f"Starting conversion in: {services_images_dir}")
    convert_images_to_webp(services_images_dir)
    print("Image conversion process completed.") 