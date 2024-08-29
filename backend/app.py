from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle
import os



app = Flask(__name__)
CORS(app)

client = MongoClient('localhost',27017)
db = client.FoodDelivery
deliverTimeCollection = db.DeliveryTime



@app.route('/predict', methods=['POST'])
def predict():

    data = request.get_json()

    deliveryPersonAge = float(data['deliveryPersonAge'])
    deliveryPersonRating = float(data["deliveryPersonRating"])
    weatherCondition = data['weatherCondition']
    roadTrafficDensity = data['roadTrafficDensity']
    vehicleCondition = int(data['vehicleCondition'])
    multipleDeliveries = int(data['multipleDeliveries'])
    festival = data['festival']

    restaurantLatitude = float(data['restaurantLatitude'])
    restaurantLongitude = float(data['restaurantLongitude'])
    deliveryLatitude = float(data['deliveryLatitude'])
    deliveryLongitude = float(data['deliveryLongitude'])


    weather_mapping = {'cloudy':0, 'fog':1, 'sandstorms':2, 'stormy':3, 'sunny':4, 'windy':5 }
    traffic_mapping = {'low':0,'medium':1,'high':2,'jam':3}
    festival_mapping = {'no':0,'yes':1}

    weatherCondition = weather_mapping.get(weatherCondition, 0)
    roadTrafficDensity = traffic_mapping.get(roadTrafficDensity, 0)
    festival = festival_mapping.get(festival, 0)


    distance = geodesic((restaurantLatitude,restaurantLongitude), (deliveryLatitude,deliveryLongitude)).kilometers
    print(distance)
    input_vector =np.array([[
        deliveryPersonAge,
        deliveryPersonRating,
        weatherCondition,
        roadTrafficDensity,
        vehicleCondition,
        multipleDeliveries,
        festival,
        distance
    ]])

    

    current_directory = os.path.dirname(os.path.realpath(__file__))

    model_filename = os.path.join(current_directory, 'finaModel.pkl')

    with open(model_filename, 'rb') as file:
        model = pickle.load(file)


    prediction = model.predict(input_vector)
    prediction = str(round(prediction[0],2))
    return jsonify({"predictedTime":prediction})

    
        
    


#######################################################################################
if __name__ == "__main__":
    app.run(debug=True)

    