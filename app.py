from flask import Flask, render_template, jsonify
import os
import json

app = Flask(__name__, 
            static_folder='app/static',
            template_folder='app/templates')

# Sample data for our visualizations
# In a real application, this would likely come from a database or external API
@app.route('/api/climate_data')
def climate_data():
    # Sample climate data
    data = {
        'labels': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        'temperature': [7, 8, 11, 14, 18, 21, 23, 23, 20, 16, 11, 8],  # Average temp in °C
        'precipitation': [49, 40, 41, 43, 49, 51, 51, 58, 56, 58, 58, 56]  # Average precipitation in mm
    }
    return jsonify(data)

@app.route('/api/population_data')
def population_data():
    # Sample demographics data
    data = {
        'labels': ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80+'],
        'current': [12, 13, 14, 14, 13, 12, 10, 8, 4],  # Percentage of population
        'projected': [11, 12, 13, 14, 14, 12, 11, 9, 6]  # Projected percentage in 10 years
    }
    return jsonify(data)

@app.route('/api/financial_data')
def financial_data():
    # Sample stock data
    data = {
        'labels': [f'2023-{i}' for i in range(1, 13)],  # Monthly data for 2023
        'price': [150, 155, 162, 158, 160, 165, 170, 175, 172, 180, 185, 190],  # Stock price
        'volume': [1000, 1200, 1500, 1100, 900, 1300, 1400, 1600, 1200, 1300, 1500, 1700]  # Trading volume
    }
    return jsonify(data)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/p5')
def p5_demos():
    return render_template('p5_demos.html')

@app.route('/chartjs')
def chartjs_demos():
    return render_template('chartjs_demos.html')

@app.route('/comparison')
def comparison():
    return render_template('comparison.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/p5/particle_system')
def p5_particle_system():
    return render_template('p5_particle_system.html')

@app.route('/p5/data_visualization')
def p5_data_visualization():
    return render_template('p5_data_visualization.html')

@app.route('/p5/art_generation')
def p5_art_generation():
    return render_template('p5_art_generation.html')

@app.route('/chartjs/climate')
def chartjs_climate():
    return render_template('chartjs_climate.html')

@app.route('/chartjs/population')
def chartjs_population():
    return render_template('chartjs_population.html')

@app.route('/chartjs/financial')
def chartjs_financial():
    return render_template('chartjs_financial.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)