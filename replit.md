# Talencor Staffing - Maintenance Website

## Overview

This is a maintenance page application for Talencor Staffing, built with Flask. The application displays a professional maintenance page while the main website undergoes improvements. It features a responsive design with animated background elements and Talencor branding.

## System Architecture

### Frontend Architecture
- **Static maintenance page**: Single-page application displaying maintenance status
- **Responsive design**: Mobile-first approach with CSS Grid and Flexbox
- **Dynamic animations**: CSS animations with JavaScript enhancements for background effects
- **Brand consistency**: Uses Talencor brand colors (yellow theme), fonts, and logo assets

### Backend Architecture
- **Framework**: Flask (Python web framework)
- **Architecture pattern**: Simple route-based application with catch-all routing
- **Session management**: Flask sessions with configurable secret key
- **Logging**: Python logging module configured for debugging

### Template Engine
- **Jinja2**: Flask's built-in templating engine for HTML generation
- **Static assets**: Organized structure for CSS, JavaScript, and images

## Key Components

### Application Structure
```
app.py              # Main Flask application
main.py             # Application entry point
templates/          # Jinja2 templates
  maintenance.html  # Main maintenance page template
static/             # Static assets
  css/             # Stylesheets
  js/              # JavaScript files
  images/          # Brand assets and graphics
```

### Route Configuration
- **Root route (/)**: Serves maintenance page
- **Catch-all route**: Redirects any path to maintenance page
- **Error handling**: All routes redirect to maintenance template

### Static Assets Organization
- **CSS**: Modular stylesheets (maintenance.css, dynamic-background.css)
- **JavaScript**: Interactive elements (maintenance.js, dynamic-background.js)
- **Images**: Brand logos, backgrounds, and SVG assets
- **Fonts**: Google Fonts integration (Alegreya Sans SC, Roboto)

## Data Flow

1. **Request Processing**: All incoming requests routed through Flask application
2. **Route Matching**: Flask matches routes and directs to maintenance handler
3. **Template Rendering**: Jinja2 processes maintenance.html template
4. **Static Asset Delivery**: Flask serves CSS, JS, and image files
5. **Response Generation**: Complete HTML page with embedded assets returned

## External Dependencies

### Python Packages
- **Flask 3.1.1**: Web framework
- **Flask-SQLAlchemy 3.1.1**: Database ORM (prepared for future use)
- **email-validator 2.2.0**: Email validation utilities
- **psycopg2-binary 2.9.10**: PostgreSQL adapter (prepared for future use)
- **Gunicorn 23.0.0**: WSGI HTTP server for deployment

### Frontend Dependencies
- **Google Fonts**: Alegreya Sans SC and Roboto font families
- **Font Awesome 6.4.0**: Icon library for maintenance indicators
- **Modern CSS**: CSS Grid, Flexbox, and CSS animations

### Development Environment
- **Python 3.11**: Runtime environment
- **Nix packages**: OpenSSL and PostgreSQL system dependencies
- **uv**: Python package management

## Deployment Strategy

### Production Deployment
- **WSGI Server**: Gunicorn with auto-scaling configuration
- **Port Configuration**: Application runs on port 5000, external port 80
- **Process Management**: Gunicorn handles worker processes and load balancing
- **Environment Configuration**: Environment variables for session secrets

### Platform Support
- **Replit**: Primary deployment platform with .replit configuration
- **Render**: Alternative deployment with render.yaml configuration
- **Heroku**: Supported via Procfile configuration

### Performance Optimization
- **Static file serving**: Flask handles static assets efficiently
- **Minimal dependencies**: Lightweight application with fast startup
- **Responsive design**: Optimized for various device sizes

## Changelog

- June 20, 2025: Initial setup for TSG Fulfillment Services Inc
- June 20, 2025: Complete rebrand to Talencor Staffing - updated logos, contact information, and color theme from blue to yellow

## User Preferences

Preferred communication style: Simple, everyday language.