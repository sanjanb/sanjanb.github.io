#!/bin/bash
# Script to create placeholder thumbnails for blog posts

# Create assets/img directory if it doesn't exist
mkdir -p assets/img

# Create placeholder images using ImageMagick (if available) or simple SVGs
create_placeholder() {
    local filename=$1
    local title=$2
    local color=$3
    
    # Create a simple SVG placeholder
    cat > "assets/img/$filename" << EOF
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="$color"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle" dy=".3em">$title</text>
</svg>
EOF
}

# Create placeholder thumbnails
create_placeholder "blog-formatting-thumb.png" "Blog Formatting Guide" "#3498db"
create_placeholder "ai-systems-thumb.png" "AI Systems at Scale" "#e74c3c"
create_placeholder "docker-mastery-thumb.png" "Docker Mastery" "#2980b9"

echo "✅ Placeholder thumbnails created successfully!"
echo "📁 Files created in assets/img/:"
ls -la assets/img/ | grep thumb
