import os
import logging
from flask import Flask, render_template

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Initialize Flask application
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "default_secret_key_for_development")

@app.route('/')
def maintenance():
    """Render the maintenance page"""
    return render_template('maintenance.html')

@app.route('/<path:path>')
def catch_all(path):
    """Catch all routes and redirect to maintenance page"""
    return render_template('maintenance.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
